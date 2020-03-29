import app from "./app";
import config from "./config";

app.listen(config.app.port, config.app.host, () => {
  console.log(`Listening on http://${config.app.host}:${config.app.port}`);
});
