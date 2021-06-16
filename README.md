# backend
The absolutely broken backend for Pinion.

# Routes
The app has a few routes which allows you to make changes to the backend

### /get-opinions (GET)
This route just returns an array containing all the opinions.

### /add-opinion (POST)
This route is used to add new opinions. You can make a req to this as follows. I will be using axios.

```js
axios.post('/add-opinion', { title: 'random title', content: 'random content', author: 'random author' }) // After the new api update you need to add a few more stuff. Check the main.js file in my front end api.
  .then(console.log)
  .catch(console.error)
```
