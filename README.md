Basic React Starter Pack
===================================

Including Jest, Enzyme and ESLint

Development
-----------
Build, watch and start server. View at http://localhost:8080. To view changes a page refresh is required
```
$ npm start
```

Building locally
--------
```
$ npm run build:app
```

Building to production
```
$ npm run build:app:production
```

Linting
-------
```
npm run eslint
```

Testing and Test Coverage
-------
```
$ npm run test
$ npm run test:coverage
```

Dependencies
------------

Dependencies for the NavigationMenu are managed via ShrinkWrap.

**Warning**: Only update the package.json dependencies via npm commands, e.g. ``npm install``, ``npm update``, ``npm remove``. Manually changing the package.json can cause issues with the ShrinkWrap.

```
Note: npm had a regression affecting shrinkwrap in versions 3.8.8 to 3.10.3.
Please ensure your version of npm is 3.10.4 or newer, or 3.8.7 or older.
```

- To update your version of npm run: ``npm install npm -g``
- Or to downgrade to 3.8.7 run: ``npm install npm@3.8.7 -g``

Installing Dependencies
-----------------------

To install the project's dependencies simply run ``npm install``. This will install from the .tar files packed into the project rather than from the npm server.

If you need to reset to do a fresh install, delete your ``npm_modules`` and ``npm_cache`` folders and re-run ``npm install``.

Changing Dependencies
----------------------

 - Install your new dependency: ``npm install something_cool``
 - Or update: ``npm update something_awesome``
 - Or remove: ``npm remove something_awesome``

Then update the ShrinkPack dependencies by runing: ``npm run shrinkpack``

Once the dependencies are updated the updated ``npm-shrinkwrap.json`` and ``node_shrinkwrap`` folder needs to be committed to git and pushed as part of your ticket.
