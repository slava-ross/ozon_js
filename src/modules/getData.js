const getData = (str) => {
    return fetch(
        `https://ozone-js-test-default-rtdb.firebaseio.com/goods.json?${str ? 'search=${str}' : ''}`
    )
    .then((response) => {
        return response.json();
    })
}

export default getData
