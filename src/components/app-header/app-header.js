import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to={'/'} className="header__link" href="/">
                Menu
            </Link>
            <Link to={'/cart'} className="header__link" href="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({total}) => {
    return {
        total
    }
}

const mapDispatchToProps = {
    
};  

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);