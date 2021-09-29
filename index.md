# own-reactjs
My simple own reactjs framework with vanilla js

## Initialise project with:
```
npm init

```

## Install npm dependencies
```
npm install react-scripts

```

## Run npm install
```
npm install
SKIP_PREFLIGHT_CHECK=true
```

## Add SKIP_PREFLIGHT_CHECK=true to .env.
```
echo "SKIP_PREFLIGHT_CHECK=true" >> .env
```

## Replace scripts section in "package.json" with:
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },

```

## Add files:
```
src/index.js
public/index.html

```

## Add html to public/index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

## Define the following code in src/index.js:

```
const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object'? child: createTextElement(child) 
      )
    }
  }
};

const createTextElement = (text) => {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text
      children: []
    }
  }
};

const render = (element, container) => {
  const node = element.type === 'TEXT_ELEMENT'?
  document.createTextNode(''): document.createElement(element.type);
  Object.keys(element.props)
  .filter(k => k !== 'children')
  .forEach(name => {
    node[name] = element[name];
  });
  element.props.children.forEach(child => render(child, node));
  container.appendChild(node);
};

const Own = {
  createElement,
  render
}

/** @jsx Own.createElement */
const element = (
    <div class="container">
        <h1>Hello Own React</h1>
        <p>Such a basic react like framework</p>
    </div>
);
const container = document.getElementById('root');
Own.render(element, container);
```

## Run app

```
run npm start
```





