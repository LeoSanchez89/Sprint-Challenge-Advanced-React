- [ ] Why would you use class component over function components (removing hooks from the question)?
One reason is that many places still use them and have yet to adopt function components, so it's necessary to study. The other reason may be if you want to use the state and lifecycle methods provided by the class component.

- [ ] Name three lifecycle methods and their purposes.
constructor: to initialize state and bind event handlers
render: is requried and returns our JSX elements, arrays, and other data
componentDidMount: renders immediately after mounting, this is where you make api calls and set state

- [ ] What is the purpose of a custom hook?
A custom hook is especially useful because you can build it to do basically anything you need, and not have to repeat yourself by typing the same code over and over again. Custom hooks can be imported and called as many times as you need and are very versatile.

- [ ] Why is it important to test our apps?
It's essential to maintain software quality and to avoid/minimize the risk of having bugs in our code.