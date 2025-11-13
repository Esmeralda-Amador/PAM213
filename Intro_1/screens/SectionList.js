import { Text, StyleSheet, View, SectionList } from 'react-native'
import {useState} from 'react'

const houses=[
    {
        title: 'Formula Of Love', 
        data:[
        'Album Twice',
        'Album Twice',
        'Album Twice',
        'Album Twice',
        'Album Twice',
        'Album Twice',
        ],
    },
    {
        title: 'Maruchan',
        data:[
            'Sabor a Pulpo',
            'Sabor a Pulpo',
            'Sabor a Pulpo',
            'Sabor a Pulpo',
            'Sabor a Pulpo',
            'Sabor a Pulpo',
            'Sabor a Pulpo',
            'Sabor a Pulpo',
        ],
    },
    {
        title: 'Perfect Velvet',
        data:[
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
            'Album Red Velvet',
        ],
    },
    {
        title: 'This is for',
        data:[
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
            'Album Twice',
        ],
    },      
]
const SectionListScreen = () => {
    return(
        <View style={styles.container}>
            <SectionList
                sections={houses}
                keyExtractor={(item) => item}
                renderItem={({item})=><Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section})=>(
                <Text style={styles.sectionHeader}>{section.title}</Text>
                  )}
            />
        </View>
     )

}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});
export default SectionListScreen