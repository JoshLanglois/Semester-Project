import React from 'react';

export default function BrowseNotes({ notes, user, onSave, savedNotes = [], onUnsave }) {
  return (
    <section id="browse">
      {notes.length === 0 ? (
        <p>No notes uploaded yet.</p>
      ) : (
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <strong>{note.title}</strong> — <em>{note.subject}</em> by {note.uploader} <br />
              <a href={note.fileURL} download target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>{' | '}
              <a href={note.fileURL} target="_blank" rel="noopener noreferrer">
                Quick View
              </a>
              {user && (
                <>
                {' | '}
                  {savedNotes?.some(saved => saved.id === note.id) ? (
                  <button onClick={() => onUnsave(note.id)}>Unsave</button>
                  ) : (
                    <button onClick={() => onSave(note)}>Save</button>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}