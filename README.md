# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Online demo
Link: https://react-fc-14.vercel.app/
More detail: https://react-fc-14.vercel.app/about

## NOTE
- Support responsive.
- There is effect on hover and active menu.
- Accounts: admin and test with the same password 123456.
- Account test can't access into the page management (/management), it will raise error 403.
- Users can print their results.
- Automatically format code when committing code.
- User can continue their in-progress test..
- If the user logs in with another account, the old progress session will be deleted.
- Users can manually delete their progress session (dropdown menu).
- Each page has its own title.
## REQUIREMENTS
- Routing must be satisfied.
- Logged in user can not access login page.
- Guest can not access quizzes page.
- Quizzes is fetched/loaded when logged in user access from api or pre-defined json list.
- Multiple-choice question is rendered so that user can answer them sequentially.
- User can click/check to confirm their answers.
- Result only show after user has answered all the question.
- TypeScript is recommended with well typing definition.
- Well-structured project and linting enabled is a plus.
- 403 routing page for unauthorized access.
- 404 routing page for non-existing page.
- Password input must not show in plain text.
- Handle username/password simple validation.
- Welcome message (notification/snackbar) for logged in user.
- Warning message (notification/snackbar) if a logged in user attempt to access login page.
- Use backend api to fetch question list and validate the answers.
- Favicon/Page title/Font/Color should be relevant.
- Answer completion progress bar may be provided (and/or current progress over all).
- User can check back their answers and result after all (their answer vs the correct one).
- User may continue their in-progress test.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
