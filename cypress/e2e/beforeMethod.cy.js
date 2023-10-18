// before(() => {
//   cy.log('Спрацьовує один раз перед всіма тестами');
// })

// beforeEach(() => {
//   cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//   cy.log('Open "Form Layouts" page');
//   cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//   cy.get('[title="Forms"]').click();
//   cy.get('[title="Form Layouts"]').click();
// })

// it('Test 1', () => {
//   cy.contains('nb-card', 'Using the Grid').then(form => {
//     cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//     cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//   });
// })

// it('Test 2', () => {
//   cy.contains('nb-card', 'Using the Grid').then(form => {
//     cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//     cy.wrap(form).find('[for="inputPassword21"]').should('contain', 'Password');
//   });
// })

// it('Test 3', () => {
//   cy.contains('nb-card', 'Using the Grid').then(form => {
//     cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//     cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//   });
// })

// describe('Positive scenarios', () => {
//   before(() => {
//     cy.log('Positive scenarios');
//   })

//   beforeEach(() => {
//     cy.log('Positive scenarios');
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//     cy.log('Open "Form Layouts" page');
//     cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//     cy.get('[title="Forms"]').click();
//     cy.get('[title="Form Layouts"]').click();
//   })

//   it('Test 1', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })

//   it('Test 2', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })
// })


// describe('Negative scenarios', () => {
//   before(() => {
//     cy.log('Negative scenarios');
//   })

//   beforeEach(() => {
//     cy.log('Negative scenarios');
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//     cy.log('Open "Form Layouts" page');
//     cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//     cy.get('[title="Forms"]').click();
//     cy.get('[title="Form Layouts"]').click();
//   })

//   it('Test 1', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })

//   it('Test 2', () => {
//     cy.contains('nb-card', 'Using the Grid').then(form => {
//       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
//       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
//     });
//   })
// })


// beforeEach(() => {
//   cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

//   cy.log('Open "Form Layouts" page');
//   cy.get('[alt="Material Dark Theme"]').click();
//   //cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//   cy.get('[title="Forms"]').click();
//   cy.get('[title="Form Layouts"]').click();
// })


beforeEach(() => {

      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.log('Open "Form Layouts" page');
      cy.get('[alt="Material Dark Theme"]').click(); 
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
      
    
  })

describe('parametrized test', () => {

  const loginPasswords = [
    {
      testData: {
        email: 'test@ukr.net',
        password: '12345'
      }
    },
    {
      testData: {
        email: 'qa@gmail.com',
        password: 'Qa123!'
      }
    },
    {
      testData: {
        email: 'dev@bigmir.net',
        password: 'jaga-jaga'
      }
    }
 
  ]

  loginPasswords.forEach(logPass => {
    it(`input data: ${logPass.testData}`, () => {
      // cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      // cy.log('Open "Form Layouts" page');
      // cy.get('[alt="Material Dark Theme"]').click(); 
      // cy.get('[title="Forms"]').click();
      // cy.get('[title="Form Layouts"]').click();
      
      cy.get('#inputEmail1').type(logPass.testData.email);
      cy.get('#inputPassword2').type(logPass.testData.password);

      // cy.visit('https://google.com');

      // cy.get('.gLFyf').type(searchTerm.testData);
      // cy.get('div.wM6W7d').first().should('contain', searchTerm.expectedResult);
    })
  })

})


// describe('multiple search tests', () => {

//   const searchTerms = [
//     {
//       testData: 'Cypress',
//       expectedResult: 'cypress'
//     },
//     {
//       testData: 'wiki',
//       expectedResult: 'wikipedia'
//     },
//     {
//       testData: 'ama',
//       expectedResult: 'Amazon'
//     },
//     {
//       testData: 'roz',
//       expectedResult: 'rozetka'
//     },
//     {
//       testData: 'eldora',
//       expectedResult: 'eldorado'
//     }
//   ]

//   searchTerms.forEach(searchTerm => {
//     it(`Serch term: ${searchTerm.testData}`, () => {
//       cy.visit('https://google.com');

//       cy.get('.gLFyf').type(searchTerm.testData);
//       cy.get('div.wM6W7d').first().should('contain', searchTerm.expectedResult);
//     })
//   })

// })
// // describe('Positive scenarios', () => {
// //   before(() => {
// //     cy.log('Positive scenarios');
// //   })

// //   it('Test 1', () => {
// //     cy.contains('nb-card', 'Using the Grid').then(form => {
// //       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
// //       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
// //     });
// //   })

// //   it('Test 2', () => {
// //     cy.contains('nb-card', 'Using the Grid').then(form => {
// //       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
// //       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
// //     });
// //   })
// // })


// // describe('Negative scenarios', () => {
// //   before(() => {
// //     cy.log('Negative scenarios');
// //   })

// //   it('Test 1', () => {
// //     cy.contains('nb-card', 'Using the Grid').then(form => {
// //       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
// //       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
// //     });
// //   })

// //   it('Test 2', () => {
// //     cy.contains('nb-card', 'Using the Grid').then(form => {
// //       cy.wrap(form).find('[for="inputEmail1"]').should('contain', 'Email');
// //       cy.wrap(form).find('[for="inputPassword2"]').should('contain', 'Password');
// //     });
// //   })
// // })