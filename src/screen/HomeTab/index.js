
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from "./home.tab";
import RecommendTab from "./recomend.tab";
import ProfileTab from "./profile.tab";

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeTab} />
      <Tab.Screen name="RecommendTab" component={RecommendTab} />
      <Tab.Screen name="ProfileTab" component={ProfileTab} />
    </Tab.Navigator>
  );
}