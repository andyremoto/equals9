<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark text-white py-16">
      <div class="container-custom">
        <h1 class="text-center mb-8">{{ $t('contact.title') }}</h1>
        <p class="text-xl text-center max-w-3xl mx-auto">
          {{ $t('contact.description') }}
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold mb-6">{{ $t('contact.send_message') }}</h2>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 mb-2">{{ $t('contact.your_name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('contact.name_placeholder')"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2">{{ $t('contact.email_address') }}</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('contact.email_placeholder')"
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="subject" class="block text-gray-700 mb-2">{{ $t('contact.subject') }}</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('contact.subject_placeholder')"
                  required
                >
              </div>
              
              <div class="mb-6">
                <label for="message" class="block text-gray-700 mb-2">{{ $t('contact.your_message') }}</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="6" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  :placeholder="$t('contact.message_placeholder')"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary w-full"
                :disabled="submitting"
              >
                {{ submitting ? $t('contact.sending') : $t('contact.send') }}
              </button>
              
              <p v-if="formSubmitted" class="mt-4 text-green-600 font-medium">
                {{ $t('contact.thank_you') }}
              </p>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div>
         
            <h2 class="text-2xl font-bold mb-6">{{ $t('contact.get_in_touch') }}</h2>
            
            <div class="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 class="font-bold text-xl mb-4">{{ $t('contact.contact_info') }}</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium">Email</h4>
                    <a href="mailto:contato@equals9.com" class="text-primary hover:underline">contato@equals9.com</a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium">{{ $t('contact.support') }}</h4>
                    <p>{{ $t('contact.support_description') }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="bg-gray-100 p-6 rounded-lg">
              <h3 class="font-bold text-xl mb-4">{{ $t('contact.connect') }}</h3>
              <p class="mb-6">{{ $t('contact.social_media') }}</p>
              
              <div class="contact-social-icons">
                <SocialIcons variant="solid" />
              </div>
            </div>
          </div>
        </div>
        
        <!-- FAQ Section -->
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-center mb-8">{{ $t('contact.faq_title') }}</h2>
          
          <div class="max-w-3xl mx-auto space-y-6">
            <div class="bg-gray-100 p-6 rounded-lg">
              <h3 class="font-bold text-xl mb-2">{{ $t('contact.faq1_question') }}</h3>
              <p>
                {{ $t('contact.faq1_answer') }}
              </p>
            </div>
            
            <div class="bg-gray-100 p-6 rounded-lg">
              <h3 class="font-bold text-xl mb-2">{{ $t('contact.faq2_question') }}</h3>
              <p>
                {{ $t('contact.faq2_answer') }}
              </p>
            </div>
            
            <div class="bg-gray-100 p-6 rounded-lg">
              <h3 class="font-bold text-xl mb-2">{{ $t('contact.faq3_question') }}</h3>
              <p>
                {{ $t('contact.faq3_answer') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SocialIcons from '../components/SocialIcons.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const formSubmitted = ref(false)

const submitForm = async () => {
  submitting.value = true
  
  // In a real implementation, you would send the form data to your backend
  // For this demo, we'll simulate a successful submission after a delay
  setTimeout(() => {
    formSubmitted.value = true
    submitting.value = false
    
    // Reset form after submission
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false
    }, 5000)
  }, 1500)
}
</script>

<style scoped>
.contact-social-icons :deep(.p-3) {
  background-color: #0074E4 !important;
}

.contact-social-icons :deep(img) {
  filter: brightness(0) invert(1) !important;
}
</style>
