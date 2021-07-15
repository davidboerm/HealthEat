import axios from "axios";
// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
    userSignup: function(userData) {
      return axios.post("/api/users/", userData)
        
    }
  };