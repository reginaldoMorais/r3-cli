# R3-CLI

Create React apps with Redux and Router v4.

## Installation

Run the command below, to have the module globaly:

```bash
npm install -g r3-cli
```

## Usage

To create a new app, run a single command:

```bash
r3-cli
```

or

```bash
r3-cli -c my-app
```

To see commands avaliable, run a single command with argument:

```bash
r3-cli --help
```

It will create a directory called `my-app` inside the current folder.

Inside that directory, it will generate the initial project structure:

```note
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── client
│   └── index.html
│   └── index.js
├── config
│   └── index.js
│   └── config.env.json
│   └── response.status.json
├── server
│   └── index.js
│   └── server.js
├── public
│   └── images
│   └── fonts
│   └── styles
└── source
    └── views
        └── templates
        └── view
        └── imports.js
    └── CommonReducer.js
    └── Reducers.js
    └── Routers.js
    └── Store.js
```

Once the installation is done, you can open your project folder:

```bash
cd my-app
```

## Running your new App

Inside the newly created project, you need to set a node version:

### Requisite

**NVM**

To easily switch Node versions for your App, You can use [NVM](https://github.com/creationix/nvm) command:

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

Your app is ready to be accessed. Your can run the command **npm ls** or **yarn ls** to view available commands.

## Creating a new Route

To create a new route on your App run the command bellow:

```bash
r3-cli --route
```

A new view will automatically be created.

## Creating a new View

To create a new view on your App run the command bellow:

```bash
r3-cli --view
```

It will create the files:

```note
NewView.jsx
NewViewAction.js
NewViewContainer.jsx
NewViewReducer.jsx
```
