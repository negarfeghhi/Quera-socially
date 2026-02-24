import SetItem from "./SetItem"
function ProfileState() {
  return (
    <div className="flex gap-32">
      <SetItem value={1} label="Following" />
      <SetItem value={3} label="Followers" />
      <SetItem value={5} label="Posts" />
    </div>
  );
}

export default ProfileState;
