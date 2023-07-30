import Suggestion from "./Suggestion";

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mt-4 w-full lg:w-3/4 flex align-center justify-center">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 outline-none"
          placeholder="Country/Capital city..."
          required
        />
      </div>
      <div className="mt-2 w-1/2 max-h-80 overflow-scroll lg:w-1/4 flex flex-col flex-1  justify-center">
        <Suggestion content="hiii"/>
       
      </div>
    </div>
  );
};

export default Search;
