// Script enviar los datos al modal y editarlos a través de PUT.
const btnEditar = document.querySelectorAll('#btnEditar');
const formularioEditar = document.getElementById('formularioEditar'); // capturar el formulario. para el PUT.

// "addEventListener" es mejor que "Onclick".
for (let i = 0; i < btnEditar.length; i++) { // recorro cada btn para agregar el addEventListener.
    btnEditar[i].addEventListener('click', () => {
        const data = btnEditar[i].dataset.info; // creo una variable data con la info (stringify) que está en el btn (data-set).
        rellenarCampos(data); // rellenar el modal.
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
const editarMascota = data => {
    const { _id } = JSON.parse(data); // Extraigo el id que es lo que necesito, parseado a JSON.

    formularioEditar.addEventListener('submit', async e => {
        e.preventDefault(); // cuando hace clic no se recarga la pantalla, esto para procesar la info primero.

        const name = formularioEditar.elements['name'].value; // capturar los datos modificados.
        const race = formularioEditar.elements['race'].value;
        const age = formularioEditar.elements['age'].value;
        const sex = formularioEditar.elements['sex'].value;

        try {
            const data = await fetch(`mascotas/${_id}`, { // fetch, no entiendo del todo. Primer parametro, la ruta.
                method: 'put',
                headers: { 'Content-Type': 'application/json' }, // necesario para reconocer el JSON.
                body: JSON.stringify({ name, race, age, sex }) // guardo los datos en body y los paso a Stringify (por alguna razón).
            });

            const res = await data.json(); // .json() quita los valores de relleno (o eso creo).

            if (!res.error) window.location.href = 'mascotas';
            else {
                console.log(res);
                window.location.href = 'mascotas';
            }

        } catch (error) {
            console.log(error);
        }
    });
}