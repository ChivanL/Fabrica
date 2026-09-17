import express from "express";
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/", (req, res) => {
    console.log("GET request received");
    res.send("pong!");
});
//# sourceMappingURL=index.mjs.map