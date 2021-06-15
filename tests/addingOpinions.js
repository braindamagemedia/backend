import axios from 'axios';

let payload = {
    title: 'EPIC TITUS',
    content: 'I AM WANTED BY THE IRS :)',
    author: 'Nehan'
};

axios.post('http://localhost:3000/add-opinion', payload)
    .then(res => console.log(res.data)) // You dont have to res.json() with axios 
    .catch(console.error);
