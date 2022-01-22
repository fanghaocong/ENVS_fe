import axios from "axios";

export class AlgorithmAPI {
    static baseURL: string;

    static getAlgorithms(): any {
        const requestURL = `${AlgorithmAPI.baseURL}/algorithms`;
        console.log(requestURL);
        return axios.get(requestURL);
    }

    static postAlgorithm(): any {
        const requestURL = `${AlgorithmAPI.baseURL}/algorithm`;
        /**
         * TODO: 添加权重文件参数
         */
        return axios.post(requestURL);
    }
}

AlgorithmAPI.baseURL = 'http://127.0.0.1:5000';
