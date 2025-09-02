import { Button, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function App() {
    // shared value is like a react state that is automatically kept in sync between the js and native side of app
    // can store any js value like num, string or boolean also ds like array or objects

    const width = useSharedValue(50);
    const height = useSharedValue(50);

    const handlePress = () => {
        // values are modified using .value property
        height.value = withSpring(height.value + 30);
        width.value = withSpring(width.value + 30);
    };

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            {/* This Animated object wraps React Native built-ins such as View, ScrollView or FlatList. */}
            <Animated.View
                style={{
                    width,
                    height,
                    backgroundColor: "violet",
                }}
            />
            <Button onPress={handlePress} title="Click me" />
        </View>
    );
}
