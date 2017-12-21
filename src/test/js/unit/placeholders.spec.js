"use strict";

describe('$strings service', function () {

    var $placeholders;

    beforeEach(function () {
        $placeholders = jsdi.get().$placeholders;
    });

    it('should be created for testing', function () {
        expect($placeholders).toBeDefined();
    });

    describe('replace method', function () {
        it('should replace similar value placeholders by object attributes', function () {
            var stringWithPlaceholders = "Hello ${wrld}, that wonderful ${wrld} and ${you} in this ${wrld}!";
            var result = $placeholders.replace(stringWithPlaceholders, {wrld: "World", you: "Peeter Meeter"});
            expect(result).toBe("Hello World, that wonderful World and Peeter Meeter in this World!");
        });
    });
});
