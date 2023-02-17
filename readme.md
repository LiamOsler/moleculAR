# Molecular AR Viewer Application

**Link to Prototype:** https://wicked-awesome-chemistry.azurewebsites.net/
**Main Readme:** https://git.cs.dal.ca/osler/csci4177-project-readme

This is a web application that allows users to view 3D models of molecules in Augmented Reality. The application uses the AR.js library to detect markers and display 3D models in the browser. The models are generated from a mol file and are intended to look like classic "ball and stick" models.

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


## Generating a new Express.js project using the Express Generator

You can install express globally and use the express command to generate a new application by executing the following command in your terminal:
```bash
npm install -g express-generator
```

or

```bash
npx express-generator
```

Then, you can generate a new site in your current directory with the following command:
```
express --view=ejs
```

You will have a new file and directory structure that looks something like this generated for you:
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
//If you visit the base URL + "/users",
//you will be routed through the usersRouter:
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
Notice that router.get is a function that is called every time a route is called. This means we can invoke an operaton every time its called. For example, we could create a counter that increments every time a route is requested: 
```js
var counter = 0;

router.get('/', function(req, res, next) {
  counter++;
  res.render('index', { title: counter });
});
```
The result is that every time you visit the homepage, the counter will increment by one.

You may notice that counter is defined outside of the router.get function. This is because the router.get function is called every time a route is requested. If we defined the counter inside the router.get function, it would be reset to 0 every time a route was requested.

## The `/catalog` route:
The `routes/catalog.js` file includes the following code:

```js
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    const molfiles = './public/molfiles/';
    res.render('catalog', { title: 'Catalog', list: fs.readdirSync(molfiles)});
});

module.exports = router;
```

to break this down, we first require `express` and `express.Router()`. Since I am creating the catalog page based on a the contents of a file folder, I also require the `fs` module. The `fs` module allows for operations such as reading and writing files, and creating directories. The `fs` module is part of the Node.js standard library, so it does not need to be installed.

I call the `fs.readdirSync` function, which reads the contents of a directory. The `fs.readdirSync` function takes a single parameter, which is the path to the directory. In this case, the path is `./public/molfiles/`. The `./` at the start of the path tells the function to look in the current directory. The `public` directory is the directory that contains the `molfiles` directory. The `molfiles` directory contains the files that will be displayed on the catalog page. The `fs.readdirSync` function returns an array of the names of the files in the directory. This array is passed to the `catalog.ejs` file as the `list` parameter.

The contents of the `molfiles` directory are displayed on the catalog page. The `molfiles` directory contains a number of `.mol` files. These files are retrieved from the Royal Society of Chemistry's chemspider.com website. They are numbered according to their CSID (Chemspider ID), which is typically the default name for the molecule when downloading it from the chemspider.com website using the download button displayed on the page.

Chemspider also has a REST API, which allows you to retrieve the data for a molecule using its CSID. We could use this API to retrieve the data for each molecule, and display it on the catalog page. However, this would require a lot of API calls, which might top out the 1000 call limit per day. Instead, we may want to use the Chemsider API to retrieve a molecule only once it is being added to the MoleculAR catalog. 

This might be something that could be handled on the `/admin/` routes.

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

You can see that how these files are accessed in the `molecule.ejs` file:

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
## The Molecule Viewer:
The primary basis for the viewer application is this example, the "Hello Cube" from Lee Stemkoski's AR.js examples:
https://github.com/stemkoski/AR-Examples/blob/master/hello-cube.html

The simplest part of this application to modify is the section following the markerRoot setup. This is where we can add our own 3D objects to the scene. For instance, we can add a cube to the scene like this:
```js
let geometry1 = new THREE.CubeGeometry(1,1,1);
let material1 = new THREE.MeshNormalMaterial({
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide
}); 

mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.y = 0.5;

markerRoot1.add( mesh1 );
```

This is normal Three.js code. We create a cube geometry, and a material. We then create a mesh, and add it to the markerRoot. The markerRoot is the object which is attached to the marker. This means that the cube will be attached to the marker. If we instead wanted to add a sphere, we could change the geometry1 properties like this:
```js
let geometry1 = new THREE.SphereGeometry(1,32,16);
let material1 = new THREE.MeshNormalMaterial({
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide
}); 

mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.y = 0.5;

markerRoot1.add( mesh1 );
```

We would instead see a sphere attached to the marker, which is made up of 32 segments in the horizontal direction, and 16 segments in the vertical direction, and has a radius of 1. Read up on the Three.js documentation for more information on how to create 3D objects here: https://threejs.org/docs/index.html#api/en/core/BufferGeometry

Three.js includes a lot of different types of geometries, and materials. For the purposes of representing molecules, spheres: https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry and https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry are the most useful for creating representations of traditional ball and stick style models.

## CORS and HTTPS:
The AR.js library requires that the application is served over HTTPs. This is because the AR.js library uses the WebRTC API, which requires special permissions to be granted by the user. This is why we need to use HTTPS. If you want to develop locally, you can ignore the warnings about the SSL certificate being invalid. If you want to secure the application locally, you will need to generate some SSL certificate credentials. For instruction on how to do this (generating the `cert.pem`, `csr.pem` and `key.pem` files), and how to use them with NodeJS, take a look at this article: https://adamtheautomator.com/https-nodejs/

When deploying to a cloud service like Azure Websites, HTTPS is enabled by default, which means that you don't need to worry about this.

<<<<<<< HEAD
## Features in need of implementation:
### Authenticated User View:
We probably want to determine to what extent authentication is required for the application. I'm inclined to say we only need on authenticated "view" in the application, which is the "administration" pages, which would involve an authorized user (The client, Mark) being able to upload a new molecule (from a molfile retrieved from Chemspider) and add a new record to the database that includes the corresponding information for the molecule, imported using the Chemspider API. This would require a Chemspider API key to be stored somewhere, to be used as part of the fetch request to the API. We may want to fetch the data in the front-end and have it pre-fill a set of forms, but also let the authorized user edit the data before submitting it to our database.
=======
**Action Point:** 
- Learn how to spin up a Azure Websites web application with express.
- Deploy a copy of this application to the Azure Websites web application.
- Learn how to do this from the integrated tools in an IDE
- Set up a pipeline from a remote repository to the Azure Websites web application.

## Deploying to Azure Websites:
To deploy to Azure Websites, you will need to create an Azure account. Once you have done this, you can create a new web application. You can do this from the Azure Portal, or from the integrated tools in your IDE. Once you have created the web application, you can deploy the application to it. You can do this from the integrated tools in your IDE, or from the command line. If you want to see a helpful guide on how to do this specifically with express.js, take a look at this article: 

https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs 

For instructions on using the integrated tools in your IDE, take a look at this blog post:

https://davidgiard.com/deploying-a-web-app-to-azure-from-visual-studio-code
>>>>>>> f8cb05bc326e9a21039da4086b02dcc95539eac0

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
