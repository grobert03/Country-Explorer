import { useEffect, useState } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";
const Search = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (search !== "") {
      let array = [];
      // Search for the country name
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then(({ data }) => {
          data.forEach((e) => {
            array.push(e);
          });
          setList(array);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            // Search for capital
            axios
              .get(`https://restcountries.com/v3.1/capital/${search}`)
              .then(({ data }) => {
                data.forEach((e) => {
                  array.push(e);
                });
                setList(array);
              })
              .catch((err) => setList([]));
          }
        });
    } else {
      setList([]);
    }
  }, [search]);

  const changeHandler = (value) => {
    setSearch(value);
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
