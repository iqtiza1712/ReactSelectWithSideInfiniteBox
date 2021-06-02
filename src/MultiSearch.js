import { React, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Infinite from "./InfiniteScroll";
import city from "./city.json";
function MultiSearch() {
  const [id, setId] = useState([]);
  const [selectOption, setSelectOption] = useState([]);

  const fecthData = async () => {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const res = city;
    const data = res.cities;

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
    setId(e);
  };
  useEffect(() => {
    fecthData();
  }, []);

  return (
    <>
      <Select
        // defaultValue={{ label: "Erwin Howell" }}
        options={selectOption}
        onChange={handleChange}
        className="Select"
        styles={customStyles}
        isMulti
      />
      <div className="box">
        <div style={{ width: "50%" }} className="Glass1">
          {" "}
          {id === null ? "" : id.map((v) => <h4>{v.label}</h4>)}
        </div>
        <Infinite />
      </div>
    </>
  );
}
export default MultiSearch;
