# Portfolio

This is the main repository for all the iterations of my portfolio website.

Each iteration is stored as a branch in this repository with the `main` branch containing the current iteration.

The code for the website is stored in `./portfolio` along with a README which describes how to run/operate the website.

## CI/CD

There are two workflows in this repository.

### Continuous Integration

Which on each push will run all the tests, linting and a build to make sure everything is still working.

Workflow file: `.github\workflows\continuous-integration.yml`

### Continuous Deployment

When a push occurs in the main branch this pipeline will run and automatically delploy to my GitHub pages repository.

GitHub pages repository: https://github.com/LukeHollandDev/LukeHollandDev.github.io

**Requires** a PAT token (stored as a secret called `PAT`) so it is able to push to the pages repository.

Workflow file: `.github\workflows\continuous-deployment.yml`
