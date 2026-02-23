import Modal from "./Modal";

type EditProfileModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function EditProfileModal({
  open,
  onClose,
}: EditProfileModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      hasCloseBtn={true}
      title="Edit profile"
    >
      <form className="space-y-3">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input className="mt-1 w-full rounded-md border p-2" placeholder="Negar Feghhi"/>
        </div>

        <div>
          <label className="text-sm text-gray-600">Bio</label>
          <textarea className="mt-1 w-full rounded-md border p-2" rows={3} placeholder="Enter your Bio"/>
        </div>

        <div>
          <label className="text-sm text-gray-600">Location</label>
          <input className="mt-1 w-full rounded-md border p-2" placeholder="Where you are at"/>
        </div>

        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input className="mt-1 w-full rounded-md border p-2" placeholder="Your personal website"/>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border px-3 py-2"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-white"
          >
            Save changes
          </button>
        </div>
      </form>
    </Modal>
  );
}
