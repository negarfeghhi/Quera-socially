import NotificationItem from "./NotificationItem";
import type { NotificationItemData } from "./NotificationItem";

const notificationsData: NotificationItemData[] = [
  {
    id: "1",
    type: "comment",
    name: "Ali Mousavi",
    time: "3 minutes ago",
    unread: true,
    postTitle: "test post",
    postBody: "tests",
  },
  {
    id: "2",
    type: "like",
    name: "Ali Mousavi",
    time: "3 minutes ago",
    unread: true,
    postTitle: "test post",
  },
  {
    id: "3",
    type: "comment",
    name: "Sara Ahmadi",
    time: "10 minutes ago",
    unread: false,
    postTitle: "another post",
    postBody: "nice one!",
  },
];

export default function Notifications() {
  const unreadCount = notificationsData.filter((n) => n.unread).length;

  return (
    <div className="w-full max-w-2xl rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <span className="text-sm text-gray-500">{unreadCount} unread</span>
      </div>

      <div className="mt-4 space-y-4">
        {notificationsData.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
