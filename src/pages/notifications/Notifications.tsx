import PageTitle from '../../components/pageTitle/PageTitle';

const Notifications = () => {
  return (
    <div>
      <PageTitle
        title='Notifications'
        description=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
        distinctio.'
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        <div className='bg-card h-[160px] rounded-lg'></div>
        <div className='bg-card h-[160px] rounded-lg'></div>
        <div className='bg-card h-[160px] rounded-lg'></div>
      </div>

      <div className='bg-card h-[200px] rounded-lg mt-6'></div>
      <div className='bg-card h-[400px] rounded-lg mt-6'></div>
    </div>
  );
};

export default Notifications;
