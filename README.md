# express-docs

> Generate beautiful API documentation in your Express.js apps using JSON or YAML files!

`express-docs` is a lightweight and customizable Express middleware that reads your API specification (in JSON or YAML format) and renders it as a live, styled API documentation page using templating engines like EJS, Handlebars, or Pug.

---

## Features

- Support for both **JSON** and **YAML** API definition files
- Easy integration into any Express.js project
- Customizable views using EJS, Handlebars, or Pug
- Public folder for static assets like CSS and JS
- Clean UI for API documentation

---

## Installation

```bash
npm install express-docs
```

## Usage
```js
const express = require('express');
const expressDocs = require('express-docs');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// Setup the docs middleware
app.use('/docs', expressDocs());

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```
# Options

| Option | Type | Description |
|--------|------|-------------|
| file | string | Path to your JSON or YAML API definition |
| engine | string | Template engine to use: 'ejs', 'pug', 'hbs' |
| url	| string | url for rendering docs |

# Demo
Live demo coming soon!

# Contributing
Pull requests are welcome! If you find bugs or have feature requests, feel free to open an issue.

# License
This project is licensed under the [MIT License](LICENSE).