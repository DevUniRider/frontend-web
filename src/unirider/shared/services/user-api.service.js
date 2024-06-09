import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000',
});

export class UserApiService {
    static async login(email, password) {
        try {
            const response = await http.get('/Users', {
                params: {
                    email: email,
                    password: password
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    static async register(user) {
        try {
            const response = await http.post('/Users', user);
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }

    static async createUserWithCard(user, card) {
        user.Card = [card];
        try {
            const response = await http.post('/Users', user);
            return response.data;
        } catch (error) {
            console.error("Error during user creation with card:", error);
            throw error;
        }
    }
}
