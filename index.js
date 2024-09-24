const estados = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53

}

let cemPorCento = 0

for (let chave in estados){
cemPorCento = cemPorCento + cidades[chave]
}

for(let chave in estados){
const percentual = (cidades[chave]/cemPorCento) * 100
const percent = percentual.toFixed(2)
console.log(`${chave}:${percent}%`)

}

