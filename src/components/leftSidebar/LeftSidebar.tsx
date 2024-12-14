import { memo } from 'react';
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from 'react-icons/tb';
import { Menu, MenuItem, Sidebar, menuClasses } from 'react-pro-sidebar';
import { Link, NavLink } from 'react-router';
import { routes } from '../../utils/routes';
import { RouteType } from '../../utils/types';

interface Props {
  collapsed: boolean;
  onCollapse: () => void;
  toggled: boolean;
  onBreakPoint: (broken: boolean) => void;
  onBackdropClick: () => void;
  onMenuClick: (activeRoute: RouteType) => void;
}

const menuItemStyle = {
  [`.${menuClasses.button}`]: {
    padding: '0 0 !important',
    height: 'auto !important',
    color: 'hsl(var(--foreground)) !important',
    borderRadius: 6,
    [`&.active`]: {
      backgroundColor: 'hsl(var(--primary) / 8%) !important',
      color: 'hsl(var(--primary)) !important',
    },
    [`&:hover`]: {
      backgroundColor: 'hsl(var(--primary) / 8%) !important',
      color: 'hsl(var(--primary)) !important',
    },
  },
  [`.${menuClasses.icon}`]: {
    margin: '0 !important',
    fontSize: 16,
  },
  [`.${menuClasses.label}`]: {
    fontSize: 14,
    fontWeight: 400,
  },
};

const LeftSidebar: React.FC<Props> = ({
  collapsed,
  onCollapse,
  toggled,
  onBreakPoint,
  onBackdropClick,
  onMenuClick,
}) => {
  return (
    <>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={onBackdropClick}
        onBreakPoint={onBreakPoint}
        breakPoint='md'
        width='260px'
        collapsedWidth='0px'
        rootStyles={{
          borderColor: 'hsl(var(--border))',
          transition: 'all 300ms, border-color 0ms',
        }}
      >
        <div className='flex flex-col h-full overflow-hidden bg-card'>
          <div className='flex items-center justify-between gap-4 p-4 shrink-0 h-[56px] border-b border-border'>
            <img
              height={20}
              className='h-[24px] w-auto'
              src={'/assets/logo/logoipsum-297.svg'}
            />
            <button type='button' className='shrink-0' onClick={onCollapse}>
              {collapsed ? (
                <TbLayoutSidebarLeftExpand size={20} />
              ) : (
                <TbLayoutSidebarLeftCollapse size={20} />
              )}
            </button>
          </div>

          <div className='flex-1 overflow-x-hidden overflow-y-scroll custom-scrollbar p-4'>
            <Menu>
              {routes.map((route) => (
                <MenuItem
                  key={route.path}
                  rootStyles={menuItemStyle}
                  icon={route.icon}
                  component={<NavLink to={route.path} />}
                  onClick={() => onMenuClick(route)}
                >
                  {route.label}
                </MenuItem>
              ))}
              {routes.map((route) => (
                <MenuItem
                  key={route.path}
                  rootStyles={menuItemStyle}
                  icon={route.icon}
                  component={<Link to={route.path} />}
                  onClick={() => onMenuClick(route)}
                >
                  {route.label}
                </MenuItem>
              ))}
              {routes.map((route) => (
                <MenuItem
                  key={route.path}
                  rootStyles={menuItemStyle}
                  icon={route.icon}
                  component={<Link to={route.path} />}
                  onClick={() => onMenuClick(route)}
                >
                  {route.label}
                </MenuItem>
              ))}
              {routes.map((route) => (
                <MenuItem
                  key={route.path}
                  rootStyles={menuItemStyle}
                  icon={route.icon}
                  component={<Link to={route.path} />}
                  onClick={() => onMenuClick(route)}
                >
                  {route.label}
                </MenuItem>
              ))}
              {routes.map((route) => (
                <MenuItem
                  key={route.path}
                  rootStyles={menuItemStyle}
                  icon={route.icon}
                  component={<Link to={route.path} />}
                  onClick={() => onMenuClick(route)}
                >
                  {route.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default memo(LeftSidebar);
