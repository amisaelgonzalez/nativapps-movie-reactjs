import React from "react";
import { Layout } from "antd";
import Movie from './components/Movie';
import 'antd/dist/antd.min.css';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <>
        <Layout className="layout" 
          style={{
            overflow: 'auto',
            minHeight: 'calc(100vh - 70px)',
            width: '100%',
            left: 0,
          }}>
          <Content style={{ padding: '20px 100px 100px' }} className="site-layout-content">
              <Movie/> 
          </Content>
          <Footer style={{ 
              position: 'fixed',
              left: 0,
              bottom: 0,
              width: '100%',
              color: '#444',
              backgroundColor: '#fff',
              textAlign: 'center'}} >
              Developed by Amisael Gonzalez
          </Footer>
        </Layout>
    </>
  );
};

export default App;
