/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const theme = event.cookies.get("siteTheme");
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      // Check if the theme class is already present
      if (html.includes('class="')) {
        // If it's already present, don't change it
        return html;
      } else {
        // If it's not present, add the theme class
        return html.replace('<html', `<html class="${theme}"`);
      }
    },
  });
  return response;
};