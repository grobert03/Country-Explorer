import Suggestion from "./Suggestion";

const Suggestions = ({list}) => {
  return (
    <div className="mt-2 w-3/4 max-h-80 overflow-scroll lg:w-1/4 m-auto">
      {
        list.map((e,i) => <Suggestion key={i} name={e.name.common} capital={e.capital} flag={e.flags.png} />)
      }
    </div>
  );
};

export default Suggestions;