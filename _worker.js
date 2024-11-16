export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Redirect to https://k-net.dk if hostname is not k-net.dk or if protocol is not HTTPS
    if (url.hostname !== "k-net.dk" || url.protocol !== "https:") {
      url.hostname = "k-net.dk";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301); // Permanent redirect
    }

    // Continue serving the request for valid hostnames and HTTPS protocol
    return env.ASSETS.fetch(request);
  },
};

