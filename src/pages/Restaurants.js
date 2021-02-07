import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Restaurant from '../components/Restaurant'

function Restaurants() {
    const [restaurants , setRestaurants] = useState([])
    useEffect(()=>{
      
        axios.get('http://localhost:8080/restaurants').then((res)=>{
            setRestaurants(res.data)
            console.log(restaurants)

        })
    },[])
    return (
        <div className="restaurants" >
      {
          restaurants?.map((restaurant) => (
              <Link to="/restaurant">
              <Restaurant data={restaurant} />
              </Link>
             
          ))
      }
           
            
        </div>
    )
}

export default Restaurants
