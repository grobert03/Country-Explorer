const Suggestion = ({name, capital, flag}) => {
  return (
    <div className=" text-sm py-4 pl-5 pr-2 cursor-pointer hover:bg-gray-600 bg-gray-700 border-gray-600 placeholder-gray-400 text-white flex  items-center gap-8">
      <div>
        <img className="w-9 " src={flag}/>
      </div>
      <div className="flex flex-col">
        <p className="text-lg">{name}</p>
        <p className="text-gray font-light italic">{capital}</p>
      </div>
    </div>
  );
};

export default Suggestion;
