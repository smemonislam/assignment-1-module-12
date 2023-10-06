<script setup>
import { useAuth } from "../stores/auth";

const auth = useAuth();
</script>

<template>
  <div
    class="bg-slate-500 h-screen flex justify-center items-center p-4 sm:ml-64"
  >
    <div
      class="p-5 md:p-10 text-center bg-white bg-opacity-60 border-slate-700 border-2 border-dashed rounded-lg"
    >
      <h1 class="text-center text-4xl font-bold">Welcome To Admin Panel</h1>
      <br />
      <h1 class="font-bold">
        Your Email is :
        <span class="font-normal italic">{{ auth.user.newUserEmail }}</span>
      </h1>
    </div>
  </div>
</template>

<style scoped></style>
