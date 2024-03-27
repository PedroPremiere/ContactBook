import axios from 'axios';

import { apiUrl } from '@/config';

export default axios.create({
    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE,OPTIONS',
        'Access-Control-Allow-Headers':
            'Origin, Content-Type, X-Auth-Token,application/x-www-form-urlencoded',
        'Access-Control-Allow-Credentials': true
    },
    withCredentials: false
});
