import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
const Country = () => {
  let ccn = window.location.pathname.replace("/country/", "");
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${ccn}`)
      .then()
      .catch(err => navigate("/"));
  }, []);

  return (
    <div className="border rounded-lg w-3/4 m-auto">
      <Link className="text-white font-bold" to="/">
        <AiOutlineArrowLeft /> Back to Search
      </Link>
    </div>
  );
};

export default Country;
