const getData = () => {
    return fetch('https://ozone-js-test-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json();
    })
}

export default getData
