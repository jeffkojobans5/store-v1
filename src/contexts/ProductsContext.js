import  React , { createContext } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export function ProductsProvider ({children}) {    

    const [category , setCategory] = React.useState([])
    const [company , setCompanies] = React.useState([])
    const [color , setColor] = React.useState([])
    const [loading , setLoading] = React.useState(true);
    const [products , setProducts] = React.useState([]);

    function fetchApi () {
        axios.get('https://course-api.com/react-store-products').then((response)=>{
                let res = response.data                        

                let allCategories = res.reduce((prev , curr) => {
                    return [...prev , curr.category]
                },'');
                
                let allCompanies = res.reduce((prev , curr) => {
                    return [...prev , curr.company]
                },'');   

                let allColors = res.reduce((prev , curr) => {
                    return [...prev , ...curr.colors]
                },'');   

                let newCategorySet = [ 'All' , ...new Set (allCategories) ]
                let newCompaniesSet = [ 'All' , ...new Set (allCompanies) ]
                let newColorSet = [ 'All' , ...new Set (allColors) ]
                
                
                setCategory(newCategorySet);
                setCompanies(newCompaniesSet);
                setColor(newColorSet);
                setLoading(false)
                setProducts(response.data)

        }).catch((error)=>{
            console.log(error)
        })
    }

    React.useEffect(()=>{
        fetchApi()
    },[])
        

    return (
        <ProductsContext.Provider value={ { category , company , color , loading , products} }>
            { children }
        </ProductsContext.Provider>
    )
}