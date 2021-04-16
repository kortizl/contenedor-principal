import busquedaGuardarClienteReductor from '../../src/reductores/busquedaGuardarClienteReductor';
import busquedaGuardarClienteTipos from '../../src/tipos/busquedaGuardarClienteTipos';

describe('Pruebas en busquedaGuardarClienteReductor', () => {

  test('Debe crearse el reductor con un estado inicial', () => {
    const estadoInicial = {
      busqueda: false,
      cliente: {},
    };

    const estado = busquedaGuardarClienteReductor();
    expect( estado ).toEqual(estadoInicial);
  });

  test('Debe actualizar el estado cuando se guarda un cliente', () => {
    const estadoInicial = {
      busqueda: false,
      cliente: {},
    };

    const accion = {
      type: busquedaGuardarClienteTipos.guardarCliente,
      value: {nombre: 'Erick', apepat: 'Medina'},
    };

    const estado = busquedaGuardarClienteReductor( estadoInicial, accion );
    expect( estado ).toEqual({
        busqueda: false,
        cliente:{nombre: 'Erick', apepat: 'Medina'},
    });
  });

  test('Debe actualizar el estado cuando se inicia una búsqueda de clientes', () => {
    const estadoInicial = {
      busqueda: false,
      cliente: {},
    };

    const accion = {
      type: busquedaGuardarClienteTipos.iniciarBusqueda,
      value: true,
    };

    const estado = busquedaGuardarClienteReductor( estadoInicial, accion );
    expect( estado ).toEqual({
        busqueda: true,
        cliente:{},
    });
  });

  test('Debe permanecer el estado cuando no se identifique la acción', () => {
    const estadoInicial = {
        busqueda: false,
        cliente: {nombre: 'Erick', apepat: 'Medina'},
      };

    const accion = {
      type: 'nueva accion',
      cliente: {nombre: 'asñl', apepat: 'ancnc'},
    };

    const estado = busquedaGuardarClienteReductor( estadoInicial, accion );
    expect( estado ).toEqual({
      busqueda: false,
      cliente: {nombre: 'Erick', apepat: 'Medina'},
    });
  });

});
