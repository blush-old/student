<template>
  <div>
    <h1>组件1</h1>
  </div>
</template>
<script lang="ts" setup>
import bus from "@/bus";

bus.on("changeKey", (e) => {
  console.log(e);
});
</script>
