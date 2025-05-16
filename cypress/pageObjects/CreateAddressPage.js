import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
static get url() {
    return "/#/";
}   
static get  addCountry (){
    return cy.get('#mat-input-2')
} 
static get  addName (){
    return cy.get('#mat-input-3')
} 
static get  mobileNumber (){
    return cy.get('#mat-input-4')
} 
static get  addZipCode (){
    return cy.get('#mat-input-5')
} 
static get  addAddress (){
    return cy.get('#address')
} 
static get  addCity (){
    return cy.get('#mat-input-7')
} 
static get  addState (){
    return cy.get('#mat-input-8')
} 

static get submitButton (){
    return cy.get('#submitButton')
}


static get addressValidation() {
    return cy.get('.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-Address.mat-column-Address.ng-star-inserted');
}

}