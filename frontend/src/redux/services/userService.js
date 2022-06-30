const apiUrl = `https://jsonplaceholder.typicode.com/users`;
export const getApi = () => {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}