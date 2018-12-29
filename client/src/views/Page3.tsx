import * as React from 'react';
import ModelUser from '../models/userModel';
import HelperUser from 'src/Helpers/HelperUser';

interface IState {
  users: any,
  error: boolean,
  errorm: any
}



export default class Page3 extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: false,
      errorm: '',
      users: [ModelUser]
    }
  }

  public componentDidMount() {
    const axios = require('axios');
    axios.get('http://localhost:3001/user')
      .then((response: any) => {
        const usersData = response.data;
        console.log(usersData);
        console.log(HelperUser.jsonArrayToUsers(usersData))
        this.setState({ users: HelperUser.jsonArrayToUsers(usersData) });

      })
      .catch((error: any) => {
        console.log(error)

        this.setState({ error: true });
        this.setState({ errorm: error });

      });
  }

  public render() {
    let i:number=1;
    return (
      <main className='container-fluid'>
        <h1>Users</h1>
        <table className='table'>
          <thead className="thead-dark">
            <tr>
              <th>USERNAME</th>
              <th>ROLE</th>
              <th>EMAIL</th>
              <th>Date_CREATED</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((element: ModelUser) =>
                <tr key={i++}>
                  <td>{element.username}</td>
                  <td>{element.role}</td>
                  <td>{element.email}</td>
                  <td>{element.createdDate}</td>
                </tr>)
            }
          </tbody>
        </table>
      </main>
    );
  }
}


