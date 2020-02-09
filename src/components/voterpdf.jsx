import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff"
  },
  rightColumn: {
    flexDirection: "column",
    width: "auto",
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0
    },
    "@media orientation: landscape": {
      width: 200
    }
  },
  container: {
    flex: 1,
    padding: 30,
    flexDirection: "row",
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0
    }
  },

  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    "@media max-width: 400": {
      width: "100%",
      paddingRight: 0
    },
    "@media orientation: landscape": {
      width: 200
    }
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 200,
    objectFit: "cover"
  }
});

export default function VoterPDF(props) {
  console.log("pdf props", props);
  debugger;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <Image style={styles.image} src={props.data.photo} />
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.title}>
              Voter Detail
            </Text>
            <Text>Elector's Name: {props.data.electorname}</Text>
            <Text>Father's Name: {props.data.fathername}</Text>
            <Text>Date of Birth: {props.data.dob}</Text>
            <Text>Sex: {props.data.sex}</Text>
            <Text>Address: {props.data.address}</Text>
            <Text>Mobile no: {props.data.mobile}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
