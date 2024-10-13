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

export const getUsers = async () => {
    // Simulated user fetching logic
    return [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];
};

export const createUser = async (user: any) => {
    // Simulated user creation logic
    return { id: 3, ...user };
};
