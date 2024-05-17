# Portfolio

This part contains the source code for the portfolio website.

## Technology

- TypeScript
- Vite
- React
- Jest

## Setup

Running website locally:

1. Clone repository
2. Navigate into the code directory: `cd portfolio`
3. Install dependencies: `npm install`
4. Run the dev server: `npm run dev`

To build the website (outputs to `portfolio/dist`):

1. Navigate into the code directory: `cd portfolio`
2. Install dependencies: `npm install`
3. Run the build command: `npm run build`

To test the website:

1. Navigate into the code directory: `cd portfolio`
2. Install dependencies: `npm install`
3. Run the tests: `npm run test`

## Tests

The tests are done using Jest through the `@testing-library/react` module.

The `jest.config.js`, `jest.setup.ts` and `styleMock.js` files all related to testing.

- The `styleMock.js` is used so importing CSS can be handled and mocked when testing.

In each component there is also a `*.spec.tsx` which contains the test for the specific component.
