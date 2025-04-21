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
npm install exp-docs ejs
```

## Usage
```js
const express = require('express');
const expressDocs = require('exp-docs');
const app = express();

// Setup the docs endpoint
app.use('/docs', expressDocs());

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
```
# Options

| Option | Type | Description |
|--------|------|-------------|
| file? | string | Path to your JSON or YAML API definition |
| ext? | string | ext name could be json, yaml or yml |
| engine? | string | Template engine to use: 'ejs', 'pug', 'hbs' |

# Options Example

```js

// The docs will render on http://localhost:3000/api/v1/docs
app.use("/api/v1", expressDocs("/docs", {file: "./docs", ext: "yaml", engine: "pug"}))
```

# Demo
Live demo coming soon!

# Contributing
Pull requests are welcome! If you find bugs or have feature requests, feel free to open an issue.

# License
This project is licensed under the [MIT License](LICENSE).