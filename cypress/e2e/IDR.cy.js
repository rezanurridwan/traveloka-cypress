describe('Test Suite - Verification IDR menu', () =>{
    before(()=>{
        cy.visit('/');
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").click();
    })
    it('TCase - Use Country & Language (Bahasa Indonesia) Currency Indonesian Rupiah', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(1) > .r-1awozwy').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m > .css-1dbjc4n').click()
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //assertion
        cy.get('[href="/id-id/retrieve"] > .css-901oao').should('contain','Pesanan Saya')
    });
})