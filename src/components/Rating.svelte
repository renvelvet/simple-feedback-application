<script>
  import { createEventDispatcher } from "svelte";

  let selected = 1;

  const dispatch = createEventDispatcher();

  const onChange = (event) => {
    selected = event.currentTarget.value;
    dispatch("rating-select", selected);
  };

  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
</script>

<ul class="rating">
  {#each range(1, 10) as i}
    <li>
      <input
        type="radio"
        id="num{i}"
        value={i}
        on:change={onChange}
        checked={selected === i}
      />
      <label for="num{i}">{i}</label>
    </li>
  {/each}
</ul>
