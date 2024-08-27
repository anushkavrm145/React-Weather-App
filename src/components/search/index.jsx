export default function Search({search,setSearch}){
    function handleSearch(){
        
    }
    return <div className="search-engine">
        <input placeholder="enter city name" name="search" value={search} onChange={(event)=> setSearch(event.target.value)} type="text"/>
        <button onClick={handleSearch}>search weather</button>
    </div>
}