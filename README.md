# cardsAgainstCorndel

To run locally:
```
cd client
npm run start
cd ..
npm run start
```
Application will be running with frontend at `localhost:3000` and backend at `localhost:4001`

To build a production environment:

```
cd client
npm run build
cd ..
npm run build
```

You can then a production environment with `node dist/server.js`
Or deploy to AWS with `eb deploy`
The latter requires AWS credentials setup and the elastic beanstalk CLI to be installed and configured.

Run backend tests with:
`npm run test`
