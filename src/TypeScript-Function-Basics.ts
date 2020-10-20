/* 6. Functions */

import { HasEmail } from "./TypeScript-Syntax";

// Function Arguments and return values can have type annotations


function sendEmail(to: HasEmail): { recipient: string; body: string } {
return {
    recipient: `${to.name} <${to.email}>`,
    body: "Blub"
}
}
// (to: HasEmail): --> Argument
//{ recipient: string; body: string } --> THIS IS THE RETURN TYPE

//Basic Function Annotation is IN GENERAL: 1. Paramter-List(Arguments), 2. Colom (:), 3. Return-Type in curly braces, 4. return {Return Values}