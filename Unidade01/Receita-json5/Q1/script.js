let cervejas = []

const carregarDiv = cs => {
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map(({id, uid, brand, name, styles, hop, yeast, malts, ibu, alcohol, blg}) => 
    `<table>
        <tr>
            <td>${id}</td>
            <td>${uid}</td>
            <td>${brand}</td>
            <td>${name}</td>
            <td>${styles}</td>
            <td>${hop}</td>
            <td>${yeast}</td>
            <td>${malts}</td>
            <td>${ibu}</td>
            <td>${alcohol}</td>
            <td>${blg}</td>
        </tr>
    </table>`
    )
    div.innerHTML = `${itensHtml.join("\n")}`
}

async function carregarCervejas() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")
        cervejas = await res.json()
        carregarDiv(cervejas)
    } catch(err) {
        document.getElementById("cervejasDiv").innerHTML = "Ocorreu algum erro"
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => carregarCervejas())

