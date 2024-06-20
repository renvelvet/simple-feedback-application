<script>
  import { Route, Router } from "svelte-routing";
  import HomePage from "./components/HomePage.svelte";
  import FeedbackPage from "./components/FeedbackPage.svelte";

  export let url = "";
</script>

<div class="app-container">
  <Router {url}>
    <Route path="feedbackpage">
      <FeedbackPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Router>
</div>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
