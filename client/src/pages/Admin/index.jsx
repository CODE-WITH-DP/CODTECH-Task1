import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import Experiences from "./Experiences";
const { TabPane } = Tabs;

function Admin() {
  const {portfolioData} = useSelector((state) => state.root);
  return (
    <div>
      <Header />
        {portfolioData && <div className="mt-5 p-5">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experiences" key="3">
            <Experiences />
          </TabPane>
        </Tabs>
      </div>}
    </div>
  );
}

export default Admin;
