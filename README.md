This repository has been set up to be an optimized development environment, using Webpack 5 with integrated plugins to enhance the development process. Additionally, the repository is configured in TypeScript and utilizes Styled Components for component styling. It's important to follow the recommended code structuring practices, separating code into components, contexts, helpers, and interfaces/types.

## Repository Features

Webpack 5 and Webpack Dashboard
The repository utilizes Webpack 5 as its main bundler. Webpack is a packaging tool that allows bundling and processing of JavaScript files and other project resources. Furthermore, the repository has the Webpack Dashboard plugin integrated during the build. Webpack Dashboard provides a panel during the compilation process that displays useful information such as modules in use, errors, logs, status, and progress bar. This facilitates visualization and debugging during development.

## TypeScript

The repository is configured to use TypeScript as the main language. TypeScript is a superset of JavaScript that adds static typing and additional features to JavaScript. By using TypeScript, we benefit from safer and self-documented development, as well as improved IDE support for error detection and refactoring features.

## Styled Components

The repository exclusively uses Styled Components for component styling. Styled Components is a popular library that allows writing styles in JavaScript (or TypeScript) for React components. It provides a component-oriented approach to styling, where each component can have its own encapsulated style. This facilitates style maintenance and reusability.

## Commit Pattern

In this repository, we follow a commit pattern to maintain an organized and understandable history. The adopted commit pattern is Conventional Commits. This pattern has the format of <type>(<scope>): <message>. The type can be feat for new features, fix for bug fixes, docs for documentation updates, chore for maintenance tasks, among others. The scope is optional and can indicate which part of the code is being changed. The message should be clear and concise, describing the performed change.

## Installation

Use the package manager [yarn](https://yarnpkg.com) to install all packages.

```bash
yarn install
```

## Usage

```bash
yarn build:dev
```

## Pull Request

To open a Pull Request in this repository, it's necessary to follow the established pattern in the "pull_request_template.md" file. Make sure to fill in all relevant sections, including change description, resolved issues, test changes, and other necessary information. This helps in reviewing and efficiently approving the changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
