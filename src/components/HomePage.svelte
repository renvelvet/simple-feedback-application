<script>
  import { Link } from "svelte-routing";
  import { courseId, courses } from "../stores";
</script>

<main class="home-container">
  {#each $courses as course}
    <div class="course-card">
      <img class="img" src="img/image{course.id + 1}.jpg" alt="" />
      <h3 class="name">{course.name}</h3>
      <Link to="feedbackpage">
        <button class="button" on:click={courseId.set(course.id)}
          >Feedback</button
        >
      </Link>
    </div>
  {/each}
</main>
