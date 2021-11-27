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
export default {
  data() {
    return {
      color: null,
    };
  },
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    setColor(value) {
      this.color = value;
      this.$emit('setQtyMax', this.product.colors.find((el) => el.id === value).qtyInStock);
    }
  },
}
</script>
