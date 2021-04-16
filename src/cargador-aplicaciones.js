import * as singleSpa from 'single-spa';
import crearAlmacenamiento from './almacenamiento';
import DistribuidorEventoGlobal from './distribuidor-evento-global';

export default class CargadorAplicaciones {

  constructor() {
    this.distribuidorEventoGlobal = new DistribuidorEventoGlobal();
    this.almacenamientoPersonalizado = {
      distribuidorEventoGlobal: this.distribuidorEventoGlobal,
    };
    this.almacenamientoPersonalizado.store = crearAlmacenamiento();
    this.distribuidorEventoGlobal.registrarAlmacenamiento(this.almacenamientoPersonalizado.store);
  }

  /**
   * Método que carga la aplicación en Single SPA.
   * @author Gerson Sierra
   * @param {*} nombre Nombre de la aplicación.
   * @param {*} prefijo Path que se le asigno a cada una de las aplicaciones.
   * @param {*} urlAplicacion URL donde se encuentra la aplicación.
   */
  cargarAplicacion(nombre, prefijo, urlAplicacion) {
    singleSpa.registerApplication(nombre, () => SystemJS.import(urlAplicacion),
      this.validarPrefijo(prefijo), this.almacenamientoPersonalizado);
  }

  /**
   * Método que valida si el path de la aplicación coincide con el que se encuentra en el navegador.
   * @author Gerson Sierra
   * @param {*} prefijo Path que se definio para cada una de la aplicaciones del front.
   * @returns Booleano que define si el prefijo es válido.
   */
  validarPrefijo(prefijo) {
    return function (location) {
      return location.pathname.startsWith(prefijo);
    };
  }
}
