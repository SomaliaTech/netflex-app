import { StatusBar } from 'expo-status-bar';
import StackNavigation from './StackNaviagtion';
import { StripeProvider } from '@stripe/stripe-react-native';
import { ProfileContext } from './ContextApi';


export default function App() {
return(
    <>
    <ProfileContext>
    <StripeProvider>
    <StackNavigation/>
    </StripeProvider>
    </ProfileContext>
  
    </>
  

)
}


