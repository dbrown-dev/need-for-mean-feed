const apiKey = "V5rZ7ul5pHcSFDAon4yLv_RVNLK3Y2rmcGSEmkmL5YMKbTRmoGNVfyfD-a_iV8Id2JSQA3lkFs5CM6ulTeXcp3vDelFIFPH9eoRIZE5mDPHxSbm-et6t36_M3affXHYx"

// const browserHeader = { headers: { Authorization: `Bearer ${apiKey}` } };

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  },

  getDetails(id) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    ).then(response => {
      return response.json();
    });
  }
};

export default Yelp