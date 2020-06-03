import React from 'react';
import { Link } from 'react-router-dom'
import './module.css'

export default class AllProducts extends React.Component{
    render(){
        const brands = this.props.brands
        const { match } = this.props
        const brand = brands.find((elem) => elem.brand === match.params.brand)
        
        if(brand){
            return(
                <div>
                    <h1 className="text-center text-primary font-weight-bold mt-4">{brand.name}'s Collection</h1>
                    <div className="row">
                        {
                            brand.allproducts && brand.allproducts.map(item => (
                                <div className="col-4 my-4" key={item.product}>
                                    <div className="col brand">
                                        <div className="card rounded-lg border-0 shadow-lg mx-auto">
                                            <img src={item.url} className="card-img-top rounded-lg" alt=""/>
                                            <div className="card-body row">
                                                <div className="col-7">
                                                    <h4>{item.product}</h4>
                                                    <h5>Rating: 4.2</h5>
                                                </div>
                                                <div className="col-5 text-right my-auto">
                                                    <Link to={`${match.url}/${item.id}`}><button className="btn btn-primary">View Product</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        else{
            return(
                <h1>Error 404, Brand not found!</h1>
            )
        }
    }
}