// Layout.jsx
import { Outlet } from 'react-router-dom';
import Nav from '@/components/Nav';

function Layout() {
    return (
      <div className="flex">
        <Nav />
        <main className="ml-[170px] flex-1 p-8 min-h-screen">
          <Outlet /> 
        </main>
      </div>
    );
  }

export default Layout;
