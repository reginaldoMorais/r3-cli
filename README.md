# R3-CLI

Create React applications with Redux and Router v4, very fast.

## Installation

Run the command below, to have the module installed globally:

```bash
npm install -g r3-cli
```

## Usage

To see commands avaliable, run a single command with argument:

```bash
r3-cli --help
```

To create a new Project, run the command:

```bash
r3-cli
```

or

```bash
r3-cli -c my-app
```

It will create a directory called `my-app` inside the current folder.

You will found the initial Project structure:

```note
my-app
├── .gitignore
├── package.json
├── README.md
├── node_modules
└── source
    ├── assets
    │   ├── fonts
    │   ├── images
    │   └── styles
    │
    ├── client
    │   ├── index.ejs
    │   ├── index.html
    │   └── index.js
    │
    ├── config
    │   ├── index.js
    │   ├── config.env.json
    │   └── response.status.json
    │
    ├── server
    │   ├── excludesExtensions.js
    │   ├── index.js
    │   ├── server.js
    │   └── template.js
    │
    ├── view
    │   ├── templates
    │   ├── views
    │   │  ├── controller
    │   │  ├── pages
    │   │  │  └── index
    │   │  │     ├── __test__
    │   │  │     ├── Index.js
    │   │  │     ├── IndexActions.js
    │   │  │     └── IndexContainer.js
    │   │  │
    │   │  ├── In.js
    │   │  ├── Out.js
    │   │  └── PageNotFound.js
    │   │
    │   └── Imports.js
    │
    ├── AppReducer.js
    ├── Reducers.js
    ├── Routes.js
    └── Store.js
```

## Running your new Project

Inside the newly created Project, you need to set a Node version:

### Requisite

**NVM**

To easily switch Node versions for your Project, You can use [NVM](https://github.com/creationix/nvm) command:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
source ~/.bashrc
nvm install
nvm use
```

### Running

Afterward you can run some built-in commands:

```bash
npm start
```

or

```bash
yarn start
```

Your Project is ready to be accessed. Your can run the command **npm ls** or **yarn ls** to view available commands.

## Creating a new Route

To create a new route on your Project run the command bellow:

```bash
r3-cli --route
```

A new route and view will automatically be created.

## Creating a new View

To create a new view on your Project run the command bellow:

```bash
r3-cli --view
```

A new view will automatically be created.
It will be created the files:

```note
NewView.jsx
NewViewAction.js
NewViewContainer.jsx
NewViewReducer.jsx
```



## So, enjoy the plugin and Thank you for use it!
[Reginaldo Morais](mailto:reginaldo.cmorais@gmail.com)
