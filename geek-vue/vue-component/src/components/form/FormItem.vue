<template>
  <div class="el-form-item"></div>
</template>

<script lang="ts">
import { emitter } from "@/emitter";
import Schema from "async-validator";
import { inject, onMounted, ref } from "vue";
import { FormItem, key } from "./type";

export default {
  name: "ElFormItem",
};
</script>
<script lang="ts" setup>
interface Props {
  lable?: string;
  prop?: string;
}

const props = withDefaults(defineProps<Props>(), {
  lable: "",
  prop: "",
});

const error = ref<string>("");

const formData = inject(key);

const o: FormItem = {
  validate,
};

defineExpose(o);

onMounted(() => {
  if (props.prop) {
    emitter.on("validate", () => {
      validate();
    });
    emitter.emit("addFormItem", o);
  }
});

function validate() {
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true });
  }

  const rules = formData.rules[props.prop];
  const value = formData.model[props.prop];
  const schema = new Schema({ [props.prop]: rules });
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message || "校验错误";
    } else {
      error.value = "";
    }
  });
}
</script>
<style lang="scss" scoped>
@import "../styles/mixin";
@include b(form-item) {
  margin-bottom: 22px;
  label {
    line-height: 1.2;
    margin-bottom: 5px;
    display: inline-block;
  }
  & .el-form-item {
    margin-bottom: 0;
  }
}
.error {
  color: red;
}
</style>
