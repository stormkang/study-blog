# Generate a random HEX color
```js
// Generate a random HEX color
randomColor = () => `#${Math.random().toString(16).slice(2, 8).padStart(6, '0')}`;
// Or
const randomColor = () => `#${(~~(Math.random()*(1<<24))).toString(16)}`;
```