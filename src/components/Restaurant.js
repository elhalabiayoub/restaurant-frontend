import React from 'react'
import "./Restaurant.css"
import StarRatings from 'react-star-ratings';

function Restaurant({data}) {
    return (
        <div className="restaurant">
            <div className="restaurant__image">
             <img src="http://coveteur.com/wp-content/uploads/2018/03/london-regent-street-best-restaurants-2.jpg"/>
            </div>
            <div className="restaurant__infos">
                <h2 style={{margin:0}}> {data.name}</h2>
                <StarRatings rating={2.403}
                 starDimension="20px"
                      starSpacing="5px" starRatedColor="rgb(255, 165, 0)" starEmptyColor="lightgrey" />
             <p style={{margin:0}}>{data.phone}</p>
               
            </div>
            
        </div>
    )
}

export default Restaurant
