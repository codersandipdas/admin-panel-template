import { AiOutlineDashboard, AiOutlineProduct } from 'react-icons/ai';
import { BsCartCheck } from 'react-icons/bs';
import { CgToolbarTop } from 'react-icons/cg';
import { FaRegStickyNote } from 'react-icons/fa';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import {
  MdOutlineCategory,
  MdOutlineNotifications,
  MdOutlineSettings,
} from 'react-icons/md';
import { TbPhotoVideo, TbUsers } from 'react-icons/tb';
import Notifications from '../pages/notifications/Notifications';
import { RouteType } from './types';
import Dashbaord from '../pages/dashbaord/Dashboard';
import Products from '../pages/products/Products';

export const routes: RouteType[] = [
  {
    label: 'Dashboard',
    icon: <AiOutlineDashboard />,
    path: '/',
    component: <Dashbaord />,
  },
  {
    label: 'Products',
    icon: <AiOutlineProduct />,
    path: '/products',
    component: <Products />,
  },
  {
    label: 'Categories',
    icon: <MdOutlineCategory />,
    path: '/categories',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
  {
    label: 'Orders',
    icon: <BsCartCheck />,
    path: '/orders',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
  {
    label: 'Media',
    icon: <TbPhotoVideo size={18} />,
    path: '/media',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
  {
    label: 'Notifications',
    icon: <MdOutlineNotifications size={20} />,
    path: '/notifications',
    component: <Notifications />,
  },
  {
    label: 'Tasks',
    icon: <FaRegSquareCheck />,
    path: '/tasks',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
  {
    label: 'Notes',
    icon: <FaRegStickyNote />,
    path: '/notes',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem
        fugiat iusto aliquid? Vel nemo, cupiditate, expedita praesentium quod
        assumenda facilis pariatur aut distinctio optio tenetur repellendus
        alias minima eveniet!
      </div>
    ),
  },
  {
    label: 'Reports',
    icon: <HiOutlineDocumentReport />,
    path: '/reports',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        ratione sed ducimus, cupiditate expedita, pariatur quasi ab eius
        aspernatur rem dolores accusantium quos esse maiores placeat at
        sapiente. Eligendi, cumque.
      </div>
    ),
  },
  {
    label: 'Users',
    icon: <TbUsers />,
    path: '/users',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
  {
    label: 'Topbars',
    icon: <CgToolbarTop />,
    path: '/topbars',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
  {
    label: 'Settings',
    icon: <MdOutlineSettings />,
    path: '/settings',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus
        impedit corrupti quam ducimus quis facilis qui iure aliquam quia
        possimus obcaecati mollitia ipsum sunt voluptate, nulla, illum quidem
        dolorum?
      </div>
    ),
  },
];
