import React from 'react';
import { Link } from 'react-router-dom';
import './module.css';

export default class Brands extends React.Component{
    render(){
        const brands = this.props.brands
        const { match } = this.props
        
        return(
            <div className="row">
                {
                    brands && brands.map(item => (
                        <div className="col-12 col-sm-6 col-xl-4 my-4" key={item.name}>
                            <div className="col brands">
                                <div className="card rounded-lg border-0 shadow-lg mx-auto">
                                    <Link to={`${match.url}/${item.brand}`}><img src={item.imgurl} className="card-img-top rounded-lg" alt=""/></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}