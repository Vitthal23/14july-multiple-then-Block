console.log("This is javaScript program");

const todos = fetch('https://jsonplaceholder.typicode.com/todos');

todos

    .then(Response => {
        console.log(Response);
        return (Response.json());

    })

    .then((json) => {
        console.log(json);
        let arrOne = json.map(item => item.title);
        console.log(arrOne);
        return (arrOne);

    }
    )

    .then(todosTitle => console.log(todosTitle))

    .catch(err => console.error(err));
