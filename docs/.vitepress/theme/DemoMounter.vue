<script setup>
import { onMounted, onUpdated } from "vue";
import { mountAll } from "./mount";

onMounted(mountAll);
onUpdated(mountAll);
</script>

<template>
  <span hidden aria-hidden="true"></span>
</template>