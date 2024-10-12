export class UserService {

    constructor(private dbClient: any) {
    }

    async getUserById(userId: string) {
        const user = await this.dbClient.fetchUser(userId);
        if (!user) {
            throw new Error("User not found");
        }

        // Fetch additional data from an external API
        const additionalData = await this.fetchUserDataFromApi(userId);
        return {...user, additionalData};
    }

    async fetchUserDataFromApi(userId: string): Promise<any> {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('API call failed');
        }
        return await response.json();

    }
}