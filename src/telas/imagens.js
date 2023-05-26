import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

import logo from '../../assets/logo.png';
import modelo from '../../assets/modelos/modelo.jpg';
import modelo1 from '../../assets/modelos//modelo1.jpg';
import modelo2 from '../../assets/modelos//modelo2.jpg';
import modelo3 from '../../assets/modelos//modelo3.jpg';
import modelo4 from '../../assets/modelos//modelo4.jpg';
import Texto from '../componentes/Texto';

const { width } = Dimensions.get('window');

const DATA = [
	{
		coverImageUri: modelo,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	},
	{
		coverImageUri: modelo1,
		cornerLabelColor: '#0080FF',
		cornerLabelText: 'Dia das mães'
	},
	{
		coverImageUri: modelo2,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	},
	{
		coverImageUri: modelo3,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	},
	{
		coverImageUri: modelo4,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	}
]

const Imagens = () => {

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

export default Imagens;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#FFFFFF",
	  alignItems: 'center',
	  justifyContent: 'center',
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
  	},
});