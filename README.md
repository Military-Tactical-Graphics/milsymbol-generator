# Milsymbol-generator Extended
Military symbol generator based on milsymbol.js, used as a playground to test new implemented features by our workgroup. This repository is not intended to be merged again with the [original milsymbol generator](https://github.com/spatialillusions/milsymbol-generator).

![Milsymbol Generator](https://raw.githubusercontent.com/spatialillusions/milsymbol-generator/master/milsymbol-generator.png?raw=true)

## Deployment
The instructions for deployment of the original version are not very clear, so we took the liberty to specify it more precisely in this extension, with remarks about what works for the original as well.

### Deploying locally
After downloading this or the original repository, all that is needed is to run `npm install` in the root folder and then run `npm run build`. No errors should come up, only warnings. After this, all it takes is to open `unitgenerator/index.html` in (almost) any browser.

### Deploying on a server
Deploying the original distribution on a server might prove tricky (see [issue #6](https://github.com/Military-Tactical-Graphics/milsymbol-generator/issues/6)) because of the javascript architecture. Still, in this repository it has been solved and after following the steps above for local deployment, you can also run `npm start` or `node unitgenerator/milsymbol-unit-generator.js` to deploy on a local or remote server. The deployment below is running for free on Heroku.

### Pre-deployed versions

You can find an automatically deployed online version at https://military-tactical-graphics.github.io/milsymbol-generator/

Original version of Milsymbol generator live deployment can be found here: https://spatialillusions.com/unitgenerator/

## Disclaimers
This is still in development. At the moment it uses the [development version of the original milsymbol](https://github.com/spatialillusions/milsymbol) from the master branch to get access to all the symbol information from milstd.js that is included with milsymbol. This will change soon to the [extended version of milsymbol we are working on](https://github.com/Military-Tactical-Graphics/milsymbol). 

For the UI [Material Design Components](https://github.com/material-components/material-components-web/) are used, with a separate logic from UI, so you should be able to reuse as much as possible, and it is possible to initiate a single standard generator in any element on a web page.
