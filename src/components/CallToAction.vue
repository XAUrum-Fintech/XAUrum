<template>
  <section id="contact" class="py-20 bg-gradient-to-r from-secondary-800 to-secondary-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-white">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Modernize Your
            <span class="text-primary-400">Bullion Business?</span>
          </h2>

          <p class="text-xl text-secondary-300 mb-8">
            Get a personalised demo of OroB and see how it can transform your trading operations.
          </p>

          <!-- Contact Info -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-primary-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:contact@xaurum.in" class="text-lg text-secondary-200 hover:text-primary-400 transition-colors">contact@xaurum.in</a>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-primary-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+91875010921" class="text-lg text-secondary-200 hover:text-primary-400 transition-colors">+91 87501 0921</a>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-primary-400 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-lg text-secondary-200">
                Xaurum Fintech Pvt Ltd<br>
                161, Kalidas Road, Ramnagar<br>
                Coimbatore 641009
              </span>
            </div>
          </div>

          <!-- Benefits -->
          <div class="space-y-3">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-secondary-200">Free personalised demo</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-secondary-200">Dedicated onboarding support</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-secondary-200">Custom branding &amp; domain setup</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Contact Form -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-secondary-900 mb-2">
              Request a Demo
            </h3>
            <p class="text-secondary-600">
              Tell us about your business and we'll schedule a personalised walkthrough.
            </p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label for="firstName" class="block text-sm font-medium text-secondary-700 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-secondary-700 mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="+91 98765 43210"
                >
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-secondary-700 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="you@company.com"
              >
            </div>

            <div>
              <label for="company" class="block text-sm font-medium text-secondary-700 mb-1.5">
                Business Name
              </label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your bullion business"
              >
            </div>

            <div>
              <label for="interest" class="block text-sm font-medium text-secondary-700 mb-1.5">
                Interested Plan
              </label>
              <select
                id="interest"
                v-model="form.interest"
                class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                <option value="">Select a plan</option>
                <option value="lite">OroB Lite</option>
                <option value="plus">OroB Plus</option>
                <option value="max">OroB Max</option>
                <option value="custom">Custom quote</option>
                <option value="undecided">Not sure yet</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-secondary-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell us about your business needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Request</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-green-800 font-medium">
                Thank you! We'll get back to you shortly to schedule your demo.
              </span>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="showError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <span class="text-red-800 font-medium">
              Something went wrong. Please email us directly at
              <a href="mailto:contact@xaurum.in" class="underline">contact@xaurum.in</a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '',
  phone: '',
  email: '',
  company: '',
  interest: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// TODO: Replace with your Formspree form ID
// 1. Go to https://formspree.io and sign up (free)
// 2. Create a new form with email: contact@xaurum.in
// 3. Copy the form ID (e.g. "xpzvqkla") and paste it below
const FORMSPREE_ID = 'xlgpbyka'

const submitForm = async () => {
  isSubmitting.value = true
  showError.value = false

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.firstName,
        phone: form.phone,
        email: form.email,
        company: form.company,
        interest: form.interest,
        message: form.message,
      }),
    })

    if (res.ok) {
      Object.keys(form).forEach(key => { form[key] = '' })
      showSuccess.value = true
      setTimeout(() => { showSuccess.value = false }, 5000)
    } else {
      showError.value = true
    }
  } catch {
    showError.value = true
  }

  isSubmitting.value = false
}
</script>
