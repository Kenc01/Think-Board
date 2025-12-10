import express from "express";
import {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

// app.get("/api/notes", (req, res) => {
//   //send the notes
//   res.status(200).send("You got five notes");
// });

// app.post("/api/notes", (req, res) => {
//   //create a note
//   res.status(201).json({ message: "Note created successfully!" });
// });

// app.put("/api/notes/:id", (req, res) => {
//   //create a note
//   res.status(200).json({ message: "Post updated successfully!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   //create a note
//   res.status(200).json({ message: "Note deleted successfully!" });
// });

// app.del("/api/notes", (req, res) => {
//   //create a note
//   res.send("You got five notes");
// });
