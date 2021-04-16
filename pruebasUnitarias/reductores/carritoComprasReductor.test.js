import carritoComprasReductor from '../../src/reductores/carritoComprasReductor';
import carritoComprasTipos from '../../src/tipos/carritoComprasTipos';

describe('Pruebas en carritoComprasReductor', () => {
  test('Debe actualizar el estado cuando se agrega un producto', () => {
    const estadoInicial = {
      operacion: '',
      productos: [],
    };

    const accion = {
      type: carritoComprasTipos.agregar,
      value: {producto: 1, cantidad: 1},
    };

    const estado = carritoComprasReductor( estadoInicial, accion );

    expect( estado ).toEqual({
        operacion: 'Se ha agregado un producto al carrito',
        productos: [{producto: 1, cantidad: 1}],
    });
  });

  test('Debe actualizar el estado cuando se actualice la cantidad un producto', () => {
    const estadoInicial = {
      operacion: '',
      productos: [
        {producto: 1, cantidad: 1},
        {producto: 2, cantidad: 2},
      ],
    };

    const accion = {
      type: carritoComprasTipos.actualizarCantidad,
      value: {producto: 1, cantidad: 3},
    };

    const estado = carritoComprasReductor( estadoInicial, accion );
    expect( estado ).toEqual({
        operacion: 'Se ha cambiado un producto del carrito',
        productos: [{producto: 1, cantidad: 3},
                    {producto: 2, cantidad: 2}],
    });
  });

  test('Debe actualizar el estado cuando se elimine un producto', () => {
    const estadoInicial = {
      operacion: '',
      productos: [
        {producto: 1, cantidad: 1},
        {producto: 2, cantidad: 2},
      ],
    };

    const accion = {
      type: carritoComprasTipos.eliminar,
      value: 1,
    };

    const estado = carritoComprasReductor( estadoInicial, accion );

    expect( estado ).toEqual({
        operacion: 'Se ha eliminado un producto del carrito',
        productos: [{producto: 2, cantidad: 2}],
    });
  });

  test('Debe actualizar el estado cuando se limpie el carrito', () => {
    const estadoInicial = {
      operacion: '',
      productos: [{producto: 1, cantidad: 1}],
    };

    const accion = {
      type: carritoComprasTipos.limpiar,
    };

    const estado = carritoComprasReductor( estadoInicial, accion );

    expect( estado ).toEqual({
        operacion: 'Se ha limpiado el carrito',
        productos: [],
    });
  });

  test('Debe permanecer el estado cuando no se identifique la acción', () => {
    const estadoInicial = {
      operacion: '',
      productos: [{producto: 1, cantidad: 1}],
    };

    const accion = {
      type: 'nueva accion',
      value: {producto: 1, cantidad: 3},
    };

    const estado = carritoComprasReductor( estadoInicial, accion );

    expect( estado ).toEqual({
      operacion: '',
      productos: [{producto: 1, cantidad: 1}],
    });
  });

});
