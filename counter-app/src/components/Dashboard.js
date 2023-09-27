import MenuItem from "./sidebar/MenuItem";
import Icon from "./sidebar/Icon";

const Dashboard = () => {
  const dashboardIcon = (
    <Icon
      svg={
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
      }
    />
  );

  return <MenuItem icon={dashboardIcon} label="Dashboard" />;
};

export default Dashboard;
