//token: 3525635500807579 / 2973630296293444

//https://superheroapi.com/api/access-token/character-id
//ej: https://superheroapi.com/api.php/3525635500807579/1

$(document).ready(function(){

    $('#btn').on('click', function(){
        let numeroHero = $('#numHero').val();
        console.log(numeroHero);

        $.ajax({
            type:'get',
            url: `https://superheroapi.com/api.php/3525635500807579/${numeroHero}`,
            dataType: 'json',
            success(data) {
                //console.log(data);
                pintarElementos(data);
                //ejecutar funcion
            },
            error(e) {
                console.log(e);
            }
        });

       const pintarElementos = (data) => {
           //const datos = data.map(())
           console.log(data);

        document.querySelector('#cardHero').innerHTML = `
            <div class="card text-white bg-dark mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.image.url}" class="img-fluid rounded-start" alt="...">
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${data.name}</h5>
                        <p class="card-text">Conexiones: ${data.connections.relatives}</p>
                    <div class="container ps-2 pe-3">
                        <p class="card-text">Publicado por: ${data.biography.publisher}</p>
                        <hr class="test-light">
                        <p class="card-text">Ocupación: ${data.work.occupation}</p>
                        <hr class="test-light">
                        <p class="card-text">Primera Aparición: ${data.biography.publisher}</p>
                        <hr class="test-light">
                        <p class="card-text">Altura: ${data.appearance.height}</p>
                        <hr class="test-light">
                        <p class="card-text">Peso: ${data.appearance.weight}</p>
                        <hr class="test-light">
                        <p class="card-text">Alianzas: ${data.connections['group-affiliation']}</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        `

        var options = {
            title: {
                text: `Estadísticas de Poder para ${data.name}`
            },
            animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 40,
                toolTipContent: "<b>{label}</b>: {y}",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: [
                    { y: `${parseInt(data.powerstats.intelligence)}`, label: "intelligence" },
                    { y: `${parseInt(data.powerstats.strength)}`, label: "strength" },
                    { y: `${parseInt(data.powerstats.speed)}`, label: "speed" },
                    { y: `${parseInt(data.powerstats.durability)}`, label: "durability" },
                    { y: `${parseInt(data.powerstats.power)}`, label: "power" },
                    { y: `${parseInt(data.powerstats.combat)}`, label: "combat" },
                ]
                }]
        };
        $("#graficoHero").CanvasJSChart(options);

        }

    });

});




