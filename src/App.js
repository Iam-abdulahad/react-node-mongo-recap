import './App.css';

function App() {


  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application.json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log("success:", data);
    })
  }
  return (
    <div className="App">
      <h1>Please add a user</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Name' required />
        <br />
        <input type="email" name='email' placeholder='Email' required />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
