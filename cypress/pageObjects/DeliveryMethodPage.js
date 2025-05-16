import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
static get url() {
    return "/#/";
}

static get standartDeliveryButton (){
    return cy.get("#mat-radio-44-input")

}
static get DeliveryContinueButton (){
    return cy.contains('button', 'Continue')
}









}