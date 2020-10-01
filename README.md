# rcg-localhost-api
### Snippet of rcg api, shows scalable design + use of mongoose schema.

#### Thanks for checking this out!

#### Setup:
``` git clone https://andrew-lyons/rcg-localhost-api```

#### then:
```
cd backend
npm install
```

*if needed, npm audit fix, etc., but everything is looking up to date as of 9/30.

#### then, while in /backend:
```
nodemon server.js
```

Port is default set to 5000.

I've included the phone, task, and user routes. I use Insomnia for testing but Postman works just as well.

I've created a demo Mongo Atlas db that is in the .env file. Normally would .gitignore, but, everything is contained in a demo.

You can check out the schema to structure the calls, but I'll include some .json object comments in the phones route .js files. The others are pretty straightforward looking at the schema.
