import React from "react";

const BusinessInfo = () => {
  return (
    <div>
      <div>
        <img src={this.props.businessDetails.image_url} alt="" />
      </div>
      <h2>{this.props.businessDetails.name}</h2>
      <div>
        <div>
          <p>{this.props.businessDetails.location.address1}</p>
          <p>{this.props.businessDetails.location.city}</p>
          <p>
            {this.props.businessDetails.location.state}{" "}
            {this.props.businessDetails.location.zipCode}
          </p>
        </div>
        <div>
          <h3>{this.props.businessDetails.rating} stars</h3>
          <p>{this.props.businessDetails.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
