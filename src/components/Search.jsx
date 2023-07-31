import { useEffect, useState } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";
const Search = () => {
  const [list, setList] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        let array = [];
        data.forEach((e) => array.push(e));
        setCountries(array);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandler = (value) => {
    value = value.toLowerCase();
    if (value === "") {
      setList([])
    } else {
      setList(countries.filter(e => e.name.common.toLowerCase().startsWith(value) || (e.capital !== undefined ? e.capital[0].toLowerCase().startsWith(value) : false)))

    }
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mt-4 w-full lg:w-3/4 flex align-center justify-center">
        <input
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
          type="text"
          className=" border   text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 outline-none"
          placeholder="Country/Capital city..."
          required
        />
      </div>
      <Suggestions list={list} />
    </div>
  );
};

export default Search;
