import * as Paynl from "../../index"

Paynl.Config.setApiToken("your-api-token");
Paynl.Config.setServiceId("");

Paynl.Merchant.create({
    email: "jhon.doe@example.com",
    password: "Azertyuiop1",
    firstName: "Jhon",
    lastName: "Doe",
    companyName: "example",
    cocNumber: "BE 0123.456.789",
    gender: "male",
    street: "Testrue",
    houseNumber: "1a",
    postalCode: "1000",
    city: "Brussels",
    bankAccountOwner: "Jhon Doe",
    bankAccountNumber: "BE12 3456 7890 1234",
    bankAccountBIC: "BBRUBEBB"
    // optional field not included here
}).subscribe(
    result => console.log(result),
    error => console.error("error ",error)
)