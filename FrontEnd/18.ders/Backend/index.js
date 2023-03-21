const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.post("/kayit", (request, response) => {
  const emailVeSifre = request.body;
  response.json({
    succes: "Başarılı !!",
    data: emailVeSifre,
  });
});

app.listen(4000, () => {
  console.log("Server ayağa kalktı !!! ");
});
