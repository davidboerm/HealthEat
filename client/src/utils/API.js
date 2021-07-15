import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://api.edamam.com/api/recipes/v2?type=public&q="
      + query +
      "&app_id=2fc56cea&app_key=d7e6c9758f994a47e5d7ddd9a9cd5e46" 
    );
  }
};

// API key
// d7e6c9758f994a47e5d7ddd9a9cd5e46	