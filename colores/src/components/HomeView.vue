<template>
 <div class="text-white" style="background-image: radial-gradient(circle at 9.88% 26.84%, #dab556 0, #e1ad52 6.25%, #e7a44f 12.5%, #d07d30 18.75%, #f08f4c 25%, #f2834c 31.25%, #f4754e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb285f 62.5%, #e60067 68.75%, #e00072 75%, #d7007d 81.25%, #cd008a 87.5%, #c10097 93.75%, #b200a5 100%);">
 
<div class="h-screen   bg-cover   sm:bg-cover sm:bg-[position:center_5%]  md:bg-[url('../public/img/8.png')]  md:bg-cover md:bg-[position:center_10%]">
  <!-- resto del código -->

  <!-- resto del código -->

  <!-- resto del código -->

  <div class="h-full bg-black bg-opacity-50">
    <!-- Navegación -->
    <nav class="flex flex-col items-center justify-between p-4 mx-auto text-white md:flex-row max-w-7xl">
      <!-- Sección 1: Redes sociales -->
      <div class="flex mb-2 space-x-4 md:mb-0">
        <a href="#" class="icon-circle facebook-icon"><i class="text-xs fab fa-facebook-f"></i></a>
        <a href="#" class="icon-circle instagram-icon"><i class="text-xs fab fa-instagram"></i></a>
        <a href="#" class="icon-circle youtube-icon"><i class="text-xs fab fa-youtube"></i></a>
      </div>

      <!-- Sección 2: Título y botones (contenido que cambia según tamaño de pantalla) -->
      <div class="flex flex-col items-center space-y-2 text-center">
        <!-- En pantallas grandes (md o mayores), muestra este título -->
        <h1 class="text-2xl font-bold md:text-3xl lilita-one-regular">
          <span class="spam1 text-bordered cardinal-font">Colores</span>
          <span class="spam2 text-bordered2 cardinal-font">De Joy</span>
        </h1>
        
        <!-- En pantallas pequeñas, muestra un contenido diferente -->
        <h1 class="text-2xl font-bold text-center hidden sm:block">
          ¡Bienvenido a Colores de Joy!
        </h1>

        <div class="flex space-x-2">
          <button class="hover:bg-[#DB3C62] text-white py-2 px-4 rounded-full font-bold">INICIO</button>
          <router-link to="/galeria">
            <button class="bg-[#DB3C62] text-white py-2 px-4 rounded-full font-bold">VIDEOS</button>
          </router-link>
          <a href="#seccion-prensa">
            <button class="bg-[#DB3C62] text-white py-2 px-4 rounded-full font-bold">
              PRENSA
            </button>
          </a>
        </div>
      </div>

      <!-- Sección 3: Botón "Obtener" -->
      <div class="mt-4 md:mt-0">
        <button class="hover:bg-[#DB3C62] text-white border font-bold py-2 px-6 rounded-full">Contacto</button>
      </div>
    </nav>

    <!-- Sección -->
   <section class="flex items-center h-full px-6 mx-auto max-w-7xl relative">
  <!-- Contenido alineado a la izquierda -->
  <div class="space-y-4 text-white mt-5">
    <h1 class="text-4xl font-bold md:text-6xl">¡Canta y Baila con Colores de Joy!</h1>
    <p class="text-lg md:text-2xl">
      Colores de Joy combina música, diversión y creatividad para llenar de alegría los corazones de los más pequeños. ¡Ven a cantar, bailar y soñar con nosotros!
    </p>

    <!-- Mostrar este botón solo en pantallas pequeñas -->
    <router-link to="/galeria">
      <button class="mt-5 bg-[#156fdd] text-white text-2xl font-semibold py-4 px-6 rounded-full sm:hidden">
        ¡Comencemos...!
      </button>
    </router-link>

    <!-- Mostrar este botón solo en pantallas grandes -->
    <router-link to="/galeria">
      <button class="mt-5 bg-[#156fdd] text-white text-2xl font-semibold py-4 px-6 rounded-full hidden sm:block lg:bg-[#da6f12]">
        Comencemos...
      </button>
    </router-link>
  </div>

  <!-- Imagen que se muestra solo en pantallas pequeñas -->
  

    <img  style="margin-left: -15px; background-image: radial-gradient(circle at 9.88% 26.84%, #dab556 0, #e1ad52 6.25%, #e7a44f 12.5%, #d07d30 18.75%, #f08f4c 25%, #f2834c 31.25%, #f4754e 37.5%, #f46550 43.75%, #f25353 50%, #ef3f58 56.25%, #eb285f 62.5%, #e60067 68.75%, #e00072 75%, #d7007d 81.25%, #cd008a 87.5%, #c10097 93.75%, #b200a5 100%);" class="max-w-[400px] max-h-[250px] left-4  absolute top-0  w-full h-full object-cover sm:block md:hidden" src="../../public/img/8.png" alt="" >
 
  
</section>
  </div>
</div>


 <router-view />


<!-- Fin de la sección 2 -->

<!--incio seccion 3-->
<section class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 py-12  bg-[#DB3C62]">
  <!-- Columna izquierda: Imagen redonda -->
  <div class="flex justify-center">
    <img
      src="../../public/img/audio.jpg"
      alt="Imagen de prueba"
      class="object-cover w-48 h-48 rounded-full shadow-lg"
    />
  </div>

  <!-- Columna derecha: Contenido -->
  <div class="flex flex-col items-center justify-center space-y-4 md:items-start">
    <!-- Título -->
    <h2 class="text-2xl font-bold text-white">Todo el Mundo esta Feliz</h2>
    
    <!-- Subtítulo -->
    <span class="text-lg text-white">Colores de Joy</span>
    
    <!-- Botón de Play -->
   
    <!-- Botón de reproducción/pausa -->
    <button @click="toggleAudio" class="flex items-center justify-center w-full py-3 font-medium text-white bg-black rounded-full shadow-md md:w-1/2 hover:bg-blue-600">
      ▶ / ❚❚ {{ isPlaying ? 'Pausar' : 'Reproducir' }}
    </button>

    <!-- Audio -->
    <audio ref="audioPlayer" src="../public/audios/cancion1.mp3" preload="auto"></audio>
  
    
    <!-- Iconos -->
    <div class="flex justify-between mt-6 space-x-6 text-gray-500">
      <button class="hover:text-blue-500">
        <i class="text-xl text-white fas fa-thumbs-up"></i>
      </button>
      <button class="hover:text-blue-500">
        <i class="text-xl text-white fas fa-headphones"></i>
      </button>
      <button class="hover:text-blue-500">
        <i class="text-xl text-white fas fa-share"></i>
      </button>
    </div>
  </div>
</section>

<!-- Fin de la sección 3 -->


<!--inicio seccion 5-->
<section class="relative py-16 bg-black bg-center bg-cover">
  <!-- Título principal -->
  <div class="flex justify-center p-1">
    <section id="seccion-prensa">
      <button  class="bg-[#DB3C62] text-white font-bold text-3xl py-4 px-6 rounded-full text-center">
      Prensa
    </button>
    </section>
       
  
   
  </div>

  <!-- Contenedor de las cards -->
  <div class="grid grid-cols-1 gap-8 p-2 px-6 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Card 1 -->
    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <!-- Contenido principal -->
      <div class="p-6">
        <h3 class="text-5xl font-bold text-white">
          Colores de Joy brilló en la Navidad de los Niños 2024
        </h3>
        <!-- Imagen con efecto de zoom -->
        <div class="mt-3 overflow-hidden rounded-lg">
          <img
            class="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110"
            src="../../public/img/noticia-1.png"
            alt="Imagen de la noticia"
          />
        </div>
        <span class="block mt-4 text-2xl text-gray-600">
          Por tercer año consecutivo, llevamos música, sonrisas y magia al esperado evento navideño. 
          ¡Gracias por ser parte de este momento inolvidable!
        </span>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="relative overflow-hidden rounded-lg shadow-lg">
      <!-- Contenido principal -->
      <div class="p-6">
        <h3 class="text-5xl font-bold text-white">
          Éxito total: Música y entretención familiar con Colores de Joy en Linares
        </h3>
        <!-- Contenedor de imágenes -->
        <div class="flex mt-3 space-x-3">
          <div class="overflow-hidden rounded-lg">
            <img
              class="object-cover w-40 transition-transform duration-500 ease-in-out transform h-28 hover:scale-110"
              src="../../public/img/noticia2.png"
              alt="Primera imagen"
            />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img
              class="object-cover w-40 transition-transform duration-500 ease-in-out transform h-28 hover:scale-110"
              src="../../public/img/colores2.png"
              alt="Segunda imagen"
            />
          </div>
        </div>
        <!-- Texto descriptivo -->
        <span class="block mt-4 text-2xl text-gray-600">
          El pasado sábado 7 de diciembre, la Alameda de Linares vibró con música y alegría gracias a Colores de Joy en la Feria Agrícola. 
          Familias y vecinos disfrutaron una tarde mágica llena de unión y momentos inolvidables. ¡Gracias por acompañarnos!
        </span>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="relative overflow-hidden rounded-lg shadow-lg">
      
      <!-- Contenido principal -->
      <div class="p-6">
        <h3 class="text-5xl font-bold text-white">🎉 ¡Gracias, Colbún!</h3>
        <!-- Imagen con efecto de zoom -->
        <div class="mt-3 overflow-hidden rounded-lg">
          <img
            class="object-cover w-full transition-transform duration-500 ease-in-out transform h-100 hover:scale-110"
            src="../../public/img/noticia3.png"
            alt="Imagen de agradecimiento"
          />
        </div>
        <span class="block mt-4 text-2xl text-gray-600">
          Agradecemos a todas las familias que nos acompañaron en la plaza de la comuna, llenando el día de música, entretención y alegría.
          <br />
          ❣️ Juntos, logramos aportar a la Teletón 2024. ¡Gracias por su apoyo y solidaridad!
        </span>
      </div>
    </div>
  </div>
</section>


<!--fin seccion 5-->

<!--inicio sesion 6-->
  
  <section class="flex flex-col items-center justify-between p-6 space-y-6 bg-black border-t-2 border-gray-500 shadow-lg lg:flex-row lg:space-y-0">
  <!-- Contenido de texto -->
 <div class="flex flex-1 lg:items-start lg:text-left">
  <div class="flex flex-col justify-center w-full lg:items-center lg:justify-start">
    <h2 class="mt-2 text-3xl font-bold text-white ">NUESTRO TRABAJO</h2>
    <p class="mt-2 text-2xl font-semibold text-white">TODO POR TI</p>
    <p class="mt-2 text-lg text-center text-gray-400 text-balance">
      Nuestra esencia y naturaleza es llenarte de alegría, hacerte bailar, y que disfrutes cada momento con nosotros. 
      Creamos música divertida y colorida que encanta a niños y niñas por igual.
    </p>
    <button class="mt-4 bg-[#DB3C62] text-white py-2 px-6 rounded-full font-bold hover:bg-[#b83154] transition duration-300">
      Más..
    </button>
  </div>
</div>






  <!-- Imagen -->
  <div class="flex justify-center w-full lg:w-1/2">
    <img
      class="object-cover w-full max-h-screen min-h-full rounded-lg shadow-md"
      src="../../public/img/cachureos.jpg"
      alt="Imagen de prueba"
    />
  </div>
</section>

<section class="flex flex-col items-center justify-center p-6 bg-[#DB3C62] text-white space-y-4">
  
  
  
  <!-- Video de Facebook -->
  <div class="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg aspect-video ">
    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcoloresde.joy%2Fvideos%2F825572779428324%2F&show_text=false&width=560&t=0" width="100%" height="100%" style="border:none;overflow:hidden"   scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

  </div>
</section>

<!--fin sesion 6-->

<!--inicio seccion 6-->
<section class="relative py-16 bg-black bg-center bg-cover" >
  <!-- Título principal -->
  <h2 class="mb-12 text-4xl font-bold text-center text-white">Integrantes</h2>

  <!-- Contenedor de las cards -->
  <div class="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-5">

    <!-- Card 1 -->
    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/hugo.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

    <!-- Card 2 -->
   

    <!-- Card 3 -->
    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/bodi.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

    <!-- Card 4 -->
    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/alex.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

    <!-- Card 5 -->
    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/bety.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/gei.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/sandra.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

    <div class="relative flex items-center justify-center ">
      <img src="../../public/img/integrantes/abraham.jpg" alt="Imagen de prueba" class="object-cover w-full h-full rounded-lg" />
    </div>

  </div>

  <!-- Botón de contacto -->
  
</section>

<!--fin seccion 6-->

<!--footer-->
<footer class="py-8 bg-gray-800">
  <div class="container px-6 mx-auto">
    <!-- Título del Footer -->
    <h1 class="mb-4 text-2xl font-bold text-center text-white">Nuestras Producciones</h1>
    <p class="mb-8 text-center text-white">Puedes encontrar todo nuestro material en plataformas digitales y redes sociales.</p>

    <!-- Sección de Redes Sociales y Datos de Contacto -->
    <div class="flex flex-col items-center justify-between gap-8 lg:flex-row">
      <!-- Redes Sociales -->
      <div class="flex justify-center space-x-6 lg:justify-start">
        <a href="#" class="text-white hover:text-blue-500">
          <i class="text-2xl fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-white hover:text-pink-500">
          <i class="text-2xl fab fa-instagram"></i>
        </a>
        <a href="#" class="text-white hover:text-blue-400">
          <i class="text-2xl fab fa-twitter"></i>
        </a>
        <a href="#" class="text-white hover:text-red-600">
          <i class="text-2xl fab fa-youtube"></i>
        </a>
      </div>

      <!-- Datos de Contacto -->
      <div class="text-center lg:text-right">
        <p class="mb-2 text-white">
          Teléfono: +1 234 567 890
        </p>
        <p class="text-white">
          Correo: contacto@grupocoloresdejoy.com
        </p>
      </div>
    </div>
  </div>
</footer>






</div>

</template>

<style scoped>
.icon-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-radius: 50%;
  width: 30px; /* Tamaño del círculo */
  height: 30px; /* Tamaño del círculo */
}

.facebook-icon {
  border-color: white; /* Color de borde de Facebook */
}

.twitter-icon {
  border-color: white; /* Color de borde de Twitter */
}

.youtube-icon {
  border-color: white; /* Color de borde de YouTube */
}

.icon-circle i {
  font-size: 12px; /* Tamaño de los íconos */
  color: white;
}

.spam1{
  color: #ff0a0e;
}

.text-bordered {
  text-shadow: 
    1px 1px 0px #fff,   /* Borde superior izquierdo */
    -1px -1px 0px #fff,  /* Borde inferior derecho */
    1px -1px 0px #fff,   /* Borde superior derecho */
    -1px 1px 0px #fff;   /* Borde inferior izquierdo */
}

.spam2{
  color: #1e0aff;
}

.text-bordered2 {
  text-shadow: 
    1px 1px 0px #fff,   /* Borde superior izquierdo */
    -1px -1px 0px #fff,  /* Borde inferior derecho */
    1px -1px 0px #fff,   /* Borde superior derecho */
    -1px 1px 0px #fff;   /* Borde inferior izquierdo */
}

.roboto-regular {
  font-family: "Roboto", serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-light-italic {
  font-family: "Roboto", serif;
  font-weight: 300;
  font-style: italic;
}
.rubik-vinyl-regular {
  font-family: "Rubik Vinyl", serif;
  font-weight: 400;
  font-style: normal;
}
.lilita-one-regular {
  font-family: "Lilita One", serif;
  font-weight: 400;
  font-style: normal;
}


/* Opcional: Agregar una clase personalizada */

html {
  scroll-behavior: smooth;
}







</style>

<script>

import VueGaleria from './VueGaleria.vue'; // Ajusta la ruta si es necesario
export default {
  name: 'HomeView',
  
  data() {
    return {
      isPlaying: false, // Variable para controlar el estado de reproducción
    };
  },
  components: {
    VueGaleria,
  },
  methods: {
    // Función para alternar entre reproducir y pausar
    toggleAudio() {
      const audio = this.$refs.audioPlayer;

      if (this.isPlaying) {
        audio.pause(); // Pausar el audio si ya está reproduciéndose
      } else {
        audio.play(); // Reproducir el audio si no se está reproduciendo
      }

      // Alternar el estado de reproducción
      this.isPlaying = !this.isPlaying;
    }
  }
}
</script>


