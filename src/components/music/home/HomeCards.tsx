import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCards = ({ data, loading }) => {
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6 gap-5 py-5">
      {data
        .filter(song => song['type'] !== 'song')
        .map((item, i) => {
          return (
            <Link
              to={`${item.type}/${item.id}`}
              key={i}
              className="bg-white p-3 shadow drop-shadow-sm hover:shadow-xl transition-shadow"
            >
              <img src={item.image[2]['link']} alt={item['name']} />
            </Link>
          );
        })}
    </div>
  );
};
HomeCards.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool
};

export default HomeCards;
