// it('Test 1', () => {
//    cypress.vizit('https://google.com');
//    cypress.contains('span', 'Увійти')
//   })


//   it('Test 2', () => {
//     cypress.vizit('https://google.com');
//     cypress.contains('span', 'Увійти')
//    })

//    it('Test 3', () => {
//     cypress.vizit('https://google.com');
//     cypress.contains('span', 'Увійти')
//    })



describe('Atorization tests', () => {
   describe.only('Test suite with positive values', () => {

    it.only('Test 1', () => {
        cy.visit('https://google.com');
        cy.contains('span', 'Увійти')
       })
     
     
       it('Test 2', () => {
         cy.visit('https://google.com');
         cy.contains('span', 'Увійти')
        })
     
        it('Test 3', () => {
         cy.visit('https://google.com');
         cy.contains('span', 'Увійти')
        })
     

   })


   describe('Test suite with negative values', () => {

    it('Test 1', () => {
        cy.visit('https://google.com');
        cy.contains('span', 'Увійти')
       })
     
     
       it('Test 2', () => {
         cy.visit('https://google.com');
         cy.contains('span', 'Увійти')
        })
     
        it('Test 3', () => {
         cy.visit('https://google.com');
         cy.contains('span', 'Увійти')
        })  
   })
  })