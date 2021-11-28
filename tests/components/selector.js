import { render } from '@testing-library/vue';
import Selector from '@/components/Selector.vue';

test('should display a default option when a default slot provided', async () => {
  const { getByText } = render(Selector, {
    props: {
      options: [{ id: 1, label: 'Foo' }, { id: 2, label: 'Bar' }],
    },
    slots: {
      default: '<option>Please select</option>',
    },
  });
  expect(getByText('Please select'));
});
