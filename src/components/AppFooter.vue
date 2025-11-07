<template>
  <footer id="contacto" class="bg-gradient-to-br from-black to-gray-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Columna 1: Logo y descripción -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="@/assets/logoApexDBWB.png" alt="ApexDB Logo" class="h-10 w-auto" />
            <span class="text-xl font-bold text-[#e1bc47]">ApexDB</span>
          </div>
          <p class="text-gray-400 text-sm">
            Tu plataforma cloud de bases de datos. Despliega, administra y escala tus bases de datos en segundos.
          </p>
          <div class="flex space-x-4">
            <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#e1bc47] rounded-full flex items-center justify-center hover:bg-[#f0d470] transition-colors">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <!-- Twitter -->
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#e1bc47] rounded-full flex items-center justify-center hover:bg-[#f0d470] transition-colors">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#e1bc47] rounded-full flex items-center justify-center hover:bg-[#f0d470] transition-colors">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#e1bc47] rounded-full flex items-center justify-center hover:bg-[#f0d470] transition-colors">
              <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Columna 2: Enlaces rápidos -->
        <div>
          <h3 class="text-lg font-bold text-[#e1bc47] mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <a href="#inicio" @click.prevent="scrollToTop" class="text-gray-400 hover:text-[#e1bc47] transition-colors cursor-pointer">
                Inicio
              </a>
            </li>
            <li>
              <a href="#precios" @click.prevent="scrollToSection('precios')" class="text-gray-400 hover:text-[#e1bc47] transition-colors cursor-pointer">
                Precios
              </a>
            </li>
            <li>
              <a href="#faq" @click.prevent="scrollToSection('faq')" class="text-gray-400 hover:text-[#e1bc47] transition-colors cursor-pointer">
                FAQ
              </a>
            </li>
            <li>
              <RouterLink to="/register" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                Registrarse
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/login" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                Iniciar Sesión
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Recursos -->
        <div>
          <h3 class="text-lg font-bold text-[#e1bc47] mb-4">Recursos</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                Documentación
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                Estado del Sistema
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
                Términos de Servicio
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 4: Contacto -->
        <div>
          <h3 class="text-lg font-bold text-[#e1bc47] mb-4">Contacto</h3>
          <ul class="space-y-3">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-[#e1bc47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <a href="mailto:soporte@apexdb.com" class="text-[#e1bc47] hover:text-[#f0d470]">
                  soporte@apexdb.com
                </a>
              </div>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-[#e1bc47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p class="text-sm text-gray-400">Teléfono</p>
                <a href="tel:+573001234567" class="text-[#e1bc47] hover:text-[#f0d470]">
                  +57 300 123 4567
                </a>
              </div>
            </li>
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-[#e1bc47] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p class="text-sm text-gray-400">Ubicación</p>
                <p class="text-gray-300 text-sm">
                  Medellín, Colombia
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Separador -->
      <div class="border-t border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} ApexDB. Todos los derechos reservados.
          </p>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" class="text-gray-400 hover:text-[#e1bc47] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

// Función para hacer scroll al inicio
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Función para hacer scroll suave a las secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Altura del navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

