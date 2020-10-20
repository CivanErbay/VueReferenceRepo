
/* 1. Arrays */
const aa: number[] = [];

function pushNumbers ( a: number, b: number) {
   const c: number =  a + b;
   aa.push(c, a, b)
} 

//1.2 Tuples
let bb: [number, string, number, string] = [
    123,
    "abc",
    345,
    "xyz"
]


/* 2. String that only accepts this specific literal String */
//RIGHT
let x: "Mike" = "Mike"
//WRONG
let y: "Paul" = "Mike"

        

/* 3. Objects */
//DEFINITION
let cc: { houseNumber: number; streetName: string} 
//RIGHT
cc = { houseNumber: 123, streetName: "Brüsseler"}
//WRONG (streetnName is missing)
cc = { houseNumber: 123}



/* 4.Interfaces - If we want to re-use this type, we can create an interface */
interface Adress {
    houseNumber: number;
    streetName?: string;        // Questionmark "?" means is optinoal when defining 
}
//refer it by its name
let ee: Adress = { houseNumber: 33};



/* 5. Intersection & Union Types  */
export interface HasPhoneNumber {
    name: string;
    phone: number;
}
export interface HasEmail {
    name: string;
    email: string;
}

//  returning Object has phone OR Mail --> also mirrored by the TypeScript OR annotation |
let contactInfo: HasEmail | HasPhoneNumber = 
    Math.random() > 0.5 ?
    {
        name: "Civan",
        phone: 12345
    } : 
    {
        name: "Civan",
        email: "Civan.Erbay@web.de"
    }

    //RIGHT
let otherContactInfo: HasEmail & HasPhoneNumber = {
    name: "Mike",
    email: "mike@example.com",
    phone: 12345
}
    //WRONG (because variable needs to fulfill both interfaces with email AND phoneNumber )
let otherContactInfo2: HasEmail & HasPhoneNumber = {
    name: "Mike",
    email: "mike@example.com",
    
}


