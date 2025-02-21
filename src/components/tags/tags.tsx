type TagsProps = {
  tag: string[];
};

function Tag({ tag }: TagsProps) {
  return (
    <div className="flex w-full justify-items-start flex-wrap flex-row gap-[10px] lg:gap[20px lg:mt-[10px]] ">
      {tag.map((t, index) => (
        <div
          className="text-white bg-[#ff6060] rounded-[10px] px-5 py-2 text-sm font-bold w-[30%]"
          key={index}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

export default Tag;
