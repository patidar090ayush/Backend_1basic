const express = require("express");
const { connectDB } = require("./src/db/db");
const noteModel = require("./src/modles/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  console.log("Received note:", title, content);
  await noteModel.create({ title, content });
  // res.send("Note created successfully!");
  res.json({ message: "Note created successfully!" });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({ message: "Notes retrieved successfully!", notes });
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  await noteModel.findByIdAndDelete( id );
  res.json({ message: "Note deleted successfully!" });
});


app.patch("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await noteModel.findByIdAndUpdate( id, { title:title , content:content } );
  res.json({ message: "Note updated successfully!" });
});

connectDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
