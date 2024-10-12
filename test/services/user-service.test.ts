import {UserService} from "../../src/services/user.service";
import {afterEach} from "node:test";

describe('UserService with External API', () => {

    let userService: UserService;
    let mockDbClient: { fetchUser: jest.Mock };

    beforeEach(() => {

        // Arrange
        mockDbClient = {fetchUser: jest.fn()}
        userService = new UserService(mockDbClient);

        // Mock the fetch API call
        global.fetch = jest.fn();

    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should return user data with additional API data when valid userId is provided', async () => {

        // Arrange: Mock the database call and the external API call
        const mockUser: { id: string, name: string } = {id: "123", name: "Alaa"};
        const mockApiResponse: { socialMedia: string } = {socialMedia: "@alaazamel"};

        mockDbClient.fetchUser.mockResolvedValue(mockUser);
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockApiResponse),
        })

        // Act: Call the service method
        const res = await userService.getUserById("123");

        // Assert Check that user data and API data are returned
        expect(res).toEqual({...mockUser, additionalData: mockApiResponse});
        expect(mockDbClient.fetchUser).toHaveBeenCalledWith("123");
        expect(global.fetch).toHaveBeenCalledWith("https://api.example.com/users/123")
    });


    it('should throw an error when the API call fails', async () => {

        // Arrange: Mock the database call and a failed API call
        const mockUser: { id: string, name: string } = {id: "123", name: "Alaa"};
        mockDbClient.fetchUser.mockResolvedValue(mockUser);
        (global.fetch as jest.Mock).mockRejectedValue(new Error("API call failed"))

        // Act & Assert: Expect an error to be thrown
        await expect(userService.getUserById("123"))
            .rejects
            .toThrow("API call failed");
    });
});