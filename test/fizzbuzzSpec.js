describe("FizzBuzz", function(){
    it("should say 1 when put 1", function(){
        var fizzbuzz = new FizzBuzz(1);
        expect(fizzbuzz.say()).toEqual("1");
    });

    it("should say 2 when put 2", function(){
        var fizzbuzz = new FizzBuzz(2);
        expect(fizzbuzz.say()).toEqual("2");
    });
});
