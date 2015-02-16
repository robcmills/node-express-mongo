
## isolate node

    mkdir app-name
    cd app-name
    // download binaries tar.gz for appropriate platform
    // unzip and copy to app-name/nenv 
    // may complicate pathing later but screw installing anything globally!
    // create package.json
    nenv/bin/npm init

## express 

    nenv/bin/npm install express --save
    nenv/bin/npm install express-generator -g
    express app-name
    cd app-name
    ../nenv/bin/npm install

    // run local
    DEBUG=myapp ./bin/www
    // or
    ../nenv/bin/npm start

    visit localhost:3000


## mongo 

    // install mongodb (osx)
    brew install mongodb
    // start mongo
    mongod --dbpath data // <path to data directory>
    // open a new shell
    mongo
    > use nemseed
    > exit