import { useEffect } from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  hasCloseBtn: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({
  open,
  title,
  hasCloseBtn,
  children,
  onClose,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="absolute inset-0 bg-black/60">
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            {hasCloseBtn ? (
              <button
                onClick={onClose}
                className="rounded-md px-2 py-1 text-gray-600 hover:bg-gray-100"
                aria-label="Close modal"
              >
                ✕
              </button>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
