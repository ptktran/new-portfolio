<script>
  import { fly } from 'svelte/transition';
</script>

<link rel="stylesheet" href="styles/index.css" />
<main in:fly="{{ y: 20, duration: 500}}">
  <div class="intro">    
    <h1>Hi, my name is Peter!</h1>
    <p class="paragraph">
      I’m a <b>computer science</b> student at the Toronto Metropolitan
      University. I have a big interest in all things related to <b>web development</b>
      and <b>UI/UX design</b>! During my free time, I love to play and listen
      to music, watch movies, and cook. My favorite languages are <b>Python</b> and
      <b>JavaScript</b>, but I’m always looking to add a new one to the list. Check out
      some of my personal projects and photography I have worked on over the years :)
    </p>
  </div>
  <div class="socials">
    <p>my socials</p>
    <a href="https://github.com/ptktran" target="_blank">github</a>
    <a href="https://www.linkedin.com/in/peter-tran-95a4a922b/" target="_blank">linkedin</a>
    <a href = "mailto: petertranminh22@gmail.com" target="_blank">email</a>
    <!-- <a href="https://drive.google.com/file/d/1djY1a1wV5_ZgKBjNiEnIk0ZhpmI0ywHh/view?usp=sharing" target="_blank">resume</a> -->
    <a href="https://open.spotify.com/user/m9l81amepbe96a1owslqu2ytk?si=8b26a1a1523e4b12" target="_blank">spotify</a>
    <!-- <a href="https://www.instagram.com/ptktran/" target="_blank">instagram</a> -->
  </div>
</main>