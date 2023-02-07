import React, { useEffect, useState } from "react";
import { api } from "../../services/api/api";
import { Link } from "react-router-dom"
import Product from "../../interface/product";
import './styles.css'
const listaProduto = () => {
    const [produto, setProduto] = useState<Product[]>([]);
    useEffect(() => {
        api
            .get("/products?limit=12")
            .then((response) => setProduto(response.data.products))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    console.log(produto)
    return (
        <>
            <div className="block-primary-product">

                <div className="bloco-products">
                    {
                        produto.map((produtos, index) => (
                            <div key={index} className="products">
                                <Link to={`/produto/${produtos.id}`} className="link-product">
                                    <img src={produtos.images[0]} alt={produtos.description} className="image-product" />
                                    <p className="title-product">{produtos.title}</p>
                                </Link>
                                <p>{produtos.discountPercentage}%OFF</p>
                                <p className="price-product"> R$ {produtos.price} no pix</p>

                                <Link to={`/produto/${produtos.id}`} className="button-product"> Ver produto</Link>
                                <div className="block-acoes">
                                    <Link to={`/produto/${produtos.id}`} className="button-product button-width"> Editar</Link>
                                    <Link to={`/produto/${produtos.id}`} className="button-product button-width"> Excluir</Link>
                                </div>


                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default listaProduto