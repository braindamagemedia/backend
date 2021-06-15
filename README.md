# backend
The backend for Pinion.

# Routes
The app has a few routes which allows you to make changes to the backend

### /get-opinions (GET)
This route just returns an array containing all the opinions.

### /add-opinion (POST)
This route is used to add new opinions. You can make a req to this as follows. I will be using axios.

```js
axios.post('/add-opinion', { title: 'random title', content: 'random content', author: 'random author' })
  .then(console.log)
  .catch(console.error)
```

### /search-opinion (GET)
This route consists of 2 sub routes. Namely

#### /search-opinion/title/:query
You can search for a opinion using the title as follows. Like again I will be using axios.

```js
axios.get('/search-opinion/title/yourqueryhere')
  .then(console.log) // This will return the single object which matches your query.
  .catch(console.error)
```

#### /search-opinion/author/:query
You can search for a opinion using the author as follows and ofcourse I will be using axios.

```js
axios.get('/search-opinion/author/yourqueryhere')
  .then(console.log) // This will return the single object which matches your query.
  .catch(console.error)
```
