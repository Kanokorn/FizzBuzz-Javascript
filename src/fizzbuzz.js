function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number % 3 === 0) {
            return "Fizz";
        }
        if (number === 5 || number === 10) {
            return "Buzz";
        }

        return number.toString();
    }
}
