# react-external-loader



### What's doing this module?
This module allows to load an external configuration file/properties file for react applications.

### Which use case?
Your react application use properties files (or .env files) and their values is different for each environment.
When you deploy it in different environment, you don't want to create specific bundle for each environment. You want to have the same bundle.js for all environment.
Only properties change.
With react-external-configuration you can easily do it.

### How it works?
This module use new api context of react to do this job. 
To load properties file, this module use fetch, so you can put your properties file in public folder of your app, or specify an http url to load config file.
When you switch to another environment just update your properties file.


### How will my code looks like?

```jsx

