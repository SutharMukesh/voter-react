import React, { Component } from 'react'
import axios from 'axios'

export default class Register extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    addVoter = async event => {
        try {
            event.preventDefault();
            debugger;
            let voterdata = new FormData()
            voterdata.append("file", this.state.selectedFile, this.state.selectedFile.name)
            voterdata.append("electorname", event.target.nameid.value)
            voterdata.append("fathername", event.target.fatherid.value)
            voterdata.append("dob", event.target.dobid.value)
            voterdata.append("sex", event.target.sexid.value)
            voterdata.append("address", event.target.addressid.value)
            voterdata.append("mobile", event.target.mobilenoid.value)
            const response = await axios.post("http://localhost:3009/addimage", voterdata);
            alert(response.message);
        } catch (error) {
            alert(error)
            console.error(error)
        }

    };

    render() {
        return (
            <div className="container m-5">
                <h3 className="mb-5">Voter Registration Form</h3>
                <form className="d-inline-flex flex-column align-content-start" onSubmit={this.addVoter}>
                    <div class="form-group">
                        <label for="nameid">Elector's Name</label>
                        <input type="text" class="form-control" id="nameid" placeholder="Enter full name" />
                    </div>
                    <div class="form-group">
                        <label for="fatherid">Father's Name</label>
                        <input type="text" class="form-control" id="fatherid" placeholder="Enter Fathers Full Name" />
                    </div>
                    <div class="form-group d-flex flex-column">
                        <label for="photoid">Photo</label>
                        <input
                            type="file"
                            // style={{ display: 'none' }}
                            class="form-control"
                            id="photoid"
                            onChange={this.fileSelectedHandler}
                            ref={fileInput => this.fileInput = fileInput} />
                        {/* <button onClick={() => this.fileInput.click()}>Upload</button> */}
                    </div>
                    <div class="form-group">
                        <label for="dobid">Date of Birth</label>
                        <input type="date" class="form-control" id="dobid" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="sexid">Sex</label>
                        <select class="form-control" id="sexid">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="addressid">Address</label>
                        <textarea class="form-control" row='3' id="addressid" />
                    </div>
                    <div class="form-group">
                        <label for="mobilenoid">Mobile no.</label>
                        <input type="tel" class="form-control" id="mobilenoid" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
