import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../src/features/loggedSlice";
import { useNavigation } from "@react-navigation/native";
import { useGetSignOutMutation } from "../src/features/usersAPI";

export default function SignOut() {
  const logged = useSelector((state) => state.logged.loggedState);
  const user = useSelector((state) => state.logged.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getData = async () => {
    try {
      dispatch(deleteUser());
      navigation.navigate("Welcome");
      alert("Signed out!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button title={"Sign Out"} onPress={getData} />
    </View>
  );
}
