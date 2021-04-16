import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import carritoComprasReductor from './reductores/carritoComprasReductor';
import busquedaGuardarClienteReductor from './reductores/busquedaGuardarClienteReductor';

const estadosIniciales = {};

/**
 * Método que almacena los datos que se comparten entre las aplicaciones.
 * @author Gerson Sierra
 * @param {*} estado Estado inicial de las variables/objetos que se almacenan.
 * @param {*} accion Accion que contiene la descripción y valor de la variable/objeto que se almacenan.
 * @returns Los valores de cada uno de las variables/objetos.
 */
function asignarValoresAlmacenamiento(estados = estadosIniciales, accion) {
  switch (accion.type) {
    default:
      return estados;
  }
}

const configuracionIntermediario = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reductoresComercio = combineReducers({
  carrito:  carritoComprasReductor,
  cliente : busquedaGuardarClienteReductor,
});

const reductores = combineReducers({
  comercio: reductoresComercio,
  asignarValoresAlmacenamiento,
});

/**
 * Método que crea el almacenamiento de los datos.
 * @author Gerson Sierra
 * @returns Objeto store con los valores de almacenamiento.
 */
export default function crearAlmacenamiento() {
  return createStore(
    reductores,
    configuracionIntermediario(
      applyMiddleware( thunk )
    ));
}
