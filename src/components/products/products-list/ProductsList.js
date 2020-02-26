import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Products.css';

class Products extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/products')
        .then((resp) => resp.json())
        .then( (res) => {
            this.setState({
                products: res.products,
            })
        });
    }

    render() {
        const productsList = this.state.products.length ? this.state.products.map( (product) => {
            return (
                <div className="col-sm-3" key={product.id}>
                    <div className="card">
                        <div className="card-body">
                            <Link to={`/products/${product.id}`}>
                                <img src={require(`../../../static/${product.sku}_2.jpg`)} className="card-img-top" alt="..." />
                            </Link>
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div>
            )
        }) : <div>No Records found</div>
        return (
            <>
                <div className="row">
                    {productsList}
                </div>
            </>
        )
    }
}

export default Products;