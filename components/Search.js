
import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const Search = ({search, setSearch, executeSearch}) => {

  return (
    <View>
      <TextInput
        style={styles.searchBox}
        value={search}
        onChangeText={text => {setSearch(text)}}
        placeholder='Search for a name'
        returnKeyType='search'
        onSubmitEditing={() => executeSearch(search)}
        >
    
      </TextInput>

      <Text>search variable is: {search}</Text>
    </View>
  )
}

export default Search;


const styles = StyleSheet.create({
    searchBox: {
        padding: 10,
        fontSize: '20%'
    }
})