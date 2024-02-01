import React, { useState } from "react";

const EmailTemplate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Your response has been received!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      alert(data.message || "There was an error. Please try again later.");
    }
  };
  return (
    <div className="p-6 bg-main-background rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">Contact Me</h2>
      <form onSubmit={submitForm} className="space-y-4 justify-center">
        <input
          className="w-full p-2 rounded bg-sidebar-background text-white placeholder-gray-300"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-sidebar-background text-white placeholder-gray-300"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-sidebar-background text-white placeholder-gray-300"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 rounded bg-sidebar-background text-white placeholder-gray-300"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-1/4 p-2 bg-topbar-firstButton text-white font-bold rounded hover:bg-topbar-thirdButton transition-colors landscape:w-2/4 phone:w-2/4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default EmailTemplate;
