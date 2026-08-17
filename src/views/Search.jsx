const Search = ({setPerPage, setSearchValue, searchValue}) => {
    return (
        <div className="flex items-center justify-between">
            <select
                onChange={(e) => setPerPage(parseInt(e.target.value))}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6A5FDF] border
                                  border-slate-700 rounded-md text-[#D0D2D6]"
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <input onChange={(e) => setSearchValue(e.target.value)}
                   value={searchValue} type="text" placeholder="Pesquisar..."
                   className="px-4 py-2 focus:border-indigo-500
                              outline-none bg-[#6A5FDF] border border-slate-700 rounded-md text-[#D0D2D6]"/>
        </div>
    )
}

export default Search;
