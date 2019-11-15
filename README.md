# Karma Coverage Test Playground

This project is intended to be a playground for testing karma coverage and its various configurations.

## What's included

To test karma coverages language support, a simple module has been recreated in several languages, as well as unit tests to go with them. This allows users to make sure the end coverage report is correct.

Further, a single karma configuration includes how these different languages were setup to run with karma-coverage. This could serve as an example for people looking to setup karma-coverage in their projects.

## How to use it

The base configuration _should_ work out of the box, but feel free to adjust the configuration and see how karma-coverage responds. This can be used as a small scale project to debug a configuration you want to use.

### To run the project

After cloning the project, run the following commands

```bash
$ npm install # only need to do this once after cloning/pulling!
$ npm run coverage
```