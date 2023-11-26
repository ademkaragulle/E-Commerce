import React from 'react'
import './Products.css'

function Products() {

    const products = [
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800

        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
        {
            productId: 1,
            prodductName: "iphone 11",
            productUrl: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.jpg",
            producrDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo voluptate soluta libero id mollitia officiis distinctio illum, aliquid ipsum dicta! Placeat aspernatur vitae amet voluptas excepturi similique quibusdam ducimus?",
            productScore: 3.8,
            productPrice: 1800
        },
    ]

    return (
        <div id='products' className='row g-3'>
            {products.map((product, index) => (
                <div key={index} className="col-4">
                    <div className='card card-relative'>
                        <a className="product-fav text-dark">
                            <i className="bi bi-heart"></i>
                        </a>
                        <div className="card-img">
                            <img className='w-100' src={product.productUrl} alt="" />
                        </div>
                        <div className="card-body">
                            <h3><a className='text-dark text-decoration-none' href="">{product.prodductName}</a></h3>
                            <span>Score: {product.productScore} <i className="bi bi-star-fill text-warning"></i></span><br />
                            <span>Price: {product.productPrice} $</span><br />
                            <div className="btn btn-primary mt-3 form-control">Add to cart</div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Products