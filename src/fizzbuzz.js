function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number === 3) {
            return "Fizz";
        }
        if (number === 5) {
            return "Buzz";
        }

        return number.toString();
    }
}
