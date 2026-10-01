import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { social } from "../data";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init("W2m7UOSK8BvqonV8v");
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        title: form.subject,
        message: form.message,
      };

      await emailjs.send("service_vpbx044", "template_iorosqs", templateParams);

      setStatus("✓ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("✗ Failed to send message. Please try again.");
      console.error("Email error:", error);
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      {props.rows ? (
        <textarea required name={name} id={name} value={form[name]} onChange={handleChange} placeholder=" " disabled={loading} {...props} />
      ) : (
        <input required name={name} id={name} value={form[name]} onChange={handleChange} placeholder=" " disabled={loading} {...props} />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  );

  return (
    <div className="contact-grid">
      <form onSubmit={handleSubmit} className="glass contact-form reveal">
        <div className="field-row">
          {field("name", "Your Name")}
          {field("email", "Your Email", { type: "email" })}
        </div>
        {field("subject", "Subject")}
        {field("message", "Message", { rows: 6 })}
        <button className="btn-neon" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message →"}
        </button>
        {status && (
          <p className={`form-status ${status.includes("✓") ? "ok" : "err"}`}>{status}</p>
        )}
      </form>

      <div className="contact-info reveal delay-1">
        <p className="lead-text">
          Have a project in mind or an opening on your team? My inbox is always open —
          let&apos;s build something great together.
        </p>
        <a className="info-card glass" href={`mailto:${social.email}`}>
          <span className="info-label">Email</span>
          <span>{social.email}</span>
        </a>
        <a className="info-card glass" href={`tel:${social.phone.replace(/-/g, "")}`}>
          <span className="info-label">Phone</span>
          <span>{social.phone}</span>
        </a>
        <div className="info-card glass">
          <span className="info-label">Location</span>
          <span>{social.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
