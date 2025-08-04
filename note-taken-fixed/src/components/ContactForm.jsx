import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:<input type="text" required /></label>
        <label>Message:<textarea rows="5" required /></label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}