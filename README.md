# backend
The absolutely broken backend for Pinion.

# Routes
The app has a few routes which allows you to make changes to the backend

### /get-opinions (GET)
This route just returns an array containing all the opinions. Make a simple GET to this route.

### /add-opinion (POST)
This route is used to add new opinions. You can make a req to this as follows. I will be using axios.

```js
const date = new Date(); // This has to be a must since the api need dates and time to work

const payload = {
  title: 'Your title',
  content: 'Random Content',
  author: 'Random Author',
  date: date.toDateString(),
  time: `${date.getHours().toString()}:${date.getMinutes().toString()}` // This one and the one above (date) must be hard coded into app sadly.
 }

axios.post('/add-opinion', payload) 
  .then(console.log)
  .catch(console.error)
```
