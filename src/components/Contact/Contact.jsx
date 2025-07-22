import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/contact.webp";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  useEffect(() => {
      document.title = "Contact | iNLAX";
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSent(false);

    const now = new Date();
    const formattedTime = now.toLocaleString();

    formRef.current.elements["time"].value = formattedTime;

    emailjs
      .sendForm(
        "service_bifpleg",
        "template_uu8b0ix",
        formRef.current,
        "scz7UnEAh9tGp8qcW"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="pb-20 py-20 px-4">
      <h2 className="my-10 text-center text-4xl font-bold">Contact Us</h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 max-w-6xl mx-auto">
        {/* FORM SECTION */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex-1 w-full max-w-md flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="border border-gray-300 p-3 rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border border-gray-300 p-3 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="border border-gray-300 p-3 rounded-md"
          ></textarea>

          {/* Hidden fields */}
          <input type="hidden" name="name" value="Portfolio Visitor" />
          <input type="hidden" name="title" value="New Portfolio Contact Message" />
          <input type="hidden" name="time" />

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {isSent && (
            <p className="text-green-500 text-center mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

        {/* IMAGE SECTION WITH FRAMER MOTION */}
        <div className="flex-1 w-full flex justify-center items-center">
          <motion.img
            src={contactImg}
            alt="Contact"
            className="w-64 md:w-80 h-auto object-contain drop-shadow-xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="text-center tracking-tighter mt-10 text-gray-700">
        <p className="my-2 flex items-center justify-center gap-2">
          <FaWhatsapp className="text-green-500" /> +94 70 395 9647
        </p>
        <p className="my-2 flex items-center justify-center gap-2">
          <FaEnvelope className="text-red-500" /> hello.inlax@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
