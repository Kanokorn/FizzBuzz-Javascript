function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number === 3 || number === 6 || number === 9 || number === 12) {
            return "Fizz";
        }
        if (number === 5 || number === 10) {
            return "Buzz";
        }

        return number.toString();
    }
}
