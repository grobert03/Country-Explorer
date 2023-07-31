import Suggestion from "./Suggestion";
import { Link } from "react-router-dom";

const Suggestions = ({list}) => {
  return (
    <div className="mt-2 w-3/4 max-h-80 overflow-scroll lg:w-1/4 m-auto">
      {
        list.map((e) => <Link key={`l${e.ccn3}`} to={`/country/${e.ccn3}`}><Suggestion key={e.ccn3} name={e.name.common} capital={e.capital} flag={e.flags.png} /></Link>)
      }
    </div>
  );
};

export default Suggestions;