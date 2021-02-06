import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Review.css"
import StarRatings from 'react-star-ratings';

function Review() {
    return (
        <div className="review">
            <Avatar/>
            <div className="review__content">
                <div style={{display:"flex" , alignItems:"center" }}>
                <StarRatings rating={2.403}
                 starDimension="20px"
                      starSpacing="5px" starRatedColor="rgb(255, 165, 0)" starEmptyColor="lightgrey" />
                      <p style={{marginLeft:"10px"}}>( date d'ajout du commentaire est : 10 aout 2020 )   </p>
                </div>
           
                      <h3>Titre du commentaire</h3>
                      <p >this is the comment </p>
            </div>
        </div>
    )
}

export default Review
