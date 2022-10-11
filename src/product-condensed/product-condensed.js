import React,{Component} from 'react';
import './product-condensed.css'
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component{
    
    constructor(props){
        super(props);
        
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }
    
    render(){
        return(
                <li className="list-group-item">
                    <a className="btn btn-outline-danger pc-condensed" onClick={() => this.removeProduct()}>X</a>
                    <label className="pc-condensed">{this.props.product.text} | <b>${this.props.product.price}</b></label>
                </li>
        );
    }
}

export default ProductCondensed;