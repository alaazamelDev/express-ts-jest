import {UserService} from "../../src/services/user.service";

describe('User Service', () => {

    let dbClientMock: { fetchUser: jest.Mock };
    let userService: UserService;

    describe('get user by id', () => {

        beforeEach(() => {
            dbClientMock = {
                fetchUser: jest.fn(),
            }
            userService = new UserService(dbClientMock);
        })

        afterEach(() => {
            jest.clearAllMocks();
        })

        it('should throw user not found error when invalid id is passed', async () => {

            // Arrange
            const userId: string = '123';
            dbClientMock.fetchUser.mockResolvedValue(null)

            // Act & Assert
            await expect(userService.getUserById(userId))
                .rejects
                .toThrow("User not found")

        });

        it('should return user object when valid id is passed', async () => {

            // Arrange
            const user: { id: string, name: string } = {id: "123", name: "Alaa Zamel"};
            dbClientMock.fetchUser.mockResolvedValue(user)

            // Act
            const result = await userService.getUserById("123");

            // Assert
            expect(dbClientMock.fetchUser).toHaveBeenCalledWith("123")
            expect(result).toEqual(user);

        });
    });
});