describe('Test Suite - Verification IDR menu', () =>{
    beforeEach(()=>{
        cy.visit('/');
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").click();
    })
    it('TCase - Use Country & Language Indonesia (Bahasa Indonesia) Currency Indonesian Rupiah', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(1) > .r-1awozwy').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m > .css-1dbjc4n').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','IDR')
    });
    it('TCase - Use Country & Language Indonesia (English) Currency Indonesian Rupiah', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(2)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m > .css-1dbjc4n').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','IDR')
    });
    it('TCase - Use Country & Language Global (English) Currency Australian Dollar', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(3)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > :nth-child(1)').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','AUD')
    });
    it('TCase - Use Country & Language Global (English) Currency Euro', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(3)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > :nth-child(2)').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','EUR')
    });
    it('TCase - Use Country & Language Global (English) Currency US Dollar', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(3)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > :nth-child(3)').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','USD')
    });
    it('TCase - Use Country & Language Malaysia (English) Currency Malaysian Ringgit', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(4) > .r-1awozwy > .css-901oao').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','MYR')
    });
    it.only('TCase - Use Country & Language Malaysia (Bahasa Malaysia) Currency Malaysian Ringgit', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(5)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','MYR')
        cy.get('[href="/ms-my/retrieve"] > .css-901oao').should('contain','Tempahan Saya')
    });
})


