import axios from "axios";
import { useEffect, useState } from "react";
import Endpoints from "../../api/Endpoints";
import Product from "../Product";

const ProductList = () => {

    const catId = 3;
    const [products, setProducts] = useState([])

    const getData = () => {
        axios.get(Endpoints.PRODUCT_BY_CATID_URL + catId)
            .then(res => setProducts(res.data.data))
                .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [catId])

    return(
        <div>
            <h2 className="text-center">All Products</h2>
            <div className="row">
                {
                    products.map((product) => <Product data={product}/>)
                }
            </div>
        </div>
    )
}

export default ProductList;