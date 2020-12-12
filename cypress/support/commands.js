// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin',()=>{
  cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0h5diHp%2B9IjTwl%2FTvHUfHf4PoN8Z9tY0%2FK4GAshUl1TpPv66Yu7QNiTxcVUVaGxnOOYW6ObvmitlLnCjPXbzl344V7gCkk3uoqredva6SPhoRxEcH7J%2BO3s%2FGI1yjtINkXAmNxi2jLlSb42DlRWx4iGadGcSw5VjraI%2FC5Nta87kr9tG4KFhRnY6%2BiMunfQb%2BQreY14xnoivnbxmFKGe%2B%2BrM6sY59f%2ByX5OKJg0LOQav8XyI8N7IaSpN6wlLaBDHBbm6LaI6X8iYkH42c3z%2FWtmPeDRJsywa3G2suYG3g40yGY1BJHu6xK6qowL1orYbHcpvMbE063j4eJphsPKv8JUEe0HrytqH3Xos0%2Fw1zw%2FzCFJ4lvaatHN0ZGGRkt0CVqujDEHkp%2FTuDb7mbo%2Ff2qKyB7x9U7lyvTOp57r6tjCjdLWdK02BuHQ2x7jSZReoag%3D%3D000344'
  )

})
