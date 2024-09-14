function MyApp() {return <h1>Hello, world01!</h1>;}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>03!</h1>);
root.render(<MyApp />);
console.log('pass4')