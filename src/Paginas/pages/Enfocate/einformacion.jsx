//Einformacion.jsx
import React from 'react';
import Pdf from './assets/doc.pdf';
import Pdf2 from './assets/doc (2).pdf';

const Einformacion = () => {
          return (
            <div>
            <h1>Informacion </h1>
            <embed
              src={Pdf}
              type="application/pdf"
              width="100%"
              height="1000px"
            />
            <embed
              src={Pdf2}
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
    
    export default Einformacion;