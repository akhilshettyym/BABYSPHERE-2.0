import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-3xl">BABYSPHERE!</Text>
            {/* <Text style={{ fontSize: 24 }}>BABYSPHERE!</Text> */}
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
        </View>
    );
}