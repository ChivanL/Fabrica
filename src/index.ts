import express from "express";

const app = express();

app.use(express.json());

const PORT:number = 3000;

app.get("/", (_req:express.Request, res:express.Response) => {
    console.log("GET request received");
    res.send(" ¿y ahora que pasa?? ");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});