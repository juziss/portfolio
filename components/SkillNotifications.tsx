import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tipagem das props
interface NotificationProps {
  name: string;
  title: string;
  time: string;
}

interface SkillNotificationsProps {
  notifications: NotificationProps[];
}

// Animações aprimoradas
const notificationVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

const SkillNotifications: React.FC<SkillNotificationsProps> = ({ notifications }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    const timeout = setTimeout(() => {
      setShowNotifications(true);
    }, 500);

    setScrollTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTimeout]);

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence>
        {showNotifications &&
          notifications.map((notification, i) => (
            <motion.div
              layout
              key={i}
              variants={notificationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2, ease: "easeInOut" }}
              className="backdrop-blur-md bg-white/30 border border-white/20 text-gray-800 px-4 py-3 rounded-xl shadow-md flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <img src="/public/react.png" alt="check" className="w-5 h-5" />
                <div>
                  <div className="text-xs text-gray-500">{notification.title}</div>
                  <span className="font-medium text-sm">{notification.name}</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default SkillNotifications;
