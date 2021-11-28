<template>
  <form class="box mt-2" @submit.prevent="submit" @reset="cancel">
    <div class="notification is-danger" v-if="error">{{ error }}</div>
    <div class="field">
      <label class="label">{{ $t('name') }}</label>
      <div class="control">
        <input class="input" type="text" placeholder="John Doe" v-model="comment.author">
      </div>
    </div>

    <div class="control is-flex">
      <label class="label">{{ $t('stars') }}</label>
      <div class="ml-2">
        <font-awesome-icon
          icon="star"
          v-for="i in [1, 2, 3, 4, 5]" :key="i"
          :class="['radio', { 'has-text-warning': comment.note >= i }]"
          :value="i"
          @click="comment.note = i"
        ></font-awesome-icon>
      </div>
    </div>

    <div class="field">
      <label class="label">{{ $t('comment') }}</label>
      <div class="control">
        <textarea class="textarea" v-model="comment.comment"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" type="submit">{{ $t('submit') }}</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" type="reset">{{ $t('cancel') }}</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore();
const product = computed(() => store.state.product.item);
const emits = defineEmits(['hide']);

const emptyComment = { comment: '', note: 5, author: '' };
let comment = reactive(emptyComment);
const error = ref(null);
const { t } = useI18n();

const submit = async () => {
  error.value = '';
  if (!comment.author || !comment.comment) {
    error.value = t('pleaseFillTheForm');
    return;
  }

  comment.date = new Date();

  try {
    await store.dispatch('product/addComment', comment);
    emits('hide');
  } catch (e) {
    error.value = e;
  }
};

const cancel = () => {
  comment = emptyComment;
  emits('hide');
};
</script>
