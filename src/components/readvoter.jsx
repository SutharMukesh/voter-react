import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVoters } from "../actions/voterActions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import VoterPDF from "./voterpdf";

class SearchVoter extends Component {
  searchVoter = event => {
    debugger;
    event.preventDefault();
    let filter = {
      electorname: event.target.searchElecName.value,
      fathername: event.target.searchFatherName.value,
      address: event.target.searchAddress.value,
      dob: event.target.searchDob.value
    };
    Object.keys(filter).forEach(key =>
      filter[key] === "" ? delete filter[key] : {}
    );
    this.props.fetchVoters(filter);
  };

  render() {
    debugger;
    return (
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title mb-4 text-center">Voter Search</h5>
            <form
              className="container d-inline-flex flex-column"
              onSubmit={this.searchVoter}
            >
              <div className="form-group row">
                <label className="col-4 " htmlFor="searchElecName">
                  Elector's Name
                </label>
                <input
                  class="form-control col-8"
                  type="text"
                  id="searchElecName"
                  placeholder="Enter Elector full name"
                />
              </div>
              <div className="form-group row">
                <label className="col-4" htmlFor="searchFatherName">
                  Father's Name
                </label>
                <input
                  class="form-control col-8"
                  type="text"
                  id="searchFatherName"
                  placeholder="Enter Father full name"
                />
              </div>
              <div className="form-group row">
                <label className="col-4" htmlFor="searchAddress">
                  Address
                </label>
                <input
                  class="form-control col-8"
                  type="text"
                  id="searchAddress"
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-group row">
                <label className="col-4" htmlFor="searchDob">
                  Date of birth
                </label>
                <input
                  class="form-control col-8"
                  type="date"
                  id="searchDob"
                  placeholder="Enter Date of birth"
                />
              </div>
              <button className="btn btn-secondary">Search</button>
            </form>
          </div>
        </div>
        {this.props.voters.length > 0 ? (
          this.props.voters.map(voter => (
            <div className="card mt-2 d-flex flex-row">
              <img
                className="card-img-left"
                src={voter.photo}
                alt="profile"
                style={{ width: 100, height: "auto", objectFit: "cover" }}
              />
              <div className="d-flex w-100 flex-column justify-content-between">
                <div className="d-flex m-2 justify-content-between">
                  <h5>{voter.electorname}</h5>
                  <small className="">DOB: {voter.dob}</small>
                </div>
                <div className="d-flex  mr-2 mb-2 ml-2 justify-content-between">
                  <p>Address: {voter.address}</p>
                  <PDFDownloadLink
                    document={<VoterPDF data={voter} />}
                    fileName={`${voter.electorname}.pdf`}
                    className="btn btn-primary"
                  >
                    {({ loading }) =>
                      loading ? "Loading document..." : "Download Pdf"
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          ))
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}

SearchVoter.defaultProps = {
  voters: [
  ]
};

const mapStateToProps = state => ({
  voters: state.voterreducer.voters
});
export default connect(mapStateToProps, { fetchVoters })(SearchVoter);
