import { FaRegStickyNote } from 'react-icons/fa';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdOutlineEmail, MdOutlineNotifications } from 'react-icons/md';
import { TbAutomaticGearbox } from 'react-icons/tb';
import { RouteType } from './types';

export const routes: RouteType[] = [
  {
    label: 'Notifications',
    icon: <MdOutlineNotifications size={20} />,
    path: '/notifications',
    component: (
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        voluptatem officia unde alias quisquam eius atque, asperiores
        blanditiis! Reiciendis quidem a cupiditate perferendis perspiciatis,
        modi expedita vero saepe ipsum odit.
      </div>
    ),
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
    label: 'Emails',
    icon: <MdOutlineEmail />,
    path: '/emails',
    component: (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        amet quia illum perferendis maxime itaque dolor rerum recusandae
        expedita fugit, sed, mollitia natus accusantium a voluptates excepturi
        quibusdam aspernatur. Voluptatibus.
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
    label: 'Automations',
    icon: <TbAutomaticGearbox />,
    path: '/automations',
    component: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        pariatur cumque minima fugit unde vitae quam facilis deleniti molestiae
        qui vero assumenda adipisci obcaecati nostrum fugiat, fuga harum
        repellat repudiandae?
      </div>
    ),
  },
];
