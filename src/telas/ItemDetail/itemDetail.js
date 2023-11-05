import React from 'react';

export default function Item({ id, nome, preco, img}) {
    return <>
        <View style={estilos.produtos}>
            <Image
                source={img}
                style={estilos.shoesImg}
            />
            <View style={estilos.textBox}>
                <Texto style={estilos.shoesText}>
                    {filtroNome(nome)}
                </Texto>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 250}}>
                    <View opacity={0.4}>
                        <Texto style={estilos.priceText}> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)} </Texto>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Texto>Quantidade: </Texto>
                            <CampoInteiro valor={quantidade} acao={atualizaQtdTotal} />
                        </View>
                    </View>
                    <Botao texto='Remover' acao={() => removerItemPeloId(id)} style={{backgroundColor: 'black'}}></Botao>
                </View>
            </View>
        </View>
        <View style={estilos.divisor} />
    </>
}