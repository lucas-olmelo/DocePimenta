import React from "react";

import Topo from "../Cesta/componentes/Topo.js";
import Descricao from "../Cesta/componentes/Descricao.js";


export default function Cesta({topo,detalhes}) {
    return <>
        <Topo {...topo}/>
        <Descricao {...detalhes}/>
    </>
}

