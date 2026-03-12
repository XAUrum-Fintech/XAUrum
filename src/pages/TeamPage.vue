<template>
  <main class="pt-20 pb-20 bg-gradient-to-br from-secondary-50 to-primary-50 min-h-screen">
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Our Team</h1>
        <p class="text-lg text-secondary-600 max-w-2xl mx-auto">
          The people behind Xaurum Fintech and OroB — bringing together expertise in technology,
          finance, and the Indian bullion industry.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="member in team"
          :key="member.name"
          class="bg-white rounded-2xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="p-8 flex flex-col items-center text-center">
            <!-- Photo placeholder -->
            <div class="w-28 h-28 rounded-full bg-gradient-to-br flex items-center justify-center mb-6 overflow-hidden"
              :class="member.gradient"
            >
              <!-- Replace src with actual photo path when available -->
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="w-full h-full object-cover"
              />
              <span v-else class="text-white text-3xl font-bold">{{ member.initials }}</span>
            </div>

            <h2 class="text-xl font-bold text-secondary-900 mb-1">{{ member.name }}</h2>
            <p v-if="member.role" class="text-sm text-primary-600 font-medium mb-3">{{ member.role }}</p>
            <p class="text-secondary-600 text-sm leading-relaxed">{{ member.bio }}</p>

            <!-- Links -->
            <div v-if="member.links && member.links.length" class="flex space-x-3 mt-4">
              <a
                v-for="link in member.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-secondary-400 hover:text-primary-600 transition-colors"
              >
                <!-- LinkedIn icon -->
                <svg v-if="link.type === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <!-- Twitter/X icon -->
                <svg v-if="link.type === 'twitter'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <!-- Website icon -->
                <svg v-if="link.type === 'website'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Join us note -->
      <div class="mt-16 text-center">
        <p class="text-secondary-500 text-sm">
          Photos and bios can be updated — reach out to us at
          <a href="mailto:contact@xaurum.in" class="text-primary-600 hover:text-primary-700 font-medium">contact@xaurum.in</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const team = reactive([
  {
    name: 'Hariharan Ragunathan',
    initials: 'HR',
    role: '', // Add role when available
    bio: 'Building the vision to modernize India\'s bullion trading infrastructure with technology.',
    photo: null, // Replace with: '/team/hariharan.jpg'
    gradient: 'from-primary-500 to-primary-700',
    links: [
      // { type: 'linkedin', url: 'https://linkedin.com/in/...' },
    ],
  },
  {
    name: 'Hariprasad Nagaraj',
    initials: 'HN',
    role: '', // Add role when available
    bio: 'Building the engineering backbone of OroB with an eye for user-centric design and scalable architecture.',
    photo: null, // Replace with: '/team/hariprasad.jpg'
    gradient: 'from-secondary-600 to-secondary-800',
    links: [
      // { type: 'linkedin', url: 'https://linkedin.com/in/...' },
    ],
  },
  {
    name: 'Radhakrishnan C',
    initials: 'RK',
    role: '', // Add role when available
    bio: 'Driving the vision to with deep domain expertise in bullion trading and financial operations.',
    photo: null, // Replace with: '/team/radhakrishnan.jpg'
    gradient: 'from-primary-600 to-primary-800',
    links: [
      // { type: 'linkedin', url: 'https://linkedin.com/in/...' },
    ],
  },
  {
    name: 'Reghunathan EP',
    initials: 'RN',
    role: '', // Add role when available
    bio: 'Bringing deep financial expertise and compliance knowledge to ensure OroB meets the highest standards of security and regulatory adherence.',
    photo: null, // Replace with: '/team/reghunathan.jpg'
    gradient: 'from-secondary-500 to-secondary-700',
    links: [
      // { type: 'linkedin', url: 'https://linkedin.com/in/...' },
    ],
  },
])
</script>
