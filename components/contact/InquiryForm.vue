<template>
  <form @submit.prevent="submitForm">
    <!-- Name -->
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Your Name</label
      >
      <input
        v-model="form.name"
        type="text"
        id="name"
        class="mt-1 block px-2 py-4 w-full sm:text-sm"
        placeholder="Enter your full name"
      />
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Your Email</label
      >
      <input
        v-model="form.email"
        type="email"
        id="email"
        class="mt-1 block px-2 py-4 w-full sm:text-sm"
        placeholder="Enter your email address"
      />
    </div>

    <!-- Project Type -->
    <div class="mb-4">
      <label for="projectType" class="block text-sm font-medium text-gray-700"
        >Project Type</label
      >
      <select
        v-model="form.projectType"
        id="projectType"
        class="mt-1 block px-2 py-4 w-full sm:text-sm"
      >
        <option value="">Select a project type</option>
        <option value="webDesign">Web Design</option>
        <option value="webDevelopment">Web Development</option>
        <option value="uiuxDesign">UI/UX Design</option>
        <option value="mobileApp">Mobile App</option>
        <option value="other">Other</option>
      </select>
    </div>

    <!-- Budget -->
    <div class="mb-4">
      <label for="budget" class="block text-sm font-medium text-gray-700"
        >Estimated Budget</label
      >
      <select
        v-model="form.budget"
        id="budget"
        class="mt-1 block px-2 py-4 w-full sm:text-sm"
      >
        <option value="">Select your budget range</option>
        <option value="lessThan1000">Less than $1,000</option>
        <option value="1000to5000">$1,000 - $5,000</option>
        <option value="5000to10000">$5,000 - $10,000</option>
        <option value="moreThan10000">More than $10,000</option>
      </select>
    </div>

    <!-- Timeline -->
    <div class="mb-4">
      <label for="timeline" class="block text-sm font-medium text-gray-700"
        >Project Timeline</label
      >
      <select
        v-model="form.timeline"
        id="timeline"
        class="mt-1 block px-2 py-4 w-full sm:text-sm"
      >
        <option value="">Select timeline</option>
        <option value="asap">ASAP</option>
        <option value="1month">Within 1 month</option>
        <option value="3months">1-3 months</option>
        <option value="flexible">Flexible</option>
      </select>
    </div>

    <!-- Message -->
    <div class="mb-4">
      <label for="message" class="block text-sm font-medium text-gray-700"
        >Message</label
      >
      <textarea
        v-model="form.message"
        id="message"
        rows="5"
        class="mt-1 block px-2 py-4 w-full sm:text-sm"
        placeholder="Provide more details about your project"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full bg-black text-white py-8 px-4 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Submit Inquiry
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
});

const submitForm = () => {
  console.log("Inquiry submitted:", form.value);
  alert("Thank you for your inquiry! I will get back to you soon.");
};
</script>
