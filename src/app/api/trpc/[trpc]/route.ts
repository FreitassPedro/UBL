import { appRouter } from "@/server/trpc/routers/_app";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req,
    router: appRouter,
  });

export { handler as GET, handler as POST };
