import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import { subjects } from "../assets/StudentDb";

const Subjects = ({ student }) => {
  const course= subjects.find((c) => c.id === student.course_id);
  const marks= subjects.find((c) => c.id === student.course_id && c.id ===student.student_id);
  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.jpg")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          

          <View
            style={{
              marginBlock: 20,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            Marks
          </Text>
          <Text>Code: {course.course_id}</Text>
          <Text>Name: {course.name}</Text>
          <Text>Marks: {marks.marks}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Subjects;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  profile_pic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: "auto",
  },
});