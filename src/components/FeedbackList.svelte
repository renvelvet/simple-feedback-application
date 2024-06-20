<script>
  import { courseId, courses } from "../stores";
  import FeedbackItem from "./FeedbackItem.svelte";

  let currentCourseId;
  courseId.subscribe((value) => {
    currentCourseId = value;
  });
</script>

{#each $courses[currentCourseId].feedbacks as feedback}
  <div>
    <FeedbackItem item={feedback} />
  </div>
{/each}
