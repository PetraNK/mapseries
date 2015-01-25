# ol3 devstack

[ol3](ol3js.org) & [Google Closure](https://developers.google.com/closure/) devstack ready for [advanced optimizations](https://developers.google.com/closure/compiler/docs/compilation_levels) using [plovr](https://github.com/bolinfest/plovr)

This repository is not officially supported by Google, ol3, or individual module authors.

## Requirements
* [git](http://git-scm.com/downloads)
  * Windows users: `path/to/directory/with/git.exe` must be in your PATH system variable
* [Python 2.7](https://www.python.org/downloads/) (32bit or 64bit; must correspond with node.js because of node-gyp)
  * Windows users: `path/to/python/directory` and `path/to/python/directory/Scripts` must be in your PATH system variable
* [node.js](http://nodejs.org/download/) (32bit or 64bit; must correspond with Python 2.7 because of node-gyp)
* Windows users:
  because of [node-gyp](https://github.com/TooTallNate/node-gyp) you will probably need to install [Microsoft Visual Studio C++ 2012 Express for Windows Desktop](http://www.microsoft.com/en-us/download/details.aspx?id=34673) before Installation
* [grunt](http://gruntjs.com/) `npm install -g grunt-cli`
* [bower](http://bower.io/) `npm install -g bower`

## Installation
```
git clone https://github.com/jirik/ol3ds.git
cd ol3ds
npm install
bower install
sudo grunt install (Linux) / grunt install (Windows)
```

## Development
* `grunt`
* Edit content of `client/src/js/webpages/index.js` and see changes in the browser

## Build
* `grunt build` to compile the code and copy files to `client/public`
* `grunt build --map` to include also [source maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps)

