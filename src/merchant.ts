import { Observable } from "rxjs";
import { Api } from "./api/api";
import { IMerchant } from "./datatypes/merchantType";
import { MerchantModel } from "./result/merchantModel";

export class Merchant {
    static version = 4;
    static create(options: IMerchant): Observable<IMerchant> {
        return Observable.create(observable => {
            // prepare data
            var data = new MerchantModel(options);

            if(!data.email) {
                observable.error("Email is not set")
                observable.complete();
                return;
            }

            if(!data.password) {
                observable.error("password is not set")
                observable.complete();
                return;
            }

            if(!data.firstName) {
                observable.error("firstName is not set")
                observable.complete();
                return;
            }

            if(!data.lastName) {
                observable.error("lastName is not set")
                observable.complete();
                return;
            }

            if(!data.companyName) {
                observable.error("companyName is not set")
                observable.complete();
                return;
            }

            if(!data.cocNumber) {
                observable.error("cocNumber is not set")
                observable.complete();
                return;
            }

            if(!data.gender) {
                observable.error("gender is not set")
                observable.complete();
                return;
            }

            if(!data.street) {
                observable.error("street is not set")
                observable.complete();
                return;
            }

            if(!data.houseNumber) {
                observable.error("houseNumber is not set")
                observable.complete();
                return;
            }

            if(!data.postalCode) {
                observable.error("postalCode is not set")
                observable.complete();
                return;
            }

            if(!data.city) {
                observable.error("city is not set")
                observable.complete();
                return;
            }

            if(!data.bankAccountOwner) {
                observable.error("bankAccountOwner is not set")
                observable.complete();
                return;
            }

            if(!data.bankAccountNumber) {
                observable.error("bankAccountNumber is not set")
                observable.complete();
                return;
            }

            if(!data.bankAccountBIC) {
                observable.error("bankAccountBIC is not set")
                observable.complete();
                return;
            }

            Api.post("merchant", "create", this.version, data).map(
                (result) => new MerchantModel(result)
            ).subscribe(
                result => observable.next(result),
                error => observable.error(error),
                () => observable.complete()
            )
        })
    }
}