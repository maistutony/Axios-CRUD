import axios from "axios"

//get request
//the headers can contain limit to specify the number of results to be returned
//it also contains the authorization token which is used for authorization
import axios from 'axios';

axios.get('https://api.example.com/posts', {
  params: {
    limit: 10,
    offset: 0
  },
  headers: {
    Authorization: 'Bearer myToken'
  }
}) .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

//post request
//A post request must contain a payload, and may also contain authorization
//bearer token
//Use to add data to the end-point
const data = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'Hello, world!'
};

axios.post('https://example.com/api/messages', data, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer myToken'
  }
}).then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

//put request
//Put request is used to update the end-point data
//just like post and get the put request also contains header parameters
//the url will embed the id of the item to be updated
const toUpdate = {
  name: 'John Doe',
  email: 'john.doe@example.com'
};

axios.put('https://example.com/api/users/123', toUpdate, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer myToken'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

//delete request
//Used to remove data from an end-point
//123 is the id of the user to delete
axios.delete('https://example.com/api/users/123', {
  headers: {
    Authorization: 'Bearer myToken'
  }
}).then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

