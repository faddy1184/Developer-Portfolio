import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_sff066u",
        "template_bct0byn",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "Ze-U2cSeM1lDnWhQu"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="relative flex flex-col xl:flex-row items-start xl:items-center justify-center overflow-hidden">

      {/* 🌌 STARS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarsCanvas />
      </div>

      {/* 🌍 EARTH */}
      <motion.div
        className="
          relative z-10 w-full xl:flex-1
          h-[220px] sm:h-[280px] md:h-[320px] xl:h-[450px]
          flex items-center justify-center
          order-1 xl:order-2
        "
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <EarthCanvas />
      </motion.div>

      {/* 📝 FORM */}
      <motion.div
        className="
          relative z-10 w-full xl:flex-1
          p-6 md:p-10
          order-2 xl:order-1
        "
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-transparent border border-white/20 text-white px-3 py-2.5 rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-transparent border border-white/20 text-white px-3 py-2.5 rounded-lg outline-none"
          />

          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-transparent border border-white/20 text-white px-3 py-2.5 rounded-lg outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="text-white font-semibold text-lg hover:scale-110 transition duration-300 w-fit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");