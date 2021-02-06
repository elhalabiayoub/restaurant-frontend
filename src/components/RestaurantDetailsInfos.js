import { IconButton } from '@material-ui/core';
import React from 'react'
import StarRatings from 'react-star-ratings';
import Heart from '@material-ui/icons/FavoriteBorderOutlined';
import Pc from '@material-ui/icons/ComputerOutlined';
import Phone from '@material-ui/icons/PhoneAndroidOutlined';
import Email from '@material-ui/icons/EmailOutlined';
import Address from '@material-ui/icons/MyLocationOutlined';
import Help from '@material-ui/icons/DirectionsOutlined';

import './restaurantdetailsinfos.css'

function RestaurantDetailsInfos() {
    return (
        <div className="restaurantdetailsinfos">
            <div style={{display:"flex" , justifyContent:"space-between" }}>
            <div className="restaurant__infos" style={{margin:"0px"}}>
                <h2 style={{margin:0}}> nom du restaurant</h2>
                <StarRatings rating={2.403}
                 starDimension="20px"
                      starSpacing="5px" starRatedColor="rgb(255, 165, 0)" starEmptyColor="lightgrey" />
                 <p style={{margin:0}}>adresse du restaurant</p>
              
            </div>
            <IconButton aria-label="delete" style={{width:"50px" , height:"50px"}}  color="primary">
                <Heart />
              </IconButton>
            </div>
            <h3>Informations sur le réstaurant</h3>
            <div className="restaurantdetailsinfos__item">    
                <Pc/>
                    <p>visiter le site web</p>
                
            </div>
            <div className="restaurantdetailsinfos__item">    
                <Phone/>
                    <p>00-000-0000</p>
                
            </div>
            <div className="restaurantdetailsinfos__item">    
                <Email/>
                    <p>Email</p>
                
            </div>
            <div className="restaurantdetailsinfos__item">    
                <Help/>
                    <p>comment s'y rendre</p>
                
            </div>
            <div className="restaurantdetailsinfos__item">    
                <Address/>
                    <p>addresse du restaurant</p>
                
            </div>
   
            
        </div>
    )
}

export default RestaurantDetailsInfos
