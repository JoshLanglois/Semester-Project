import React from 'react';
import './css/NoteModal.css';

export default function NoteModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-labelledby="modal-title">
        <h2 id="modal-title">Note Taken!</h2>

        <div role="status" aria-live="polite">
          Your note has been uploaded!
        </div>

        <button onClick={onClose}>Exit</button>
      </div>
    </div>
  );
}