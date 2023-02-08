import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Product from "../../interface/product";
import { api, productSpecifications } from "../../services/api/api";
import "./styles.css"

const ProductEdit = () => {
    const [title, setTitle] = useState()
    const [marca, setmarca] = useState()
    const [desconto, setdesconto] = useState()
    const [preco, setpreco] = useState()
    const [descricao, setdescricao] = useState()

    let navigate = useNavigate();
    const { id } = useParams()
    const [produtos, setProduct] = useState<Product>()

    useEffect(() => {
        productSpecifications(setProduct, id)
    }, [])

    const editproduct = (e: any) => {

        e.preventDefault();

        api.put(`product/${id}`, {
            title: title,
            brand: marca,
            discountPercentage: desconto,
            price: preco,
            description: descricao
        })
            .then((response) => {
                console.log()
                setProduct(response.data);
            });

    }
    return (
        <>
            <div className="product__container_edit">
                <div className="product__bloco">
                    <div className="product__edit-bloco-summary">
                        <div className="product__edit-image">
                            <img src={produtos?.images[0]} alt="" />

                        </div>

                        <div className="product_container">

                            <h1 className="product__title">
                                {produtos?.title}
                            </h1>
                            <p>
                                {produtos?.brand}
                            </p>

                            <p className="product__descounts">
                                {produtos?.discountPercentage}
                            </p>

                            <p className="product__price">
                                <span>R$</span> {produtos?.price},00
                            </p>
                            <Link to={`/produto`} className="button-product"> Compre agora</Link>
                        </div>

                        <div className="product__edit-description">
                        <h2 className="product__title-description"> Descrição: </h2>
                        <p className="product__paragraf">{produtos?.description}</p>
                        </div>

                    </div>
                </div>

                <div className="bloco-edit">

                    <h2 className="product__edit-title">Editar Produto</h2>

                    <form action="" onSubmit={(e) => editproduct(e)} className="product__form">


                        <label htmlFor="name" className="product__form-label" >Nome do produto:</label>
                        <input type="text" id="nome" className="product__form-input" required autoComplete="off" onChange={(e: any) => setTitle(e.target.value)} />

                        <label htmlFor="marca" className="product__form-label" >Marca do produto:</label>
                        <input type="text" id="marca" className="product__form-input" required autoComplete="off" onChange={(e: any) => setmarca(e.target.value)} />

                        <label htmlFor="desconto" className="product__form-label" >Valor de desconto:</label>
                        <input type="number" id="desconto" className="product__form-input" required autoComplete="off" onChange={(e: any) => setdesconto(e.target.value)} />

                        <label htmlFor="preco" className="product__form-label" >Preço do produto:</label>
                        <input type="number" id="preco" className="product__form-input" required autoComplete="off" onChange={(e: any) => setpreco(e.target.value)} />

                        <label htmlFor="descricao" className="product__form-label" >Descrição do produto:</label>
                        <textarea  id="descricao" className="product__form-input" required autoComplete="off" onChange={(e: any) => setdescricao(e.target.value)} />

                        <button className="product__edit-button"> Salvar</button>

                        <Link to={'/'} className="product__edit-button product__edit-cancelar">
                             Cancelar
                        </Link>
                    </form>
                </div>

            </div>
        </>
    )

}

export default ProductEdit