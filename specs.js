describe("Testiranje brojeva iz niza", () => {

    it("treba da vrati parne brojeve niza", () => {
        const rezultat = vratiParne([6, 8, 2, 3, 5, 9, 5, 4, 1, 2, 8, 17, 39, 48, 21, 71]);
        let nadjenParni = false;
        for ( let i = 0; i < rezultat.length; i++) {
            if (rezultat[i] % 2!== 0) {
                nadjenNeparni = true;
                break;
            }
        }
        expect(nadjenNeparni).toBe(false);
    })
})
