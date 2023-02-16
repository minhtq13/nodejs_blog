const express = require("express");
const app = express();
const port = 3000;

// route
app.get("/tin-tuc", (req, res) => {
    res.send("Hello world!");
});

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
