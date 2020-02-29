import React, {useEffect, useState} from 'react';
import {Link, withRouter, useLocation} from 'react-router-dom';

import '../Products.css';

const PRODUCTS_URL = 'http://localhost:5000/products';

const useFetch = (url) => {
    const [data, updateData] = useState(undefined);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            updateData(json);
        }
        fetchData();
    }, [url]);
    return data;
};

const Products = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setUrl(PRODUCTS_URL + '?name=' + params.get('name'));
    }, [location.search]);

    const [url, setUrl] = useState(undefined);

    const products = useFetch(url);

    if (!products) {
        return <div className="row"><div className="col-sm-12 text-center">Loading...</div></div>;
    } else {
        if (products.length === 0) {
            return (
                <>
                    <div className="row"><div className="col-sm-12 text-center">No Product(s) found</div></div>
                </>
            )
        } else {
            const productsList = products.map((product) => (
                <div className="col-sm-3 mb-3" key={product.id}>
                    <div className="card">
                        <div className="card-body">
                            <Link to={`/products/${product.id}`}>
                                <img src={require(`../../../static/${product.sku}_2.jpg`)} className="card-img-top" alt="..."/>
                            </Link>
                            <h6 className="card-title">{product.title}</h6>
                            <a href="#" className="btn btn-primary">Add to cart</a> <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                    </div>
                </div>
            ));
            return (
                <>
                    <div className="row">{productsList}</div>
                </>
            )
        }
    }
}

export default withRouter(Products);
