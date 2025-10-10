import { ScrollView, Text, View } from 'react-native';
import HeaderAccount from '../components/HeaderAccount';
import CardProduk from '../components/CardProduk';

export default function Shop() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFFCF2' }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderAccount />
      <View
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 15 }}
      >
        <CardProduk />
      </View>
    </ScrollView>
  );
}
