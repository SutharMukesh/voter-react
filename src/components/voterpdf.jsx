import React, { Component } from 'react';
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
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 200,
        objectFit: "cover",
    }
});

export default function VoterPDF(props) {
    console.log("pdf props", props);
    debugger
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Voter Detail</Text>
                    <Text>Elector's Name: {props.data.electorname}</Text>
                    <Text>Father's Name: {props.data.fathername}</Text>
                    <Text>Photo:</Text>
                    <Image style={styles.image} src={props.data.photo} alt="Profile" />
                    <Text>Date of Birth: {props.data.dob}</Text>
                    <Text>Sex: {props.data.sex}</Text>
                    <Text>Address: {props.data.address}</Text>
                    <Text>Mobile no: {props.data.mobile}</Text>
                </View>
            </Page>
        </Document>
    );
}