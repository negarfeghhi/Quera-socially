import { useState } from "react";
import ProfilePosts from "./ProfilePosts";
import Modal from "./Modal";
import { FaRegTrashAlt } from "react-icons/fa";


function DeletePosts() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ProfilePosts
        deletpost={
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer"
            aria-label="Delete post"
          >
            <FaRegTrashAlt className="ml-14 text-[#737373] hover:text-red-500 transition " />
          </button>
        }
      />
      <Modal
        open={open}
        title="Delete Post"
        hasCloseBtn={false}
        onClose={() => setOpen(false)}
      >
        <div className="">
          <p className="text-sm text-[#737373] mb-6">
            This action can not be undone
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setOpen(false)}
              className="rounded-md  px-4 py-2 text-sm   font-medium    text-[#171717]   hover:bg-gray-100 border-[#E5E5E5] shadow-sm border-2"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                setOpen(false);
              }}
              className="rounded-md bg-red-500 px-4 py-2 text-sm  text-[#171717]  hover:bg-red-600 font-medium "
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DeletePosts;
