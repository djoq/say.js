# say.js
installation: `$ npm install say.js`
------
## Development
```
> say = require('say.js').dev
```

## Production
```
> say = require('say.js').prod
```

### Usage
```
node> say("what up")
```
### Additional Ops ( available in 1.4.0 on npm)

```diff
node> say('Hello, World!').color('green');
+ [ Hello, World! ]

node> say('Hello, World!').color('red');

- [ Hello, World! ]
```




