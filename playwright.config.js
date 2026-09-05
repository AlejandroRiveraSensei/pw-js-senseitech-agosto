// playwright.config.js

// Importa las funciones principales de Playwright.
// defineConfig → ayuda con autocompletado y validación.
// devices → contiene configuraciones listas para Chrome, Firefox, Safari, móviles, etc.
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  /**
   * 📊 REPORTER
   *
   * Genera un reporte HTML al finalizar la ejecución.
   *
   * open:
   * 'always' → abre el reporte automáticamente.
   * 'never'  → nunca lo abre.
   * 'on-failure' → solo si hubo fallos.
   * 'off' → genera el reporte sin abrirlo (recomendado para CI).
   */
  reporter: [['html', { open: 'off' }]],

  /**
   * ⚙️ CONFIGURACIÓN GLOBAL
   *
   * Estas opciones aplican para TODOS los proyectos
   * (Chrome, Chromium, Firefox, WebKit, etc.)
   */
  use: {

    /**
     * 👀 HEADLESS
     *
     * false → abre el navegador visualmente.
     * true → ejecuta sin interfaz gráfica.
     *
     * En este caso:
     * - Local → navegador visible.
     * - GitHub Actions (CI) → headless automáticamente.
     */
    headless: false,

    /**
     * 🐢 SLOW MOTION
     *
     * Agrega una pausa entre acciones.
     * Muy útil para explicar el flujo durante un curso.
     */
    launchOptions: {
      slowMo: 1000
    },

    /**
     * 📸 SCREENSHOT OPTIONS
     *
     * 'on' → toma screenshot en TODOS los tests.
     * 'only-on-failure' → solo cuando el test falla (recomendado).
     * 'off' → nunca toma screenshots.
     */
    screenshot: 'only-on-failure',

    /**
     * 🎥 VIDEO OPTIONS
     *
     * 'on' → graba video en TODOS los tests.
     * 'retain-on-failure' → conserva el video solo cuando falla.
     * 'on-first-retry' → graba únicamente durante el primer retry.
     * 'off' → desactiva la grabación.
     */
    video: 'off',

    /**
     * 🔍 TRACE OPTIONS
     *
     * El Trace Viewer permite revisar:
     * - pasos ejecutados
     * - screenshots
     * - DOM
     * - Network
     * - Console
     *
     * Muy útil para debugging.
     */
    trace: 'on-first-retry',
  },

  /**
   * 📂 TEST DIRECTORY
   *
   * Carpeta donde Playwright buscará automáticamente
   * todos los archivos *.spec.js o *.test.js
   */
  testDir: './tests',

  /**
   * ⚡ FULLY PARALLEL
   *
   * true → los tests dentro del mismo archivo
   * también pueden ejecutarse en paralelo.
   *
   * false → se ejecutan en orden.
   */
  fullyParallel: true,

  /**
   * 👷 WORKERS
   *
   * Número de procesos paralelos.
   *
   * Más workers = ejecución más rápida.
   *
   * Ejemplo:
   * workers: 4
   * Puede ejecutar hasta 4 tests al mismo tiempo.
   */
  workers: 1,

  /**
   * 🌐 CROSS BROWSER TESTING
   *
   * Cada proyecto representa un navegador diferente.
   *
   * Google Chrome → Navegador Chrome real.
   * Chromium      → Motor base de Chrome y Edge.
   * Firefox       → Mozilla Firefox.
   * WebKit        → Motor de Safari.
   *
   * Al ejecutar:
   *
   * npx playwright test
   *
   * Playwright correrá TODOS los tests
   * en cada uno de estos navegadores.
   */
  projects: [

    /**
     * 🌍 Google Chrome
     *
     * Utiliza el navegador Google Chrome instalado
     * en la computadora.
     */
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },

    /**
     * ⚙️ Chromium
     *
     * Utiliza la versión de Chromium incluida
     * con Playwright.
     */
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    /**
     * 🦊 Firefox
     *
     * Ejecuta los tests usando Mozilla Firefox.
     */
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    /**
     * 🧭 WebKit
     *
     * Simula el motor utilizado por Safari.
     *
     * Ideal para validar compatibilidad
     * con usuarios de macOS y iPhone.
     */
    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});