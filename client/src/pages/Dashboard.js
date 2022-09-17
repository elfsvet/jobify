import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <nav>
      <Link to='/'>Dashboard</Link>
      <Link to='/register'>Register</Link>
      <Link to='/landing'>Home</Link>
    </nav>
  );
};
export default Dashboard;
