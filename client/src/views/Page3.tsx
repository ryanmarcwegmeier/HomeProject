import * as React from 'react';

interface IState{
  users:any,
  error:boolean,
  errorm:any
}



export default class Page3 extends React.Component<{},IState> {

  constructor(props:any){
    super(props);
    this.state={
      error:false,
      errorm:'',
      users:[]
    }
  }

  public componentDidMount() {
    const axios = require('axios');
    axios.get('http://localhost:3001/user')
  .then((response:any)=> {
    const usersData = response.data;
    this.setState({users:usersData});
    console.log(usersData)
    
  })
  .catch((error:any)=> {
    console.log(error)

    this.setState({error:true});
    this.setState({errorm:error});

  });
  }

  public render() {
    return (
        <div>
          <h1>Users</h1>
          {this.state.users.map((user:any)=><div key={user._id}>{user.userName}</div>)}
          {this.state.error && <div>{this.state.errorm}</div>}
        </div>
    );
  }
}


