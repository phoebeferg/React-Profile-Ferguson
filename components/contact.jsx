import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
