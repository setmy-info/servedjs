"use strict";

describe('$strings service', function () {

    var $strings;

    beforeEach(function () {
        $strings = jsdi.get().$strings;
    });

    it('should be created for testing', function () {
        expect($strings).toBeDefined();
    });

    describe('replace method', function () {
        it('should replace similar value placeholders by object attributes', function () {
            var stringWithPlaceholders = "Hello ${wrld}, that wonderful ${wrld} and ${you} in this ${wrld}!";
            var result = $strings.replace(stringWithPlaceholders, {wrld: "World", you: "Peeter Meeter"});
            expect(result).toBe("Hello World, that wonderful World and Peeter Meeter in this World!");
        });
    });
});
