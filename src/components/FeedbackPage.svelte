<script>
  import { Link } from "svelte-routing";

  import FeedbackForm from "./FeedbackForm.svelte";
  import FeedbackList from "./FeedbackList.svelte";
  import FeedbackStats from "./FeedbackStats.svelte";
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />

  <!-- Home Button -->
  <Link to="/">
    <button class="button">Home</button>
  </Link>
</main>
