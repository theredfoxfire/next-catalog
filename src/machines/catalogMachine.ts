import { createMachine, assign } from 'xstate';

const catalogMachine = createMachine({
  id: 'catalogMachine',
  initial: 'active',
  context: {
    products: null,
  },
  states: {
    active: {
      on: {
        SET_PRODUCTS: {
          actions: assign({
            products: ({context, event}) => event.products,
          }),
        },
        RESET_PRODUCTS: {
          actions: assign({ products: (_) => null }),
        },
      },
    },
  },
});
export {catalogMachine};