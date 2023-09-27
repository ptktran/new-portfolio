<script>
  import { onMount } from 'svelte';
  let currentTheme = "";

  onMount(() => {
    const userPrefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const userSetDarkMode = document.documentElement.className == "dark";

    // Read the "siteTheme" cookie
    const savedTheme = getCookie("siteTheme");

    if (savedTheme) {
      // If the cookie exists, use it as the theme
      toggleTheme(savedTheme);
    } else if (!userSetDarkMode) {
      // If the cookie doesn't exist and the user hasn't manually set a theme, use their preference
      toggleTheme(userPrefersDarkMode ? "dark" : "light");
    }
  });

  const toggleTheme = (theme) => {
    document.documentElement.className = theme;
    // Update the "siteTheme" cookie with the chosen theme
    setCookie("siteTheme", theme, 31536000);
    currentTheme = theme;
  }

  // Helper function to get a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  // Helper function to set a cookie with a given name, value, and max age
  function setCookie(name, value, maxAge) {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
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