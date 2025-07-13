<script setup>
import { ref } from 'vue';

const projects = [
  {
    name: 'Kalkulacija App',
    desc: 'A Laravel + Vue application for managing product cost calculations, ideal for small businesses needing to track expenses and pricing.',
    link: 'https://github.com/matejarh/kalkulacija-app',
    delay: 100,
  },
  {
    name: 'Uploader App',
    desc: 'A Laravel + Vue app for accounting firms where clients upload documents per company. Includes user roles, 2FA, and admin controls.',
    link: 'https://github.com/matejarh/uploader-app',
    delay: 200,
  },
  {
    name: 'Web3 Solutions App',
    desc: 'A Web3 dashboard built with Laravel and Vue, integrating blockchain features and wallet interactions.',
    link: 'https://app.web3-solutions.eu/',
    delay: 300,
  },
  {
    name: 'Čistilnica Suzi',
    desc: 'A business website for a local dry cleaner (Čistilnica Suzi), built with Laravel and Inertia.js.',
    link: 'https://github.com/matejarh/cistilnica-suzi.si',
    delay: 400,
  },
  {
    name: 'Mountain View Apartments',
    desc: 'A modern multi-language Laravel + Vue site for promoting mountain apartments and handling inquiries, ratings and booking.',
    link: 'https://github.com/matejarh/mountain-view-apartments',
    delay: 500,
  },
]
</script>

<template>
  <section class="py-8">
    <h2 class="text-3xl font-bold mb-6" data-aos="fade-up">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.name"
        class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md dark:backdrop-blur-md p-4 rounded shadow"
         data-aos="fade-up" :data-aos-delay="project.delay"
      >
        <h3 class="text-xl font-semibold">{{ project.name }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-2">{{ project.desc }}</p>
        <a
          :href="project.link"
          class="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener"
        >
          View Project →
        </a>
      </div>
    </div>
  </section>
</template>
