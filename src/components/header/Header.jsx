import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

function Header() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => console.log(json))


    return (
        <div id='header'>
            <div className="container">
                <div className="row d-flex justify-content-between p-3">
                    <div className="col-6 header-logo">
                        <img className='h-100' src={logo} alt="" />
                    </div>
                    <div className="col-6 d-flex gap-4 justify-content-end align-items-center">
                        <Link to="adem">Adem</Link>
                        <Link to="adem">Adem</Link>
                        <Link to="adem">Adem</Link>
                        <Link to="adem">Adem</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header