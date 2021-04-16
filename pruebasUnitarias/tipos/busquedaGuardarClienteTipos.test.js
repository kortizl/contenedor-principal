import busquedaGuardarClienteTipos from '../../src/tipos/busquedaGuardarClienteTipos';

describe('Pruebas en carritoComprasTipos', () => {
  test('Deben estar los tipos definidos para el guardado de Cliente', () => {
    expect( busquedaGuardarClienteTipos ).toEqual({
        guardarCliente: '[Cliente] guardar',
        iniciarBusqueda: '[Cliente] buscar',
    });
  });
});
