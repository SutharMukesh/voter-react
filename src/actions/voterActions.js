import { FETCH_VOTER, ADD_VOTER } from "./types";
import axios from "axios";

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach(b => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

export function fetchVoters() {
  return async function(dispatch) {
    try {
        console.log("fetch")
      const response = await axios.get("http://localhost:3009/5e35cabc32a38e284053c008");
      var data = response.data;
      var base64Flag = "data:image/jpeg;base64,";
      var imageStr = arrayBufferToBase64(data.photo.data.data);
      data.photo = base64Flag + imageStr;
      dispatch({
        type: FETCH_VOTER,
        payload: data
      });
      alert(response);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
}
