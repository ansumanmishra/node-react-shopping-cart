import React from 'react';
import { Route, Switch } from "react-router-dom";
import Products from '../products/products-list/ProductsList';
import ProductDetails from '../products/product-details/ProductDetails';

const MainRoutes = (
        <Switch>
            <Route path="/products/:productId">
                <ProductDetails />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/">
                <Products />
            </Route>
        </Switch>
)

export default MainRoutes;