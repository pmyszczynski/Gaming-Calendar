import { StyleSheet, View } from 'react-native';
import React, {useState} from 'react';
import { Text, ThemeProvider, createTheme } from '@rneui/themed';
import ReleasesList from './components/ReleasesList';
const contentful = require('contentful')

const client = contentful.createClient({
  space: 'rw54yt8637jp',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'Vwa6NNvCrV2zh12CpGjCzIY5OXx69JsRHKiF1o57HGY'
})

const theme = createTheme({
    lightColors: {
        primary: '#e7e7e8',
    },
    darkColors: {
        primary: '#000',
    },
    mode: 'light',
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        height: '100%',
        paddingBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default function App() {
  const [items, setItems] = useState([{
    fields: {
        game: 'Loading...',
        platform: [],
    }
  }]);

  client.getEntries({
      content_type: 'calendarItem',
      order: 'fields.releaseDate'
  })
      .then((entries) => {
          setItems(entries.items)
      })
      .catch(console.error)

  return (
      <ThemeProvider theme={theme}>
          <View style={styles.container}>
              <Text h2 style={styles.title}>Gaming Calendar</Text>
              <ReleasesList items={items} />
          </View>
      </ThemeProvider>
  );
}
