import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../utils/auth'; 

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login'); 
    } else {
      setLoading(false); 
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return <>{children}</>;
};

export default PrivateRoute;
