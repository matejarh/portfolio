<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import Logo from '@/assets/logo.svg'
import polygrid from '@/assets/poly-grid.svg'
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileNavOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

const showHeader = ref(false)
const showMain = ref(false)

onMounted(() => {
  setTimeout(() => {
    //mobileNavOpen.value = false
    showHeader.value = true
  }, 200) // Close mobile nav on mount
  setTimeout(() => {
    showMain.value = true
  }, 400) // matches your .fade transition duration
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white relative">
    <!-- Polygrid background overlay -->
    <img
      :src="polygrid"
      alt="Background grid"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30 dark:opacity-20"
      style="z-index:0;"
    />

    <Transition name="slide-top" appear>
      <header v-if="showHeader" class="bg-white/50 dark:bg-gray-800/50 shadow sticky top-0 z-10 backdrop-blur-md dark:backdrop-blur-md">
        <nav class="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <router-link to="/" class="flex items-center space-x-2">
            <img :src="Logo" alt="Logo" class="w-8 h-8">
            <span class="text-xl font-bold">Matej Arh</span>
          </router-link>

          <div class="hidden md:flex items-center space-x-6">
            <router-link to="/" class="hover:underline">Home</router-link>
            <router-link to="/projects" class="hover:underline">Projects</router-link>
            <router-link to="/about" class="hover:underline">About</router-link>
            <router-link to="/contact" class="hover:underline">Contact</router-link>
            <button @click="toggleTheme" class="hover:text-blue-500">
              <component :is="isDark ? SunIcon : MoonIcon" class="w-5 h-5" />
            </button>
          </div>

          <!-- Mobile toggle -->
          <button class="md:hidden" @click="mobileNavOpen = !mobileNavOpen">
            <component :is="mobileNavOpen ? XMarkIcon : Bars3Icon" class="w-6 h-6" />
          </button>
        </nav>

        <!-- Mobile Nav -->
        <div v-if="mobileNavOpen" class="md:hidden px-6 pb-4 space-y-2">
          <router-link to="/" class="block hover:underline" @click="mobileNavOpen = false">Home</router-link>
          <router-link to="/projects" class="block hover:underline" @click="mobileNavOpen = false">Projects</router-link>
          <router-link to="/about" class="block hover:underline" @click="mobileNavOpen = false">About</router-link>
          <router-link to="/contact" class="block hover:underline" @click="mobileNavOpen = false">Contact</router-link>
          <button @click="toggleTheme" class="mt-2 flex items-center gap-2 hover:text-blue-500">
            <component :is="isDark ? SunIcon : MoonIcon" class="w-5 h-5" />
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </header>
    </Transition>

    <Transition name="fade" appear>
      <main v-if="showMain" class="max-w-screen-xl mx-auto px-6 py-10 sm:px-10 relative" style="z-index:1;">
        <router-view />
      </main>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Slide from top transition for header */
.slide-top-enter-active, .slide-top-leave-active {
  transition: all 0.4s cubic-bezier(.55,0,.1,1);
}
.slide-top-enter-from, .slide-top-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
</style>