import { memo, useState } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineEmail, MdOutlineNotifications } from 'react-icons/md';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { Menu, MenuItem, Sidebar, menuClasses } from 'react-pro-sidebar';

const menuItemStyle = {
  [`.${menuClasses.button}`]: {
    padding: '0 0.5rem !important',
    height: 'auto !important',
  },
  [`.${menuClasses.icon}`]: {
    margin: '0 !important',
  },
  [`.${menuClasses.label}`]: {
    fontSize: 14,
    fontWeight: 500,
    color: 'hsl(var(--foreground))',
  },
};

const menuItems = [
  {
    label: 'Notifications',
    icon: <MdOutlineNotifications size={20} />,
    path: '/notifications',
  },
  {
    label: 'Tasks',
    icon: <FaRegSquareCheck />,
    path: '/tasks',
  },
  {
    label: 'Notes',
    icon: <FaRegStickyNote />,
    path: '/notes',
  },
  {
    label: 'Emails',
    icon: <MdOutlineEmail />,
    path: '/emails',
  },
  {
    label: 'Reports',
    icon: <HiOutlineDocumentReport />,
    path: '/reports',
  },
  {
    label: 'Automations',
    icon: <TbAutomaticGearbox />,
    path: '/automations',
  },
];

const LeftSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);

  console.log('broken', broken);

  const handleToggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image='https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg'
        breakPoint='md'
        backgroundColor={'#fff'}
        width='260px'
        collapsedWidth='50px'
      >
        <div className='flex flex-col h-full overflow-hidden bg-zinc-100/30'>
          <div className='flex items-center justify-between gap-4 p-4 shrink-0 h-[56px] border-b'>
            <img
              height={20}
              className='h-[24px] w-auto'
              src={
                collapsed
                  ? '/assets/logo/logoipsum-296.svg'
                  : '/assets/logo/logoipsum-297.svg'
              }
              style={{ display: collapsed ? 'none' : 'block' }}
            />
            <button
              type='button'
              className='shrink-0'
              onClick={handleToggleCollapse}
            >
              {collapsed ? <GoSidebarCollapse /> : <GoSidebarExpand />}
            </button>
          </div>

          <div className='flex-1 overflow-x-hidden overflow-y-scroll'>
            <Menu>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  rootStyles={menuItemStyle}
                  icon={item.icon}
                >
                  {item.label}
                </MenuItem>
              ))}
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  rootStyles={menuItemStyle}
                  icon={item.icon}
                >
                  {item.label}
                </MenuItem>
              ))}
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  rootStyles={menuItemStyle}
                  icon={item.icon}
                >
                  {item.label}
                </MenuItem>
              ))}
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  rootStyles={menuItemStyle}
                  icon={item.icon}
                >
                  {item.label}
                </MenuItem>
              ))}
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  rootStyles={menuItemStyle}
                  icon={item.icon}
                >
                  {item.label}
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
