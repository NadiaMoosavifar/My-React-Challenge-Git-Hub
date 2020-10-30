import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout'
import HomePage from './Home Page/HomePage';
import About from './About/About'

import './App.css';


export class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* <Route exact path='/about' component={About} /> */}
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Layout>
      </BrowserRouter>

    )
  }
}
export default App



// constructor(props) {
//   super(props)

//   this.state = {
//     x:[]
//   }
// }

// componentDidMount=()=>{
//   axios.get('http://jsonplaceholder.typicode.com/todos/?_limit=10')
//   // .then(res=> console.log(res))
//   .then(res=> this.setState({ x:res.data}))
//   .catch(error=> console.log(error))
// }
// render() {
//   const { x } = this.state
//   // console.log(x);
//   return (
//     <Layout>
//     <div className="App">
//       {x && x.map(value =>{
//         return(
//           <div key={value.id}>
//             {value.title}
//           </div>
//         )
//       }
      
//       )}
//     </div>
//     </Layout>
//   )
// }
// }
