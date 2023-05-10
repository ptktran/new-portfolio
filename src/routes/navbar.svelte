<script>
  import { onMount } from 'svelte';
  let currentTheme = "";

  onMount(() => {
    const userPrefersDarkMode =  window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const userSetDarkMode = document.documentElement.className == "dark";
    
    if (!userSetDarkMode) {
      toggleTheme(userPrefersDarkMode ? "dark" : "light");
    }
  })

  const toggleTheme = (theme) => {
    document.documentElement.className = theme; 
    document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
    currentTheme = theme;
  }
</script>
<link rel="icon" type="image/png" href="favicon.ico" />
<nav class="navigation">
  <a href="/">
    <div class="logo-container">
      <h2 class="logo">peter tran</h2>
    </div>
  </a>
  <div id="links">
    <a href="/">about</a>
    <a href="/projects">projects</a>
    <a href="/photos">photos</a>
    <!-- <span class="theme-switcher" on:click={toggleTheme("light")}>🕹️</span> -->
    {#if currentTheme == "light"}
      <span class="theme-switcher" on:click={() => toggleTheme("dark")}><img src="icons/dark-icon.svg"></span>
    {:else}
      <span class="theme-switcher" on:click={() => toggleTheme("light")}><img src="icons/light-icon.svg"></span>
    {/if}
  </div>
</nav>