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
            product: ({context, event}) => event.product,
          }),
        },
        RESET_PRODUCT: {
          actions: assign({ product: (_) => null }),
        },
      },
    },
  },
});
export {productMachine};