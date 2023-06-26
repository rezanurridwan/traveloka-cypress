describe('Test Suite - Verification IDR menu', () =>{
    beforeEach(()=>{
        cy.visit('/');
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").click();
    })
    it('TCase 01 - Use Country & Language Indonesia (Bahasa Indonesia) Currency Indonesian Rupiah', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(1) > .r-1awozwy').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m > .css-1dbjc4n').click()
        //screenshot
        cy.screenshot('./IDR/TCase01 a')
       //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
        cy.screenshot('./IDR/TCase01 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','IDR')
    });
    it('TCase 02 - Use Country & Language Indonesia (English) Currency Indonesian Rupiah', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(2)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m > .css-1dbjc4n').click()
       //screenshot
       cy.screenshot('./IDR/TCase 02 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
        cy.screenshot('./IDR/TCase 02 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','IDR')
    });
    it('TCase 03- Use Country & Language Global (English) Currency Australian Dollar', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(3)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > :nth-child(1)').click()
       //screenshot
       cy.screenshot('./IDR/TCase 03 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
        cy.screenshot('./IDR/TCase 03 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','AUD')
    });
    it('TCase 04- Use Country & Language Global (English) Currency Euro', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(3)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > :nth-child(2)').click()
       //screenshot
       cy.screenshot('./IDR/TCase 04 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 04 b')
       //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','EUR')
    });
    it('TCase 05 - Use Country & Language Global (English) Currency US Dollar', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(3)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > :nth-child(3)').click()
       //screenshot
       cy.screenshot('./IDR/TCase 05 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 05 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','USD')
    });
    it('TCase 06 - Use Country & Language Malaysia (English) Currency Malaysian Ringgit', () => {
        //country and language
        cy.get('.r-r4y9i6 > .r-1dqxon3 > :nth-child(4) > .r-1awozwy > .css-901oao').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 06 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 06 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','MYR')
    });
    it('TCase 07 - Use Country & Language Malaysia (Bahasa Malaysia) Currency Malaysian Ringgit', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(5)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 07 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 07 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','MYR')
        cy.get('[href="/ms-my/retrieve"] > .css-901oao').should('contain','Tempahan Saya')
    });
    it('TCase 08 - Use Country & Language Philippines (Bahasa Inggeris) Currency Peso Philippines', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(6)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 08 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 08 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','PHP')
    });
    it('TCase 09 - Use Country & Language Singapore (English) Currency Singapore Dollar ', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(7)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 09 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 09 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','SGD')
    });
    it('TCase 10 - Use Country & Language Thailand (English) Currency Thailand Bath ', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(8)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 10 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 10 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','THB')
    });
    it('TCase 11 - Use Country & Language Thailand Currency Thailand Bath ', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(9)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 11 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 11 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','THB')
    });
    it('TCase 12 - Use Country & Language Vietnam (Tieng Viet) Currency Viet Nam Dong ', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(10)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 12 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 12 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','VND')
    })
    it('TCase 13 - Use Country & Language Vietnam (English) Currency Viet Nam Dong ', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(11)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 13 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 13 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','VND')
    })
    it('TCase 14 - Use Country & Language Australia (English) Currency Australian Dollar ', () => {
        //country and language
        cy.get('.r-1dqxon3 > :nth-child(12)').click()
        //currency
        cy.get('.r-1q142lx.r-1wtj0ep > :nth-child(1) > [style="max-height: 306px;"] > .r-1f0042m').click()
       //screenshot
       cy.screenshot('./IDR/TCase 14 a')
        //button done
        cy.get('[style="align-items: flex-end; -webkit-box-align: end;"] > .css-18t94o4').click()
        //screenshot
       cy.screenshot('./IDR/TCase 14 b')
        //assertion
        cy.get(".css-1dbjc4n.r-1awozwy.r-1f0042m.r-18u37iz.r-1r8g8re.r-tuq35u").should('contain','AUD')
    })
})