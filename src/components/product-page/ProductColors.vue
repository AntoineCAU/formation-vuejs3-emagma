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

<script>
import { ref } from 'vue';

export default {
  props: {
    product: { type: Object, required: true },
  },
  setup(props, { emit }) {
    const color = ref();
    const setColor = (value) => {
      color.value = value;
      const selectedColor = props.product.colors.find((el) => el.id === value);
      emit('setQtyMax', selectedColor?.qtyInStock);
    }

    return {
      setColor,
    };
  },
}
</script>
