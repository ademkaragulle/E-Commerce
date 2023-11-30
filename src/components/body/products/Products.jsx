import React, { useEffect } from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/slices/ProductSlice'
import { useSearchParams } from 'react-router-dom';

function Products() {
    const [category, setfirst] = useSearchParams("")
    const categoryId = category.get('categoryId')

    const { data } = useSelector((store) => {
        return {
            data: store.product.data,
        }
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct(categoryId))
    }, [dispatch, category])

    return (
        <div id='products' className='row g-3'>
            {data && data.map((product, index) => (
                <div key={index} className="col-4">
                    <div style={{ minHeight: "464px" }} className='card card-relative my-auto'>
                        <a className="product-fav text-dark bg-light">
                            <i className="bi bi-heart"></i>
                        </a>
                        <div style={{ height: "250px", overflow: "hidden" }} className="card-img">
                            <img style={{ height: "100%" }} src={product.images[0]} alt="" />
                        </div>
                        <div className="card-body">
                            <h5><a className='text-dark text-decoration-none ' href="">{product.title}</a></h5>
                            <span>Score: {product.id} <i className="bi bi-star-fill text-warning"></i></span><br />
                            <span>Price: {product.price} $</span><br />
                        </div>
                        <div className='px-3'>
                            <div className="btn btn-primary form-control my-0 mb-4">Add to cart</div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Products