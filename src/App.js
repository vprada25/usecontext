
import Profile from './components/Profile'
import Userlist from './components/UserList'
import { Layout } from 'antd';


import UserState from './context/user/UserState'

function App() {
  const { Header, Sider, Content } = Layout;

  return (

    /* <{/* UserState */
    <Layout>
      <Header>header</Header>
      <Layout>
        <UserState>

          





          
          <Content><Userlist /></Content>
          <Content><Profile /></Content>
          
        </UserState>
      </Layout>

    </Layout>
    /* {/* <Layout>
      <UserState>
      <Sider  >
        <Userlist />
      </Sider>
      

        <Profile />
      </UserState>
    </Layout> */

  );
}

export default App;
