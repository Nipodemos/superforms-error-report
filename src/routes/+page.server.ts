import { superValidate } from "sveltekit-superforms";
import { arktype } from "sveltekit-superforms/adapters";
import { type } from "arktype";

// Define outside the load function so the adapter can be cached
const schema = type({
  name: "string",
  email: "string.email",
});

// Defaults should also be defined outside the load function
const defaults = { name: "Hello world!", email: "" };

export const load = async () => {
  // Arktype requires explicit default values for now
  const form = await superValidate(arktype(schema, { defaults }));

  // Always return { form } in load functions
  return { form };
};
