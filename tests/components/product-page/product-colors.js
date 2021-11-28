import { render } from '@testing-library/vue';
import ProductColors from '@/components/product-page/ProductColors.vue';
import { createStore } from 'vuex';

test('should list the product colors', async () => {
  const store = createStore({
    state: {
      product: {
        item: {
          id: 1, name: 'foo', colors: [{ id: 1, code: 'black', label: 'noir' }],
        }
      }
    },
  });

  const { getByText } = render(ProductColors, {
    global: {
      plugins: [store]
    },
  });
  expect(getByText('noir'));
});
