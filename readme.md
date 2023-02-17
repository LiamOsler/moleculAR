# Molecular AR Viewer Application

**Link to Prototype:** https://wicked-awesome-chemistry.azurewebsites.net/
**Main Readme:** https://git.cs.dal.ca/osler/csci4177-project-readme

This is a web application that allows users to view 3D models of molecules in Augmented Reality. The application uses the AR.js library to detect markers and display 3D models in the browser.

### Prerequisites

Before running the program, make sure you have Node.js installed:

- [Node.js](https://nodejs.org/en/) 

### Installation

Clone the repository:

```
git clone https://github.com/LiamOsler/moleculAR.git
```

Install the dependencies:

```
npm install
```

## Running the Server

To start the server, run the following command:

```
npm start
```

The server will start listening on port 4000. You can now access the server by visiting http://localhost:4000.

## The Tech Stack

### Back End:
#### Node.js
Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

#### Express.js
Express has been called the de facto standard server framework for Node.js. Express provides a minimal and flexible set of features for creating web applications and APIs. It provides a set of features like routing, middleware, view system, etc. It simplifies the server creation process that can be used to create a web application more easily and quickly. Here is a guide to getting started with Express.js: https://expressjs.com/en/starter/installing.html

**Future Action Items:**
- Learn about Node.js and Express.js
- Learn how to create a simple Express.js server
- Learn how to create a new Express.js project using the Express Generator
- Learn how to create a new route in Express.js
- Learn how to serve static files in Express.js
- Learn how to send a variable to a template as part of a response in Express.js

#### Templating Engines:
Templating engines are tools used to generate HTML from data and templates. They allow developers to separate the view (HTML) from the controller (data) and create dynamic HTML pages. Templating engines are used in a variety of web development frameworks and technologies, such as Node.js and Express.js. They allow developers to write HTML code with placeholders for variables, which are then replaced with the actual data when the page is rendered. This makes it easier to maintain and update the HTML code. There are quite a few templating engines available. Here is a list in the Express.js docs: https://expressjs.com/en/resources/template-engines.html

**Future Action Items:**
- Learn about templating engines
- Learn how to use a templating engine in Express.js

##### EJS (Embedded JavaScript):
EJS (Embedded JavaScript) is a templating engine used by Node.js developers. It is used to generate HTML from data and templates. It more features such as loops, conditionals, and template inheritance. EJS is simple to use and supports the use of JavaScript for more complex operations. It is often used in combination with Node.js and Express.js to create dynamic web pages. Here is a link to EJS's documentation: https://ejs.co/#docs

**Future Action Items:**
- Learn EJS's syntax
- Practice sending a variable from the server to the client using EJS
- Practice using EJS to render a list of items from an array
- Practice using EJS to render a list of items from a database

### Future opportunities for development around the tech stack:
#### Using a database:
Currently I am not connecting the front-end of the application to a database. This was primarily for sake of convenience. Thus I am accessing files saved locally within the repository for the such things as the source mol files used to generate the 3D models. Ideally, the contents of the these text files would be stored in a database. The group before us used Supabase, and there is a Supabase library for Node.js: https://www.npmjs.com/package/@supabase/supabase-js which looks promising. If someone in the group feels like they have strong MySQL or MongoDB skills, they could use those instead.

**Future Actions Items:**:
- Whatever we decide on, ideally we come up with a sensible schema for our database and create a testing database to work with. We may want to come up with a rough idea for both a entity-relationship model and a document-oriented model. In either case the database should be relatively simple in its structure.


# Example Exercise:
## Adding a new route to the website.
This is an exercise I propose for everyone to undertake in order to understand the basics of the tech stack as I have laid out so far.

First, understand what a route is:

When you visit a website, you are sending a request to a named resource. This resource is called a route. A route is a combination of a URL path and a specific HTTP request method (GET, POST, PUT, DELETE, etc.). Each route can have one or more handler functions, which are executed when the route is matched.

Say for instance I wish to visit our website, the route to the homepage might be:

```
https://wicked-awesome-chemistry.azurewebsites.net/
```

I submit a GET request to this route, and the server responds with the HTML for the homepage.

Say for instance I wanted to visit the page that lists the complete catalog of items that the website has to offer. The route to this page might be:

```
https://wicked-awesome-chemistry.azurewebsites.net/catalog
```

When I submit a GET request to this route, the server responds with the HTML for the catalog page.

Now, let's consider that the entry point to our application. If you were to generate a new express site using the express command:
```
express --view=ejs
```

You will have a new directory structure that looks something like this:
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    └── index.ejs
```

The `app.js` file is what run on startup. It is the entry point to the application. It is where we configure the application, and where we define the routes that the application will respond to.

Take a look a the the contents of the app.js file generate by the express site generator, in it you will see a few important lines:
```js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```
You can see these as files in the `routes` directory. Their names are `index.js` and `users.js`. These files are where we define the routes that the application will respond to. The `index.js` file is where we define the routes for the homepage, and the `users.js` file is where we define the routes for the user management pages.

After setting some parameters on the express app, we tell the Express app to use these routes in the ```app.js``` file:
```js
//Note how indexRouter has been called with just a "/"
app.use('/', indexRouter); 
//If you visit the base URL + "/users" you will be routed through the usersRouter
app.use('/users', usersRouter);

```

These correspond to the `index.js` and `users.js` files in the `routes` directory. These files are where we define the routes that the application will respond to. The `index.js` file is where we define the routes for the homepage, and the `users.js` file is where we define the routes for the user management pages.

Lets take a look at the contents of the `index.js` file:
```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

Look at where it says `res.render`: there are options here. What `res.render` is telling Express to do is to render the contents of the "index" view in the "views" directory. The "index" view is an EJS file, which is a templating engine that allows us to inject data into the HTML that we are serving. In this case, we are injecting the title "Express" into the HTML. This is how we can dynamically generate HTML pages. Take a look at the contents of the `index.ejs` file:
```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```

Note the `<%= title %>` tags. These are where the data is injected into the HTML. The `<%=` tag is an EJS tag that tells the EJS engine to inject the data into the HTML. The `title` variable is defined in the `app.js` file, and is passed to the `index.ejs` file as a parameter.

Say we wanted to add another variable to the `index.ejs` file. We could do this by adding another parameter to the `res.render` function in the `index.js` file:

```js
//This code...
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Becomes...
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subtitle: 'This is a website made using express' });
});

```

You could then edit your HTML to include the subtitle:
```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <p><%= subtitle %></p>
  </body>
</html>
```

You could even pass a JSON object through the `res.render` function:
```js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', testJSON: {someText: "Hello", someNumber: 2, someArray: [1,2,3], anotherObject:{someMoreText: "World"}} });
});
```

We're not limited to just using the `render` function to render HTML. We can use `res.json` to instead send a JSON response:
```js
router.get('/', function(req, res, next) {
  res.json({someText: "Hello", someNumber: 2, someArray: [1,2,3], anotherObject:{someMoreText: "World"}});
});
```

If you visited that URL. It would will result in your browser displaying the response as JSON, rather than as HTML. 
```json
{
    "someText": "Hello",
    "someNumber": 2,
    "someArray": [1, 2, 3],
    "anotherObject": {
        "someMoreText": "World",
        "evenMoreText": "Do you like my JSON?"
        },
    "lastItem": "Would you like to more?"
}
```

This can be useful if you want to use Express to develop an API. Serving JSON from an API means you have more versatility in how you can use the data. You could use it to build a mobile app, or a desktop app, or a web app. You could even use it to build a game. If you want to build a front-end using React, you could use Express to serve the JSON data to the React app, but you will probably not need to use a templating engine. However, there may be parts of a website which you may want to serve using templating. This might include HTML documentation of the APIs endpoints as a static HTML page, or a page that displays the current status of a server.

## Adding an admin route to the application:

Say for instance we want to add a new page to our application. We could do this by creating a new route in the `app.js` file:

At the start of the file:
```js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//New code to add:
var adminRouter = require('./routes/admin');
```

Then we need to tell the Express app to use the new route:
```js
app.use('/', indexRouter); 
app.use('/users', usersRouter);
//New code to add:
app.use('/admin', adminRouter);
```

Now we need to add a new file to the `routes` directory. We will call it `admin.js` and add this content to it:
```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin Page' });
});

module.exports = router;
```

Then, in the "views" directory, we need to create a new file called `admin.ejs` and add this content to it:
```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```

Once you add these files, **and restart the server**, you should be able to visit the `/admin` page and see the new page. For instance, visit `http://localhost:4000/admin` in your browser, and you will see the contents of the `admin.ejs` file rendered to HTML.

After adding these files, your directory structure should look like this:

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── admin.js
│   ├── index.js
│   └── users.js
└── views
    ├── admin.ejs
    ├── error.ejs
    └── index.ejs
```

By adding new files to the `routes` directory, we can add new routes to our application. We can also add new files to the `views` directory, and use them to render HTML pages. This is the basic structure of an Express application.

Of course, there may be things that we want to do like creating "dynamic routes". For instance, you may want a route that looks like this: `/users/1234`. This would be a route that would display the user with the ID of 1234. If you want to read up on how to do this, you can read the Express documentation on "route parameters": https://expressjs.com/en/guide/routing.html#route-parameters

## The `/public/` directory:
Note how in the previous example I was able to access the the contents of the `style.css` file by using the URL: `/stylesheets/style.css`. This is because Express has a built-in middleware function called `express.static` which is used to serve static files. This means that any files in the `public` directory can be accessed by using the `/public` URL. For instance, if you wanted to access the `style.css` file, you could use the URL: `/public/stylesheets/style.css`.

The `/public/` folder can also be used for serving other things. At the moment of writing, the contents of the molecular viewer prototype's `/public/` folder looks like this:
```
.
├── catalog
├── cjson
├── data
├── datgui
├── img
├── js
├── jsartoolkit5
├── molfiles
└── threex
```

Explanation:
The `catalog` directory included a .JSON file which has information about the particulars of the molecules. The `cjson` folder includes a script called `converter.js` which I wrote converts molfiles to JSON objects. We then have a folder called `data` which included some sample patterns and molecules. The `datgui` folder includes a script called `dat.gui.js` which is used to create a GUI for the application. The `img` folder includes some images which are used in the application. The `js` folder includes the main script for the application. The `jsartoolkit5` folder includes the AR.js library. The `molfiles` folder includes some sample molecules as .mol files . The `threex` folder includes scripts which handle DOM events.

You can see that some of these files are accessed in the header of the `molecule.ejs` file:

```html
<link rel='stylesheet' href='/styles/style.css' />
<script src='/js/three.js'></script>
<!-- include jsartookit -->
<script src="/jsartoolkit5/artoolkit.min.js"></script>
<script src="/jsartoolkit5/artoolkit.api.js"></script>
<!-- include threex.artoolkit -->
<script src="/threex/threex-artoolkitsource.js"></script>
<script src="/threex/threex-artoolkitcontext.js"></script>
<script src="/threex/threex-arbasecontrols.js"></script>
<script src="/threex/threex-armarkercontrols.js"></script>
<!-- include datgui debugging purposes -->
<script type="text/javascript" src="/datgui/dat.gui.min.js"></script>
<!-- include Mol file to CJSON conversion extras -->
<script src="/cjson/converter.js"></script>
```

## CORS and HTTPS:
The AR.js library requires that the application is served over HTTPs. This is because the AR.js library uses the WebRTC API, which requires special permissions to be granted by the user. This is why we need to use HTTPS. If you want to develop locally, you can ignore the warnings about the SSL certificate being invalid. If you want to secure the application locally, you will need to generate some SSL certificate credentials. For instruction on how to do this (generating the `cert.pem`, `csr.pem` and `key.pem` files), and how to use them with NodeJS, take a look at this article: https://adamtheautomator.com/https-nodejs/

When deploying to a cloud service like Azure Websites, HTTPS is enabled by default, so it makes it easier to deploy the application to a platform like Azure. Other services may need more effort in order to be configured to use HTTPS.

## Features in need of implementation:
### Authenticated User View:
We probably want to determine to what extent authentication is required for the application. I'm inclined to say we only need on authenticated "view" in the application, which is the "administration" pages, which would involve an authorized user (The client, Mark) being able to upload a new molecule (from a molfile retrieved from Chemspider) and add a new record to the database that includes the corresponding information for the molecule, imported using the Chemspider API. This would require a Chemspider API key to be stored somewhere, to be used as part of the fetch request to the API. We may want to fetch the data in the front-end and have it pre-fill a set of forms, but also let the authorized user edit the data before submitting it to our database.

## Useful blogs, tutorials and videos:
Net Ninja Express Tutorials:
https://www.youtube.com/watch?v=yXEesONd_54

FreeCodeCamp Data Structures and Algorithms Course:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/



## Links and resources:
Node.js:
https://nodejs.org/en/

Express:
https://expressjs.com/en/guide/using-template-engines.html

AR.js:
Custom AR.js marker generator:
https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html

The excellent stemkoski AR.js examples:
https://stemkoski.github.io/AR.js-examples/index.html

The Three.js docs:
https://threejs.org/

Libraries:
https://github.com/dataarts/dat.gui
https://github.com/artoolkitx/jsartoolkit5
https://github.com/jeromeetienne/threex.domevents
