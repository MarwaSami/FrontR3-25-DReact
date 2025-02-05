import React, { useEffect, useState } from 'react'
import ProudctCard from '../Components/ProudctCard';
import axiosInstance from '../axiosConfig/axiosConfig';

function Product() {

    console.log("init or mounting")
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ///init mounting without []
        //  did mount once time after render frist time component []
        console.log("i call one time");
        axiosInstance.get("products").then(res => {
            setProducts([...res.data.products]);
        }
        )


    }, [])
    // list rendering
    // i need to loop on array 
    // for map forin forof foreach filtter 
    return (

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                products.map((item, index) => {
                    return <ProudctCard item={item} />
                })
            }

        </div>
    )
}

export default Product