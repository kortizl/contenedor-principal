import carritoComprasTipos from '../tipos/carritoComprasTipos';

/**
 * Método para agregar un producto y cantidad al almacen que leerá el carrito de compras
 * @author Kristian Ortiz
 * @param {*} producto Código del producto a agregar
 * @param {*} cantidad Cantidad del producto a agregar
 */
export const agregarProducto = (producto, cantidad) => {
  return (dispatch, getState) => {
    const tiempo = 50;
    const {comercio} = getState();
    const productoEnCarrito = comercio.carrito.productos.find( productoC => productoC.producto === producto );
    if( productoEnCarrito ){
      dispatch( {
        type: carritoComprasTipos.actualizarCantidad,
        value: {producto, cantidad: productoEnCarrito.cantidad + cantidad },
      });
    }else{
      setTimeout(() => {
        dispatch( {
          type: carritoComprasTipos.agregar,
          value: {producto, cantidad},
        });
      }, tiempo);
    }
  };
};

/**
 * Método para actualizar la cantidad del producto en el carrito de compras
 * @author Kristian Ortiz
 * @param {*} producto Código del producto a agregar
 * @param {*} cantidad Cantidad del producto a agregar
 */
export const actualizarCantidad = (producto, cantidad) => {
  return dispatch => {
    dispatch( {
      type: carritoComprasTipos.actualizarCantidad,
      value: {producto, cantidad},
    });
  };
};

/**
 * Método para eliminar un producto del carrito de compras
 * @author Kristian Ortiz
 * @param {*} producto Código del producto a agregar
 */
export const eliminarProducto = producto => {
  return dispatch => {
    dispatch( {
      type: carritoComprasTipos.eliminar,
      value: producto,
    } );
  };
};

/**
 * Método para limpiar el carrito de compras
 * @author Kristian Ortiz
 */
export const limpiarCarrito = () => {
  return dispatch => {
    dispatch( {
      type: carritoComprasTipos.limpiar,
    } );
  };
};
