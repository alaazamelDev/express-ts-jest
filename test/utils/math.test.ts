import {add, divide, multiply, subtract} from "../../src/utils/math";

describe('Math Utilities', () => {
    describe('Addition functionality', () => {
        it('should return 3 when 1 & 2 are passed', () => {

            // Arrange
            const n1: number = 1
            const n2: number = 2;

            // Act
            const result: number = add(n1, n2);

            // Assert
            expect(result).toBe(3);
        });
    });

    describe('Subtraction functionality', () => {
        it('should return -4 when 3 and 7 are passed', () => {

            // Arrange
            const n1: number = 3;
            const n2: number = 7;

            // Act
            const result: number = subtract(n1, n2);

            // Assert
            expect(result).toBe(-4);
        });
    });

    describe('Multiplication functionality', () => {
        it('should return 12 when 3 & 4 are passed', () => {

            // Arrange
            const n1: number = 3;
            const n2: number = 4;

            // Act
            const result: number = multiply(n1, n2);

            // Assert
            expect(result).toBe(12);
        });
    });

    describe('Division functionality', () => {
        it('should return 3 when 21 & 7 are passed', () => {

            // Arrange
            const n1: number = 21;
            const n2: number = 7;

            // Act
            const result: number = divide(n1, n2);

            // Assert
            expect(result).toBe(3);
        });

        it('should throw Division By Zero error when 0 passed as second argument', () => {
            // Arrange
            const n1: number = 21;
            const n2: number = 0;

            // Act & Assert
            expect(() => divide(n1, n2))
                .toThrowError('Division By Zero');
        });
    });
});