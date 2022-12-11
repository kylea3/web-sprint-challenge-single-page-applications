describe('Pizza App', () => {
  beforeEach(() => {
 
    cy.visit("http://localhost:3000/pizza");
  })

  const nameInput = () => cy.get(`input[name=name]`);
  const peppInput = () => cy.get(`input[name=pepperoni]`);
  const sausageInput = () => cy.get(`input[name=sausage]`);
  const onionInput = () => cy.get(`input[name=onion]`);
  const sauceInput = () => cy.get(`input[name=sauce]`);
  const sizeInput = () => cy.get(`select[name=size]`);
  const cheeseInput = () => cy.get(`input[name=extraCheese]`);
  const submitBtn = () => cy.get(`button[id='order-button']`)

  it('check cypress inputs work', () => {
    nameInput().should('exist');
    peppInput().should('exist');
    sausageInput().should('exist');
    onionInput().should('exist');
    cheeseInput().should('exist');
    submitBtn().should('exist');
    sauceInput().should('exist');
    sizeInput().should('exist');
  })  

  it('check if toppings can be checkmarked', () => {
    peppInput().check();
    sausageInput().check();
    onionInput().check();
    cheeseInput().check();
  })

  it('check if name input can be typed', () => {
    nameInput()
      .should('have.value', '')
      .type('Kyle')
      .should('have.value', 'Kyle')
  })

  it('check if you can submit for', () => {
    nameInput().type("Kyle");
    peppInput().check();
    sauceInput().check();
    sizeInput().select('Medium');
    submitBtn().click();

  })




})
 