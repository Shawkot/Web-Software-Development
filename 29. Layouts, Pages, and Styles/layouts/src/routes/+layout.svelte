<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import Theme from "../components/Theme.svelte";
</script>

<Navbar />


<main class="container mx-auto">
  <slot />
</main>

<Footer />

