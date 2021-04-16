import carritoComprasTipos from '../tipos/carritoComprasTipos';

const estadosIniciales = {
    operacion: '',
    productos: [],
};

/**
 * Función reductora de las acciones asociadas al carrito de compras
 * @author Kristian Ortiz
 * @param {*} estados Estados iniciales del almacen.
 * @param {*} accion Accion que contiene la descripción y valor de la variable/objeto que se almacenan.
 * @returns Los valores de cada uno de las variables/objetos.
 */
const carritoComprasReductor = (estados = estadosIniciales, accion = {}) => {
  switch (accion.type) {
    case carritoComprasTipos.agregar:
    return {
      ...estados,
        operacion: 'Se ha agregado un producto al carrito',
        productos: [
          ...estados.productos,
          accion.value,
        ],
    };
    case carritoComprasTipos.actualizarCantidad:
    return {
      ...estados,
        operacion: 'Se ha cambiado un producto del carrito',
        productos: [
          ...estados.productos.map(
              producto => {
                if(producto.producto === accion.value.producto) {
                  return {...producto, cantidad: accion.value.cantidad};
                }else{
                  return producto;
                }
              }
            ),
        ],
    };
    case carritoComprasTipos.eliminar:
    return {
      ...estados,
        operacion: 'Se ha eliminado un producto del carrito',
        productos: [
          ...estados.productos.filter( producto => producto.producto !== accion.value),
        ],
    };
    case carritoComprasTipos.limpiar:
    return {
      ...estados,
        operacion: 'Se ha limpiado el carrito',
        productos: [],
    };
    default:
      return estados;
  }
};

export default carritoComprasReductor;
