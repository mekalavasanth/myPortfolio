import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
