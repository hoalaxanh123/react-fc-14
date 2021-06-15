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
### `yarn format`
### `yarn build`

Made by 1510289