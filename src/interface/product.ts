interface Product {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: string;
    images: string;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    product:Product[];
}

export default Product