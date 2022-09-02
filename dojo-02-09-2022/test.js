data = [
    {
    "id": 1,
    "Title": "A",
    "Status": "Entregue",
    "Vamos_fazer": 4,
    "Construindo": 5,
    "Construido": 12,
    "Avaliando": 2,
    "Avaliado": 1,
    "Entregando": 1,
    "Data_de_Criacao": "2022-01-01",
    "Data_de_Entrega": "2022-01-25  "
    }, 
    {
    "id": 2,
    "Title": "B",
    "Status": "Entregue",
    "Vamos_fazer": 5,
    "Construindo": 4,
    "Construido": 10,
    "Avaliando": 1,
    "Avaliado": 2,
    "Entregando": 1,
    "Data_de_Criacao": "2022-01-01",
    "Data_de_Entrega": "2022-01-23"
    }, 
    {
    "id": 3,
    "Title": "C",
    "Status": "Entregue",
    "Vamos_fazer": 9,
    "Construindo": 3,
    "Construido": 18,
    "Avaliando": 2,
    "Avaliado": 1,
    "Entregando": 1,
    "Data_de_Criacao": "2022-01-01",
    "Data_de_Entrega": "2022-02-03"
    },
    {
    "id": 4,
    "Title": "D",
    "Status": "Entregue",
    "Vamos_fazer": 4,
    "Construindo": 4,
    "Construido": 13,
    "Avaliando": 1,
    "Avaliado": 1,
    "Entregando": 1,
    "Data_de_Criacao": "2022-01-01",
    "Data_de_Entrega": "2022-01-24"
    },

];

console.log(data);

// setup test helpers
mocha.setup('bdd');

// your tests here
describe('test suite', function() {
    it('should work', function() {
        chai.assert(true);
    });
});
