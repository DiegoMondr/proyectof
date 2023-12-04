//kinformacion.jsx
import React from 'react';
import Pdf from './assets/doc.pdf';
import Pdf2 from './assets/doc (2).pdf';

const Kinformacion = () => {
          return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center',margin:'20px', padding:'15px'}}>
      <h1>Informacion </h1>
      <embed
        src={Pdf}
        type="application/pdf"
        width="80%"
        height="800px"
      />
      <embed
        src={Pdf2}
        type="application/pdf"
        width="80%"
        height="800px"
      />
      <a
        href={Pdf}
        download="nombre_personalizado.pdf"
      >
        Descargar PDF
      </a>
      <a
        href={Pdf2}
        download="nombre_personalizado.pdf"
      >
        Descargar PDF
      </a>
    </div>
         );
    };
    
    export default Kinformacion;