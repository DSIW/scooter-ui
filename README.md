# scooter-ui

UI for [scooter-api](https://github.com/DSIW/scooter-api)

## Requirements

* Node.js

## Setup

1. Install Node.js 9.3 including NPM (I use [nodenv](https://github.com/nodenv/nodenv))
2. Install dependencies: `npm install`

## Start server

1. Start `scooters-api` on port 7000
2. Start UI:

```sh
$ npm start
```

This opens a browser pointing to `http://localhost:3000`.

## Overview UI

```
GET /scooters/current
```

![ui](scooter-ui-overview.png)

## Detail UI


```
GET /scooters/123XXX
```

![ui](scooter-ui-detail-example.png)

## License

MIT License

Copyright (c) 2018 DSIW

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
