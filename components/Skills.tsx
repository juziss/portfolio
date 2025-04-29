import { motion } from "framer-motion";
import SkillNotifications from "@components/SkillNotifications";

export default function Skills() {
  const skills = [
    { src: "/public/ps.png", alt: "Photoshop" },
    { src: "/public/ilustr.png", alt: "Illustrator" },
    { src: "/public/figma.png", alt: "Figma" },
    { src: "/public/clip.png", alt: "Clip Studio Paint" },
  ];

  const notifications1 = [
    { name: "ReactJS", title: "Alerta de Skill", time: "12:30 PM" },
    { name: "TailwindCSS", title: "Alerta de Skill", time: "12:45 PM" },
    { name: "PHP", title: "Alerta de Skill", time: "1:00 PM" },
    { name: "SQL", title: "Alerta de Skill", time: "1:15 PM" },
  ];

  return (
    <section className="py-20 px-6" id="habilidades">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Skills</h2>
        <p className="text-gray-500 text-lg">Linguagens, ferramentas e plataformas que domino</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-20 max-w-7xl mx-auto">
        {/* Notificações */}
        <div className="flex flex-col gap-8 w-full max-w-md">
          <SkillNotifications notifications={notifications1} />
        </div>

        {/* Skills visuais */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl w-28 h-28"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm text-gray-600 text-center">{skill.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
