import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="stylesheet" href="/src/styles/projects.css">
  <main><h2 id="title">Ongoing &amp; Completed Projects</h2>
    <div class="project-card-container"><a href="https://github.com/ptktran/cps630-labs" target="_blank"><div class="project-card onlineshopping"><a>online shopping site</a>
          <p>a full stack shopping website with a database, login system, products page, and working cart.
          </p>
          <div class="language">angular, bootstrap, node.js, express, mysql</div></div></a>
      <a href="https://github.com/ptktran/spotify-user-visualizer" target="_blank"><div class="project-card spotifyvisualizer"><a>spotify biovisualizer</a>
          <p>a web app that generates visually appealing cards highlighting
            users&#39; spotify activity including their favourite genres, songs,
            and artists.
          </p>
          <div class="language">reactjs, tailwindcss</div></div></a>

      <a href="https://github.com/ptktran/weather-outfitter" target="_blank"><div class="project-card weatheroutfitter"><a>weather outfitter (ongoing)</a>
          <p>a simple app that informs the weather and suggests
            weather-appropriate outfits
          </p>
          <div class="language">svelte, tailwindcss</div></div></a>

      <a href="https://github.com/ptktran/ptktran.github.io" target="_blank"><div class="project-card personalweb"><a>personal website</a>
          <p>a personal website that showcases general information about
            myself, my projects, and photographs i have taken
          </p>
          <div class="language">svelte, css</div></div></a>

      <div class="project-card startupweb"><a>startup website</a>
        <p>a landing page for a startup created during an apprenticeship</p>
        <div class="language">html, css</div></div></div></main>`;
});
export {
  Page as default
};