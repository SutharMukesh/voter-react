import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchVoters } from '../actions/voterActions';
import { PDFDownloadLink } from "@react-pdf/renderer";
import VoterPDF from './voterpdf';

class Register extends Component {
    componentDidMount() {
        debugger
        this.props.fetchVoters();
    }
    render() {
        debugger;
        return (
            <div className="container m-5">
                {((Object.keys(this.props.voter)).length > 0) ? (<PDFDownloadLink
                    document={<VoterPDF data={this.props.voter} />}
                    fileName="voter.pdf"
                    className="btn btn-primary"
                >
                    {({ loading }) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>) : <React.Fragment />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    voter: state.voter
});
export default connect(mapStateToProps, { fetchVoters })(Register)