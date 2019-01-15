<p align="center">
  <a href="https://github.com/reginaldoMorais/r3-cli-vscode-snippet">
    <img alt="r3-cli" src="https://image.ibb.co/cZZcUn/r3_cli_snippet_icons.png" width="244">
  </a>
</p>

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
    ├── actions
    │
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
    ├── reducers
    │
    ├── server
    │   ├── excludesExtensions.js
    │   ├── index.js
    │   ├── server.js
    │   └── template.js
    │
    ├── views
    │   ├── web
    │   │   ├── components
    │   │   ├── controller
    │   │   ├── pages
    │   │   │   └── index
    │   │   │       ├── __test__
    │   │   │       ├── Index.js
    │   │   │       ├── IndexActions.js
    │   │   │       └── IndexContainer.js
    │   │   │
    │   │   ├── templates
    │   │   │   ├── In.js
    │   │   │   ├── Out.js
    │   │   │   └── PageNotFound.js
    │   │   │
    │   │   └── Imports.js
    │   │
    │   └── mobile (future feature)
    │
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

A new route and view will automatically be created. It will be created the files:

/source/views/web/page/newView

```note
NewView.jsx
NewViewContainer.jsx
```

/source/actions

```note
NewViewActions.js
```

/source/reducers

```note
NewViewReducer.js
```

## So, enjoy the plugin and Thank you for use it!

[Reginaldo Morais](mailto:reginaldo.cmorais@gmail.com)
