let cervejas = []

const carregarDiv = cs => {
    const div = document.getElementById("beersDiv")
    const itensHtml = cs.map(({id, uid, brand, name, hop, yeast, malts, alcohol}) => 
    `
    <table>
    <tr>
        <td>${id}</td>
        <td>${uid}</td>
    </tr>
    </table>
    `
    )
    div.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarCervejas() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        cervejas = await res.json()
        carregarDiv(cervejas)
    } catch(err) {
        document.getElementById("beersDiv").innerHTML = "Ocorreu algum erro"
    }
}

let botao = document.getElementById("buttonLoad")
botao.addEventListener("click", () => carregarCervejas())