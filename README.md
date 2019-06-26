## ServedJS

This is ServiceJS extension library to add some basic services for systems.

### Why?

It is tools collections into services.

### API

Services:

    Getting through:

        jsdi.get()

    $log

        $log.setLevel($log.ALL);

        In level order:

            $log.ERROR
            $log.WARN
            $log.INFO
            $log.DEBUG
            $log.TRACE
            $log.ALL

        Logging functions:

            $log.error("Error!");
            $log.warn("Warning!");
            $log.info("Info..."); or $log.log("Info...");
            $log.debug("Debug info...");
            $log.trace("Trace info...");

    $browser

        $browser.forward();

        $browser.back();

        $browser.go(positions);

    $localStorage

        $localStorage.set(key, object);

        $localStorage.get(key);

        $localStorage.removeItem(key);

    $sessionStorage

        $sessionStorage.set(key, object);

        $sessionStorage.get(key);

        $sessionStorage.removeItem(key);

    $strings

        If http://stringjs.com/ added

    $placeholders

        $placeholders.replace("Replace ${someProperty} ${andThat} ${andThat}", {someProperty: "with that", andThat: "and that"});

        should produce

        "Replace with that and that and that"

    $timer

        var milliSecond = 2000;
        var timer = $timer.newTimer(function(){console.log("Called after 2 seconds!");}, milliSecond);
        timer.start();
        timer.stop();

        var interval = $timer.newInterval(function(){console.log("Called every 2 seconds!");}, milliSecond);
        interval.start();
        interval.stop();

        Starting and stoping can be started and stopped multiple times.

    $geo

        var geoWatcher = $geo.newWatcher(function (position) {console.log("Position: ", position);});
        geoWatcher.start();
        geoWatcher.stop();

### Setup

npm install && bower install

### Run server for examples

npm run start

or

npm start

or

mvn jetty:run

http://localhost:3000/

### Unit testing

npm run unit

### Run example program

npm run program

### Usage

TODO : write guides.

### Example code

TODO : write guides.

### Publishing npm

https://docs.npmjs.com/getting-started/publishing-npm-packages

### Bower registration

nano bower.json

https://bower.io/docs/creating-packages/

bower register servedjs https://github.com/Krabi/servedjs.git

### Release current project

Simply:

    release.sh

### Github site

https://krabi.github.io/servedjs/

### NPM stie

https://www.npmjs.com/package/servedjs

### Donate

* [Set your favorite donation](https://www.paypal.me/imretabur "Donate any amount")
* [1 EUR](https://www.paypal.me/imretabur/1 "Donate 1 EUR")
* [5 EUR](https://www.paypal.me/imretabur/5 "Donate 5 EUR")
* [10 EUR](https://www.paypal.me/imretabur/10 "Donate 10 EUR")
* [15 EUR](https://www.paypal.me/imretabur/15 "Donate 15 EUR")
* [20 EUR](https://www.paypal.me/imretabur/20 "Donate 20 EUR")
* [30 EUR](https://www.paypal.me/imretabur/30 "Donate 30 EUR")
* [50 EUR](https://www.paypal.me/imretabur/50 "Donate 50 EUR")
* [75 EUR](https://www.paypal.me/imretabur/75 "Donate 75 EUR")
* [100 EUR](https://www.paypal.me/imretabur/100 "Donate 100 EUR")
* [200 EUR](https://www.paypal.me/imretabur/200 "Donate 200 EUR")

### License

MIT
