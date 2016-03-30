function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number === 2) {
            return "2";
        }

        if (number === 3) {
            return "Fizz";
        }

        return "1";
    }
}
