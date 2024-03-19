describe('Test Script for OWASP Juice Shop', () => {
  before(() => {
    cy.fixture('data.json').then((data) => {
      cy.register(data.username, data.password, data.zip) // this statement use to register account due to the app is clear all the data after 1 day
    })
  })
  beforeEach(() => {
    cy.fixture('data.json').as('data') // used fixture here to easily edit the data, in case that we has too many data to work with and our test script is very long
  })
  it('TC#1 : Login and add 1 item into basket then sunmit', () => {
    cy.get('@data').then((data) => {
      cy.visit(`${Cypress.env('OWASP_PROD')}`)
      // cy.get('#mat-dialog-0').find('[aria-label="Close Welcome Banner"]').click() // this statement use to clear the onboarding modal that block the flow
      cy.login(data.username, data.password) // this is custom commands that create to re-use in other testcases
      cy.get('.mat-grid-tile.ng-star-inserted').eq(0).find('button').click()

      cy.get('.mat-toolbar-row').find('[routerlink="/basket"]').click({ force: true })
      cy.get('#checkoutButton').click()
      cy.get('[routerlink="/address/create"]').click()
      cy.get('#mat-input-9').type(data.country)
      cy.get('#mat-input-10').type(data.name)
      cy.get('#mat-input-11').type(data.tel)
      cy.get('#mat-input-12').type(data.zip)
      cy.get('#address').type(data.address)
      cy.get('#mat-input-14').type(data.city)
      cy.get('#mat-input-15').type(data.state)
      cy.get('#submitButton').click()
      cy.wait(5000)
    })
  })
  it('TC#2 : Login and add 2 items into basket then submit', () => {
    cy.get('@data').then((data) => {
      cy.visit(`${Cypress.env('OWASP_PROD')}`)
      cy.get('#mat-dialog-0').find('[aria-label="Close Welcome Banner"]').click()
      cy.login(data.username, data.password)

      cy.get('.mat-grid-tile.ng-star-inserted').eq(1).find('button').click()
      cy.get('.mat-grid-tile.ng-star-inserted').eq(2).find('button').click()

      cy.get('.mat-toolbar-row').find('[routerlink="/basket"]').click()
      cy.get('#checkoutButton').click()
      cy.get('[routerlink="/address/create"]').click()
      cy.get('#mat-input-3').type(data.country)
      cy.get('#mat-input-4').type(data.name)
      cy.get('#mat-input-5').type(data.tel)
      cy.get('#mat-input-6').type(data.zip)
      cy.get('#address').type(data.address)
      cy.get('#mat-input-8').type(data.city)
      cy.get('#mat-input-9').type(data.state)
      cy.get('#submitButton').click()

      cy.wait(5000)
    })
  })
  it('TC#3 : Verify Search Result', () => {
    cy.visit(`${Cypress.env('OWASP_PROD')}`)
    cy.get('#mat-dialog-0').find('[aria-label="Close Welcome Banner"]').click()
    cy.get('.mat-search_icon-search').type('apple{enter}')
    cy.get('.ng-star-inserted')
      .find('.mat-grid-list > div')
      .find('mat-grid-tile')
      .each(($ele) => {
        expect($ele.text().trim()).to.contain('Apple')
      })
  })
})
