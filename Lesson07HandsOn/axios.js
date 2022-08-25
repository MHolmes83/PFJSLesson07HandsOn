const axios = require('axios');

axios({
    method: 'post',
    url: 'http://dummy.restapiexample.com/api/v1',
    data: {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        salary: this.state.salary,
        hireDate: this.state.hireDate,
    },
});

axios
    .post('http://dummy.restapiexample.com/api/v1/create/{this.state.id}', {
        name: 'Axios Example Home Page',
    })
    .then (
        (response) => {
            console.log(response);
        },
        (error) => {
            console.log(error);
        }
    )

axios
    .get('http://dummy.restapiexample.com/api/v1/read/{this.state.id}')
    .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    });

axios
    .put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
    .then((res) => console.log(res.data));

axios
    .delete('http://dummy.restapiexample.com/api/v1/delete/{this.state.id}')
    .then((res) => console.log(res.data));