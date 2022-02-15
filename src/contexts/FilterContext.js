import React , { createContext } from 'react'

export const FilterContext = createContext();

export function FilterProvider ( {children} ) {

    const [ name , setName ] = React.useState('Bansah Jephthah');
    
    const [filters, setFilters ] = React.useState({
        search : "",
        cate : "All",
        comp: "All",
        colors: "All",
        price : 30000,
        shipping: false
      })

    function resetFill (e) {
        setFilters({
            search : "",
            cate : "All",
            comp: "",
            colors: "",
            price : 30000,
            shipping: false            
        })
    }

    function filterFunc ( e ) {
        const filter = e.target.name;
        const value = e.target.value;

        let filterValue ;

        if( filter === "search") {
            filterValue = value;
            setFilters({ ...filters, [filter]: filterValue });
        }

        if( filter === "cate" ) {
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
        
        if( filter === "price" ) {
            filterValue = e.target.value;
            setFilters({ ...filters, [filter]: filterValue });
        }
        
        if( filter === "shipping" ) {
            filterValue = e.target.checked;
            setFilters({ ...filters, [filter]: filterValue });
        }
        
    }




    return (
        <FilterContext.Provider value={{ resetFill , filterFunc , filters  }}>
            { children }
        </FilterContext.Provider>
    )
}