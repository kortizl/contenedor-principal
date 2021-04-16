import * as singleSpa from 'single-spa';
import CargadorAplicaciones from './cargador-aplicaciones';

import '../recursos/scss/cuadriculaFundacionalMovil.scss';
import '../recursos/scss/cuadriculaFundacional.scss';
import '../recursos/scss/limpiadorEstilos.scss';
import '../recursos/scss/paletaColores.scss';
import '../recursos/scss/fuentes.scss';

/* Importaciones de estilos para Tableta */
import '../recursos/scss/estilosBase/estilosBase.scss';
import '../recursos/scss/tipografias/tipografias.scss';
import '../recursos/scss/pestanias/pestanias.scss';
import '../recursos/scss/botones/botones.scss';
import '../recursos/scss/titulos/titulos.scss';
import '../recursos/scss/paginaciones/paginaciones.scss';
import '../recursos/scss/camposFormulario/camposFormulario.scss';
import '../recursos/scss/iconos/iconos.scss';
import '../recursos/scss/visualizacionDatos/visualizacionDatos.scss';
import '../recursos/scss/indicadorDeEspera/indicadorDeEspera.scss';
import '../recursos/scss/navegacion/navegacion.scss';
import '../recursos/scss/barraDeProgreso/barraDeProgreso.scss';

/* Importaciones de estilos para PC */
import '../recursos/scss/estilosBase/estilosBasePC.scss';
import '../recursos/scss/tipografias/tipografiasPC.scss';
import '../recursos/scss/pestanias/pestaniasPC.scss';
import '../recursos/scss/botones/botonesPC.scss';
import '../recursos/scss/titulos/titulosPC.scss';
import '../recursos/scss/paginaciones/paginacionesPC.scss';
import '../recursos/scss/camposFormulario/camposFormularioPC.scss';
import '../recursos/scss/iconos/iconosPC.scss';
import '../recursos/scss/visualizacionDatos/visualizacionDatosPC.scss';
import '../recursos/scss/indicadorDeEspera/indicadorDeEsperaPC.scss';
import '../recursos/scss/navegacion/navegacionPC.scss';
import '../recursos/scss/barraDeProgreso/barraDeProgresoPC.scss';

const promesas = [];

/**
 * Método que contiene los datos para cargar las aplicaciónes en Single SPA.
 * @author Gerson Sierra
 */
async function cargarAplicaciones() {
  const cargadorAplicaciones = new CargadorAplicaciones();

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
       'app-encabezado',
      // Path que determina cuando la aplicación esta activa.
       '/',
       // Ubicación del JS principal de la app que se va a registrar.
      '/app-encabezado/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-desempenio',
      // Path que determina cuando la aplicación esta activa.
      '/desempenio',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-desempenio/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-panel-control',
      // Path que determina cuando la aplicación esta activa.
      '/panel-control',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-panel-control/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-compensacion',
      // Path que determina cuando la aplicación esta activa.
      '/compensacion',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-compensacion/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-portafolio-clientes',
      // Path que determina cuando la aplicación esta activa.
      '/portafolio-clientes',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-portafolio-clientes/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-tearsheet',
      // Path que determina cuando la aplicación esta activa.
      '/tearsheet',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-tearsheet/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-catalogo-productos',
      // Path que determina cuando la aplicación esta activa.
      '/catalogo-productos',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-catalogo-productos/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-cotizador',
      // Path que determina cuando la aplicación esta activa.
      '/cotizador',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-cotizador/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-afore-azteca',
      // Path que determina cuando la aplicación esta activa.
      '/afore-azteca',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-afore-azteca/principal.js',
    ),
  );
  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-surtimiento',
      // Path que determina cuando la aplicación esta activa.
      '/surtimiento',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-surtimiento/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-captacion',
      // Path que determina cuando la aplicación esta activa.
      '/captacion',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-captacion/principal.js',
    ),
  );

  promesas.push(
    cargadorAplicaciones.cargarAplicacion(
      // Nombre interno que se le asignará a la aplicación.
      'app-recompra-renovacion',
      // Path que determina cuando la aplicación esta activa.
      '/recompra-renovacion',
      // Ubicación del JS principal de la app que se va a registrar.
      '/app-recompra-renovacion/principal.js',
    ),
  );

  
}

/**
 * Método que espera a que se registren todas las aplicaciones.
 * @author Gerson Sierra
 */
async function iniciar() {
  cargarAplicaciones();

  await Promise.all(promesas);

  singleSpa.start();
}

iniciar();
