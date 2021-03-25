
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

          





          <Sider></Sider>
          <Content><Userlist /></Content>
          <Sider>right sidebar</Sider>
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
