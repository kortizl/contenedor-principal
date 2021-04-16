import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { guardarCliente, iniciarBusquedaCliente } from '../../src/acciones/busquedaGuardarClienteAcciones';
import busquedaGuardarClienteTipos from '../../src/tipos/busquedaGuardarClienteTipos';

const intermediarios = [thunk];
const almacenamientoPrueba = configureStore(intermediarios);
const estadosIniciales = {
  comercio: {
      cliente: {
      iniciarBusqueda: false,
      cliente: {},
    },
  },
};

let almacen = almacenamientoPrueba(estadosIniciales);

describe('Pruebas en las acciones de gardar un cliente', () => {
  beforeEach(() => {
    almacen = almacenamientoPrueba(estadosIniciales);
  });

  test('Debe crearse la acción de guardar un cliente', () => {
    const estadoCliente = {
      comercio: {
          cliente: {
          iniciarBusqueda: false,
          cliente: {},
        },
      },
    };
    almacen = almacenamientoPrueba(estadoCliente);

    almacen.dispatch(
      guardarCliente({ nombre: 'Erick', clienteUnico: 11212410294 })
    );
    const acciones = almacen.getActions();
    expect(acciones[0]).toEqual({
      type: busquedaGuardarClienteTipos.guardarCliente,
      value: { nombre: 'Erick', clienteUnico: 11212410294 },
    });
  });

  test('Debe crearse la acción de iniciar la búsqueda de un cliente', () => {
    const estado = {
      comercio: {
        cliente: {
          iniciarBusqueda: false,
          cliente: {},
        },
      },
    };
    almacen = almacenamientoPrueba(estado);
    almacen.dispatch(iniciarBusquedaCliente(true));
    const acciones = almacen.getActions();
    expect(acciones[0]).toEqual({
      type: busquedaGuardarClienteTipos.iniciarBusqueda,
      value: true,
    });
  });
});
