export class AppUser {
    firstName: string;
    lastName: string;
    email: string;
    adress: string;
    adressTwo: string;
    city: string;
    country: string;
    postalCode: string;

    constructor(email: string,
        name?: string,
        lastName?: string,
        adress?: string,
        adressTwo?: string,
        city?: string,
        country?: string,
        postalCode?: string) {
        this.firstName = name;
        this.lastName = lastName;
        this.email = email;
        this.adress = adress;
        this.adressTwo = adressTwo;
        this.city = city;
        this.country = country;
        this.postalCode = postalCode;

    }


}