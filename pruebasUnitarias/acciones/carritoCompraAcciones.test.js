import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';
import { actualizarCantidad, agregarProducto, eliminarProducto, limpiarCarrito } from '../../src/acciones/carritoCompraAcciones';
import carritoComprasTipos from '../../src/tipos/carritoComprasTipos';

  const intermediarios = [thunk];
  const almacenamientoPrueba = configureStore(intermediarios);
  const tiempo = 1000;
  const estadosIniciales = {
    comercio : {
      carrito: {
        operacion: '',
        productos: [],
      },
    },
  };
  jest.useFakeTimers();

  let store = almacenamientoPrueba(estadosIniciales);

describe('Pruebas en las acciones del carrito de compras', () => {

  beforeEach(()=> {
    store = almacenamientoPrueba(estadosIniciales);
  });

  test('Deben crearse las acción de agregar producto en el carrito ', () => {
    const estadoCarrito = {
      comercio:  {
        carrito: {
          operacion: '',
          productos: [{producto: 1, cantidad: 1}],
        },
      },
    };
    store = almacenamientoPrueba(estadoCarrito);

    store.dispatch( agregarProducto(1, 1) );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: carritoComprasTipos.actualizarCantidad,
      value: {producto: 1, cantidad: 2},
    });
  });

  test('Deben crearse las acción de actualizar producto en el carrito cuando se quiera agregar pero ya este agregado ', () => {
    store.dispatch( agregarProducto(1, 1) );
    act(() => {
      jest.advanceTimersByTime(tiempo);
    });
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: carritoComprasTipos.agregar,
      value: {producto: 1, cantidad: 1},
    });
  });

  test('Deben crearse las acción de actualizar producto en el carrito ', () => {
    store.dispatch( actualizarCantidad(1, 1) );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: carritoComprasTipos.actualizarCantidad,
      value: {producto: 1, cantidad: 1},
    });
  });

  test('Deben crearse las acción de eliminar producto en el carrito ', () => {
    store.dispatch( eliminarProducto(1) );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: carritoComprasTipos.eliminar,
      value: 1,
    });
  });

  test('Deben crearse las acción de limpiar carrito ', () => {
    store.dispatch( limpiarCarrito() );
    const actions = store.getActions();
    expect( actions[0] ).toEqual({
      type: carritoComprasTipos.limpiar,
    });
  });

});
