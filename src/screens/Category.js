import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CardProduk from '../components/CardProduk';

export default function Category() {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeader}>
        <View style={styles.rows}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/Left.png')}
              style={styles.leftIcon}
            />
          </TouchableOpacity>
          <Text style={styles.nameText}>{category}</Text>
        </View>
        <View style={styles.searchBar}>
          <Image
            source={require('../assets/Search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari Barang Anda"
          />
        </View>
      </View>
      <View style={styles.containerPrd}>
        <CardProduk />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    height: 110,
    backgroundColor: '#47B765',
    width: '100%',
    paddingVertical: 25,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginBottom: 40,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 15,
  },
  leftIcon: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  searchBar: {
    backgroundColor: '#e5e5e5ff',
    width: '90%',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  searchInput: {
    flex: 1,
  },
  containerPrd: {
    marginLeft: 15,
  },
});
