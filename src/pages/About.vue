<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

</script>

<template>
  <section class="p-8 max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">About Me</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="200">
      I'm Matej Arh, a passionate full-stack developer with a strong background in Laravel, Vue, and Python. I
      specialize in building scalable web applications, business platforms, and smart contracts using Solidity. My
      experience includes integrating Web3 technologies, developing document management tools, and creating dashboards
      for blockchain projects.
    </p>
    <p class="text-gray-700 dark:text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="250">
      I enjoy collaborating on open-source projects and sharing solutions with the developer community. My GitHub
      features a variety of apps, from cost calculation systems to Web3 dashboards and business websites.
    </p>
    <p class="text-gray-700 dark:text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="300">
      Outside of coding, I’m passionate about music production in Ableton and always exploring new frameworks and tools.
      Connect with me on
      <a href="https://www.linkedin.com/in/matej-arh-48902026/"
        class="text-blue-500 hover:underline inline-flex items-center" target="_blank">
        <IconLinkedIn class="w-4 h-4 mr-1" />
        LinkedIn

      </a>
      or check out my work on
      <a href="https://github.com/matejarh" class="text-blue-500 hover:underline inline-flex items-center" target="_blank">
      <IconGitHub class="w-4 h-4 mr-1" />
      GitHub</a>.
    </p>
  </section>
</template>
