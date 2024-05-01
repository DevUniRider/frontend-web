export class User {
    userName;

    constructor(userName) {
        this.userName = userName;
    }

    get usernameUniDriver() {
        return this.userName == null ? "Unknown" : `${this.userName}`.trim();
    }
}