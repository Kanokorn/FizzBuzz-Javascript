describe("Test FizzBuzz", function(){
    describe("Say Number", function() {
        [1, 2, 4].forEach(function (number) {
            it("should say number correct", function(){
                var fizzbuzz = new FizzBuzz(number);
                expect(fizzbuzz.say()).toEqual(number.toString());
            });
        });
    });

    describe("Say Fizz", function() {
        [3, 6, 9, 12].forEach(function(number){
            it("when put " + number, function(){
                var fizzbuzz = new FizzBuzz(number);
                expect(fizzbuzz.say()).toEqual("Fizz");
            });
        });
    });

    describe("Say Buzz", function() {
        [5, 10, 20].forEach(function(number) {
            it("when put " + number, function(){
                var fizzbuzz = new FizzBuzz(number);
                expect(fizzbuzz.say()).toEqual("Buzz");
            });
        });
    });

    describe("Say FizzBuzz", function() {
        [15, 30, 45].forEach(function(number) {
            it("when put " + number, function(){
                var fizzbuzz = new FizzBuzz(number);
                expect(fizzbuzz.say()).toEqual("FizzBuzz");
            });
        });
    });
});
