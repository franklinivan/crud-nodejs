const btnEliminar = document.querySelectorAll('#btnEliminar');
// "addEventListener" se usa siempre.

for (let i = 0; i < btnEliminar.length; i++) {
    btnEliminar[i].addEventListener('click', async () => { 
        const id = btnEliminar[i].dataset.info; // id obtiene el id que está en el data-set del btn.

        try {
            const data = await fetch(`/mascotas/${id}`, { // fetch, no lo entiendo del todo. recibe primero la url.
                method: 'delete',
            });

            const res = await data.json(); // .json() quita los valores de relleno (o eso creo).

            if (!res.error) window.location.href = 'mascotas'; // si todo salió bien, redirige.
            else console.log(res);

        } catch (error) {
            console.log(error);
        }
    });
}