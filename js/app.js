document.querySelector("#generar-nombre").addEventListener("submit", loadNames);
function loadNames(event) {
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
    //with fetech api
    sendRequest(url);

    // // connect with ajax
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", url, true);
    // xhr.onload = function() {
    //     if(this.status == 200){
    //         const names = JSON.parse(this.responseText);
    //         let htmlNames = `
    //             <h2 style="text-align:center;">Nombres generados</h2>`;
    //         htmlNames += `<ul class="lista">`

    //         names.forEach(function(names){
    //             htmlNames += `
    //                 <l1>${names.name}</l1><br>`;
    //         });
    //         htmlNames += `</ul>`
    //         document.getElementById("resultado").innerHTML = htmlNames;
    //     }
    // }
    // xhr.send();
}

// function sendRequest(url) {
//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         }).then(function (names) {
//             console.log(names);
//             let html = "";
//             names.forEach(function (people) {
//                 html += `<p> ${people.name}</p>`;
//             });
//             document.getElementById("resultado").innerHTML = html;
//         }).catch(function (error) {
//             console.log("error", error);
//         });
// }

let sendRequest = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(names => {
            let html = "";
            names.forEach(people => html += `<p> ${people.name}</p>`);
            document.getElementById("resultado").innerHTML = html;
        }).catch(error => console.log("error", error));
}