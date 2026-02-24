interface SetItemProps {
  value: number | string;
  label: string;
}

function SetItem(props: SetItemProps) {
  const { value, label } = props;
  return (
    <div className="text-center">
          <p className="text-lg font-semibold text-[#171717]">
              {value}
          </p>
          <p className="text-sm text-[#737373]">
              {label}
          </p>
    </div>
  );
}

export default SetItem;
