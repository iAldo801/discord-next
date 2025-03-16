import { createServer } from "http";
import next from "next";
import { parse } from "url";

const port = parseInt(process.env.PORT || "80", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    await import("./discord.server");

    createServer((req, res) => {
        const parsedUrl = parse(req.url!, true);
        handle(req, res, parsedUrl);
    }).listen(port, () => {
        console.log(
            `> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
            }`
        );
    });
});