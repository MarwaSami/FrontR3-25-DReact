import React from 'react'

function ProudctCard({ item, fav }) {

    function display() {
        console.log(typeof fav);
        if (!fav) {

            return <a href="#" className="btn btn-primary">
                add to cart
            </a>
        }
        else {
            return <h2>fav proudct</h2>
        }
    }
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    {item.description}
                </p>
                {display()}

            </div>
        </div>
    )
}

export default ProudctCard