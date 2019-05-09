const axios = require('axios');

const API_URL = "http://localhost:5000/api/v1";

// const job_instance = axios.create({
//   baseURL: API_URL + '/works',
// });

const users_instance = axios.create({
  baseURL: API_URL + '/users',
});

const seats_instance = axios.create({
  baseURL: API_URL + '/seats',
});

var signup = (name, username, password, email,  role, SSN, phoneNumber, DoB, sex, department, room) => {
  //console.log("uname: " + username)
  let role1 = 0;
  if(role == "doctor") role1 = 1;
  return new Promise((resolve, reject) => {
    users_instance
      .post('/signup', {
        name: name,
        username: username,
        password: password,
        email: email,
        role: role1,
        //address: address,
        SSN: SSN,
        phoneNumber: phoneNumber,
        DoB: DoB,
        sex: sex,
        department,
        room
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']); // không thành công
        }
        return resolve(response['data']['success']); //ok
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var signin = (username, password) => {
  return new Promise((resolve, reject) => {
    users_instance
      .post('/signin', {
        username: username,
        password: password,
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['data']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var getuser = () =>{
  return new Promise((resolve, reject) => {
    let header = 'Bearer ' + sessionStorage.getItem('jwt');
    users_instance.defaults.headers.common['Authorization'] = header;
    users_instance
      .get('/me')
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['data']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};

var changepassword = (username, password, new_password) => {
  return new Promise((resolve, reject) => {
    let header = 'Bearer ' + sessionStorage.getItem('jwt');
    users_instance.defaults.headers.common['Authorization'] = header;
    users_instance
      .post('/reset_password', {
        username: username,
        password: password,
        new_password: new_password,
      })
      .then(response => {
        if (response['data']['success'] != true) {
          return reject(response['data']['message']);
        }
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};


var booking = (date, shift, department ) => {
  console.log("Ca: " + shift);
  console.log("Ngày: " + date);
  console.log("Department: " + department);

  return new Promise((resolve, reject) => {
    let header = 'Bearer ' + sessionStorage.getItem('jwt');
    seats_instance.defaults.headers.common['Authorization'] = header;
    seats_instance
      .post('/', {
        date,
        shift,
        department
      })
      
      .then(response => {
        
        if (response['data']['success'] != true) {
          console.log(response['data']['success']);
          return reject(response['data']['message']);
        }
        
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};


var getAllSeats = (role) => {

  return new Promise((resolve, reject) => {
    let header = 'Bearer ' + sessionStorage.getItem('jwt');
    seats_instance.defaults.headers.common['Authorization'] = header;
    seats_instance
      .get('/all_seat', {
      })
      
      .then(response => {
        
        if (response['data']['success'] != true) {
          console.log(response['data']['success']);
          return reject(response['data']['message']);
        }
        
        response['data']['data'].forEach(element => {
          // console.log(element);
          users_instance.defaults.headers.common['Authorization'] = header;
          if(role == 0){
            users_instance
              .get('/user/'+element.doctor, {})
              .then(response => {
                if (response['data']['success'] != true) {
                  // console.log(response['data']['success']);
                  return reject(response['data']['message']);
                }
                
                element.doctor = response['data']['data'].username;
              } )
          }
          else{
            users_instance.defaults.headers.common['Authorization'] = header;
            users_instance
              .get('/user/'+element.patient, {})
              .then(response => {
                if (response['data']['success'] != true) {
                  // console.log(response['data']['success']);
                  return reject(response['data']['message']);
                }
                
                element.doctor = response['data']['data'].username;
              } )
          }
          

        });

        return resolve(response['data']['data']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};


var deleteSeat = (id) => {

  return new Promise((resolve, reject) => {
    let header = 'Bearer ' + sessionStorage.getItem('jwt');
    seats_instance.defaults.headers.common['Authorization'] = header;
    seats_instance
      .delete('/' + id, {
      })
      
      .then(response => {
        
        if (response['data']['success'] != true) {
          console.log(response['data']['success']);
          return reject(response['data']['message']);
        }
        
        return resolve(response['data']['success']);
      })
      .catch(err => {
        return reject(err);
      });
  });
};



module.exports = {
  signup,
  signin,
  changepassword,
  getuser,
  booking,
  getAllSeats,
  deleteSeat
};
