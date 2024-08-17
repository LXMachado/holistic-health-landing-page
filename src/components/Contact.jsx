import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('http://your-server-address:3000/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setFormStatus(result.message);
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred while sending the message. Please try again.');
    }
  };

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contactus"
      className="mt-20">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center">
        <h1 className="text-center font-urbanist text-2xl font-semibold md:text-5xl">
          Get in touch
        </h1>
        <span className="text-md mt-2 px-2 text-center font-urbanist md:mt-4 md:px-5 md:text-xl">
          Let's get in touch and talk about your health goals.
        </span>
      </motion.div>
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="container mx-auto px-6 py-10">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <div className="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
          </div> 
          <div className="card mt-8 lg:mx-6 lg:w-1/2">
            <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
              <h1 className="card-title">What would you like to ask?</h1>
              <form id="contactForm" className="mt-6" onSubmit={handleSubmit}>
                <div className="flex-1">
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mt-6 flex-1">
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder="abcd@example.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mt-6 w-full">
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="message"
                    className="textarea textarea-bordered w-full"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300">
                  Get in touch
                </button>
              </form>
              {formStatus && (
                <div className="mt-4 text-center">
                  <p>{formStatus}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center py-10 font-urbanist text-sm lg:text-lg">
        <h1>© 2024 Beyond Body Holistic Health. All rights reserved. </h1>
      </div>
    </motion.section>
  );
};

export default Contact;