import React from "react";
import { Image, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import style from "./styles";

const Home: React.FC = () => {
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
        <View style={style.mainFox}>
          <Image
            style={style.imageFox}
            source={require("../../assets/images/Foxlearn.png")}
          />
        </View>
        <View style={style.footer}>
          <RectButton style={style.button} onPress={() => {}}>
            <View style={style.buttonIcon}>
              <Text>
                <Feather name="arrow-right" color="#fff" size={24} />
              </Text>
            </View>
            <Text style={style.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
};

export default Home;
