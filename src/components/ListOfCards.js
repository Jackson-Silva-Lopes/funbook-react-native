import { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { fetchCars } from '../api'
//import { Dimensions } from 'react-native'

//const screenWidth = Dimensions.get('window').width


const ListOfCards = () => {

    const [carList, setCarList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const source = axios.CancelToken.source();

        fetchCars(source.token)
            .then(fetchedData => {
                console.log(fetchedData)
                setCarList(fetchedData)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                if (!axios.isCancel(err)) {
                    setError(err.message)
                    setLoading(false)
                }
            });
        return () => {
            source.cancel("Operation canceled by the user.")
        }
    }, []);


    if (loading) return <ActivityIndicator size={'large'} color="#0000ff" />

    if (error) return (
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color: 'red' }}>Erro: {error}</Text>
        </View>
    );

    const renderItem = ({ item }) => {
        return (<Image style={{ width: "100%", height: 288, borderRadius: 20, marginBottom: 32 }} source={{ uri: item.url }} />)
    };

    return (
        <View style={{ paddingVertical: 30 }}>
            <FlatList
                data={carList}
                renderItem={renderItem}
                keyExtractor={item => item.itemId}
                
                showsHorizontalScrollIndicator={false}
                
            />
            
        </View>
    )
}

export default ListOfCards