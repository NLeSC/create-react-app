[TSlint](http://palantir.github.io/tslint/) configuration used in `@nlesc/react-scripts` package.

TSlint ruleset which combines:

* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
* [tslint-react](https://github.com/palantir/tslint-react)
* [tslint:latest](https://github.com/palantir/tslint/blob/master/src/configs/latest.ts)

To use in `create-react-app` we overridden several rules to make it compatible with webpack and have similar rules to eslint-config-react-app package.

# Overridden rules

* import-name, webpack allows for import of assets like svg and css
* jsx-alignment, want linting on jsx
* jsx-no-lambda, want linting on jsx
* jsx-no-string-ref, want linting on jsx
* jsx-no-multiline-js, want linting on jsx
* jsx-self-close, want linting on jsx
* match-default-export-name, tslint in create-react-app does not do typecheck
* member-access, everything that has no access modifier is public implicitly, so no need to specify public again
* missing-jsdoc, not useful for an application, it would be for a library
* no-any, not everything has to be to typed to allow for incrementally introduction of types for eg. 3rd party libraries
* no-cookies, tslint in create-react-app does not do typecheck
* no-relative-imports, not practical for an application, it would be for a library because it has a package name
* no-for-in-array, tslint in create-react-app does not do typecheck
* no-reserved-keywords, redux requires `type` keyword for a action, the rule doesn't allow us to whitelist `type` so we disabled whole rule
* no-unused-variable, tslint in create-react-app does not do typecheck, use tsc noUnusedParameters and noUnusedLocals for same but fatal errors
* restrict-plus-operands, tslint in create-react-app does not do typecheck
* quotemark

    * single, single quote because its less typing
    * jsx-double, jsx-double because thats the html way
    * avoid-escape, part of tslint:latest

* variable-name

    * removed check-format, both camelCased and UPPER_CASED vars in same file
    * removed allow-pascal-case, PascalCase is reserved for classes
