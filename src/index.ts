import { Server } from "@hapi/hapi";
import Routes from "./routes";
const init = async () => {
  const server: Server = new Server({
    port: 3000,
    host: "localhost",
    router: {
      stripTrailingSlash: true,
    },
  });

  server.route(Routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
