import { Tabs } from "expo-router";
import { Foundation, Ionicons } from '@expo/vector-icons'
import { theme } from "@/theme";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            // quando estiver selecionada a rota
            tabBarActiveTintColor: theme.colors.white,
            // quando não estiver selecionada
            tabBarInactiveTintColor: theme.colors.gray[600],
            tabBarStyle: {
                backgroundColor: theme.colors.black,
                borderColor: theme.colors.black
            }
        }}>
            {/* navegação, name seria o nome do arquivo e a rota */}
            <Tabs.Screen options={{
                tabBarIcon: ({ size, color }) => <Foundation name="home" size={size} color={color} />
            }} name='index' />
            <Tabs.Screen options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />
            }} name='search' />
            <Tabs.Screen options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="chatbubble-ellipses" size={size} color={color} />
            }} name='messages' />
            <Tabs.Screen name='profile' />
        </Tabs>
    )
}