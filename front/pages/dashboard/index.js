import PrivateRoute from '../../components/PrivateRoute'; // Import the PrivateRoute component
import Layout from '../../components/Layout';

const DashboardPage = () => {
  return (
    <PrivateRoute>
      <Layout>
        <h1>Dashboard (Protected)</h1>
        <p>Welcome to the Dashboard! Only logged-in users can see this.</p>
      </Layout>
    </PrivateRoute>
  );
};

export default DashboardPage;
