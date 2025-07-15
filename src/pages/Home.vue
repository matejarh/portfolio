<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLaravel from '@/components/icons/IconLaravel.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconPython from '@/components/icons/IconPython.vue'
import IconSolidity from '@/components/icons/IconSolidity.vue'
import IconVue from '@/components/icons/IconVue.vue'
</script>

<template>
  <div>
    <Transition name="fade" appear>
      <section class="py-16 sm:py-24 px-4 max-w-screen-lg mx-auto text-center">
        <h1
          class="text-3xl sm:text-5xl font-bold text-blue-600 flex items-center justify-center"
          data-aos="fade-up"
        >
          Hi, I'm Matej Arh
          <span class="waving-hand ml-2" aria-label="waving hand">👋</span>
        </h1>

        <p
          class="mt-4 text-base sm:text-xl text-gray-700 dark:text-gray-300 flex flex-wrap justify-center items-center gap-x-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Full-Stack Developer ·
          <IconLaravel class="w-5 h-5" />
          Laravel ·
          <IconVue class="w-5 h-5" />
          Vue ·
          <IconPython class="w-5 h-5" />
          Python ·
          <IconSolidity class="w-5 h-5" />
          Solidity
        </p>

        <p
          class="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I specialize in building scalable web applications and smart contracts, with a strong focus on modern
          JavaScript frameworks and backend technologies.
        </p>

        <p
          class="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          My experience spans developing business platforms, document management tools, and Web3 dashboards.
        </p>

        <p
          class="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          I enjoy collaborating on open-source projects and sharing solutions on
          <a
            href="https://github.com/matejarh"
            class="text-blue-500 hover:underline inline-flex items-center ml-1"
            target="_blank"
          >
            <IconGitHub class="w-4 h-4 mr-1" />
            GitHub
          </a>
          . Connect with me on
          <a
            href="https://www.linkedin.com/in/matej-arh-48902026/"
            class="text-blue-500 hover:underline inline-flex items-center ml-1"
            target="_blank"
          >
            <IconLinkedIn class="w-4 h-4 mr-1" />
            LinkedIn
          </a>
          to discuss new ideas or opportunities!
        </p>

        <div class="mt-8" data-aos="fade-up" data-aos-delay="600">
          <router-link
            to="/projects"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-base sm:text-lg transition-colors duration-200"
          >
            View My Work
          </router-link>
        </div>
      </section>
    </Transition>
  </div>
</template>

<style scoped>
@keyframes waving-hand {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
.waving-hand {
  display: inline-block;
  animation: waving-hand 2s infinite;
  transform-origin: 70% 70%;
}
</style>
