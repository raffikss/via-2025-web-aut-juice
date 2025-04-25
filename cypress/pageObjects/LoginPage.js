import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }
  static get emailField() {
    return cy.get("#email");
}
static get passwordField() {
  return cy.get("#password");
}

static get loginButton() {
  return cy.get("button#loginButton")
}
static get userProfileButton() {
  return cy.get("button[aria-label='Go to user profile']");
}
static get notYetACustomerLink() {
  return cy.get("#newCustomerLink");
}
}
  