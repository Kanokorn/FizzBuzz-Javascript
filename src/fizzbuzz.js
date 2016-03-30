function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number % 3 === 0 && number % 5 === 0) {
            return "FizzBuzz";
        }

        if (isMultiplesOfThree()) {
            return "Fizz";
        }

        if (number % 5 === 0) {
            return "Buzz";
        }

        return number.toString();
    }

    function isMultiplesOfThree() {
        return number % 3 === 0;
    }
}
