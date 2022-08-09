import PaginationButtons from "./PaginationButtons"

const SearchResults = ({ result }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[4%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 mt-3 mb-5 text-md">
        About {result.searchInformation?.formattedTotalResults} results{" "}
        {result.searchInformation?.formattedSearchTime} seconds
      </p>

      {result.items?.map((item) => {
        return (
          <div key={item.link} className="mx-w-xl mb-8">
            <div className="group">
              <a href={item.link} className="text-sml">
                {item.formattedUrl}
              </a>
              <a href={item.link}>
                <h2 className="text-xl text-blue-600 font-medium group-hover:underline ">
                  {item.title}
                </h2>
              </a>
            </div>

            <p className="line-clamp-2">{item.snippet}</p>
          </div>
        )
      })}
      <PaginationButtons />
    </div>
  )
}

export default SearchResults
