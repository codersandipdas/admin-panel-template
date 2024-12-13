import { useState } from 'react';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { Outlet } from 'react-router';
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import ThemeSwitcher from '../components/themeSwitcher/ThemeSwitcher';
import { routes } from '../utils/routes';
import { RouteType } from '../utils/types';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [activeRoute, setActiveRoute] = useState<RouteType>(routes[0]);

  const handleToggleCollapse = () => {
    setCollapsed(true);
    setToggled(false);
  };

  const handleBackdropClick = () => {
    setToggled(false);
  };

  const handleOnBreakPoint = (broken: boolean) => {
    setBroken(broken);
  };

  const handleShowSidebar = () => {
    setCollapsed(false);
    setToggled(true);
  };

  const handleMenuClick = (route: RouteType) => {
    if (broken) setToggled(false);
    setActiveRoute(route);
  };

  return (
    <div className='flex h-screen overflow-hidden'>
      <LeftSidebar
        collapsed={collapsed}
        onCollapse={handleToggleCollapse}
        toggled={toggled}
        onBreakPoint={handleOnBreakPoint}
        onBackdropClick={handleBackdropClick}
        onMenuClick={handleMenuClick}
      />

      <div className='flex-1 flex flex-col'>
        <div className='shrink-0 flex gap-4 h-[56px] border-b border-border items-center px-4 py-2 justify-between'>
          <div className='flex gap-4 items-center'>
            {(broken || collapsed) && (
              <button className='' onClick={handleShowSidebar}>
                <TbLayoutSidebarLeftExpand size={20} />
              </button>
            )}
            <h2 className='text-lg font-bold text-foreground/50'>
              {activeRoute.label}
            </h2>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>

        <div className='flex-1 p-4 overflow-x-hidden overflow-y-auto custom-scrollbar'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
