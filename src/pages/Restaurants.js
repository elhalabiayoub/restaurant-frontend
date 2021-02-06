import React from 'react'
import { Link } from 'react-router-dom'
import Restaurant from '../components/Restaurant'

function Restaurants() {
    return (
        <div className="restaurants" >
            <Link to="/restaurant">
            <Restaurant />
            </Link>
            <Restaurant/>
        </div>
    )
}

export default Restaurants
