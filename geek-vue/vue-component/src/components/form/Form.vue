<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "ElForm",
};
</script>
<script lang="ts" setup>
import { Rules } from "async-validator";
import { PropType, provide, ref } from "vue";
import { key, FormItem } from "./type";
import { emitter } from "@/emitter";

const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> },
});

provide(key, {
  model: props.model,
  rules: props.rules,
});

const items = ref<FormItem[]>([]);

emitter.on("addFormItem", (item) => {
  items.value.push(item);
});

function validate(cb: (isValidate: boolean) => void) {
  const tasks = items.value.map((item) => item.validate());
  Promise.all(tasks)
    .then(() => {
      cb(true);
    })
    .catch(() => cb(false));
}

defineExpose({
  validate,
});
</script>
<style lang="scss" scoped>
@import "../styles/mixin.scss";
@include b(form) {
  margin-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
