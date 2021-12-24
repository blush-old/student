<template>
  <div>
    <button @click="btn">View2</button>
    <View1></View1>
  </div>
</template>
<script lang="ts" setup>
import bus from "@/bus";
import View1 from "./View1.vue";

const btn = () => {
  bus.emit("changeKey", { a: "aaaaa" });
};
</script>
