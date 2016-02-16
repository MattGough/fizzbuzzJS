describe("FizzBuzz", function() {

  describe("multiples of 3 & 5", function() {

    it("returns Fizzbuzz when passes 15", function() {
     expect(FizzBuzz(15)).toBe("FizzBuzz");
    });

  });

  describe("multiples of 3", function() {

    it("returns Fizz when passed 3", function() {
     expect(FizzBuzz(3)).toBe("Fizz");
    });

    it("returns Fizz when passed 9", function() {
     expect(FizzBuzz(9)).toBe("Fizz");
    });

  });

  describe("multiples of 5", function() {

    it("returns Buzz when passed 5", function() {
     expect(FizzBuzz(5)).toBe("Buzz");
    });

    it("returns Buzz when passed 25", function() {
      expect(FizzBuzz(25)).toBe("Buzz");
    });
  });

  describe("Numbers that are not multiples of 3 or 5", function() {

    it("returns the 11 when passed 11", function() {
     expect(FizzBuzz(11)).toBe(11);

    });

  });

});

