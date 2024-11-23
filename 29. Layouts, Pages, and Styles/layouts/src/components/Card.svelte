<script>
  let { title, description, link } = $props();
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <a href="{link}" class="btn btn-primary">Go!</a>
    </div>
  </div>
</div>