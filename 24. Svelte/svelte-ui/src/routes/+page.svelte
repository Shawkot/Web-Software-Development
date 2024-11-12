<script>
  import Hello from "$lib/components/Hello.svelte";
  import QuestionAndAnswer from "$lib/components/QuestionAndAnswer.svelte";
  import Counter from "../lib/components/Counter.svelte";

  let qa = {
    question: "Can this work?",
    answer: "Yes it can!",
  };

</script>
<Hello />
<!-- example of spread and property values -->
<QuestionAndAnswer {...qa} />
<Counter />
<!-- <QuestionAndAnswer question="What's next?" answer="Wait and see" /> -->
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
