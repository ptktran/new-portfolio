<script>
  export let track;
</script>

<div>
  <h2>Currently playing:</h2>
  <p>{track.name} by {track.artists[0].name}</p>
  <iframe src={`https://open.spotify.com/embed/track/${track.id}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</div>
