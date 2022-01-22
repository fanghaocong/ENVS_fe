import axios from "axios";

export class RecordAPI {
    static baseURL: string;
    static commonParams: Record<string, unknown>;

    static postStartRecord(sn: string, cameraIP: string, path: string): any {
        const requestURL = `${RecordAPI.baseURL}/start_record`;
        return axios.post(requestURL, Object.assign(RecordAPI.commonParams, {
            sn: sn,
            camera_ip: cameraIP,
            path: path
        }));
    }

    static postStopRecord(sn: string): any {
        const requestURL = `${RecordAPI.baseURL}/stop_record`;
        return axios.post(requestURL, {
            sn: sn,
            algorithm_id: 1,
        });
    }
}

RecordAPI.baseURL = 'http://127.0.0.1:5000';
RecordAPI.commonParams = {
    resolution: '1280x720',
    fps: 30,
    si: 1,
    alarm_interval: 10,
    username: '',
    password:'',
    algorithm_id: 1,
    camera_port: '',
}