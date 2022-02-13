import React , { createContext } from 'react'

export const FilterContext = createContext();

export function FilterProvider ( {children} ) {

    const [ name , setName ] = React.useState('Bansah Jephthah');
    
    const [filters, setFilters ] = React.useState({
        search : "",
        category : "",
        comp: 'Marcos',
        colors: "",
        shipping: false,
        price : "all"
      })

    function filterFunc ( e ) {
        const type = e.target.type;
        const filter = e.target.name;
        const value = e.target.value;

        let filterValue ;

        if( filter === "search") {
            filterValue = value;
            setFilters({ ...filters, [filter]: filterValue });
        }

        if( filter === "category" ) {
            filterValue = e.target.innerHTML;
            setFilters({ ...filters, [filter]: filterValue });
        }

        if( filter === "comp") {
            filterValue = value;
            setFilters({ ...filters, [filter]: filterValue });
        }
        
        if( filter === "colors" ) {
            filterValue = e.target.innerHTML;
            setFilters({ ...filters, [filter]: filterValue });
        }
        
        
        console.log(filters)
    }


    return (
        <FilterContext.Provider value={{ filterFunc , filters  }}>
            { children }
        </FilterContext.Provider>
    )
}