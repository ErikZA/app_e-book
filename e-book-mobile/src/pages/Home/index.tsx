import React from "react";
import { Image, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import style from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigationToLogin() {
    navigation.navigate("Login");
  }

  function handleNavigationToCreateAccount() {
    navigation.navigate("CreateAccount");
  }

  function handleNavigationToPanel() {
    navigation.navigate("Panel", { name: "Unknown" });
  }

  return (
    <>
      <View style={style.container}>
        <View style={style.main}>
          <Image
            style={style.image}
            source={require("../../assets/icons/Freebie.png")}
          />
          <Text style={style.mainText}>My app</Text>
        </View>

        <View style={style.section}>
          <Text style={style.textWelcome}>
            Welcome to new platform of e-learning. Let’s learn.
          </Text>
        </View>

        <View style={style.mainFox}>
          <Image
            style={style.imageFox}
            source={require("../../assets/images/Applearn.png")}
          />
        </View>

        <View style={style.mainButton}>
          <RectButton style={style.button} onPress={handleNavigationToLogin}>
            <View style={style.buttonIcon}>
              <Text>
                <Feather name="log-in" color="#fff" size={24} />
              </Text>
            </View>
            <Text style={style.buttonText}>Sign in</Text>
          </RectButton>

          <RectButton
            style={style.buttonSkip}
            onPress={handleNavigationToPanel}
          >
            <Text style={style.buttonTextSkip}>Skip</Text>
            <View style={style.buttonIcon}>
              <Text>
                <Feather name="chevrons-right" color="#fff" size={24} />
              </Text>
            </View>
          </RectButton>
        </View>

        <View style={style.footer}>
          <RectButton
            style={style.buttonLink}
            onPress={handleNavigationToCreateAccount}
          >
            <Text style={style.footerText}>Create an account</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
};

export default Home;
