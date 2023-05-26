import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

import logo from '../../assets/logo.png';
import Cesta2 from '../../assets/cestas/cesta2.png';
import Cesta1 from '../../assets/cestas/cesta1.png';
import Cesta3 from '../../assets/cestas/cesta3.png';
import Cesta4 from '../../assets/cestas/cesta4.png';
import Cesta5 from '../../assets/cestas/cesta5.png';
import Texto from '../componentes/Texto';

const { width } = Dimensions.get('window');

const DATA = [
	{
		coverImageUri: Cesta1,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	},
	{
		coverImageUri: Cesta2,
		cornerLabelColor: '#0080FF',
		cornerLabelText: 'Dia das mães'
	},
	{
		coverImageUri: Cesta3,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	},
	{
		coverImageUri: Cesta4,
		cornerLabelColor: '#FFD300',
		cornerLabelText: 'Especial'
	},
	{
		coverImageUri: Cesta5,
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
		<Image source={logo} style={styles.logo}/>
        <Texto style={styles.imageText}>Veja abaixo alguns de nossos produtos</Texto>
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