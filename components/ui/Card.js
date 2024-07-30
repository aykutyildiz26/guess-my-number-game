import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,

    elevation: 4, //Android Only

    shadowColor: "black", //iOS Only
    shadowOffset: { width: 0, height: 2 }, //iOS Only
    shadowRadius: 6, //iOS Only
    shadowOpacity: 0.25, //iOS Only
  },
});
