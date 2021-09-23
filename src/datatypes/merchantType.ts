export interface IMerchant {
    /**
     * Email address of the registrant
     */
    email: string;
    /**
      * Password should be at least 8 characters long and contain a capital letter and a digit
      */
    password: string;
    /**
      * First name of the registrant
      */
    firstName: string;
    /**
      * Last name of the registrant
      */
     lastName: string;
    /**
      * Name of the company
      */
    companyName: string;
    /**
      * Chamber of Commerce number of the company
      */
    cocNumber: string;
    /**
      * Gender of the registrant. Available options are: "male" or "female"
      */
    gender: string;
    /**
      * Streetaddress of the company
      */
    street: string;
    /**
      * Housenumber of the company
      */
     houseNumber: string;
     /**
      * Postalcode of the company
      */
     postalCode: string;
     /**
      * City where the company is located
      */
     city: string;
     /**
      * Owner's name of the bankaccount
      */
     bankAccountOwner: string;
     /**
      * Bank account number should be an IBAN
      */
     bankAccountNumber: string;
     /**
      * BIC or SWIFT code
      */
     bankAccountBIC: string;
     /**
      * Possible vat number of the company
      */
     vatNumber?: string;
     /**
      * Preferred language of the registrant.
      * See API_Language_v2::getAll()
      */
     languageId?: number;
     /**
      * Used to indicate what package you want on registration.
      * Available options are
      * - pioneer
      * - professional
      * - business
      * - corporate
      * - partner
      */
     package?: string;
     /**
      * Indicates if the user is authorised to sign
      */
     authorizedToSign?: boolean;
     /**
      * Id of the account who referred the registrant
      */
     resellerId?: string;
     /**
      * Tool varialbe of the the account who referred the registrant
      */
     referralTool?: string;
     /**
      * Info variable of the account who referred the registrant
      */
     referralInfo?: string;
     /**
      * Type variable of the account who referred the registrant
      */
     referralType?: string;
     /**
      * Referral url of the registrant
      */
     referralUrl?: string;
     /**
      * An email address that customers can use to contact the merchant
      */
     contactEmail?: string;
     /**
      * A phone number that customers can use to contact the merchant
      */
     contactPhone?: string;
}