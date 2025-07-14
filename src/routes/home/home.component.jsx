import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://images.unsplash.com/photo-1704253801130-4ce99cd0447c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://images.unsplash.com/photo-1649433911119-7cf48b3e8f50?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://images.unsplash.com/photo-1725763945736-c68e9e494175?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
}

export default Home;