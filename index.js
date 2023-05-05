import App from "./App.svelte";

const app = new App({
  target: document.body
});

document.getElementsByTagName("body")[0].style.height = "100vh";
document.getElementsByTagName("body")[0].style.width = "100%";

export default app;
