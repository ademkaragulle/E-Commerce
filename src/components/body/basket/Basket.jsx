import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from '../../store/slices/ProductSlice'



function Basket() {
    const [totalBasket, setTotalBasket] = useState(0)
    const count = useSelector((state) => state.productDatas.value)
    const dispatch = useDispatch()

    console.log(count)


    const inBasket = [
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

        }
    ]



    const calculateTotalPrice = () => {
        let price = 0
        inBasket.forEach((item) => price += item.productPrice)
        return price
    }

    useEffect(() => {
        setTotalBasket(calculateTotalPrice)
    }, [])





    return (
        <div className='basket'>
            <div className="card">
                <div className="cart-header">
                    <div className="cart-title m-3">
                        <h3>My Cart</h3>
                    </div>
                </div>
                <div className="car-body px-3">
                    {
                        inBasket.map((item, index) => (
                            <div key={index}>
                                <div className="row  py-2 my-2">
                                    <div className="col-4">
                                        <img className='w-100' src={item.productUrl} alt="" />
                                    </div>
                                    <div className="col-8">
                                        <span>{item.prodductName}</span><br />
                                        <span>Price: {item.productPrice} $</span>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    }
                    <div className="row p-2 ">
                        <div className="col-12 mb-3">Total Price: {totalBasket} $</div>
                        <div className="col-6 px-2">
                            <div className="btn-light btn border form-control">
                                Viev Bag
                            </div>
                        </div>
                        <div className="col-6 px-2 ">
                            <div onClick={()=>dispatch(increment())} className="text-white btn btn-warning btn border form-control">
                                Checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket