import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../interface/product";
import { api } from "../../services/api/api";
// import { ProductUpdate } from "../../services/api/api";
import "./styles.css"

interface TipoPassaro {
    title: string,
    brand: string,
    discountPercentage: number,
    price: number,
    description: string
}
const ProductEdit = (data: TipoPassaro) => {
    const [produtos, setProduct] = useState<Product>()
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [marca, setmarca] = useState()
    const [desconto, setdesconto] = useState()
    const [preco, setpreco] = useState()
    const [descricao, setdescricao] = useState()

    const editproduct = (e: any) => {
        e.preventDefault();

        console.log(title, marca, desconto, preco, descricao)
        try {
            const response = api.put(`/products/${id}`, data);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    return (
        <>
            <h2 className="product__edit-title">Editar Produto</h2>

            <form action="" onSubmit={(e) => editproduct(e)} className="product__form">


                <label htmlFor="name" className="product__form-label" >Nome do produto:</label>
                <input type="text" id="nome" className="product__form-input" onChange={(e: any) => setTitle(e.target.value)} />

                <label htmlFor="marca" className="product__form-label" >Marca do produto:</label>
                <input type="text" id="marca" className="product__form-input" onChange={(e: any) => setmarca(e.target.value)} />

                <label htmlFor="desconto" className="product__form-label" >Valor de desconto:</label>
                <input type="text" id="desconto" className="product__form-input" onChange={(e: any) => setdesconto(e.target.value)} />

                <label htmlFor="preco" className="product__form-label" >Preço do produto:</label>
                <input type="text" id="preco" className="product__form-input" onChange={(e: any) => setpreco(e.target.value)} />

                <label htmlFor="descricao" className="product__form-label" >Descrição do produto:</label>
                <input type="text" id="descricao" className="product__form-input" onChange={(e: any) => setdescricao(e.target.value)} />

                <button className="product__edit-button"> Salvar</button>
            </form>

        </>
    )

}

export default ProductEdit