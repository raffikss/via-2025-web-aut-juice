import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
static get url() {
    return "/#/";
}

static get paymentButton (){
    return cy.get("#mat-radio-45-input")
} 

static get PaymentContinueButton (){
    return cy.contains('button', 'Continue')
}







}