# TLG test app

The (small) premise of this project is that there's a fair chance it's garbage that just works (at least on my computer!): the only time I used something React-y was with a small test with Next.js, which was even smaller than this small project, and I never ever even tried vanilla react so this is actually my first time!

## Tools used
- Recoil: I didn't want to fill the sessionStorage so I looked up for a state management. Between Recoil and Redux, the former looked the most user friendly;
- React Router: well, for a PWA (and otherwise I couldn't have used the state);
- TailwindCSS;

## Gotchas of this code
- a real login with an auth library (which includes not leaving the `onLogin` and `onSignUp` functions out in the wild);
- better pagination. The API didn't provide a list of all the available pages, so right now it's "meh";

## Installation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
