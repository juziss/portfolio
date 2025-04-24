import { motion } from "framer-motion";
import SkillNotifications from "@components/SkillNotifications"

export default function Skills() {
  const skills = [
    { src: "/public/ps.png", alt: "Photoshop" },
    { src: "/public/ilustr.png", alt: "Illustrator" },
    { src: "/public/figma.png", alt: "Figma" },
    // { src: "/public/Blender.png", alt: "Blender" },
    { src: "/public/clip.png", alt: "Clip Studio Paint" },
  ];

  const notifications1 = [
    { name: "React", title: "Nova Notificação", time: "12:30 PM" },
    { name: "Node.js", title: "Nova Notificação", time: "12:45 PM" },
  ];

  const notifications2 = [
    { name: "PHP", title: "Nova Notificação", time: "1:00 PM" },
    { name: "SQL", title: "Nova Notificação", time: "1:15 PM" },
  ];

  return (
    <section className="py-16 px-4">
  <h2 className="text-gray-700 text-5xl font-bold mb-12 text-center">Skills</h2>

  <div className="flex flex-col lg:flex-row items-start justify-center gap-16">
    
    {/* Lado esquerdo: texto + notificações */}
    <div className="flex flex-col gap-6 max-w-md">
      <p className="text-lg text-gray-600">
        Essas são algumas das tecnologias que domino em programação e design:
      </p>
      <SkillNotifications notifications={notifications1} />
      <SkillNotifications notifications={notifications2} />
    </div>

    {/* Lado direito: logos das ferramentas de design */}
    <div className="flex flex-wrap justify-center gap-10">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="w-24 h-24 flex items-center justify-center"
        >
          <img
            src={skill.src}
            alt={skill.alt}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}
