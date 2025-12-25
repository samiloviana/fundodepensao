const preco = document.querySelector ("#preco-dolar-hoje")

fetch ("https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados/ultimos/1?formato=json")

.then (resposta => resposta.json())
.then (dados => {
    const dolarhoje = dados[0]
    preco.innerText = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
}).format(dolarhoje.valor)
})