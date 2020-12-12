/// <reference types="cypress" />

context('Compra', () => {


  it('Efetuar uma compra de produto', () => {
 cy.backgroundLogin()
    cy.visit('/');
  
    let nomeProduto = 'Faded Short Sleeve T-shirts';
    cy.contains(nomeProduto).trigger('mouseover')
    cy.contains(nomeProduto)
      .parent()//h5
      .siblings('div.button-container')
      .children('a')
      .first()//add to cart
      .click()

       // validando se o produto foi add com sucesso
       cy.get('.icon-ok')
       .parent()//h2
       .should('contain.text','Product successfully added to your shopping cart')
       cy.get('span#layer_cart_product_title').should('contain.text',nomeProduto)
      
      cy.get(".button-container a[href$='order']").click()
      cy.get(".cart_navigation.clearfix a[href$='order&step=1']").click();
      // cy.get("#email").type('vidal_teste@gmail.com')
      // cy.get("#passwd").type('12345')
      // cy.get("#SubmitLogin").click()

      // validando seo endereço de entrega é igaul o de cobrança
      cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')
      cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same')

     

      ///[type='checkbox']#addressesAreEquals

      cy.get('button[name=processAddress]').click()
      cy.get('[type=checkbox]#cgv').check()
      cy.get('button[name=processCarrier]').click()
      cy.get('.bankwire').click()
      cy.get('.cart_navigation.clearfix button[type=submit]')
        .find('span')
        .contains('I confirm my order')
        .click()
        cy.get('.cheque-indent strong')
        .should('contain.text','Your order on My Store is complete.')

        cy.get('div.box').invoke('text').then((text) =>{
          console.log(text)
          console.log(text.match(/[A-Z][A-Z]+/g)[1])

          // 0 -> RTP
          //1 ID do pedido
          //escrita de um arquivo json com o conteudo do pedido
          // caminho do arquivo (sempre a partir do root) | conteúdo do arquivo
          cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/[A-Z][A-Z]+/g)[1] }`})
        })
cy.get(".cart_navigation  a[href$='history']").click()
//leitura de um arquivo
cy.readFile('cypress/fixtures/pedido.json').then((pedido)=>{
  cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)
})

//html
// . = classe
//json path
// . = nivel dentro do caminho do json


       

        //1.capturar o texto do box
        //Filtrar o texto do box para extrair somente o ID do pedido
        //3 Armazenar o di de alguma forma
        //5 obter o ID do pedido de alguma forma 

        //expect
        //should

  });
});

//nome do produto 
// -> pai
// -> irmãoes do pai (ou tios desee elemento)
//-/. irmãi button container
// - > add to caafrt *
// -> more