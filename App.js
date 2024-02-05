
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { DATA } from './DATA';
import Search from './components/Search';
import { useEffect, useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()));
    setItems(searchArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search search={search} setSearch={setSearch} executeSearch={executeSearch} />

      <FlatList
        data={items}
        renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
        // keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
