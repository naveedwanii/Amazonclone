import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'; // Here I got the error when I used the icon with ShoppingBasket . The error was Module can't be found.
                                                                    


function Header() {
    return (
        <nav className = "header">
            <Link to ='/login'>
              <img className = "header__logo" 
              src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" />  
          </Link>
          
          {/* Search Box*/ }
          <div className = "header__search">
             <input type = "text" className = "header__searchInput" />
             <SearchIcon className = "header__searchIcon" />
          </div>

          {/*3 Links*/}
           <div className = "header__nav">

            {/*1st Link */}

             <Link to = "/login" className = "header__link">
             <div className = "header__option">
               <span className = "header__optionLineOne">Hello Naveed</span>
               <span className = "header__optionLineTwo">Sign In</span>
             </div>
             </Link>

             {/*2nd Link */}
             <Link to = "/" className = "header__link">
             <div className = "header__option">
               <span className = "header__optionLineOne">Returns</span>
               <span className = "header__optionLineTwo">& Orders</span>
             </div>
             </Link>
             
             {/*3rd Link */}
             <Link to = "/" className = "header__link">
             <div className = "header__option">
               <span className = "header__optionLineOne">Your</span>
               <span className = "header__optionLineTwo">Prime</span>
             </div>
             </Link>
           </div>

          {/*Basket Icon with number */}
          <Link to = "/checkout" className = "header__link">
              <div className = "header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className = "header__optionLineTwo header__basketCount">0</span>
              </div>
          </Link>

        </nav>
    )
}

export default Header
