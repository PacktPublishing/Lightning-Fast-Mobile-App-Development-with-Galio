import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Block, Text, Icon } from "galio-framework";

export default function CommerceCard(props) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  function quantityMath(action) {
    if (action === "plus") {
      setQuantity(quantity + 1);
      setPrice(price + props.price);
    } else if (action === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - props.price);
    }
  }

  useEffect(() => {
    setPrice(props.price);
  }, [props.price]);

  return (
    <Block row style={styles.card}>
      <Image
        style={styles.item}
        source={{ uri: "https://picsum.photos/100" }}
      />
      <Block style={{ marginLeft: 16 }} flex space="around">
        <Text>{props.itemName}</Text>
        <Block row space="between">
          <Text>$ {price}</Text>
          <Block row space="between">
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => quantityMath("minus")}
            >
              <Icon name="minus" family="entypo" />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => quantityMath("plus")}
            >
              <Icon name="plus" family="entypo" />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#bde0fe",
    padding: 8,
    width: "80%",
  },
  item: {
    width: 50,
    height: 50,
  },
  buttons: {
    marginHorizontal: 4,
  },
});
