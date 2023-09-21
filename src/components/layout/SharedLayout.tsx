import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div>
      <nav>checking navbar</nav>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
