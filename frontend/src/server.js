import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

// Global CSS compiled to static/global.css
// @see rollup.config.js
// See https://github.com/langbamit/sapper-postcss-tailwind-rollup
import "./global_css/index.css";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    // TODO [wip] manage current logged in user session data.
    // @see src/stores/session.js
    // See https://www.drupal.org/project/simple_oauth
    // See http://www.passportjs.org/docs/oauth2-api/
    // See https://github.com/sveltejs/realworld/blob/master/src/server.js
    //  + https://github.com/contentacms/contentajsRedis ?
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
