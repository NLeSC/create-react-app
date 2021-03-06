
# legend

The table records what is currently available and working _in the listed repo_, not what could work with some extra effort. Recording these facts helps to keep the discussions clean.

- :grey_question: : unknown
- :white_check_mark: : implemented
- :x: : not implemented



# general

|feature description |  [create-react-app](https://github.com/facebookincubator/create-react-app) |  [punchcardjs](https://github.com/nlesc-sherlock/punchcardjs) |  [molviewer](https://github.com/3D-e-Chem/molviewer-tsx) |  [angular-cli](https://github.com/angular/angular-cli) |  [create-ts-app](https://github.com/vgmr/create-ts-app) | yeoman generator | issues |
|---|---|---|---|---|---|---|---|
| transpile from TS to JS | :x: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| transpile TSX to JS | :x: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| transpile errors are terminal | :grey_question: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#5](https://github.com/NLeSC/create-react-app/issues/5) |
| doesn't use ``gulp`` | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| doesn't use ``grunt`` | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| doesn't use ``bower`` | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| doesn't use ``jspm`` | :white_check_mark: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| targets es5 | :white_check_mark: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| targets latest chrome | :grey_question: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| targets latest firefox | :grey_question: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| targets latest edge | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| automatic reload browser on code change | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| automatic rebuild on code changes, manual browser reload | :white_check_mark: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| fast rebuilds | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| can handle TS2 ``@types/`` | :x: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#2](https://github.com/NLeSC/create-react-app/issues/2) |
| in-browser debugging of original source code | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#6](https://github.com/NLeSC/create-react-app/issues/6) |
| minification of js | :white_check_mark: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#6](https://github.com/NLeSC/create-react-app/issues/6) |
| minification of css | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| bundling of js | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| bundling of css | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| linting can run on Travis or similar | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#7](https://github.com/NLeSC/create-react-app/issues/7) |
| testing can run on Travis or similar | :white_check_mark: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| building can run on Travis or similar | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#8](https://github.com/NLeSC/create-react-app/issues/8) |
| has ``purge`` command: | :x: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#9](https://github.com/NLeSC/create-react-app/issues/9) |
| has deploy app to gh-pages command | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| has deploy docs to gh-pages command | :x: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#10](https://github.com/NLeSC/create-react-app/issues/10) |
| has generate api docs command | :x: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#11](https://github.com/NLeSC/create-react-app/issues/11) |
| can handle es7 object spread | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#12](https://github.com/NLeSC/create-react-app/issues/12) |
| can handle es7 decorators | :x: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#12](https://github.com/NLeSC/create-react-app/issues/12) |
| can handle es7 generator | :grey_question: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#12](https://github.com/NLeSC/create-react-app/issues/12) |
| can use untyped JS libs | :x: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#13](https://github.com/NLeSC/create-react-app/issues/13) |
| can differentiate prod/dev | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#14](https://github.com/NLeSC/create-react-app/issues/14) |
| can access external api server | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |


# testing

|feature description |  [create-react-app](https://github.com/facebookincubator/create-react-app) |  [punchcardjs](https://github.com/nlesc-sherlock/punchcardjs) |  [molviewer](https://github.com/3D-e-Chem/molviewer-tsx) |  [angular-cli](https://github.com/angular/angular-cli) |  [create-ts-app](https://github.com/vgmr/create-ts-app) | yeoman generator | issues |
|---|---|---|---|---|---|---|---|
| unit testing | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#15](https://github.com/NLeSC/create-react-app/issues/15) |
| dom testing | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#15](https://github.com/NLeSC/create-react-app/issues/15) |
| e2e testing | :x: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#16](https://github.com/NLeSC/create-react-app/issues/16) |
| testing across browsers/OS/devices | :x: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#16](https://github.com/NLeSC/create-react-app/issues/16) |
| coverage of original code  | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#17](https://github.com/NLeSC/create-react-app/issues/17) |
| coverage includes untouched code  | :grey_question: | :grey_question: | :x: | :grey_question: | :grey_question: | :grey_question: | [#18](https://github.com/NLeSC/create-react-app/issues/18) |
| error stacktrace of original code  | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | [#17](https://github.com/NLeSC/create-react-app/issues/17) |
| tests written in TS  | :x: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#15](https://github.com/NLeSC/create-react-app/issues/15) |
| has ``it()`` and ``describe()`` or similar  | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| has command to run tests  | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| automatic run tests on source change | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| Advanced assertions, e.g. Chai  | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| Mocking ability, e.g. Sinon  | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |


# linting

|feature description |  [create-react-app](https://github.com/facebookincubator/create-react-app) |  [punchcardjs](https://github.com/nlesc-sherlock/punchcardjs) |  [molviewer](https://github.com/3D-e-Chem/molviewer-tsx) |  [angular-cli](https://github.com/angular/angular-cli) |  [create-ts-app](https://github.com/vgmr/create-ts-app) | yeoman generator | issues |
|---|---|---|---|---|---|---|---|
| tslint by editor plugin | :x: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#19](https://github.com/NLeSC/create-react-app/issues/19) |
| csslint by editor plugin | :x: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#19](https://github.com/NLeSC/create-react-app/issues/19) |
| esjshint by editor plugin | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#19](https://github.com/NLeSC/create-react-app/issues/19) |
| prebuild linting | :grey_question: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#20](https://github.com/NLeSC/create-react-app/issues/20) |
| precommit linting | :grey_question: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| prerelease linting | :grey_question: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| tslint the TS src | :x: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#20](https://github.com/NLeSC/create-react-app/issues/20) |
| eslint src | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| no conflicts between linters | :white_check_mark: | :white_check_mark: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :white_check_mark: |
| lint css | :x: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#20](https://github.com/NLeSC/create-react-app/issues/20) |
| linter tsx aware | :x: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | [#20](https://github.com/NLeSC/create-react-app/issues/20) |
| has .editorconfig | :x: | :white_check_mark: | :x: | :grey_question: | :grey_question: | :grey_question: | [#21](https://github.com/NLeSC/create-react-app/issues/21) |
| lint errors are terminal | :grey_question: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | [#20](https://github.com/NLeSC/create-react-app/issues/20) |





# Remaining

* Not too many commands
* Not too many config files
* Minimize duplication, eg. installing library should not take many steps
* Opening repo in editor should just work
* Doucment how to install dependencies
* Document usual suspects for routing/state/async/fetch: react-router, react-redux, redux-thunk, isomorphic-fetch
* dependency management: npm, unpkg
* autoprefixing vendor specific css ``-webkit-box-orient`` and such
* static asset management, including fonts, images and such
* avoid browser caching of static assets


| allows offline mode | :white_check_mark: | :x: | :x: | :grey_question: | :grey_question: | :grey_question: | :grey_question: |
| allows standalone mode | :grey_question: | :x: | :white_check_mark: | :grey_question: | :grey_question: | :grey_question: | :grey_question: |
























