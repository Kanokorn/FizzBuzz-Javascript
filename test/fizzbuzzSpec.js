describe("FizzBuzz", function(){
    it("should say 1 when put 1", function(){
        var fizzbuzz = new FizzBuzz(1);
        expect(fizzbuzz.say()).toEqual("1");
    });
});
