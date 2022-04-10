import { useEffect, useMemo, useState } from "react";
import ResultBox from "./resultBox";
import SearchBox from "./SearchBox";
const URL =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

function App() {
  console.log("app render");
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);

    // setText(value);
  };
  const getData = async () => {
    const data = await fetch(URL);
    const result = await data.json();
    return result;
  };const SearchBox = ({ data, text, onTextChange }) => {
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

  const setData = async () => {
    const data = await getData();
    setList(data);
  };

  useEffect(() => {
    getData();
    setData();
  }, []);

  return (
    <div>
      <SearchBox data={list} text={text} onTextChange={onTextChange} />
    </div>
  );
}

export default App;
