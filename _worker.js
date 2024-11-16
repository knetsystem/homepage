export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Redirect www to root domain
    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.replace("www.", "");
      return Response.redirect(url.toString(), 301); // Permanent redirect
    }

    // Continue serving the request for all other routes
    return env.ASSETS.fetch(request);
  },
};

