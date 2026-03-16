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

  return (
    <div className="row">
      <div className="col-lg-7">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mb-3">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Email"
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <input
              required
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="form-control"
              placeholder="Subject"
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <textarea
              required
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Message"
              disabled={loading}
            />
          </div>
          <button className="btn btn-success" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p
              className="mt-2"
              style={{
                color: status.includes("✓") ? "#9ccf4a" : "#ff6b6b",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>

      <div className="col-lg-5">
        <div className="contact-details card p-3">
          <h5>My Contact Details</h5>
          <p className="mb-1">
            <strong>Email:</strong> {social.email}
          </p>
          <p className="mb-1">
            <strong>Phone:</strong> {social.phone}
          </p>
          <p className="mb-1">
            <strong>Email:</strong> {social.email}
          </p>
          <p className="mb-1">
            <strong>Location:</strong> {social.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
