const baseUrl = "https://api.stripe.com/v1/prices"

function _checkResponse(res) {
    if (res.ok) {
      return res.json();
      console.log(res.json());
    }
    return Promise.reject(`Error: ${res.status}`);
  }


const getProducts = async () => {
    return fetch(
        "https://api.stripe.com/v1/products",{
        headers:{Authorization: `Bearer sk_test_51QP3JS2LtL7nE08uKIXicDprd4DQ52I2lpoh5es79kozhKrftxMqQBy6thgGh3lNYEPucfjhIgU3cK8f4QW53YLf00VW1QZLQa` ,
    'Content-Type': 'application/json',}
    })
    
    .then(_checkResponse)

  };

  export { getProducts };