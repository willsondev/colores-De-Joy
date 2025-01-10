<template>
  <div class="bg-black">
    <div class="h-full bg-black bg-opacity-50">
      <!-- Navegación -->
      <nav class="flex flex-col items-center justify-between p-4 mx-auto text-white md:flex-row max-w-7xl">
        <div class="flex mb-4 space-x-6 md:mb-0">
          <a href="#" class="text-lg p-3 bg-blue-600 rounded-full hover:bg-blue-700"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-lg p-3 bg-pink-600 rounded-full hover:bg-pink-700"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-lg p-3 bg-red-600 rounded-full hover:bg-red-700"><i class="fab fa-youtube"></i></a>
        </div>

        <div class="flex flex-col items-center space-y-2 text-center">
          <h1 class="text-2xl font-bold md:text-3xl">
            <span class="text-[#DB3C62]">Colores</span>
            <span class="text-[#DAA520]">De Joy</span>
          </h1>
          <div class="flex space-x-4">
            <router-link
            to="/">
            <button class="hover:bg-[#DB3C62] text-white py-2 px-4 rounded-full font-bold">INICIO</button>
           </router-link>
          </div>
        </div>

        <div class="mt-4 md:mt-0">
          <button class="hover:bg-[#DB3C62] text-white border font-bold py-2 px-6 rounded-full">Contacto</button>
        </div>
      </nav>

      <!-- Sección de Videos -->
      <section class="video-section p-6 bg-opacity-30">
        <h2 class="text-3xl font-semibold text-white text-center mb-4">Videos</h2>
        <div class="video-iframe flex justify-center mb-6">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1610918729810803&show_text=0&width=560&height=315"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video-iframe flex justify-center mb-6">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1737438277100421"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video-iframe flex justify-center mb-6">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/446778074978728"
            width="560"
            height="500"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- Sección de Galería -->
      <section class="gallery-section py-6 px-6 md:px-12 lg:px-10">
        <h2 class="text-3xl font-semibold text-white text-center mb-8">Galería de Fotos</h2>
        <div class="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            :alt="'Imagen ' + (index + 1)"
            class="gallery-image w-full h-48 object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </section>
    </div>

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

<script>
export default {
  name: 'VueGaleria',
  data() {
    return {
      // Imágenes de prueba para la galería
      images: [
        '../../public/img/galeria/imagen1.jpg',
        '../../public/img/galeria/imagen2.jpg',
        '../../public/img/galeria/imagen3.jpg',
        '../../public/img/galeria/imagen4.jpg',
        '../../public/img/galeria/imagen5.jpg',
        '../../public/img/galeria/imagen6.jpg',
        '../../public/img/galeria/imagen7.jpg',
        '../../public/img/galeria/imagen8.jpg',
        '../../public/img/galeria/imagen9.jpg',
        '../../public/img/galeria/imagen10.jpg',
        '../../public/img/galeria/imagen11.jpg',
            '../../public/img/galeria/imagen12.jpg',
            '../../public/img/galeria/imagen13.jpg',
            '../../public/img/galeria/imagen14.jpg',
           '../../public/img/galeria/imagen15.jpg',
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
