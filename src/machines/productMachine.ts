import { createMachine, assign } from 'xstate';

const productMachine = createMachine({
  id: 'productMachine',
  initial: 'active',
  context: {
    product: null,
  },
  states: {
    active: {
      on: {
        SET_PRODUCT: {
          actions: assign({
            product: ({event}) => event.product,
          }),
        },
        RESET_PRODUCT: {
          actions: assign({ product: () => null }),
        },
      },
    },
  },
});
export {productMachine};