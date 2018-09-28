const axios = require('axios');

console.log("HELLLLLLLLLLLLLOOOOOOOO");

const grabData = async () => {
  try {
    const { data } = await axios.get('/api/products');
    console.log(data);
  }
  catch(err) {
    console.log(err);
  }
}

grabData();


