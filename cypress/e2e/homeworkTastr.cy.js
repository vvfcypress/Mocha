///<reference types = "cypress"/>


beforeEach(() => {

    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Dark Theme"]').click(); 
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();    
  
  })


describe('multiple search tests', () => {
  const toastrs = [
    {
      testData: {
        position: 'bottom-right',
        title: 'ukraine',
        content: 'kyiv',
        time: '1000',
        type: 'warning'
      },
      expectedResult: {
        icon: 'email',
        title: 'ukraine',
        content: 'kyiv',
        color: ' rgb(233, 29, 99) ',
        position: 123      // position somewere here
     }

    }
  ]

  toastrs.forEach(toastr => {
    it(`Toastr test: ${toastr.testData}, ${toastr.expectedResult}`, () => {
      // 
      cy.log('Запускаем тостр');
      
      cy.get('div.form-group button.select-button', {timeout: 20000}).eq(0).click(); // a) Select toastr position
      
      cy.get(`[ng-reflect-value="${toastr.testData.position}"]`).click();// b) Select toastr position
      
      
      cy.get('input[name="title"]').clear().type(toastr.testData.title); // Enter title

      cy.get('input[name="content"]').clear().type(toastr.testData.content); //Enter content

      cy.get('[name="timeout"]').clear().type(toastr.testData.time); // Enter time

      cy.get('div.form-group button.select-button', {timeout: 20000}).eq(1).click(); // a) Select  toastr type

      cy.get(`#cdk-overlay-1 [ng-reflect-value= "${toastr.testData.type}"]`).click(); // b) Select  toastr type
      
      cy.get('button.mat-ripple').eq(0).click(); //Click on Show Toast button

      
      cy.log('Делаем проверку');

      cy.get('nb-toast[ng-reflect-toast]').then( toastr => {

        //или так
        cy.wrap(toastr).should('contain', toastr.expectedResult.title)
        
        // или так. ничего не получается. Cannot read properties of undefined (reading 'title')
        expect(toastr, 'span.title.subtitle').to.contain(toastr.expectedResult.title)
        .and(toastr.expectedResult.content)
        .and(toastr.expectedResult.color)
        .and(toastr.expectedResult.icon);
       
       
      })
      
     
    })
  })

})

 



//   describe('parametrized test', () => {

//     const loginPasswords = [
//     {
//       testData: {
//         email: 'test@ukr.net',
//         password: '12345'
//       }
//     },
//     {
//       testData: {
//         email: 'qa@gmail.com',
//         password: 'Qa123!'
//       }
//     },
//     {
//       testData: {
//         email: 'dev@bigmir.net',
//         password: 'jaga-jaga'
//       }
//     }
    
//     ]
    
//     loginPasswords.forEach(logPass => {
//     it(`input data: ${logPass.testData}`, () => {
     
//       cy.get('#inputEmail1').type(logPass.testData.email);
//       cy.get('#inputPassword2').type(logPass.testData.password);
    
//     })
//     })
//     })


    // describe('multiple search tests', () => {

    //     const searchTerms = [
    //       {
    //         testData: 'Cypress',
    //         expectedResult: 'cypress'
    //       },
    //       {
    //         testData: 'wiki',
    //         expectedResult: 'wikipedia'
    //       },
    //       {
    //         testData: 'ama',
    //         expectedResult: 'Amazon'
    //       },
    //       {
    //         testData: 'roz',
    //         expectedResult: 'rozetka'
    //       },
    //       {
    //         testData: 'eldora',
    //         expectedResult: 'eldorado'
    //       }
    //     ]
      
    //     searchTerms.forEach(searchTerm => {
    //       it(`Serch term: ${searchTerm.testData}`, () => {
    //         cy.visit('https://google.com');
      
    //         cy.get('.gLFyf').type(searchTerm.testData);
    //         cy.get('div.wM6W7d').first().should('contain', searchTerm.expectedResult);
    //       })
    //     })
      
    //   })
    
    


    


        
