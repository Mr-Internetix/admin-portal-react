import React from "react";
import DashboardNav from "./DashboardNav";
function Dashboard() {
  let settings = {
    username: "Ajit Yadav",
  };

  return (
    <>
      <DashboardNav details={settings} />
    </>
  );
}
export default Dashboard;
