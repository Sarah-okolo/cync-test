import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Check, Inbox } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  description: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: 1, title: "New Message", description: "You have a new message.", read: false },
  { id: 2, title: "Update Available", description: "A new update is ready to install.", read: false },
  { id: 3, title: "Reminder", description: "Don't forget your meeting at 3 PM.", read: true },
];

function NotificationPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Bell className="w-6 h-6 text-gray-600" /> Notifications
        </h2>
        {notifications.some((n) => !n.read) && (
          <Button size="sm" onClick={markAllAsRead}>
            <Check className="w-4 h-4 mr-1" /> Mark all as read
          </Button>
        )}
      </div>
      {notifications.length === 0 ? (
        <div className="flex flex-col items-center text-gray-500 mt-10">
          <Inbox className="w-16 h-16 mb-2" />
          <p>No notifications yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`cursor-pointer p-3 ${
                notification.read ? "opacity-70" : "border-green-400"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <CardContent className="p-2">
                <h3 className="text-lg font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-500">{notification.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
export default NotificationPage;