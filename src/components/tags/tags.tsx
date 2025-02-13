import "./tags.css";

type TagsProps = {
  tag: string[];
};

function Tag({ tag }: TagsProps) {
  return (
    <div className="tags">
      {tag.map((t, index) => (
        <div className="tag" key={index}>
          {t}
        </div>
      ))}
    </div>
  );
}

export default Tag;
