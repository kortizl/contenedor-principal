import busquedaGuardarClienteTipos from '../tipos/busquedaGuardarClienteTipos';


/**
 * Método para guardar un cliente
 * @author Erick Medina
 * @param {*} Cliente a guardar
 */
export const guardarCliente = cliente => {
  return dispatch => {
    dispatch( {
      type: busquedaGuardarClienteTipos.guardarCliente,
      value: cliente,
    });
  };
};

/**
 * Método para iniciar la búsqueda de un cliente
 * @author Kristian Ortiz
 * @param {*} valor para iniciar la búsqueda
 */
export const iniciarBusquedaCliente = valor => {
  return dispatch => {
    dispatch( {
      type: busquedaGuardarClienteTipos.iniciarBusqueda,
      value: valor,
    });
  };
};
