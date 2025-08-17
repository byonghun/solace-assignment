interface HighlightProps {
  text: string;
  searchQuery: string;
}

const Highlight = ({ text, searchQuery }: HighlightProps) => {
  if (!searchQuery) return <>{text}</>;

  const queryIndex = text.toLowerCase().indexOf(searchQuery.toLowerCase());

  if (queryIndex === -1) return <>{text}</>;

  return (
    <>
      {text.substring(0, queryIndex)}
      <span className="bg-yellow-200 font-semibold">
        {text.substring(queryIndex, queryIndex + searchQuery.length)}
      </span>
      {text.substring(queryIndex + searchQuery.length)}
    </>
  );
};

export default Highlight;
