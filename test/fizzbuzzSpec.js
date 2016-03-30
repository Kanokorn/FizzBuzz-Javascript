describe("FizzBuzz", function(){
    it("should say 1 when put 1", function(){
        var fizzbuzz = new FizzBuzz(1);
        expect(fizzbuzz.say()).toEqual("1");
    });

    it("should say 2 when put 2", function(){
        var fizzbuzz = new FizzBuzz(2);
        expect(fizzbuzz.say()).toEqual("2");
    });

    it("should say Fizz when put 3", function(){
        var fizzbuzz = new FizzBuzz(3);
        expect(fizzbuzz.say()).toEqual("Fizz");
    });

    it("should say 4 when put 4", function(){
        var fizzbuzz = new FizzBuzz(4);
        expect(fizzbuzz.say()).toEqual("4");
    });

    it("should say Buzz when put 5", function(){
        var fizzbuzz = new FizzBuzz(5);
        expect(fizzbuzz.say()).toEqual("Buzz");
    });

    it("should say Fizz when put 6", function(){
        var fizzbuzz = new FizzBuzz(6);
        expect(fizzbuzz.say()).toEqual("Fizz");
    });
});
