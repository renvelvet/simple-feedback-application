<script>
  import { courseId, courses } from "../stores";
  import Rating from "./Rating.svelte";
  let currentCourseId;
  let count;

  courseId.subscribe((value) => {
    currentCourseId = value;
  });
  courses.subscribe((courses) => {
    count = courses[currentCourseId].feedbacks.length;
  });
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <Rating />
</div>
