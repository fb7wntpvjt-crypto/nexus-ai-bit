 export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("NEXUS AI is running!");
    }

    const body = await request.json();

    if (body.type === 1) {
      return Response.json({ type: 1 });
    }

    if (body.type === 2) {
      return Response.json({
        type: 4,
        data: {
          content: "🤖 NEXUS AI is online! Mijn AI-brein wordt aangesloten."
        }
      });
    }

    return new Response("Unknown request", { status: 400 });
  }
};
