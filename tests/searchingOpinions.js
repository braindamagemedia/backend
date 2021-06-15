import axios from 'axios';

// Searching by author
axios.get('http://localhost:3000/search-opinion/author/Nehan')
    .then(res => console.log(res))
    .catch(console.error);


// Searching by Title
axios.get('http://localhost:3000/search-opinion/title/EPIC TITUS')
    .then(res => console.log(res.data))
    .catch(console.error);


