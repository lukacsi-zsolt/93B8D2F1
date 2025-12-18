const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "hello ez egy GET szerver",
        status: "ok",
    });
});

app.get("/adatok", (req, res) => {
    res.json({
        nev: "GET szerver",
        tema: "GET kérés",
        datum: new Date(),
    });
});

app.listen(PORT, () => {
    console.log(`Szerver fut: https://localhost:${PORT}`)
})