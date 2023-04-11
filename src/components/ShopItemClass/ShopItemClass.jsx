import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';


export class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.good = props.good;
    }
    render() {
        return (
            <React.Fragment>
                <div className="main-content">
                    <h2>{this.good.brand}</h2>
                    <h1>{this.good.title}</h1>
                    <h3>{this.good.description}</h3>
                    <div className="description">{this.good.descriptionFull}</div>
                    <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                    <div className="price">{this.good.currency} {this.good.price}</div>
                    <button>Добавить в корзину</button>
                    </div>
                </div>
            </React.Fragment>
        )
        
    }
}


ShopItem.propTypes = {
    good: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string,
    })
  }