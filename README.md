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
### Additional Ops (currently only git, npm to come)

```diff
node> say('Hello, World!').color('green');
+ [ Hello, World! ]

node> say('Hello, World!').color('red');

- [ Hello, World! ]
```




