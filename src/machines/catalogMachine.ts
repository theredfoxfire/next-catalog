import { createMachine, assign } from 'xstate';

const catalogMachine = createMachine({
  id: 'catalogMachine',
  initial: 'active',
  context: {
    products: [],
  },
  states: {
    active: {
      on: {
        SET_PRODUCTS: {
          actions: assign({
            products: ({event}) => event.products,
          }),
        },
        RESET_PRODUCTS: {
          actions: assign({ products: () => [] }),
        },
      },
    },
  },
});
export {catalogMachine};