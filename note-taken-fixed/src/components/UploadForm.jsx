import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function UploadForm({ setNotes, setShowModal, resetForm, setResetForm }) {
  const [formData, setFormData] = useState({ subject: '', chapter: '', school: '', file: null });

  const fileInputRef = useRef(null);
  const location = useLocation();

const handleSubmit = (e) => {
  e.preventDefault();

  if (!fileInputRef.current?.files.length) {
  alert("Please upload a PDF before submitting.");
  return;
}

const file = fileInputRef.current.files[0];
const fileURL = URL.createObjectURL(file);

const newNote = {
  id: Date.now(),
  title: `${formData.subject} - ${formData.chapter}`,
  subject: formData.subject,
  uploader: 'You',
  fileURL
};

  setNotes(prev => [...prev, newNote]);
  setShowModal(true);
};

  useEffect(() => {
    if (resetForm) {
      setFormData({ subject: '', chapter: '', school: '', file: '' });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

      setResetForm(false);
    }
  }, [resetForm, setResetForm]);

    useEffect(() => {
    setFormData({ subject: '', chapter: '', school: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [location]);

  return (
    <section id="upload">
      <h2 id="upload-heading">Upload Your Notes</h2>
      <form onSubmit={handleSubmit} aria-labelledby="upload-heading">
        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={e => setFormData({ ...formData, subject: e.target.value })}
          required
        />

        <label htmlFor="chapter">Chapter:</label>
        <input
          id="chapter"
          type="text"
          value={formData.chapter}
          onChange={e => setFormData({ ...formData, chapter: e.target.value })}
          required
        />

        <label htmlFor="school">School:</label>
        <input
          id="school"
          type="text"
          value={formData.school}
          onChange={e => setFormData({ ...formData, school: e.target.value })}
          required
        />

        <label htmlFor="upload">Upload PDF:</label>
        <input
          id="upload"
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}