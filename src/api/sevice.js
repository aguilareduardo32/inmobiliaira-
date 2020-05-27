import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:5000/api',
});

const errorHandler = err => {
    throw err;
};

export default {
    service,

    handleUpload (image) {

        return service.post('/upload', image)
  
            .then(res => res.data)
            .catch(errorHandler);

    },
    handleUpload2 (image) {

        return service.post('/uploaddd', image)
  
            .then(res => res.data)
            .catch(errorHandler);

    },
    handleUpload3 (image) {

        return service.post('/upload3', image)
  
            .then(res => res.data)
            .catch(errorHandler);

    },

    saveNewThing(inmueble) {

        return service.post('/create', inmueble)
            .then(res => res.data)
            .catch(errorHandler);
        }
}