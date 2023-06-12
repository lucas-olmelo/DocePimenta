import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

import modelo from '../../assets/roupas/conjunto_flores.png';
import modelo1 from '../../assets/roupas/divas_inverno.jpg';
import modelo2 from '../../assets/roupas/outono_inverno.jpg';
import modelo3 from '../../assets/roupas/look_evento.png';
import modelo4 from '../../assets/roupas/blusinha_onca.png';
import Texto from './Texto';


const { width } = Dimensions.get('window');

const DATA = [
	{
		coverImageUri: modelo,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Conjunto rosa florido'
	},
	{
		coverImageUri: modelo1,
		cornerLabelColor: '#EB7813',
		cornerLabelText: 'Coleção divas do inverno'
	},
	{
		coverImageUri: modelo2,
		cornerLabelColor: '#03fc17',
		cornerLabelText: 'Coleção outono-inverno'
	},
	{
		coverImageUri: modelo3,
		cornerLabelColor: '#b113eb',
		cornerLabelText: 'Calça bege'
	},
	{
		coverImageUri: modelo4,
		cornerLabelColor: '#1378eb',
		cornerLabelText: 'Sobretudo marrom'
	}
]

const Carrossel = () => {

	const renderItem = data => (
		<View style={styles.cardContainer} key={data.coverImageUri}>
			<View style={styles.cardWrapper}>
				<Image style={styles.card} source={data.coverImageUri}/>
				<View style={[styles.cornerLabel, { backgroundColor: data.cornerLabelColor }]}>
					<Texto style={styles.cornerLabelText}>{data.cornerLabelText}</Texto>
				</View>
			</View>
		</View>
	)

	return <View style={styles.container}>
		<Carousel
			pagination={PaginationLight}
			renderItem={renderItem}
			data={DATA}
			loop
			autoplay
		/>
	</View>
}

export default Carrossel;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#FFFFFF",
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginVertical: 50
	},
	cardContainer: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  width,
	},
	cardWrapper: {
	  borderRadius: 8,
	  overflow: 'hidden',
	},
	card: {
	  width: width * 0.9,
	  height: width * 1.0,
	},
	cornerLabel: {
	  position: 'absolute',
	  bottom: 0,
	  right: 0,
	  borderTopLeftRadius: 8,
	},
	cornerLabelText: {
	  fontSize: 12,
	  color: '#fff',
	  fontWeight: '600',
	  paddingLeft: 5,
	  paddingRight: 5,
	  paddingTop: 2,
	  paddingBottom: 2,
	},
	imageText: {
	  paddingBottom: 20,
	  fontSize: 18,
	},
	logo: {
	  alignSelf: "center",
	  marginBottom: 20,
	  borderRadius: 4,
	  width: width * 0.5,
	  height: width * 0.5
  	},
});