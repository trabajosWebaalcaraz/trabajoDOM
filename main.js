/* eslint-disable no-tabs */
{
  const urlEventos = 'https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json';


  /**
   *  funcion de lectura
   * @param {string} url
   * @return {Promise} Promesa
   */
  function lectura(url) {
    const promise = new Promise((resolve, reject)=>{
      const req= new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(req.statusText);
        }
      };
      req.send();
    });
    return promise;
  }

  lectura(urlEventos).then((result)=>{
    const datos = JSON.parse(result);
    console.log(datos);


    const table = document.getElementById('tablaEventos');

    for (let i = 0; i < datos.length; i++) {
      let row;
      if (datos[i].squirrel == false) {
        row = `<tr>
							<td>${i}</td>
              <td>${datos[i].events}</td>
              <td>${datos[i].squirrel}</td>
					    </tr>`;
      } else {
        row = `<tr id ="rojo">
        <td>${i}</td>
        <td>${datos[i].events}</td>
        <td>${datos[i].squirrel}</td>
        </tr>`;
      }
      table.innerHTML += row;
    };

    const eventos = [];
    for (let i = 0; i < datos.length; i++) {
      for (let j =0; j<datos[i].events.length; j++) {
        const eventosF = datos[i].events;
        if (!eventos.includes(eventosF[j])) {
          eventos.push(datos[i]);
        }
      }
    }
    const matrix = Array(eventos.length).fill().map(()=>Array(5).fill());

    for (let i = 0; i < eventos.length; i++) {
      matrix[i][0] = eventos[i];
    };
    for (let i = 0; i < datos.length; i++) {
      for (let j = 0; j < datos[i].events.length; j++) {
        for (let k = 0; k < matrix.length; k++) {
          if (matrix[k][0] == datos[i].events[j]) {
            // aqui se le sumaria al fp tp fn o fp
          }
        }
      }
    }
    // Luego se hace un ciclo para operar y encontrar el coeficiente
    //  de MCC y ponerlo en la tabla.
    // No alcance a implementarlo por problemas de internet
  });
}
