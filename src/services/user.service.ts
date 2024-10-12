export class UserService {

    constructor(private dbClient: any) {
    }

    async getUserById(userId: string) {
        const user = await this.dbClient.fetchUser(userId);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}