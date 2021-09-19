export interface IUsers {

    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: ICompany;
    address: IAddress;

}


interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;

}

interface IGeo {
    lat: number;
    lng: number
}