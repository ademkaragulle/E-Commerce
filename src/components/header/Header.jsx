import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcategory } from '../store/slices/CategorySlice'
import { changeCurrentCategory } from '../store/slices/CurrentCategorySlice'

function Header() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcategory())
    }, [dispatch])

    const { data, loading, error } = useSelector((store) => {
        return {
            data: store.category.data,
            loading: store.category.loading,
            error: store.category.error,
        }
    })



    console.log(data)

    return (
        <div id='header'>
            <div className="container">
                <div className="row d-flex justify-content-between p-3">
                    <div className="col-6 header-logo">
                        <img className='h-100' src={logo} alt="" />
                    </div>
                    <div className="col-6 d-flex gap-4 justify-content-end align-items-center">
                        {data && data.map((item, index) => (
                            <div className='btn' onClick={() => (changeCurrentCategory(item.id))} key={index}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header