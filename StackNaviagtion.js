import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoadingScren from "./screens/loadingScren";
import LoginScreen from "./screens/LoginScreen";
import PlanScree from "./screens/PlanScree";
import Profile from "./screens/Profile";
import SinUpscreen from "./screens/SinUpscreen";



const Stack = createNativeStackNavigator();

const StackNavigation = ()=>{
    
    return(
    <NavigationContainer>
        <Stack.Navigator >
            {/* <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="singup" component={SinUpscreen} options={{headerShown: false}}/>
            <Stack.Screen name="plan" component={PlanScree} options={{headerShown: false}}/>
            <Stack.Screen name="pro" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="loading" component={LoadingScren} options={{headerShown: false}}/> */}
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}
export default StackNavigation