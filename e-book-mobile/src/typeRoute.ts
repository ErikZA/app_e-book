import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Profile: { name: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};
