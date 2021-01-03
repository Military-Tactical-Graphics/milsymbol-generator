# Milsymbol-generator
Military symbol generator based on milsymbol.js, used as a playground to test new implemented features by our workgroup. This repository is not intended to be merged again with the original milsymbol generator.

![Milsymbol Generator](https://raw.githubusercontent.com/spatialillusions/milsymbol-generator/master/milsymbol-generator.png?raw=true)

You can find an automatically deployed online version (To be updated) at https://military-tactical-graphics.github.io/milsymbol-generator/

Original version of Milsymbol generator live deployment can be found here: https://spatialillusions.com/unitgenerator/

This is still in development and is still missing quite a lot of functionality compared to the current symbol generator. Please provide feedback and ideas as issues.

At the moment it uses the [development version of milsymbol](https://github.com/spatialillusions/milsymbol) from the master branch to get access to all the symbol information from milstd.js that is included with milsymbol. This will change as soon as it is possible to use a released version of milsymbol. 

For the UI [Material Design Components](https://github.com/material-components/material-components-web/) are used, but I have tried to separate logic from UI, so you should be able to reuse as much as possible, and it is possible to initiate a single standard generator in any element on a web page. The API will be improved and updated.
