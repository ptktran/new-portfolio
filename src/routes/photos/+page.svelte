<script>
  import { fly } from 'svelte/transition';
</script>
<link rel="stylesheet" href="styles/photos.css">
<main>
  <div class="gallery-row">
    <div class="col" in:fly="{{ y: 20, duration: 100}}">
      <img src="./photos/p6.jpg" alt="photography">
      <img src="./photos/p7.jpg" alt="photography">
      <img src="./photos/p8.jpg" alt="photography">
      <img src="./photos/p9.jpg" alt="photography">
      <img src="./photos/p10.jpg" alt="photography">            
    </div>
    <div class="col" in:fly="{{ y: 20, duration: 400}}">
      <img src="./photos/p3.jpg" alt="photography">
      <img src="./photos/p1.jpg" alt="photography">
      <img src="./photos/p2.jpg" alt="photography">
      <img src="./photos/p4.jpg" alt="photography">
      <img src="./photos/p5.jpg" alt="photography">
    </div>
    <div class="col" in:fly="{{ y: 20, duration: 700}}">
      <img src="./photos/p16.jpg" alt="photography">
      <img src="./photos/p17.jpg" alt="photography">
      <img src="./photos/p18.jpg" alt="photography">
      <img src="./photos/p19.jpg" alt="photography">
      <img src="./photos/p20.jpg" alt="photography">
    </div>
    <div class="col" in:fly="{{ y: 20, duration: 900}}">
      <img src="./photos/p11.jpg" alt="photography">
      <img src="./photos/p12.jpg" alt="photography">
      <img src="./photos/p13.jpg" alt="photography">
      <img src="./photos/p14.jpg" alt="photography">
      <img src="./photos/p15.jpg" alt="photography">
    </div>
  </div>
</main>
<div class="copyright">
  <p>&copy peter tran 2023</p>
</div>