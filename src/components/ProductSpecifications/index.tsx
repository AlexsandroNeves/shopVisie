import { useEffect, useState } from "react"
import Product from "../../interface/product"
import { productSpecifications } from "../../services/api/api"
import { useParams, Link } from 'react-router-dom'

import "./styles.css"

function ProductSpecifications() {

    const [produtos, setProduct] = useState<Product>()

    const { id } = useParams()

    useEffect(() => {
        productSpecifications(setProduct, id)
    }, [])
    console.log(produtos)

    return (
        <>
            <div className="product__principal">
                <div className="product__bloco-width">

                    <div className="product__bloco">
                        <div className="breadcrumbs">
                            <Link to={'/'}>  Inicio </Link>
                            <p className="breadcrumbs-barra">
                                /
                            </p>
                            <p>{produtos?.category}</p>
                        </div>
                        <div className="product__bloco-summary">
                            <div className="product__image">
                                <img src={produtos?.images[1]} alt="" />
                            </div>

                            <div className="product_container">

                                <h1 className="product__title">
                                    {produtos?.title}
                                </h1>

                                <p className="product__brand">
                                    Marca:  {produtos?.brand}
                                </p>

                                <p className="product__descounts">
                                    {produtos?.discountPercentage}% OFF
                                </p>

                                <p className="product__price">
                                    <span>R$</span> {produtos?.price},00
                                </p>
                                <Link to={`/`} className="button-product"> Compre agora</Link>

                                <Link to={`/atualizar-produto/${produtos?.id}`} className="button-product"> Editar produto</Link>

                                <Link to={`/`} className="button-product"> Excluir produto</Link>
                            </div>


                        </div>
                    </div>
                    <h2 className="product__title-description"> Descrição: </h2>
                    <p className="product__paragraf">{produtos?.description}</p>

                </div>
            </div>
        </>
    )
}
export default ProductSpecifications