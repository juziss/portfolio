import { motion } from "framer-motion";

export default function AboutMeCard({ imageSrc, altText, overlayText }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      viewport={{ once: true }}
      className="w-44 h-60 rounded-2xl shadow-md cursor-pointer relative overflow-hidden group transition-transform duration-300"
    >
      <div className="w-full h-full">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover rounded-2xl transition-all duration-300 ease-in-out group-hover:blur-sm"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md rounded-2xl p-3 text-center text-sm font-medium"
        >
          {overlayText}
        </motion.div>
      </div>
    </motion.div>
  );
}
