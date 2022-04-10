const SearchBox = ({ data, text, onTextChange }) => {
  console.log("searchbox in data", data, text);
  return (
    <>
      <input type="text" value={text} onChange={onTextChange}></input>
      <div
        style={{ border: "1px solid black", width: "300px", height: "300px" }}
      >
        {data
          .filter((item) => item.city.includes(text))
          .slice(0, 14)
          .map((item, idx) => (
            <div key={idx}>{item.city}</div>
          ))}
      </div>
    </>
  );
};

export default SearchBox;
