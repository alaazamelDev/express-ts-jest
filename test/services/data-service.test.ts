// Mock the axios library
import axios from "axios";
import {fetchData} from "../../src/services/data.service";

jest.mock('axios');

describe('Data Service', () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should return fetched data successfully when valid url is provided', async () => {

        // Arrange
        const url: string = "https://example.com";
        (axios.get as jest.Mock).mockResolvedValue({data:"Hello World!"});

        // Act
        const result = await fetchData(url);

        // Assert
        expect(result).toBe("Hello World!");
        expect(axios.get).toHaveBeenCalledWith(url);
    });

    it('should throw Error fetching data when invalid url is provided', async () => {

        // Arrange
        const url: string = "https://example.com";
        (axios.get as jest.Mock).mockRejectedValue(new Error("Invalid URL"));

        // Act & Assert
        await expect(fetchData(url))
            .rejects
            .toThrow("Error fetching data");
        expect(axios.get).toHaveBeenCalledWith(url);
    });

});