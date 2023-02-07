import { useEffect, useState } from "react"
import Product from "../interface/product"
import { api } from "../services/api/api"
import { useParams, Link } from 'react-router-dom'
import Header from "../components/header"

function ProductSpecifications() {

    const [produtos, setProduct] = useState<Product[]>([])

    // const { id } = useParams()

    useEffect(() => {
        api.get("/products/1")
            .then(res => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])
    console.log(produtos)

    return (
        <>
            <Header />
            <div>
                <Link to={'/'}>  Inicio </Link>
            </div>
            {
                produtos.map((produtos, index) => (
                    <div key={index}>
                        {produtos.id}
                    </div>
                ))
            }


        </>
    )
}
export default ProductSpecifications