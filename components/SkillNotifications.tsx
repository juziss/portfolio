// Tipagem das props
interface NotificationProps {
  name: string;
  title: string;
  time: string;
}

interface SkillNotificationsProps {
  notifications: NotificationProps[];
}

const SkillNotifications: React.FC<SkillNotificationsProps> = ({ notifications }) => {
  return (
    <div className="flex flex-col gap-4">
      {notifications.map((notification, i) => (
        <div
          key={i}
          className="backdrop-blur-md bg-gray-500/10 border border-white/20 text-gray-800 px-4 py-3 rounded-xl shadow-md flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <img src="/react.svg" alt="check" className="w-5 h-5" />
            <div>
              <div className="text-xs text-gray-500">{notification.title}</div>
              <span className="font-medium text-sm">{notification.name}</span>
            </div>
          </div>
          <span className="text-xs text-gray-500">{notification.time}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillNotifications;
