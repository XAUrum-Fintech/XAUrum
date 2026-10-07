<template>
  <section id="contact" class="bg-[image:var(--gradient-cta)] text-white" aria-labelledby="contact-heading">
    <div class="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-x-[72px] gap-y-12 py-24">
      <div>
        <p class="eyebrow text-primary-400">CONTACT US</p>
        <h2 id="contact-heading" class="mt-3.5 text-[clamp(30px,3.4vw,40px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance text-white">Bring your bullion online under your own name.</h2>
        <p class="mt-[18px] max-w-[30rem] text-[17px] leading-[1.6] text-secondary-300">Tell us how you trade today. We'll show you orob Desk with your rates and your brand, or walk your accounts team through orob Sync.</p>
        <div class="mt-9 flex flex-col gap-3.5 text-[15px] text-secondary-300">
          <span>Business enquiries · <a :href="`mailto:${contactEmail}`" class="text-white hover:text-primary-200">{{ contactEmail }}</a></span>
          <span>Support · <a :href="`mailto:${supportEmail}`" class="text-white hover:text-primary-200">{{ supportEmail }}</a></span>
        </div>
      </div>

      <form
        v-if="!sent"
        ref="formEl"
        class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] content-start gap-4 rounded-2xl bg-white p-8 text-[var(--fg-1)] shadow-2xl"
        aria-label="Sales enquiry"
        data-testid="contact-form"
        @submit.prevent="submit"
      >
        <label v-for="field in textFields" :key="field.name" class="flex flex-col gap-1.5">
          <span class="text-[13px] font-semibold text-[var(--fg-2)]">{{ field.label }}</span>
          <input
            :ref="field.name === 'name' ? 'firstInput' : undefined"
            v-model.trim="form[field.name]"
            :name="field.name"
            :type="field.type"
            :autocomplete="field.autocomplete"
            :required="field.required"
            class="input"
          />
        </label>

        <fieldset class="col-span-full flex flex-col gap-2">
          <legend class="mb-2 text-[13px] font-semibold text-[var(--fg-2)]">Interested in</legend>
          <div class="flex flex-wrap gap-2">
            <label v-for="(option, index) in interestOptions" :key="option" class="cursor-pointer">
              <input
                :ref="index === 0 ? 'firstInterest' : undefined"
                v-model="form.interests"
                type="checkbox"
                name="interests"
                :value="option"
                class="peer sr-only"
              />
              <span class="block rounded-lg border border-[var(--border-1)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--fg-2)] transition-colors peer-checked:border-secondary-900 peer-checked:bg-secondary-900 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2">{{ option }}</span>
            </label>
          </div>
        </fieldset>

        <label class="col-span-full flex flex-col gap-1.5">
          <span class="text-[13px] font-semibold text-[var(--fg-2)]">How do you trade today?</span>
          <textarea v-model.trim="form.message" name="message" rows="3" class="input resize-y" />
        </label>

        <!-- Spam trap: hidden from people, often filled in by bots. -->
        <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label>Leave this field empty <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" /></label>
        </div>

        <button
          type="submit"
          class="col-span-full rounded-lg bg-secondary-900 p-3.5 text-center text-[15px] font-bold text-white shadow-lg transition-colors hover:bg-secondary-800 disabled:cursor-wait disabled:opacity-80"
          :disabled="sending"
          :aria-busy="sending ? 'true' : 'false'"
        >Contact us</button>

        <p v-if="failed" class="col-span-full text-sm text-[#b91c1c]" role="alert" data-testid="contact-error">
          Your enquiry didn't go through. Please try again or email <a :href="`mailto:${contactEmail}`" class="font-semibold underline">{{ contactEmail }}</a>.
        </p>
      </form>

      <div v-else class="rounded-2xl bg-white p-10 text-[var(--fg-1)] shadow-2xl" data-testid="contact-success">
        <h3 ref="thanksHeading" tabindex="-1" class="text-2xl font-bold tracking-[-0.02em] focus:outline-none">Thank you.</h3>
        <p class="mt-2.5 text-base leading-[1.6] text-[var(--fg-3)]">Our team will reply from {{ contactEmail }}.</p>
        <button type="button" class="mt-5 inline-block text-sm font-bold text-primary-700 hover:text-primary-800" @click="reset">Send another enquiry</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, reactive, ref, useTemplateRef, watch } from 'vue'
import { contactEmail, supportEmail } from '@/data/contactSettings'
import { interestOptions, sendEnquiry } from '@/lib/enquiry'

const textFields = [
  { name: 'name', label: 'Your name', type: 'text', autocomplete: 'name', required: true },
  { name: 'business', label: 'Business name', type: 'text', autocomplete: 'organization', required: true },
  { name: 'email', label: 'Work email', type: 'email', autocomplete: 'email', required: true },
  { name: 'city', label: 'City', type: 'text', autocomplete: 'address-level2', required: false },
]

function emptyForm() {
  return { name: '', business: '', email: '', city: '', interests: ['orob Desk'], message: '', website: '' }
}

const form = reactive(emptyForm())
const sent = ref(false)
const sending = ref(false)
const failed = ref(false)
const formEl = useTemplateRef('formEl')
const firstInterest = useTemplateRef('firstInterest')
const firstInput = useTemplateRef('firstInput')
const thanksHeading = useTemplateRef('thanksHeading')

// At least one interest is required; the browser reports it like any other invalid field.
watch(
  [() => form.interests.length, firstInterest],
  ([count, checkbox]) => {
    const input = Array.isArray(checkbox) ? checkbox[0] : checkbox
    input?.setCustomValidity(count ? '' : 'Choose at least one product.')
  },
  { immediate: true, flush: 'post' },
)

async function showThanks() {
  sent.value = true
  await nextTick()
  thanksHeading.value?.focus()
}

async function submit() {
  if (sending.value || !formEl.value?.reportValidity()) return
  failed.value = false

  if (form.website) {
    await showThanks()
    return
  }

  sending.value = true
  try {
    await sendEnquiry({
      name: form.name,
      business: form.business,
      email: form.email,
      city: form.city,
      interests: [...form.interests],
      message: form.message,
    })
    await showThanks()
  } catch {
    failed.value = true
  } finally {
    sending.value = false
  }
}

async function reset() {
  Object.assign(form, emptyForm())
  failed.value = false
  sent.value = false
  await nextTick()
  const input = Array.isArray(firstInput.value) ? firstInput.value[0] : firstInput.value
  input?.focus()
}
</script>

<style scoped>
@reference "../style.css";

.input {
  @apply rounded-lg border border-[var(--border-1)] px-3.5 py-3 text-[15px] focus:border-transparent focus:ring-2 focus:ring-primary-500 focus:outline-none;
}
</style>
