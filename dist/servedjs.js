/*
 MIT License
 
 Copyright (c) 2017 Imre Tabur <imre.tabur@eesti.ee>
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 
 https://github.com/Krabi/servicejs
 
 */
"use strict";

(function () {

    jsdi.service("$log", function () {

        //https://www.tutorialspoint.com/log4j/log4j_logging_levels.htm
        //ALL > TRACE > DEBUG > INFO > WARN > ERROR > OFF
        var log = {
            OFF: 0,
            ERROR: 1,
            WARN: 2,
            INFO: 3,
            DEBUG: 4,
            TRACE: 5,
            ALL: 6,
            currentLevel: 0
        };

        log.setLevel = function (level) {
            if (log.levelIsInRange(level)) {
                log.currentLevel = level;
            }
        };

        log.levelIsInRange = function (level) {
            return (log.OFF <= level && level <= log.ALL);
        };

        log.shouldLog = function (level) {
            return (log.currentLevel >= level);
        };

        log.warn = function () {
            if (console && log.shouldLog(log.WARN)) {
                console.warn.apply(console, arguments);
            }
        };

        log.trace = function () {
            if (console && log.shouldLog(log.TRACE)) {
                console.trace.apply(console, arguments);
            }
        };

        log.error = function () {
            if (console && log.shouldLog(log.ERROR)) {
                console.error.apply(console, arguments);
            }
        };

        log.info = function () {
            if (console && log.shouldLog(log.INFO)) {
                console.info.apply(console, arguments);
            }
        };

        log.log = function () {
            if (console && log.shouldLog(log.INFO)) {
                console.log.apply(console, arguments);
            }
        };

        log.debug = function () {
            if (console && log.shouldLog(log.DEBUG)) {
                console.log.apply(console, arguments);
            }
        };

        return log;
    });

    jsdi.service("$browser", function () {

        var browser = {
        };

        browser.init = function () {
        };

        browser.forward = function () {
            if (window) {
                window.history.forward();
            }
        };

        browser.back = function () {
            if (window) {
                window.history.back();
            }
        };

        browser.go = function (positions) {
            if (window) {
                if (typeof positions === 'number') {
                    window.history.go(positions);
                } else {
                    window.location.hash = '#' + positions;
                }
            }
        };

        return browser;
    });
}());