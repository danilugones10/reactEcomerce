# React basic course

## Keynote

- Introduction to React
- Components and Props
- State and Lifecycle
- Custom functions and utils
- Services
- Routing
- Forms
- Async
- HTTP
- What's next

---

## 1. Introduction to React

### Reference

- Hello World https://es.reactjs.org/docs/hello-world.html
- Introducing JSX https://es.reactjs.org/docs/introducing-jsx.html
- Babeljs https://babeljs.io/
- Rendering Elements https://es.reactjs.org/docs/rendering-elements.html
- Add React to a Website https://es.reactjs.org/docs/add-react-to-a-website.html
- Create new React App https://reactjs.org/docs/create-a-new-react-app.html
- Components and Props https://es.reactjs.org/docs/components-and-props.html

### Demo

- IDE setup
- Add React to a Website and Create new React
- knowing the structure
- Example component

### Hands On

- Clone this repository: https://github.com/hittten/react-ecommerce
- Install dependencies `npm i`
- Run `./move/to init`
- Start the project `npm start`
- You have to see something like this https://playground-react-ecommerce--init-8wwlnou6.web.app/
- Try to set up Google fonts and icons
- Create your first component header

Goal: https://playground-react-ecommerce--header-edt5odsz.web.app/

Solution: `./move/to header`

---

## 2. Components and Props

### Reference

- Components and Props https://es.reactjs.org/docs/components-and-props.html
- Lists and Keys https://es.reactjs.org/docs/lists-and-keys.html

### Hands On

- Create `productList` component
- Make a product list with this mock https://gist.github.com/hittten/88469fa737a9e5e00153585cfb42d508
- For products descriptions with more than 150 characters, short the text with "..."

Goal: https://playground-react-ecommerce--product-list-q4qjuz1p.web.app/

Solution: `./move/to product-list`

---

## 3. State and Lifecycle

### Reference

- State and Lifecycle https://es.reactjs.org/docs/state-and-lifecycle.html
- Handling Events https://es.reactjs.org/docs/handling-events.html
- Conditional Rendering https://es.reactjs.org/docs/conditional-rendering.html

### Hands On

- Put product name in uppercase with javascript
- Add the product creation date, before the description and apply a date format: 'dd/mm/yyyy'
- Add two new icons `view_list` and `view_module`
- Make some logic for manage `selected` and `grid` classes, you need to implement click event

Goal: https://playground-react-ecommerce--gridview-nk7xlt43.web.app/

Solution: `./move/to gridview`

---

## 4. Custom functions and utils

### Hands On

- Create an uppercase function and replace the uppercase javascript for the function
- Create a euroCurrency function and apply to price

Solution: `./move/to custom-functions-utils`

---

## 5. Services

### Hands On

- Refactor App component to use a product service.

Solution: `./move/to service`

---

## 6. Routing

### Reference

- Router Reference https://reactrouter.com/web/guides/quick-start

### Hands On

- Create a `productsPage` component
- Create a `shoppingCartPage` component
- Create routes for `products` and `shopping-cart`
- Update Header menu to navigate to `products` and `shopping-cart`
- Add new services for manages the shopping cart
- Refactor product list component to reuse it for shopping cart

Goal: https://playground-react-ecommerce--shopping-cart-cvmnr7w0.web.app/

Solution: `./move/to shopping-cart`

## 7. Forms

### Reference

- Introduction to forms in React https://es.reactjs.org/docs/forms.html

### Hands On

Goal: https://playground-react-ecommerce--forms-oiyfvqif.web.app/

Solution: `./move/to forms`

---

## 8. Async

### Reference

- Javascript promises https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
- AJAX and APIs https://es.reactjs.org/docs/faq-ajax.html

### Hands On

- Make an async simulator for mock data

Goal: https://playground-react-ecommerce--fake-http-xdzrpd5x.web.app/

Solution: `./move/to fake-http`

---

## 9 HTTP

### Reference

- Communicating with backend services using HTTP https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

### Hands On

- Implement real HTTP services (change ${user} with your name with only letters):
    * API URL: https://classroom-playground-api.web.app
    * products endpoint [GET,POST]: `/products/${user}/`,
    * shoppingCart endpoint [GET,PUT,DELETE]: `/shoppingCart/${user}/`,

Goal: https://playground-react-ecommerce.web.app/

Solution: `./move/to main`

## 10 What's next

### Reference

- Introducing Hooks https://es.reactjs.org/docs/hooks-intro.html
- Adding a CSS Modules Stylesheet https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
- Adding a Sass Stylesheet https://create-react-app.dev/docs/adding-a-sass-stylesheet
- Redux https://es.redux.js.org/
- https://www.gatsbyjs.com/
