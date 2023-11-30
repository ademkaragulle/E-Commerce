import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getcategory } from '../store/slices/CategorySlice'
import { useSearchParams } from 'react-router-dom'

function Header() {
    const [searchParams, setSearchParams] = useSearchParams("")


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcategory())
    }, [dispatch])

    const { data } = useSelector((store) => {
        return {
            data: store.category.data,

        }
    })

    return (
        <div id='header'>
            <div className="container">
                <div className="row d-flex justify-content-between p-3">
                    <div className="col-6 header-logo">
                        <img className='h-100' src={logo} alt="" />
                    </div>
                    <div className="col-6 d-flex gap-4 justify-content-end align-items-center">
                        <div onClick={() => setSearchParams()} className='btn'>All Category</div>
                        {data && data.map((item, index) => (
                            index < 6 && <div onClick={() => setSearchParams({ categoryId: item.id })} className='btn' key={index}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header