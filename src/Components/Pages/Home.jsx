import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="card">
                    <img width="100%" src="home1.jpg" alt=""/>
                    <div className="card-img-overlay row">
                        <div className="display-1 font-weight-bold col-6">
                            <div style={{fontFamily: "Oswald, sans-serif"}}>Nike's <br/> New Collection</div>
                            <Link to="/brands/nike"><button className="btn btn-dark btn-lg" style={{fontFamily: "Oswald, sans-serif"}}>Shop Now</button></Link>
                        </div>
                        <div className="col-6 text-right">
                            <img src="nikelogo.png" width="250px" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}