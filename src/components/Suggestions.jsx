import Suggestion from "./Suggestion";
import { Link } from "react-router-dom";

const Suggestions = ({list}) => {
  return (
    <div className="mt-2 w-3/4 max-h-80 overflow-scroll lg:w-1/4 m-auto">
      {
        list.map((e,i) => <Link key={`l${i}`} to={`/country/${e.tld[0]}`}><Suggestion key={i} name={e.name.common} capital={e.capital} flag={e.flags.png} /></Link>)
      }
    </div>
  );
};

export default Suggestions;