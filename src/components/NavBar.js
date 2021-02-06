import React from 'react'
import HomeIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ForumIcon from '@material-ui/icons/ForumOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const menu =[
    {
        id:1,
        name : "Acceuil",
        icon: HomeIcon

    },
    {
        id:2,
        name : "Favories",
        icon: FavoriteBorderIcon

    },
    {
        id:3,
        name : "Actualités",
        icon: ForumIcon

    },
    {
        id:4,
        name : "Moi",
        icon: PersonOutlineIcon

    }
]

function NavBar() {
    return (
        <div className="navbar">
            <div style={{width:"70%"}} className="navbar__items">
            {
                menu.map(item=>(
                    <Link to={item.name == "Acceuil" ? "/acceuil" : item.name }>
                    <div id={item.id} className="navbar__item">
                        <item.icon/>
                        <h6>{item.name}</h6>
                    </div>
                    </Link>
                    
                ))
            }
            </div>
            
        </div>
    )
}

export default NavBar
