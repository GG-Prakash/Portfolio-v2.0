import React, { useState, useRef } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane, FaTelegramPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const [from_name, setFromName] = useState('');
  const [from_email, setFromEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setErrMsg('');
    setSuccessMsg('');

    if (from_name.trim() === '') {
      setErrMsg('Name is required!');
      return;
    }
    if (phone_number.trim() === '') {
      setErrMsg('Phone number is required!');
      return;
    }
    if (from_email.trim() === '') {
      setErrMsg('Email is required!');
      return;
    }
    if (!emailValidation(from_email)) {
      setErrMsg('Enter a valid email!');
      return;
    }
    if (subject.trim() === '') {
      setErrMsg('Subject is required!');
      return;
    }
    if (message.trim() === '') {
      setErrMsg('Message is required!');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccessMsg(`Thank you ${from_name}, your message has been sent successfully!`);
          setFromName('');
          setPhoneNumber('');
          setFromEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          setErrMsg('Failed to send message. Please try again!');
        }
      );
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col items-center mb-16 pt-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyan-500 rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
          <p className="md:text-lg text-base text-gray-400 text-center max-w-2xl">
            I'm currently available for freelance work or full-time opportunities. Send me a message and let's chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col space-y-10 mt-2 md:mt-6  h-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
              <a
                href="https://github.com/GG-Prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300 shrink-0 shadow-lg">
                  <FaGithub className="text-3xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-100 group-hover:text-white transition-colors text-lg">GitHub</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">Connect on GitHub</span>
                </div>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300 shrink-0 shadow-lg">
                  <FaTwitter className="text-3xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-100 group-hover:text-white transition-colors text-lg">Twitter</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">Follow on Twitter</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gg-prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300 shrink-0 shadow-lg">
                  <FaLinkedin className="text-3xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-100 group-hover:text-white transition-colors text-lg">LinkedIn</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">Connect on LinkedIn</span>
                </div>
              </a>

              <a
                href="mailto:mailofggprakash@gmail.com"
                className="flex items-center gap-5 group"
              >
                <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300 shrink-0 shadow-lg">
                  <FaEnvelope className="text-3xl text-gray-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-100 group-hover:text-white transition-colors text-lg">Email</span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">Send a message</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl relative">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">Send a Message</h3>
            <form
              ref={formRef}
              onSubmit={handleSend}
              className="space-y-4 md:space-y-5"
            >
              {errMsg && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm text-center">
                  {errMsg}
                </div>
              )}
              {successMsg && (
                <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-4 py-3 rounded-lg text-sm text-center">
                  {successMsg}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={from_name}
                    onChange={(e) => setFromName(e.target.value)}
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone_number" className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="from_email" className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={from_email}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-cyan-600 text-white text-sm md:text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-cyan-500/40 w-full sm:w-auto"
                >
                  <FaTelegramPlane className="text-xl" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
