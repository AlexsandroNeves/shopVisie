import { Routes, Route } from "react-router-dom"
import Product from "../pages/Products"
import ProductSummary from "../pages/ProductSummary"
import ProductUpdate from "../pages/ProductUpdate"

function Routa() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/produto/:id" element={<ProductSummary />} />
                <Route path="/atualizar-produto/:id" element={<ProductUpdate />} />
            </Routes>
        </>
    )
}
export default Routa