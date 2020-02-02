import React, { Component } from 'react'
import axios from 'axios'
import { PDFDownloadLink } from "@react-pdf/renderer";
import VoterPDF from './voterpdf';

export default class Register extends Component {
    state = {
        voter: {}
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:3009/5e35cabc32a38e284053c008");
            var data = response.data
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = this.arrayBufferToBase64(data.photo.data.data);
            data.photo = base64Flag + imageStr
            this.setState({
                voter: data
            })
            alert(response);
        } catch (error) {
            alert(error)
            console.error(error)
        }
    };

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };


    render() {
        debugger
        return (
            <div className="container m-5">
                <PDFDownloadLink
                    document={<VoterPDF data={this.state.voter} />}
                    fileName="voter.pdf"
                    className="btn btn-primary"
                >
                    {({ loading }) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>
            </div>
        )
    }
}
