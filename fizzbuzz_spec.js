var fb = require('..fizzbuzz');

describe("A program that plays fizzbuzz", function() {
	it("counts from 1 to 100", function() {
		expect(fb.count(1,5)).toBe("1 2 3 4 5")
	})
	it("can take a number and return 'fizz' for multiples of 3 and the number if not", function()
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});
});
	it("can take take a number and return 'buzz' for multiples of 5 and the number if not", function()
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(7)).toBe(7);
		expect(fb.buzzer(17)).toBe(17);
	});
});
	it("can take a number and return 'fizzbuzz' for multiples of 3 and 5 and the number if not", funtion()
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
		expect(fb.fizzbuzzer(16)).toBe(16);
		expect(fb.fizzbuzz(4)).toBe(4);
	});
});