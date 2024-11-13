import { createMachine, type StateFrom, type EventFrom } from 'xstate';

export const productMachine = createMachine({
  id: 'product',
  initial: 'idle',
  states: {
    idle: {
      on: { FETCH: 'loading' }
    },
    loading: {
      on: {
        RESOLVE: 'success',
        REJECT: 'error'
      }
    },
    success: {},
    error: {}
  }
});

export type ProductMachineState = StateFrom<typeof productMachine>;
export type ProductMachineEvent = EventFrom<typeof productMachine>;
