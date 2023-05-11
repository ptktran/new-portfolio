<script>
  import { fly } from 'svelte/transition';
  import SpotifyWebApi from 'spotify-web-api-js';
  import { onMount } from 'svelte';
  import Spotify from '../lib/spotify.svelte';

  const spotifyApi = new SpotifyWebApi({
    clientId: 'fef82cf191c541929a78fe3860c01272',
    clientSecret: '5bb050b8f77a4f8781bbf1e3cc3b1742',
  });

  let track = null;

  onMount(async () => {
    const { access_token } = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(access_token);
    const response = await spotifyApi.getMyCurrentPlayingTrack();
    track = response.item;
  });
</script>

<link rel="stylesheet" href="styles/index.css" />
<main in:fly="{{ y: 20, duration: 500}}">
  <div class="intro">    
    <h1>Hi, my name is Peter.</h1>
    <p class="paragraph">
      I’m a <b>computer science</b> junior at the Toronto Metropolitan
      University. I have a big interest in all things related to <b>web development</b>
      and <b>UI/UX design</b>! During my free time, I love to play and listen
      to music, watch movies, and cook. My favorite languages are <b>Python</b> and
      <b>JavaScript</b>, but I’m always trying to add a new one to the list. Check out
      some of my projects and photographs I have taken over the years :)
    </p>
    <div class="socials">
      <p>my socials</p>
      <a href="https://github.com/ptktran" target="_blank">github</a>
      <a href="https://www.linkedin.com/in/peter-tran-95a4a922b/" target="_blank">linkedin</a>
      <a href = "mailto: petertranminh22@gmail.com" target="_blank">email</a>
      <a href="https://drive.google.com/file/d/1X-oaftiPX32a7Z5cFbBDaHMNlZYKcSug/view" target="_blank">resume</a>
      <a href="https://open.spotify.com/user/m9l81amepbe96a1owslqu2ytk?si=8b26a1a1523e4b12" target="_blank">spotify</a>
      <!-- <a href="https://www.instagram.com/ptktran/" target="_blank">instagram</a> -->
    </div>
    {#if track}
      <Spotify {track} />
    {:else}
      <p>No track currently playing</p>
    {/if}
  </div>
</main>