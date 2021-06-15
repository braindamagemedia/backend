import axios from 'axios';

axios.get('http://localhost:3000/get-opinions')
    .then(res => console.log(res.data)) // This returns and array
    .catch(console.error);

