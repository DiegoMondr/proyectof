//Hinformacion.jsx
import React from 'react';
import Pdf from './assets/doc.pdf';

const Hinformacion = () => {
          return (
            <div>
      <h1>Informacion </h1>
      <embed
        src={Pdf}
        type="application/pdf"
        width="100%"
        height="1000px"
      />
      <a
        href={Pdf}
        download="nombre_personalizado.pdf"
      >
        Descargar PDF
      </a>
    </div>
         );
    };
    
    export default Hinformacion;