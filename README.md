# Resumen

El package contiene funciones para usar como responsive cuya base esta el la propiedad de CSS
calc.

Un ejemplo practico de esta es en el tamaño de las letra

ej: Por ejemplo si nuestra intension es ver el titulo lo mas atractivo posible y visible usaremos para computadoras tamaños relativamente grande, pero para mobile lo queremos para el tamaño de nuestra pequeña pantalla

- PC (1440px): titulo => 50px
- MOVIL (375px): titulo => 30px

Pero en la vida real no existe solo dos tipos y tamaños de pantallas, existen cientos, entonces como hariamos para que este se vea atractivamente bien en nuestros diferente tamaños de pantalla?

La funcion que me encontro fue calc..., buscando por la internet encontre soluciones acceptables, lastima que no encontre exactamente lo que buscaba. Pero en el transcurso de mis primeros meses aprendi scss y esto facilito la introducciones de usar funciones como si se tratara ya de usar un lenguaje de programacion. Pero antes no me precipitare con tanto parloteo y vamos como funciona.

<!-- TODO: poner 2 imagenes uno en pantalla grande y otro en celulares, de lo que queremos al final -->

Si fuera solo CSS3 usariamos de la siguiente manera:

    <style>
      h1 {
        fonts-size: calc(30px + (50 - 30) * ((100vw - 375px) / (1440 - 375)));
      }
    </style>
    <h1>Titulo</h1>

Y buala encontramos una solucion rapida y al parecer eficaz; pero...

Que pasa con las pantallas con tamaños mas pequeños, por ejemplo de unos 320px, realmente se veria mucho mas pequeño el titulo que estamos manejando, o que pasara con las pantalla mas grandes, por ejemplo a 1920px, 2200px, etc. El tamaño del titulo se veria horriblemente enorme. Como solucinarlo ?

Nuestra amada CSS Media Query entra en accion, lo hariamos de esta manera si es que pretendemos mantener los tamaños limites para pantallas mas grandes y mas pequeñas.

    <>
      h1: {
        font-size: 50px;
      }

      @media (max-width: 1400px) {
        h1: {
          font-size: calc(30px + (50 - 30) * ((100vw - 375px) / (1440 - 375)));
        }
      }

      @media (max-width: 375px) {
        h1: {
          font-size: 30px;
        }
      }
    </style>
    <h1>Titulo</h1>

<!-- TODO: poner la image de los tres resultados -->

Vaya mejoro el proceso, pero...

Nuevamente el pero XD, ahora mas bien parece estar complicando y solo hablamos de una etiqueta, que pasara si tenemos muchas mas etiquetas que necesitan cambiar el tamaño segun la dimension de la pantalla.

Bueno aqui entra en accion los preprocesadores que agilizan el proceso repetivo y practicamente mejora la productividad, estoy hablando de SASS (tambien existen LESS, STYLUS ...) y veamos como es que lo eh usado:

    // extracto _responsive.scss
    @function responsive($max, $min: "", $w-max: $desktop-responsive, $w-min: $phone-responsive ) {
      @if( $min == "" or $max == $min) {
          @return $max + px;
      }
      $min-px: $min + px;
      $w-min-px: $w-min + px;
      $result: calc( #{$min-px} + (#{$max} - #{$min}) * ((100vw - #{$w-min-px}) / (#{$w-max} - #{$w-min})));
      @return $result;
    }

Ahora tenemos una funcion que sera reutilizable para cualquier etiqueta que requiera cambiar sus dimension segun el ancho de pantalla


    // myStyle.scss
    h1 {
      font-size: 50px;
      @media (max-width: 1400px) {
          font-size: responsive(50, 30, 1440, 375);
      }
      @media (max-width: 375px) {
          font-size: 30px;
      }
    }

    h2 {
      font-size: 40px;
      @media (max-width: 1400px) {
          font-size: responsive(40, 20, 1440, 375);
      }
      @media (max-width: 375px) {
          font-size: 20px;
      }
    }

    // myHtml.html
    <h1>Titulo</h1>
    <h2>Subtitulo</h2>

Hemos progresado mucho, pero no estoy cumpliendo con lo que dije, no parece estar automatizado, despues de pensar en mis tiempos libres a lo largo de mis primeros meses como maquetador web , el  como podria acelerar el proceso de maquetacion con responsive y codigo limpio, llegue a crear algo que realmente que me dejo por delante de los demas desarrolladores cuando se trata de estilos responsivos.

Aqui les dejo la implementacion de mi codigo `npm i @jasbel/responsive` por si quieren ver a detalle de los que logre o usarlo directamente.

    // myStyle.scss
    h1 {
      @include responsive(fz, 50, 40);
    }

    h2 {
      @include responsive(fz, 40, 30);
    }

    .miTexto {
      @include responsive(fz, 28, 16);
    }

    .miCaja {
      @include responsive(w, 200, 50);
      @include responsive(h, 200, 50);
      background-color: red;
    }

    // myHtml.html
    <h1>Titulo</h1>
    <h2>Subtitulo</h2>
    <p class="miTexto">Text responsive </p>
    <div class="miCaja">Mi Caja<div>

Espero que les sirva y dime, como podria mejorarlo aun mas.

Actualmente estoy entrando mas a profundidad con los frameworks, y siempre me anda picando el bicho diciendome que: "Oye chaval, tambien puede meterle esto de tu responsive a react.js, react-native, Next, integrarlo con MUI, Chackra UI y seguramente con Tailwind y lo que venga XD, a poco tienes miedo por desconocer a profundidad de estas tecnologias"