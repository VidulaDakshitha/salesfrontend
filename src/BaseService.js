import axios from "axios";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";

const base_url = "http://salon-be-dev2.ap-southeast-1.elasticbeanstalk.com";

export const PostSystemUser = (url, data) => {
  return axios(base_url + url, {
    method: "POST",
    headers: {
      "content-type": "application/json", // whatever you want
      Authorization: "Bearer ".concat(localStorage.getItem("AccessToken")),
    },
    data: data,
  }).then(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response && err.response.status === 401) {
        let obj = {
          refresh: localStorage.getItem("RefreshToken"),
        };
        return axios(base_url + "/refresh/", {
          method: "POST",
          headers: {
            "content-type": "application/json", // whatever you want
            // Authorization: "Token ".concat(localStorage.getItem("RefreshToken"))
          },
          data: obj,
        }).then(
          (res) => {
            localStorage.setItem("AccessToken", res.data["access"]);
            return axios(base_url + url, {
              method: "POST",
              headers: {
                "content-type": "application/json", // whatever you want
                Authorization: "Bearer ".concat(
                  localStorage.getItem("AccessToken")
                ),
              },
              data: data,
            }).then(
              (res) => {
                return res;
              },
              (err) => {
                alertify.alert("Cannot perform the operation");
                return err;
              }
            );
          },
          (err) => {
            if (err.response && err.response.status === 401) {
              console.log(err.response.data["Error"]);
              localStorage.setItem("previous", window.location.hash);
              localStorage.removeItem("AccessToken");
              window.location = `/#/login`;
            } else {
              alertify.alert("Cannot perform the operation");
              return err;
            }
          }
        );
      } else {
        return err;
      }
    }
  );
};

export const PostService=(url, data)=>{


  return axios(base_url + url, {
    method: "POST",
    headers: {
      "content-type": "application/json", // whatever you want
      //Authorization: "Bearer ".concat(localStorage.getItem("AccessToken")),
    },
    data: data,
  }).then(
    (res) => {
      return res;
    },
    (err) => {
      // if (err.response && err.response.status === 401) {
      //   let obj = {
      //     refresh: localStorage.getItem("RefreshToken"),
      //   };
      //   return axios(base_url + "/refresh/", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json", // whatever you want
      //       // Authorization: "Token ".concat(localStorage.getItem("RefreshToken"))
      //     },
      //     data: obj,
      //   }).then(
      //     (res) => {
      //       localStorage.setItem("AccessToken", res.data["access"]);
      //       return axios(base_url + url, {
      //         method: "POST",
      //         headers: {
      //           "content-type": "application/json", // whatever you want
      //           Authorization: "Bearer ".concat(
      //             localStorage.getItem("AccessToken")
      //           ),
      //         },
      //         data: data,
      //       }).then(
      //         (res) => {
      //           return res;
      //         },
      //         (err) => {
      //           alertify.alert("Cannot perform the operation");
      //           return err;
      //         }
      //       );
      //     },
      //     (err) => {
      //       if (err.response && err.response.status === 401) {
      //         console.log(err.response.data["Error"]);
      //         localStorage.setItem("previous", window.location.hash);
      //         localStorage.removeItem("AccessToken");
      //         window.location = `/#/login`;
      //       } else {
      //         alertify.alert("Cannot perform the operation");
      //         return err;
      //       }
      //     }
      //   );
      // } else {
      //   return err;
      // }
    }
  );

}


export const UpdateService=(url, data,param)=>{


  return axios(base_url + url, {
    method: "PUT",
    headers: {
      "content-type": "application/json", // whatever you want
      //Authorization: "Bearer ".concat(localStorage.getItem("AccessToken")),
    },
    params:{id:param},
    data: data,
  }).then(
    (res) => {
      return res;
    },
    (err) => {
     
      return err;
    }
  );

}