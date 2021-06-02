import { React, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
function Search() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [selectOption, setSelectOption] = useState([]);

  const fecthData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name
    }));
    setSelectOption(options);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      background: "#ff9068"
    })
  };
  const handleChange = (e) => {
    setId(e.value);
    setName(e.label);
  };
  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div className="Glass">
      <Select
        options={selectOption}
        onChange={handleChange}
        className="Select1"
        defaultValue={selectOption.name}
      />
      <p>
        You have selected <strong>{name}</strong>
        <strong>{id}</strong>
      </p>
      <Select
        defaultValue={{ label: "Erwin Howell", value: 2 }}
        options={selectOption}
        onChange={handleChange}
        className="Select"
        styles={customStyles}
      />
      <p>
        You have selected <strong>{name}</strong>
        <strong>{id}</strong>
      </p>
    </div>
  );
}
export default Search;
