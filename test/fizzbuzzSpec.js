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
        it("when put 5", function(){
            var fizzbuzz = new FizzBuzz(5);
            expect(fizzbuzz.say()).toEqual("Buzz");
        });

        it("when put 10", function(){
            var fizzbuzz = new FizzBuzz(10);
            expect(fizzbuzz.say()).toEqual("Buzz");
        });

        it("when put 20", function(){
            var fizzbuzz = new FizzBuzz(20);
            expect(fizzbuzz.say()).toEqual("Buzz");
        });
    });

    describe("Say FizzBuzz", function() {
        it("when put 15", function(){
            var fizzbuzz = new FizzBuzz(15);
            expect(fizzbuzz.say()).toEqual("FizzBuzz");
        });

        it("when put 30", function(){
            var fizzbuzz = new FizzBuzz(30);
            expect(fizzbuzz.say()).toEqual("FizzBuzz");
        });

        it("when put 45", function(){
            var fizzbuzz = new FizzBuzz(45);
            expect(fizzbuzz.say()).toEqual("FizzBuzz");
        });
    });
});
