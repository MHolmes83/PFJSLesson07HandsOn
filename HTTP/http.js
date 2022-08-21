/* var http = require('http');

http
    .createServer((request, response) => {
        response.write('Hello World!');

        response.end();
    })
    .listen(3001); */

const { default: axios } = require('axios');
var http = require('http');

var options = {
    host: 'www.crudcrud.com',
    path: '/',
    method: 'GET',
};

http
    .request(options,(response) => {
        console.log(`STATUS: ${response.statusCode}`);
    })
    .end();

/* axios({
    method: 'post',
    url: '/login',
    data: {
        firstName: 'Antonio',
        lastName: 'Williams',
    },
}); */

/* axios.post('/login', {
    firstName: 'Antonio',
    lastName: 'Williams',
}); */

/* axios
    .post('/login', {
        firstName: 'Antonio',
        lastName: 'Williams',
    })
    .then(
        (response) => {
            console.log(response);
        },
        (error) => {
            console.log(error);
        }
    ); */

axios.get('https://api.github.com/users/mapbox').then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
});

/* const employee = {
    name: this.state.name,
    age: this.state.age,
    salary: this.state.salary,
};

axios
    .put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
    .then((res) => console.log(res.data)); */

axios
    .delete('http://dummy.restapiexample.com/api/v1/delete/{this.state.id}')
    .then((res) => console.log(res.data));