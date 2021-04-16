import {agregarProducto, actualizarCantidad, eliminarProducto, limpiarCarrito} from './acciones/carritoCompraAcciones';
import {guardarCliente, iniciarBusquedaCliente} from './acciones/busquedaGuardarClienteAcciones';

export default class DistribuidorEventoGlobal {
  constructor() {
    this.almacen = null;
  }

  /**
   * Método que realiza el registro del almacenamiento de cada una de las aplicaciones.
   * @author Gerson Sierra
   * @param {*} almacen Almacen que contiene las variables/objetos de cada una de las aplicaciones.
   */
  registrarAlmacenamiento(almacen) {
    this.almacen = almacen ;
  }

  /**
   * Método que recorre los almacenes para guardar las variables/objetos de cada una de las aplicaciones.
   * @author Gerson Sierra
   * @param {*} evento Objeto que se agregara al almecenamiento del store.
   */
  envio(evento) {
    this.almacen.dispatch(evento);
  }

  /**
   * Método que realiza el envío de una acción asíncrona manejada por el middleware al almacen
   * @author Kristian Ortiz
   * @param {*} accionAsincrona acción que se aplicará en el almacen
   */
  enviarAccionesAsincronas( accionAsincrona ) {
    this.almacen.dispatch(accionAsincrona);
  }

  acciones = {
    comercio: {
      agregarProducto,
      actualizarCantidad,
      eliminarProducto,
      limpiarCarrito,
      guardarCliente,
      iniciarBusquedaCliente,
    },
  }

}
