import carritoComprasTipos from '../../src/tipos/carritoComprasTipos';

describe('Pruebas en carritoComprasTipos', () => {
  test('Deben estar los tipos definidos para el carrito de compras', () => {
    expect( carritoComprasTipos ).toEqual({
      agregar: '[Carrito] Agregar',
      actualizarCantidad: '[Carrito] Actualizar Cantidad',
      eliminar: '[Carrito] Eliminar',
      limpiar: '[Carrito] Limpiar',
    });
  });
});
