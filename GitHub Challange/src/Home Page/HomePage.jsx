import React, { Component } from 'react'
import axios from 'axios'


export class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        user: {},
        search: '',
        repos_url:[]
        }
    }
    
    componentDidMount=()=>{
        axios.get('http://api.github.com/users/NadiaMoosavifar?client_id=c3164add43fb55418026&client_secret=4dcd108b2176eb53a6a1a612d08ea631695a32e4&sort=created')
            .then(res=> this.setState({ user:res.data }))
            .catch(error=> console.log(error))

        this.setState({ repos_url:[] })
    }

    onRepo=()=>{
        axios.get(this.state.user.repos_url)
            .then(res=> this.setState({ repos_url:res.data, search:''}))
            .catch(error=> console.log(error))
    }

    onChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    onClick=()=>{
        axios.get(`http://api.github.com/users/${this.state.search}?client_id=c3164add43fb55418026&client_secret=4dcd108b2176eb53a6a1a612d08ea631695a32e4&sort=created`)
            .then(res=> this.setState({ user:res.data }))
            .catch(error=> this.setState({user: {}}))

        this.setState({ repos_url:[] })
    }

    render() {
        return (
        <div className="App">
            <div>
                <input name="search"  onChange={this.onChange}/>
                <button onClick={this.onClick}>Search</button>
                <p style={{ color:'red'}}>{this.state.user.name ? '' : 'There is No Data for your search'}</p>
            </div>
            <div className="main_box">
                <div className="main_box_img">
                    <img className="img" src={this.state.user.avatar_url} alt="pic"/>
                </div >
                <div className="box">
                    <p>Full name: {this.state.user.name}</p>
                    <p>User name: {this.state.user.login}</p>
                    <p>Location: {this.state.user.location}</p>
                    <p>Email Address: {this.state.user.email}</p>
                </div>
            </div>
            <div className="url_box">
                <h6>List of Repository : {this.state.user.repos_url}</h6>
                <p>You can click the submit to see all the Repository</p>
                <button onClick={this.onRepo}>Submit</button>
                <ol className="list">
                    {this.state.repos_url.length> 0 ? this.state.repos_url.map(value =>
                    <li key={value.id}>
                        <h5>Name: </h5>{value.name}
                        <h5>Language: </h5>{value.language}
                        <h5>Updated_at: </h5>{value.updated_at}<hr/>
                    </li>
                    ):"There is no result for your search"}
                    
                </ol>
            </div>
        </div>
    )
    }
}

export default HomePage




