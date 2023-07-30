const Suggestion = ({content}) => {
  return (
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm py-4 px-2 cursor-pointer hover:bg-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
      {content}
    </div>
  );
};

export default Suggestion;
