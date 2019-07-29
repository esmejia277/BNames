document.querySelector("#generar-nombre").addEventListener("submit", loadNames);
function loadNames(event){
    event.preventDefault();
    
    const source = document.getElementById("origen");
    const sourceSelected = source.options[source.selectedIndex].value;

    const genre = document.getElementById("genero");
    const genreSelected = genre.options[genre.selectedIndex].value;

    const amount = document.getElementById("numero").value;

    let url = "https://uinames.com/api/?";

    if (sourceSelected !== "") {
        url += `region=${sourceSelected}&`;
    }

    if (genreSelected !== "") {
        url += `genre=${genre}&`;
    }

    if (amount !== "") {
        url += `amount=${amount}&`
    }
    
    // connect with ajax
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if(this.status == 200){
            const names = JSON.parse(this.responseText);
            let htmlNames = `
                <h2 style="text-align:center;">Nombres generados</h2>`;
            htmlNames += `<ul class="lista">`

            names.forEach(function(names){
                htmlNames += `
                    <l1>${names.name}</l1><br>`;
            });
            htmlNames += `</ul>`
            document.getElementById("resultado").innerHTML = htmlNames;
        }
    }
    xhr.send();
}