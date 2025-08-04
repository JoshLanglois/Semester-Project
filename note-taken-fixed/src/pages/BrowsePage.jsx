import React from 'react';
import BrowseNotes from '../components/BrowseNotes';

export default function BrowsePage({ notes, user, onSave, savedNotes, onUnsave }) {
  return (
    <main className="page-wrapper">
      <BrowseNotes
        notes={notes}
        user={user}
        onSave={onSave}
        savedNotes={savedNotes}
        onUnsave={onUnsave}
      />
    </main>
  );
}