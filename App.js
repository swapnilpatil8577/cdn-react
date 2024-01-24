const heading = React.createElement('h1', {id:'heading', xyz:'abc'}, "Hello World from React!")

const parent = React.createElement(
    'div',
    {id:'parent'},
    [
        React.createElement('div', {id:'child'}, [
            React.createElement('h1', {}, 'Hi I am an nested html heading!!'),
            React.createElement('h2', {}, 'Hi I am an nested html h2 heading!!')
        ]),
        React.createElement('div', {id:'child2'}, [
            React.createElement('h1', {}, 'Hi I am an nested html heading!!'),
            React.createElement('h2', {}, 'Hi I am an nested html h2 heading!!')
        ])
    ]
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)