import axios from "axios";

export class CameraAPI {
    static baseURL: string;

    static getCameras(): any {
        const requestURL = `${CameraAPI.baseURL}/cameras`;
        return axios.get(requestURL);
    }

    static getCameraStatus(sn: string): any {
        const requestURL = `${CameraAPI.baseURL}/camera_status`;
        return axios.get(requestURL, {
            params: {
                sn: sn,
                algorithm_id: 1
            }
        });
    }

    static getCameraRecords(sn: string): any {
        const requestURL = `${CameraAPI.baseURL}/camera_records`;
        return axios.get(requestURL, {
            params: {
                sn: sn,
                algorithm_id: 1
            }
        });
    }
}

CameraAPI.baseURL = 'http://127.0.0.1:5000';