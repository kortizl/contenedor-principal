import busquedaGuardarClienteTipos from '../tipos/busquedaGuardarClienteTipos';

const estadosIniciales = {
  busqueda: false,
  cliente: {},
};

/**
 * Función reductora de las acciones asociadas para buscar y guardar un cliente
 * @author Erick Medina
 * @param {*} estados Estados iniciales del almacen.
 * @param {*} accion Accion que contiene la descripción y valor de la variable/objeto que se almacenan.
 * @returns Los valores de cada uno de las variables/objetos.
 */
const busquedaGuardarClienteReductor = (estados = estadosIniciales , accion = {}) => {

  switch (accion.type) {
    case busquedaGuardarClienteTipos.guardarCliente:
    return {
      ...estados,
        cliente: accion.value,
    };
    case busquedaGuardarClienteTipos.iniciarBusqueda:
      return {
        ...estados,
          busqueda: accion.value,
    };
    default:
      return estados;
  }
};

export default busquedaGuardarClienteReductor;
