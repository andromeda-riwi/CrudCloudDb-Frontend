<template>
  <div class="bg-white text-gray-800">
    <section class="bg-gray-50">
      <div class="container mx-auto px-6 py-24 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Tu Nube de Bases de Datos, Lista en Segundos.
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Despliega, administra y escala instancias de MySQL, PostgreSQL, MongoDB y más, con una interfaz web intuitiva. Menos configuración, más desarrollo.
        </p>
        <div class="flex justify-center gap-4">
          <RouterLink
            to="/register"
            class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Empieza Gratis
          </RouterLink>
          <RouterLink
            to="/login"
            class="bg-transparent text-blue-600 font-bold py-3 px-8 rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Iniciar Sesión
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Un Proceso Increíblemente Sencillo</h2>
        <p class="text-gray-600 mt-2">Empieza a construir en menos de un minuto.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-12 text-center">
        <div class="flex flex-col items-center">
          <div class="bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
          <h3 class="text-xl font-bold mb-2">Regístrate en Segundos</h3>
          <p class="text-gray-600">Crea tu cuenta gratis sin necesidad de tarjeta de crédito y obtén acceso instantáneo.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
          <h3 class="text-xl font-bold mb-2">Elige tu Motor</h3>
          <p class="text-gray-600">Selecciona entre los motores de bases de datos más populares del mercado.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
          <h3 class="text-xl font-bold mb-2">Conéctate y Desarrolla</h3>
          <p class="text-gray-600">Recibe tus credenciales al instante y enfócate en lo que realmente importa: tu código.</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <div class="container mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold">Compatible con tus Herramientas Favoritas</h2>
          <p class="text-gray-600 mt-2">Usamos las tecnologías que ya conoces y amas.</p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          <p class="font-bold text-xl text-gray-500">MySQL</p>
          <p class="font-bold text-xl text-gray-500">PostgreSQL</p>
          <p class="font-bold text-xl text-gray-500">MongoDB</p>
          <p class="font-bold text-xl text-gray-500">Redis</p>
          <p class="font-bold text-xl text-gray-500">SQL Server</p>
          <p class="font-bold text-xl text-gray-500">Cassandra</p>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
      </div>
      <div class="max-w-3xl mx-auto space-y-4">
        <div>
          <h4 class="font-semibold text-lg">¿Realmente es gratis?</h4>
          <p class="text-gray-600 mt-1">Sí, nuestro plan gratuito te permite tener hasta dos bases de datos por cada motor, ideal para proyectos personales y de desarrollo.</p>
        </div>
        <hr/>
        <div>
          <h4 class="font-semibold text-lg">¿Qué tan seguras son mis bases de datos?</h4>
          <p class="text-gray-600 mt-1">Cada instancia se ejecuta en un entorno aislado con credenciales únicas. Toda la comunicación está protegida con cifrado SSL.</p>
        </div>
        <hr/>
        <div>
          <h4 class="font-semibold text-lg">¿Qué pasa si necesito más capacidad?</h4>
          <p class="text-gray-600 mt-1">Puedes actualizar a uno de nuestros planes de pago en cualquier momento y de forma instantánea desde tu panel de control.</p>
        </div>
      </div>
    </section>

    <section class="bg-blue-600">
      <div class="container mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Listo para Acelerar tu Desarrollo?</h2>
        <RouterLink
          to="/register"
          class="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105"
        >
          Comienza Gratis Hoy Mismo
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
