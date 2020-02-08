import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  state = {
    selectedFile: null,
    photoidlabel: "Choose file"
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      photoidlabel: event.target.files[0].name
    });
  };

  addVoter = async event => {
    try {
      event.preventDefault();
      debugger;
      let voterdata = new FormData();
      voterdata.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      voterdata.append("electorname", event.target.nameid.value);
      voterdata.append("fathername", event.target.fatherid.value);
      voterdata.append("dob", event.target.dobid.value);
      voterdata.append("sex", event.target.sexid.value);
      voterdata.append("address", event.target.addressid.value);
      voterdata.append("mobile", event.target.mobilenoid.value);
      const response = await axios.post(
        "http://localhost:3009/addvoter",
        voterdata
      );
      alert(response.data.message);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <h5 className="card-title mb-4 text-center">
              Voter Registration Form
            </h5>
            <form
              className="container d-inline-flex flex-column needs-validation"
              novalidate
              onSubmit={this.addVoter}
            >
              <div class="form-group row">
                <label className="col-4" for="nameid">
                  Elector's Name
                </label>
                <input
                  type="text"
                  class="form-control col-8"
                  id="nameid"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              <div class="form-group row">
                <label className="col-4" for="fatherid">
                  Father's Name
                </label>
                <input
                  type="text"
                  class="form-control col-8"
                  id="fatherid"
                  placeholder="Enter Father's Full Name"
                  required
                />
              </div>
              <div class="form-group row d-flex">
                <label className="col-4" for="photoid">
                  Photo
                </label>
                <div className="col-8 custom-file">
                  <input
                    type="file"
                    className="form-control custom-file-input"
                    id="photoid"
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => (this.fileInput = fileInput)}
                    required
                  />
                  <label
                    class="custom-file-label"
                    id="photoidlabel"
                    for="customFile"
                  >
                    {this.state.photoidlabel}
                  </label>
                </div>
              </div>
              <div class="form-group row">
                <label className="col-4" for="dobid">
                  Date of Birth
                </label>
                <input
                  type="date"
                  class="form-control col-8"
                  id="dobid"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="form-group row">
                <label className="col-4" for="sexid">
                  Sex
                </label>
                <select class="form-control col-8" id="sexid">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group row">
                <label className="col-4" for="addressid">
                  Address
                </label>
                <textarea
                  class="form-control col-8"
                  row="3"
                  id="addressid"
                  required
                />
              </div>
              <div class="form-group row">
                <label className="col-4" for="mobilenoid">
                  Mobile no.
                </label>
                <input type="tel" class="form-control col-8" id="mobilenoid" />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
