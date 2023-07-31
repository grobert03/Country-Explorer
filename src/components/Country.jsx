import { Link } from "react-router-dom";
const Country = ({country}) => {
  return (
    <div>
      <Link className="text-white font-bold" to="/">&lt;- Back to Search</Link>
    </div>
  )
}

export default Country;