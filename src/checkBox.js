import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const CheckBox = props => {
  return (
    <View style={props.containerStyle}>
      <TouchableOpacity
        onPress={props.onClick}
        style={[
          {
            height: props.small ? 14 : 28,
            width: props.small ? 14 : 28,
            borderRadius: props.small ? 4 : 8,
            borderWidth: props.small ? 1 : 2,
            borderColor: props.color,
            alignItems: "center",
            justifyContent: "center"
          },
          props.style
        ]}
      >
        {props.selected ? (
          <View
            style={{
              height: props.small ? 10 : 20,
              width: props.small ? 10 : 20,
              borderRadius: props.small ? 3 : 5,
              backgroundColor: props.color
            }}
          />
        ) : null}
      </TouchableOpacity>
      {props.label && (
        <TouchableOpacity
          onPress={props.onClick}
          style={[
            {
              flex: 1,
              height: props.small ? 16 : 26,
              justifyContent: "center"
            },
            props.labelStyle
          ]}
        >
          <Text>{props.label}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CheckBox;
