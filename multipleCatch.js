
const todos = fetch('https://jsonMISTAKE.typicode.com/todos');

todos

    .then(response => response.json())

    .then(json => json.map(item => item.title))
    .catch(err => {

        console.warn('Error 1', err);

        throw Error('Error from catch1');

    })

    .catch(err => {
        console.warn('Error 2', err)

        return err;

    })

