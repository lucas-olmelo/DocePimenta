import React from "react";
import { ScrollView } from "react-native";

import Topo from "../Cesta/componentes/Topo.js";
import Descricao from "../Cesta/componentes/Descricao.js";
import Itens from "../Cesta/componentes/Itens.js";


export default function Cesta({ topo, detalhes, botao, itens }) {
    return <ScrollView>
        <Topo {...topo} />
        <Descricao {...detalhes}{...botao} />
        <Itens {...itens} />
    </ScrollView>
}

