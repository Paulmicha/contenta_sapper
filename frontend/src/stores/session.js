import { readable } from "svelte/store";

const session = readable({ uid: 0, expire: 0, token: 0 }, () => {
  // TODO [wip] manage current logged in user session data.
  // @see src/server.js
  // + https://svelte.dev/docs#readable ?
  return () => {
    // TODO logout implementation ?
  };
});

export default session;
