// Script enviar los datos al modal y editarlos a través de PUT.
const btnEditar = document.querySelectorAll('#btnEditar'); // capturo los btn a través del id.
const formularioEditar = document.getElementById('formularioEditar'); // capturar el formulario. para el PUT.
// Estoy utilizando "addEventListener" en vez de "Onclick" porque vi en un video que era recomendable.

for (let i = 0; i < btnEditar.length; i++) { // recorro cada btn para agregar el addEventListener.
    btnEditar[i].addEventListener('click', () => {
        const data = btnEditar[i].dataset.info; // creo una variable data con la info (stringify) que está en el btn (data-set).
        rellenarCampos(data); // función para rellenar el modal.
        editarMascota(data); // función que recibe la data cruda en stringify.
    });
}

const rellenarCampos = data => {
    const info = JSON.parse(data); // Es importante parsear la info a JSON.

    document.getElementById('name').value = info.name; // añado la información a través del id de los campos.
    document.getElementById('race').value = info.race;
    document.getElementById('age').value = info.age;
    document.getElementById('sex').value = info.sex;
}

// ----------- Aquí voy a está el código del PUT para editar -----------
// para editar una mascota podría hacerlo con POST pero quería practicar PUT.
const editarMascota = data => {
    const dataRaw = JSON.parse(data); // recibo la data de la mascota en crudo y lo parseo a JSON.
    const id = dataRaw._id; // extraigo el id. Es lo que necesito.

    formularioEditar.addEventListener('submit', async e => {
        e.preventDefault(); // cuando hace clic no se recarga la pantalla, esto para procesar la info primero.

        const name = formularioEditar.elements['name'].value; // capturar los datos modificados.
        const race = formularioEditar.elements['race'].value;
        const age = formularioEditar.elements['age'].value;
        const sex = formularioEditar.elements['sex'].value;

        try {
            const data = await fetch(`mascotas/${id}`, { // el fetch es algo que no entiendo todavía. Primer parametro, la ruta.
                method: 'put',
                headers: { 'Content-Type': 'application/json' }, // necesario para reconocer el JSON.
                body: JSON.stringify({ name, race, age, sex }) // guardo los datos en body y los paso a Stringify (por alguna razón).
            });

            const res = await data.json(); // .json() quita los valores de relleno (o eso creo).
            console.log(res);
            if (res.status)  window.location.href = '/mascotas'; // si todo salió bien, redirige.
            else console.log(res);
            
        } catch (error) {
            console.log(error);
        }
    });
}