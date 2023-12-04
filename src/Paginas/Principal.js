//home.js
import './styles/Pages.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Slidebar.jsx';





import Autor from './pages/Autor.jsx';
import Kaskag from './pages/Kaskag.jsx';
import Arquetipos from './pages/Arquetipos.jsx';
import Big5 from './pages/Big5.jsx';
import Enfocate from './pages/Enfocate.jsx';
import Herripcf from './pages/Herripcf.jsx';
import Motivacion from './pages/Motivacion.jsx';
import Mxvsjp from './pages/Mxvsjp.jsx';
import Talentintegral from './pages/Talentintegral.jsx';


// ----------------------------------------------------------------Import Kasuga Kaguya----------------------------------------------------------------------------------------------
import Kinformacion from './pages/kasugakaguya/kinformacion.jsx';
import Kblog from './pages/kasugakaguya/kblog.jsx';
import Kjuego from './pages/kasugakaguya/kjuego.jsx';
import Kexamen from './pages/kasugakaguya/kexamen.jsx';
// ----------------------------------------------------------------Import Arquetipos----------------------------------------------------------------------------------------------
import Ainformacion from './pages/Arquetipos/ainformacion.jsx';
import Ablog from './pages/Arquetipos/ablog.jsx';
import Ajuego from './pages/Arquetipos/ajuego.jsx';
import Aexamen from './pages/Arquetipos/aexamen.jsx';
// ----------------------------------------------------------------Import Big5----------------------------------------------------------------------------------------------
import Binformacion from './pages/Big5/binformacion.jsx';
import Bblog from './pages/Big5/bblog.jsx';
import Bjuego from './pages/Big5/bjuego.jsx';
import Bexamen from './pages/Big5/bexamen.jsx';
// ----------------------------------------------------------------Import Enfocate----------------------------------------------------------------------------------------------
import Einformacion from './pages/Enfocate/einformacion.jsx';
import Eblog from './pages/Enfocate/eblog.jsx';
import Ejuego from './pages/Enfocate/ejuego.jsx';
import Eexamen from './pages/Enfocate/eexamen.jsx';
// ----------------------------------------------------------------Import Herripcf----------------------------------------------------------------------------------------------
import Hinformacion from './pages/Herripcf/hinformacion.jsx';
import Hblog from './pages/Herripcf/hblog.jsx';
import Hjuego from './pages/Herripcf/hjuego.jsx';
import Hexamen from './pages/Herripcf/hexamen.jsx';
// ----------------------------------------------------------------Import Motivacion----------------------------------------------------------------------------------------------
import Informacion from './pages/Motivacion/informacion.jsx';
import Blog from './pages/Motivacion/blog.jsx';
import Juego from './pages/Motivacion/juego.jsx';
import Examen from './pages/Motivacion/examen.jsx';
// ----------------------------------------------------------------Import Mxvsjp----------------------------------------------------------------------------------------------
import Minformacion from './pages/Mxvsjp/minformacion.jsx';
import Mblog from './pages/Mxvsjp/mblog.jsx';
import Mjuego from './pages/Mxvsjp/mjuego.jsx';
import Mexamen from './pages/Mxvsjp/mexamen.jsx';
// ----------------------------------------------------------------Import Talentintegral----------------------------------------------------------------------------------------------
import Tinformacion from './pages/Talentointegral/tinformacion.jsx';
import Tblog from './pages/Talentointegral/tblog.jsx';
import Tjuego from './pages/Talentointegral/tjuego.jsx';
import Texamen from './pages/Talentointegral/texamen.jsx';


const Principal = () => {
  return (
    <BrowserRouter>
      <Sidebar currentPage="Operaciones">
        <Routes>
          <Route path="/kaskag" element={<Kaskag />} />
          <Route path="/autor" element={<Autor />} />
          <Route path="/arquetipos" element={<Arquetipos />} />
          <Route path="/big5" element={<Big5 />} />
          <Route path="/enfocate" element={<Enfocate />} />
          <Route path="/herripcf" element={<Herripcf />} />
          <Route path="/motivacion" element={<Motivacion />} />
          <Route path="/mxvsjp" element={<Mxvsjp />} />
          <Route path="/talentintegral" element={<Talentintegral />} />


        </Routes>
        {/* --------------------------------------------------------------------------Rutas KasugaKaguya------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/kinformacion" element={<Kinformacion />} />
          <Route path="/kblog" element={<Kblog />} />
          <Route path="/kjuego" element={<Kjuego />} />
          <Route path="/kexamen" element={<Kexamen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Arquetipos------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/ainformacion" element={<Ainformacion />} />
          <Route path="/ablog" element={<Ablog />} />
          <Route path="/ajuego" element={<Ajuego />} />
          <Route path="/aexamen" element={<Aexamen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Big5------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/binformacion" element={<Binformacion />} />
          <Route path="/bblog" element={<Bblog />} />
          <Route path="/bjuego" element={<Bjuego />} />
          <Route path="/bexamen" element={<Bexamen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Enfocate------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/einformacion" element={<Einformacion />} />
          <Route path="/eblog" element={<Eblog />} />
          <Route path="/ejuego" element={<Ejuego />} />
          <Route path="/eexamen" element={<Eexamen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Herripcf------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/hinformacion" element={<Hinformacion />} />
          <Route path="/hblog" element={<Hblog />} />
          <Route path="/hjuego" element={<Hjuego />} />
          <Route path="/hexamen" element={<Hexamen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Motivacion------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/juego" element={<Juego />} />
          <Route path="/examen" element={<Examen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Mxvsjp------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/minformacion" element={<Minformacion />} />
          <Route path="/mblog" element={<Mblog />} />
          <Route path="/mjuego" element={<Mjuego />} />
          <Route path="/mexamen" element={<Mexamen />} />
        </Routes>
        {/* --------------------------------------------------------------------------Rutas Talentintegral------------------------------------------------------------------------------------------ */}
        <Routes>
          <Route path="/tinformacion" element={<Tinformacion />} />
          <Route path="/tblog" element={<Tblog />} />
          <Route path="/tjuego" element={<Tjuego />} />
          <Route path="/texamen" element={<Texamen />} />
        </Routes>


      </Sidebar>
    </BrowserRouter>
  );
};

export default Principal;
