import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="icon" type="image/png" href="favicon.ico">
<nav class="navigation"><a href="/"><div class="logo-container"><h2 class="logo">peter tran</h2></div></a>
  <div id="links"><a href="/">about</a>
    <a href="/projects">projects</a>
    <a href="/photos">photos</a>
    
    ${`<span class="theme-switcher"><img src="icons/light-icon.svg"></span>`}</div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<link rel="stylesheet" href="/src/styles/main.css">

${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
