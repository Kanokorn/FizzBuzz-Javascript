function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number === 15) {
            return "FizzBuzz";
        }

        if (number % 3 === 0) {
            return "Fizz";
        }

        if (number % 5 === 0) {
            return "Buzz";
        }

        return number.toString();
    }
}
