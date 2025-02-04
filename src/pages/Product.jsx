import React from 'react'
import ProudctCard from '../Components/ProudctCard';

function Product() {
    // list rendering
    const arr = [{ title: "p1", price: 22 }, { title: "p2", price: 22 }, { title: "p3", price: 22 }];
    // i need to loop on array 
    // for map forin forof foreach filtter 
    return (
        <div style={{ display: 'flex' }}>
            {
                arr.map((item, index) => {
                    return <ProudctCard item={item} />
                })
            }

        </div>
    )
}

export default Product