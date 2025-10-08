import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardKategori() {
  const navigation = useNavigation();
  const categories = [
    { name: 'Makanan', icon: require('../assets/Snack.png') },
    { name: 'Minuman', icon: require('../assets/Drink.png') },
    { name: 'Alat Mandi', icon: require('../assets/Bath.png') },
    { name: 'Rumah Tangga', icon: require('../assets/Sapu.png') },
    { name: 'Kosmetik', icon: require('../assets/Kosmetik.png') },
    { name: 'Buah', icon: require('../assets/Buah.png') },
    { name: 'Sembako', icon: require('../assets/Sembako.png') },
    { name: 'Alat Bayi', icon: require('../assets/Baby.png') },
  ];

  return (
    <View style={{ padding: 20, marginTop: -20 }}>
      <Text style={styles.title}>Kategori</Text>

      <View style={styles.container}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              navigation.navigate('Category', { category: item.name })
            }
          >
            <Image source={item.icon} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  card: {
    width: 85,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
});
