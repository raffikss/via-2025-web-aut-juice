import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
static get url() {
    return "/#/";
}   
static get  addNewCard (){
    return cy.get('#mat-expansion-panel-header-0')
} 

static get newName (){
    return cy.get('#mat-input-2')
}

static get newCardNumber (){
    return cy.get('#mat-input-3')
}
static get cardDate (){
    return cy.get('#mat-input-4')
}

static get expiryDate (){
    return cy.get('#mat-input-5')
}

static get submitButton (){
    return cy.get('#submitButton')
}

static get cardList () {
    return cy.get('mat-row')




}

}
