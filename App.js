import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Login from './src/surfaces/Login'
import Feed from "./src/surfaces/Feed"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Conversations from './src/surfaces/Conversations';
import AddPost from './src/surfaces/AddPost';
import Favorites from './src/surfaces/Favorites';
import Profile from './src/surfaces/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { UserListContext } from './src/context';
import { fetchUsers } from './src/api';
import axios from 'axios'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Conversations') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'AddPost') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#25A0B0',
        tabBarInactiveTintColor: '#000000',
        tabBarShowLabel: false,
        headerTransparent: true,
        headerTitleAlign: 'left',
      
        headerTitleStyle: {
          fontFamily: 'Poppins_600SemiBold',
          fontSize: 18,
          textAlign: "left",
          fontWeight: 'bold',
          marginTop: 70,       
        },
        headerStyle: { height: 170 }

      })}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Conversations" component={Conversations} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}


export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true)
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });


  useEffect(() => {
    const source = axios.CancelToken.source();

    fetchUsers(source.token)
      .then(fetchedData => {
        console.log(fetchedData)
        setUserList(fetchedData)
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

  if (!fontsLoaded) {
    return null;
  }

  if (loading) return <ActivityIndicator size={'large'} color="#0000ff" />

  if (error) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'red' }}>Erro: {error}</Text>
    </View>
  );

  return (
    <SafeAreaProvider>
      <UserListContext.Provider value={{ userList: userList }}>
        <NavigationContainer>
          <Stack.Navigator>
            {!userLoggedIn ? (
              <Stack.Screen name="Login" component={Login} />
            ) : (
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>

      </UserListContext.Provider>

    </SafeAreaProvider>
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
