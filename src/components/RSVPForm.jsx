import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function RSVPForm({ names }) {
  // Initialize form data: one entry per guest with attending + dietary
const [formData, setFormData] = useState([]);

  // Update formData when names change
  useEffect(() => {
    if (names.length > 0) {
      const initialData = names.map((name) => ({
        name,
        attending: false,
        dietary: "",
      }));
      setFormData(initialData);
    }
  }, [names]);

  const handleCheckboxChange = (index) => {
    const updated = [...formData];
    updated[index].attending = !updated[index].attending;
    setFormData(updated);
  };

  const handleDietaryChange = (index, value) => {
    const updated = [...formData];
    updated[index].dietary = value;
    setFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the message as text with all guests info
    const message = formData
      .map(
        ({ name, attending, dietary }) =>
          `${name} - Attending: ${attending ? "Yes" : "No"}${
            attending && dietary ? `, Dietary: ${dietary}` : ""
          }`
      )
      .join("\n");

    // Send email with EmailJS
    emailjs
      .send(
        'service_ibi5d5q',
        'template_ry1fhrv',
        {
          message: message,
          // Optional: add other fields like from_name or from_email if you want
        },
        '72iuHhNaIaZI3AnTa'
      )
      .then(
        (response) => {
          alert("RSVP sent successfully!");
          // Reset form or keep as is
        },
        (error) => {
          alert("Failed to send RSVP, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="container mt-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Who will be attending?
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {formData.map((guest, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <label>
              <input
                type="checkbox"
                checked={guest.attending}
                onChange={() => handleCheckboxChange(index)}
                style={{ marginRight: "5px" }}
              />
              {guest.name}
            </label>

            {guest.attending && (
              <input
                type="text"
                placeholder="Any dietary requirements"
                value={guest.dietary}
                onChange={(e) => handleDietaryChange(index, e.target.value)}
                style={{ marginLeft: "10px" }}
              />
            )}
          </div>
        ))}

        <button className="rsvp btn" type="submit">
          RSVP
        </button>
      </motion.form>
    </div>
  );
}
