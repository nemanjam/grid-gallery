# Grid Gallery


One page image search app that I did to get some practice with CSS Grid.

## Demo

Demo is available here: **[Demo](https://nemanjam.github.io/grid-gallery/)**

You can play with the source on **[CodeSandbox](https://codesandbox.io/s/github/nemanjam/grid-gallery)**

## Features

 - Search images on Pixabay by single keyword
 - Masonry style grid gallery
 - Loading states and load more pagination
 - Preview image in modal
 - Global state in Redux

## Screenshots

![Screenshot1](/screenshots/Screenshot_1.png)

![Screenshot2](/screenshots/Screenshot_2.png)

## Installation

```
$ git clone https://github.com/nemanjam/grid-gallery.git
$ cd grid-gallery
$ npm install
$ npm run start
```
Set your own Pixabay key in `/src/store/api/index.js`.

```javascript
const API_TOKEN = 'your-token-here';
```

You can deploy this app on github pages by running:

```
$ npm run deploy
```

App will be available on `https://<your-github-username>.github.io/grid-gallery`


## Libraries used

- React with Hooks
- Redux, Redux Saga
- React Bootstrap, Node Sass

## References

- Wtjs's repo [What the Splash](https://github.com/wtjs/what-the-splash)
- Stephanie's Codepen [CSS Grid Responsive Image Gallery](https://codepen.io/ramenhog/pen/MpORPa)
- Stephen Grider's Udemy course [Modern React with Redux](https://www.udemy.com/course/react-redux/)