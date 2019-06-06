/* eslint-disable linebreak-style */
import React from "react";
import { Link } from "react-router-dom";
import "./Business.css";

class Business extends React.Component {
  render() {
    const urlId = "/details/" + this.props.business.id;
    return (
      <Link to={urlId}>
        <div className="Business">
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt="" />
          </div>
          <h2>{this.props.business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>
                {this.props.business.state} {this.props.business.zipCode}
              </p>
            </div>
            <div className="Business-reviews">
              <h3 className="rating">{this.props.business.rating} stars</h3>
              <p>{this.props.business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Business;
