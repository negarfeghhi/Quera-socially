import { FiHeart, FiMessageCircle } from "react-icons/fi";

export type NotificationType = "comment" | "like";

export type NotificationItemData = {
  id: string;
  type: NotificationType;
  name: string;
  time: string;
  unread: boolean;
  postTitle: string;
  postBody?: string;
};

export default function NotificationItem({
  item,
}: {
  item: NotificationItemData;
}) {
  return (
    <div className="flex items-start gap-3 border-t pt-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6b4c3b] text-white">
        {item.name[0]}
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-sm">
            {item.type === "comment" ? (
              <FiMessageCircle className="text-blue-500 text-sm" />
            ) : (
              <FiHeart className="text-red-500 text-sm" />
            )}

            <span className="font-semibold">{item.name}</span>

            <span className="text-gray-600">
              {item.type === "comment"
                ? "commented on your post"
                : "liked your post"}
            </span>
          </div>

          {item.unread && (
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
          )}
        </div>

        <div className="mt-2 rounded-md bg-gray-100 p-3 text-sm text-gray-700">
          {item.postTitle}
        </div>

        {item.postBody ? (
          <div className="mt-2 rounded-md bg-gray-100 p-3 text-sm text-gray-700">
            {item.postBody}
          </div>
        ) : null}

        <div className="mt-2 text-xs text-gray-500">{item.time}</div>
      </div>
    </div>
  );
}
