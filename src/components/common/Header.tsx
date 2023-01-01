import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <div className="sticky top-[-1px] z-20 backdrop-blur-xl py-2 px-5 flex items-center justify-between">
      <Link to="/" className="text-white text-4xl inline-block font-bold">
        <span>Music</span>
      </Link>
      <Link to="/search" className="text-white text-4xl inline-block font-bold">
        <span>
          <Icon width={30} icon="uil:search" />
        </span>
      </Link>
    </div>
  );
};
export default Header;
