import { Link } from 'react-router';
import PageTitle from '../../components/pageTitle/PageTitle';
import { MdOutlineAdd } from 'react-icons/md';

const Products = () => {
  return (
    <div>
      <PageTitle
        title='Products'
        description=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
        distinctio.'
      >
        <Link to={'/products/new'} className='btn-primary'>
          <MdOutlineAdd />
          <span>New Product</span>
        </Link>
      </PageTitle>

      <div className='bg-card min-h-[400px] rounded-lg mt-6'>
        {new Array(20)?.fill(0)?.map((_, index) => (
          <div
            key={index}
            className='grid grid-cols-6 gap-4 p-4 border-b border-border/50'
          >
            {new Array(6)?.fill(0)?.map((_, index) => (
              <div
                key={index}
                className='h-[36px] bg-background rounded-md'
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
