
import React from 'react'

import { ProductsContext } from '../contexts/ProductsContext';

export const FilterContext = React.createContext();

export function FilterProvider ( {children} ) {

    const { products , setProducts , sort , setSorted } = React.useContext(ProductsContext)
    
    const [filters, setFilters ] = React.useState({
        search : "",
        cate : "All",
        comp: "All",
        colors: "All",
        price : 310000,
        shipping: false
      })

    function resetFill (e) {
        setFilters({
            search : "",
            cate : "All",
            comp: "All",
            colors: "All",
            price : 310000,
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
        
        console.log(products);
    }

    React.useEffect(() => {
        let newProducts = [...sort] 
        const { search, cate, comp, colors , price , shipping } = filters;

        console.log(filters);

        if (search !== "") {
          newProducts = newProducts.filter(item => {
            let name = item.name.toLowerCase().trim();
            return name.includes(search) ? item : null;
          });
        }

        if (cate !== "All") {
            newProducts = newProducts.filter(item => item.category === cate);
          }

        if (comp !== "All") {
            newProducts = newProducts.filter(item => item.company === comp);
        }
        
        if (comp !== "All") {
            newProducts = newProducts.filter(item => item.company === comp);
        }
        
        if (colors !== "All") {
            // newProducts = newProducts.filter(item => item.colors === colors);
            newProducts = newProducts.filter(item => item.colors.indexOf(colors) != -1);
        }        

        newProducts = newProducts.filter(item => item.price <= price);
    
        if (shipping) {
            newProducts = newProducts.filter(item => item.shipping = false);
        }  else {
            newProducts = newProducts.filter(item => item.shipping = true);
        }

        setProducts(newProducts);
        
      }, [filters]);    


    return (
        <FilterContext.Provider value={{ resetFill , filterFunc , filters  }}>
            { children }
        </FilterContext.Provider>
    )
}