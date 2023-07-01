const express = require("express");
const app = express();

app.post("/send-email", (req, res) => {
  const { recipient, subject, body } = req.body;

  sendEmail(recipient, subject, body)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
