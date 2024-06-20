<script>
  import { toast } from "@zerodevx/svelte-toast";
  import Icon from "@iconify/svelte";
  import { courseId, courses } from "../stores";

  export let item;

  let currentCourseId;
  courseId.subscribe((value) => {
    currentCourseId = value;
  });

  const handleDelete = (itemId) => {
    courses.update((courseArr) => {
      //delete feedbacks
      let newFeedbacks = courseArr[currentCourseId].feedbacks.filter(
        (feedback) => itemId !== feedback.id,
      );

      //change feedbacks item
      courseArr[currentCourseId] = {
        ...courseArr[currentCourseId],
        feedbacks: [...newFeedbacks],
      };

      return courseArr;
    });

    toast.push("Feedback Deleted!", {
      theme: {
        "--toastBackground": "#F56565",
        "--toastBarBackground": "#C53030",
      },
    });
  };
</script>

<div class="card">
  <div class="num-display"><span class="rating-text">{item.rating}</span></div>
  <button class="delete" on:click={() => handleDelete(item.id)}
    ><Icon width="20px" icon="ant-design:delete-outlined" /></button
  >
  <p class="text-display">{item.text}</p>
</div>
