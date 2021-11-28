<template>
  <div>
    <select name="color" @change="setColor($event.target.value)">
      <option>Couleur...</option>
      <option
        v-for="color in product.colors"
        :key="color.id"
        :value="color.id"
      >{{ color.label }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits(['setQtyMax']);
const color = ref();

const setColor = (value) => {
  color.value = value;
  emit('setQtyMax', props.product.colors.find((el) => el.id === value).qtyInStock);
}
</script>
