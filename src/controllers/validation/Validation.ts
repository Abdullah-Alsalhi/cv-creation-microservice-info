type errors = {
    email: string
    password: string,
}

export class Validation {



    static errors: {
        email: string
        password: string,
    } = {
            email: 'email is not valid email, check the email',
            password: 'password must be at least 8 characters including characters, numbers, special characters',
        };

    constructor(private email: string, private password: string) {

    }



}