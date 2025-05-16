import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
static get url() {
    return "/#/";
}


static get addressRadioButton (){
    return cy.get("#mat-radio-41-input")
} 


static get addressContinueButton (){
    return cy.contains('button', 'Continue')
}



}