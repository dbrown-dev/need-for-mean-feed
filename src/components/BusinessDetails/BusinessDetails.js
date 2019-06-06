/* eslint-disable linebreak-style */
import React from "react";
import Yelp from "../../util/Yelp";

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.yelpDetails = this.yelpDetails.bind(this);
  }

  yelpDetails(id) {
    Yelp.getDetails(id).then(businessDetails => {
      this.setState({ businessDetails: businessDetails });
    });
  }

  componentDidMount() {
    this.yelpDetails(this.props.match.params.id);
  }

  render() {
    if (this.state.businessDetails) {
      return (
        <div>
          <div>
            <img src={this.state.businessDetails.image_url} alt="" />
          </div>
          <h2>{this.state.businessDetails.name}</h2>
          <div>
            <div>
              <p>{this.state.businessDetails.location.address1}</p>
              <p>{this.state.businessDetails.location.city}</p>
              <p>
                {this.state.businessDetails.location.state}{" "}
                {this.state.businessDetails.location.zipCode}
              </p>
            </div>
            <div>
              <h3>{this.state.businessDetails.rating} stars</h3>
              <p>{this.state.businessDetails.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default BusinessDetails;
