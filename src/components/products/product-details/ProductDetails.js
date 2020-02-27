import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';


const ProductDetails = (props) => {
    const [product, setProduct] = useState();
    const productId = props.match.params.productId;

    const URL = `http://localhost:5000/products/${productId}`;
    useEffect(() => {
        fetch(URL)
        .then((resp) => resp.json())
        .then( (res) => {
            setProduct(res[0]);
        });
        return () => {
        };
    }, [URL]);
    
    if (product) {
        return (
            <>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img src={require(`../../../static/${product.sku}_1.jpg`)} className="card-img-top" alt={product.title} />
                            </div>
                        </div>   
                    </div>
                    <div className="col-sm-8">
                    <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum aut deserunt nisi, necessitatibus dolor inventore maiores! Natus, eum, corrupti qui tenetur non nostrum saepe vero nam quod cum adipisci cumque?</p>
                        <a href="#" className="btn btn-primary">Add to cart</a> <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div>Loading...</div>
            </>
        )
    }

};

// class ProductDetails extends Component {
//     render() {
//         const {match} = this.props;
//         console.log(match)
//         return (
//             <>
//                 <div>Hello</div>
//             </>
//         )
//     }
// }

export default withRouter(ProductDetails);
