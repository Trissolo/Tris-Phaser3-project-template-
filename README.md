
# Tris Phaser 3 Webpack Project Template

My personal, ultra simple, Phaser 3 project template.
Based on [Richard Davery's template](https://github.com/photonstorm/phaser3-project-template) and [nkholski's boilerplate](https://github.com/nkholski/phaser3-es6-webpack).

### Requirements
[Node.js](https://nodejs.org) is required to install and run scripts.

## Install and run

Run next commands in your terminal:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies.| 
| `npm start`| Run the development server. Press `Ctrl + c` to kill **http-server** process. |
| `npm run-script build` | Build for deployment. |


**Directory structure**:

```sh
.
├── src
│   ├── constants
│   │   └── const.js
│   │
│   ├── blinkingText
│   │   └── BlinkingText.js
│   │
│   ├── scenes
│   │   ├── Game.js
│   │   └── Preload.js
│   │
│   └── index.js
│
│
├── static
│   ├── assets
│   │   └── atlas
│   │       └── logo.png
│   │
│   ├── game	                      <-- output.path
│   │   └── game.js                   <-- output.filename
│   │
│   └── index.html
│
├── package.json
├── package-lock.json
│
├── README.md
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

---
#### Note for me

To save time, during *developement* do:

| File | Line | Commented? | Result |
| --- | --- | --- | --- |
| **src/** index.js |1 | :heavy_check_mark: | //import 'phaser'
| **static/** index.html | 7 | | `<script src="https://cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js"></script>` |

...instead, in *production* do:

| File | Line | Commented? | Result |
| --- | --- | --- | --- |
| **src/** index.js |1 | | import 'phaser'
| **static/** index.html | 7 | :heavy_check_mark: | `<!--script src="https://cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js"></script-->` |
---
