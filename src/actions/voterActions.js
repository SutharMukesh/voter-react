import { FETCH_VOTER } from "./types";
import axios from "axios";

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach(b => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

export function fetchVoters(filters) {
  return async function(dispatch) {
    try {
      debugger;
      const response = await axios.post("http://localhost:3009/getfilteredvoter",filters);
      response.data.map((data)=>{
        var base64Flag = `data:${data.photo.contentType};base64,`;
        var imageStr = arrayBufferToBase64(data.photo.data.data);
        data.photo = base64Flag + imageStr;
        return data
      })
      dispatch({
        type: FETCH_VOTER,
        payload: response.data
      });
      // alert(response);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
}
