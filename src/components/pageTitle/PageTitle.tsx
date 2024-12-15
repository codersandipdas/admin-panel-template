import React, { memo } from 'react';

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 justify-between'>
      <div>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='opacity-50'>{description}</p>
      </div>
      <div className='flex items-center gap-2'>{children}</div>
    </div>
  );
};

export default memo(PageTitle);
