///<reference types = "cypress"/>


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
 
  cy.get('#inputEmail1').type(logPass.testData.email);
  cy.get('#inputPassword2').type(logPass.testData.password);

})
})


})
