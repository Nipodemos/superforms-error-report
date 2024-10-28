<script lang="ts">
  import { superForm } from "sveltekit-superforms";
  import SuperDebug from "sveltekit-superforms";
  export let data;

  const { form, enhance } = superForm(data.form);
</script>

<SuperDebug data={$form} />

<!-- Add to the form element: -->
<form method="POST" use:enhance>
  <label for="name">Name</label>
  <input type="text" name="name" />

  <label for="email">E-mail</label>
  <input type="email" name="email" />

  <div><button>Submit</button></div>
</form>
