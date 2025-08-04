import React from 'react';

export default function NoteCard({ note }) {
  return (
    <article className="note-card">
      <h3>{note.title}</h3>
      <p>Uploaded by: {note.uploader}</p>
      <a href="#">View Note</a>
      <a href="#">Download PDF</a>
    </article>
  );
}