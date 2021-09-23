import { IMerchant } from "../datatypes/merchantType";

export class MerchantModel implements IMerchant {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    companyName: string;
    cocNumber: string;
    gender: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    bankAccountOwner: string;
    bankAccountNumber: string;
    bankAccountBIC: string;
    vatNumber?: string;
    languageId?: number;
    package?: string;
    authorizedToSign?: boolean;
    resellerId?: string;
    referralTool?: string;
    referralInfo?: string;
    referralType?: string;
    referralUrl?: string;
    contactEmail?: string;
    contactPhone?: string;
    
    constructor(data) {
        this.email = data.email;
        this.password = data.password;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.companyName = data.companyName;
        this.cocNumber = data.cocNumber;
        this.gender = data.gender;
        this.street = data.street;
        this.houseNumber = data.houseNumber;
        this.postalCode = data.postalCode;
        this.city = data.city;
        this.bankAccountOwner = data.bankAccountOwner;
        this.bankAccountNumber = data.bankAccountNumber;
        this.bankAccountBIC = data.bankAccountBIC;
    }

    isAuthorizedToSign() {
        return this.authorizedToSign;
    }

    /**
     * Why? because I can
     * @returns string
     */
    getGender() {
        return this.gender;
    }
}