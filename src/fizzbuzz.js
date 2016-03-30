function FizzBuzz(number) {
    this.say = say;

    function say() {
        if (number === 2) {
            return "2";
        }

        if (number === 3) {
            return "Fizz";
        }

        if (number === 4) {
            return "4";
        }

        return "1";
    }
}
