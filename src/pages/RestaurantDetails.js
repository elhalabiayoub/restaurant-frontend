import React from 'react'
import { Link } from 'react-router-dom'
import './RestaurantDetails.css'

function RestaurantDetails() {
    return (
        <div className="restaurantdetails">
            <img src="http://coveteur.com/wp-content/uploads/2018/03/london-regent-street-best-restaurants-2.jpg" />  
            <div className="restaurantdetails__menu">
                <Link to="/restaurant">
                <h3>Vue d'ensemble</h3>
                </Link>
                <Link to="/restaurant/photos">
                
                <h3>Photos</h3>
                </Link>
                <Link to="/restaurant/avis">
                <h3>Avis</h3>
                </Link>              
            </div>
        </div>
    )
}

export default RestaurantDetails
