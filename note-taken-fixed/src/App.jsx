import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UploadForm from './components/UploadForm';
import BrowsePage from './pages/BrowsePage';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import NoteModal from './components/NoteModal';
import LoginForm from './components/LoginForm';
import BrowseNotes from './components/BrowseNotes';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [user, setUser] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSaveNote = (note) => {
  if (!savedNotes.find(saved => saved.id === note.id)) {
    setSavedNotes(prev => [...prev, note]);
  }
};

  const handleUnsaveNote = (noteId) => {
  setSavedNotes(prev => prev.filter(note => note.id !== noteId));
};

  return (
    <>
      <Header user={user} setUser={setUser} handleLogin={handleLogin} />
      {showModal && (
        <NoteModal
          onClose={() => {
            setShowModal(false);
            setResetForm(true);
          }}
        />
      )}
<Routes>
  <Route
    path="/"
    element={
      <main className="page-wrapper">
        <div className="title"><h1>Note Taken</h1></div>
        <section>
          <h2>Your Notes. Everyone's Knowledge.</h2>
          <p>Upload and save notes shared by fellow students across different courses, chapters, and schools.</p>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>

        {user && (
          <UploadForm
            setNotes={setNotes}
            setShowModal={setShowModal}
            resetForm={resetForm}
            setResetForm={setResetForm}
          />
        )}
        <ContactForm />
      </main>
    }
  />
      <Route
        path="/browse"
        element={
          <main className="page-wrapper">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <BrowsePage
              notes={filteredNotes}
              user={user}
              onSave={handleSaveNote}
              savedNotes={savedNotes}
              onUnsave={handleUnsaveNote}
            />
          </main>
        }
      />

      <Route
        path="/saved"
        element={
          <main className="page-wrapper">
            <h2>Saved Notes</h2>
            <BrowseNotes
              notes={savedNotes}
              user={user}
              savedNotes={savedNotes}
              onUnsave={handleUnsaveNote}
            />
          </main>
        }
      />

      </Routes>
    </>
  );
}

