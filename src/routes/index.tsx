import { Routes,Route } from "react-router-dom"
import Product from "../pages/Products"
import ProductSpecifications from "../pages/ProductSpecifications"

function Routa() {
    return (
        <>
         <Routes>
            <Route path= "/" element={<Product/>} />
            <Route path= "/produto/:id" element={<ProductSpecifications/>} />
        </Routes>
        </>
    )
}
export default Routa