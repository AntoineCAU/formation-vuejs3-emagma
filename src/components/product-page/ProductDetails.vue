<template>
  <div v-html="product.details" />
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
}
</script>
