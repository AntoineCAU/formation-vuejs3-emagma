import { render, fireEvent } from '@testing-library/vue';
import { createStore } from 'vuex';
import ProductComments from '@/components/product-page/ProductComments.vue';

test('should list the product comments and a form to post new one', async () => {
  const store = createStore({
    state: {
      product: {
        item: {
          comments: [
            { id: 1, author: 'Foo', comment: 'ABC', date: '2020-10-09T09:52:49', note: 2 },
            { id: 2, author: 'Bar', comment: 'DEF', date: '2020-04-26T12:31:17', note: 0 },
          ],
        }
      }
    },
  });

  const { getByText } = render(ProductComments, {
    global: {
      plugins: [store],
      stubs: ['font-awesome-icon'],
    },
  });

  getByText('Nom');
  getByText('Votre note');
  getByText('Commentaire');
  getByText('09/10/2020, 09:52, par Foo');
  getByText('26/04/2020, 12:31, par Bar');

  const button = getByText('Cacher le formulaire de commentaire');
  await fireEvent.click(button);

  getByText('Afficher le formulaire de commentaire');
});
