import React from "react";
import { Layout } from "antd";
import "antd/dist/reset.css";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <div>
      <Layout
        style={{
          alignItems: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        <Content
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            width: 500,
            padding: 24,
            margin: 0,
            height: 280,
            background: "red",
            borderRadius: 6,
            border: "1px solid black",
          }}
        >
          Primary Button
        </Content>
      </Layout>
    </div>
  );
};

export default App;
