import React from 'react'
import ProudctCard from '../Components/ProudctCard';

function Fav() {
    const arr = [{ title: "p2", price: 22 }, { title: "p3", price: 22 }];

    return (
        <div style={{ display: 'flex' }}>
            {
                arr.map((item, index) => {
                    return <ProudctCard item={item} fav={true} />
                })
            }

        </div>
    )
}

export default Fav