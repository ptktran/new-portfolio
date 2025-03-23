<script>
  import { fly } from 'svelte/transition';
</script>
<link rel="stylesheet" href="styles/projects.css">
  <main in:fly="{{ y: 20, duration: 500}}">
    <h2 id="title">My Projects</h2>
    <div class="project-card-container">
      <a href="https://nhacoffee.com/" target="_blank">
        <div class="project-card nha">
          <a>nha cafe</a>
          <p>
            main website for a coffee shop in Halifax, personally designed and built by me.
          </p>
          <div class="language">nextjs · tailwind css · posthog</div>
        </div>
      </a>
      <a href="https://github.com/ptktran/Streamify" target="_blank">
        <div class="project-card streamify">
          <a>streamify</a>
          <p>
            a web app for watching youtube videos together with your friends, in sync.
          </p>
          <div class="language">reactjs · tailwind css · nodejs · express · websockets</div>
        </div>
      </a>
      <a href="https://github.com/ptktran/cps630-labs" target="_blank">
        <div class="project-card onlineshopping">
          <a>online shopping site</a>
          <p>
            a full stack shopping website with a database, login system, products page, and working cart.
          </p>
          <div class="language">angular · bootstrap · node.js · express · mysql</div>
        </div>
      </a>
      <a href="https://github.com/ptktran/spotifystats" target="_blank">
        <div class="project-card spotifyvisualizer">
          <a>spotify stats</a>
          <p>
            a web app that showcases your spotify activity including favourite genres, songs,
            and artists.
          </p>
          <div class="language">reactjs · tailwind css</div>
        </div>
      </a>

      <a href="https://github.com/ptktran/ptktran.github.io" target="_blank">
        <div class="project-card personalweb">
          <a>personal website</a>
          <p>
            a personal website that showcases general information about
            myself, my projects, and photographs i have taken
          </p>
          <div class="language">sveltekit · css</div>
        </div>
      </a>

      <div class="project-card startupweb">
        <a>startup website</a>
        <p>a landing page for a startup created during an apprenticeship</p>
        <div class="language">html · css</div>
      </div>

    </div>
  </main>