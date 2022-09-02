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
    "Entregando": 1
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
    "Entregando": 1
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
    "Entregando": 1
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
    "Entregando": 1
    },

];

console.log(data);

var total;
var d = data[0]

if(d.Status == "Entregue")
{
    total += d.Vamos_fazer + d.Construindo + d.Construido + d.Avaliando + d.Avaliado + d.Entregando;
}


// setup test helpers
mocha.setup('bdd');

// your tests here
describe('test suite', function() {
    it('should work', function() {
        chai.assert(total == 24);
    });
});
