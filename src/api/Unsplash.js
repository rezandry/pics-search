import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UOD0E3pY6UdQldBWMDNr6sO2r7va2VWp9T9yPs_vG4w'
    }
});