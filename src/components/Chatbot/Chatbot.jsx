import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chatbotImg from "../../assets/chatbot.gif"; // your GIF here

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="p-2 rounded-full shadow-xl bg-transparent flex items-center justify-center"
        >
          <img
            src={chatbotImg}
            alt="Chat"
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Fake Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 w-80 max-h-[70vh] bg-white border rounded-lg shadow-xl flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-3 font-bold text-center">
              iNLAXbot
            </div>
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
              
              <div className="bg-blue-100 p-2 rounded-md self-end text-right">
                Oopss!!!
              </div>
              
            </div>
            <div className="p-3 border-t flex items-center text-gray-400 text-sm">
              <span className="italic">This bot is currently unavailable 💀</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
