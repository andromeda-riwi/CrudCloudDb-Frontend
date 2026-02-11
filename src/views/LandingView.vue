﻿<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
    <!-- Navbar -->
    <Navbar />

    <section class="bg-gradient-to-br from-black to-gray-900 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div class="container mx-auto px-6 py-24 text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#e1bc47]">
          Tu Nube de Bases de Datos, Lista en Segundos.
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Despliega, administra y escala instancias de MySQL, PostgreSQL, MongoDB y más, con una interfaz web intuitiva. Menos configuración, más desarrollo.
        </p>
        <div class="flex justify-center gap-4">
          <RouterLink
            to="/register"
            class="bg-[#e1bc47] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#f0d470] transition-transform hover:scale-105"
          >
            Empieza Gratis
          </RouterLink>
          <RouterLink
            to="/login"
            class="bg-transparent text-[#e1bc47] font-bold py-3 px-8 rounded-lg border-2 border-[#e1bc47] hover:bg-[#e1bc47] hover:text-black transition-colors"
          >
            Iniciar Sesión
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Un Proceso Increíblemente Sencillo</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Empieza a construir en menos de un minuto.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-12 text-center">
        <div class="flex flex-col items-center">
          <div class="bg-[#e1bc47] text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Regístrate en Segundos</h3>
          <p class="text-gray-600 dark:text-gray-400">Crea tu cuenta gratis sin necesidad de tarjeta de crédito y obtén acceso instantáneo.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-[#e1bc47] text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Elige tu Motor</h3>
          <p class="text-gray-600 dark:text-gray-400">Selecciona entre los motores de bases de datos más populares del mercado.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="bg-[#e1bc47] text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Conéctate y Desarrolla</h3>
          <p class="text-gray-600 dark:text-gray-400">Recibe tus credenciales al instante y enfócate en lo que realmente importa: tu código.</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="container mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Compatible con tus Herramientas Favoritas</h2>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Usamos las tecnologías que ya conoces y amas.</p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          <!-- MySQL -->
          <div class="flex flex-col items-center gap-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              alt="MySQL"
              class="w-20 h-20"
            />
          </div>

          <!-- PostgreSQL -->
          <div class="flex flex-col items-center gap-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              alt="PostgreSQL"
              class="w-20 h-20"
            />
          </div>

          <!-- MongoDB -->
          <div class="flex flex-col items-center gap-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB"
              class="w-20 h-20"
            />
          </div>

          <!-- SQL Server -->
          <div class="flex flex-col items-center gap-3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
              alt="SQL Server"
              class="w-20 h-20"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Precios Section -->
    <section id="precios" class="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="container mx-auto px-6 py-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Planes que se Ajustan a tus Necesidades</h2>
          <p class="text-gray-600 dark:text-gray-400 mt-2">Comienza gratis y escala a medida que creces.</p>
        </div>

        <!-- Componente de precios reutilizable -->
        <PricingSection />
      </div>
    </section>

    <!-- Video Demo Section -->
    <section class="container mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mira Cómo Funciona</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Descubre todas las funcionalidades de nuestra plataforma en acción.</p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
          <iframe
            class="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl border-0"
            src="https://www.youtube.com/embed/YRceKwVsJ9I"
            title="Video Demostrativo de ApexDB"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="container mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
      </div>
      <div class="max-w-3xl mx-auto space-y-4">
        <div>
          <h4 class="font-semibold text-lg text-gray-900 dark:text-white">¿Realmente es gratis?</h4>
          <p class="text-gray-600 dark:text-gray-400 mt-1">Sí, nuestro plan gratuito te permite tener hasta dos bases de datos por cada motor, ideal para proyectos personales y de desarrollo.</p>
        </div>
        <hr class="dark:border-gray-700"/>
        <div>
          <h4 class="font-semibold text-lg text-gray-900 dark:text-white">¿Qué tan seguras son mis bases de datos?</h4>
          <p class="text-gray-600 dark:text-gray-400 mt-1">Cada instancia se ejecuta en un entorno aislado con credenciales únicas. Toda la comunicación está protegida con cifrado SSL.</p>
        </div>
        <hr class="dark:border-gray-700"/>
        <div>
          <h4 class="font-semibold text-lg text-gray-900 dark:text-white">¿Qué pasa si necesito más capacidad?</h4>
          <p class="text-gray-600 dark:text-gray-400 mt-1">Puedes actualizar a uno de nuestros planes de pago en cualquier momento y de forma instantánea desde tu panel de control.</p>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-br from-black to-gray-900 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <div class="container mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-[#e1bc47]">¿Listo para Acelerar tu Desarrollo?</h2>
        <RouterLink
          to="/register"
          class="mt-8 inline-block bg-[#e1bc47] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#f0d470] transition-transform hover:scale-105"
        >
          Comienza Gratis Hoy Mismo
        </RouterLink>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import PricingSection from '@/components/PricingSection.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>
