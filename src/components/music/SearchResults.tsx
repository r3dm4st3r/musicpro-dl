import { useSearchQuery } from '../../services/saavn.service';
import { useAppSelector } from '../../redux/store';
import { SEARCH } from '../../redux/reducers/config/app/app.slice';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const search = useAppSelector(SEARCH);
  const { data, isLoading } = useSearchQuery(search, { skip: search.search === '' });

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 py-5">
        {!isLoading &&
          data?.data?.results?.map(item => {
            return (
              <Link
                to={`/${item.type ? item.type : search.type}/${item.id}`}
                key={item.id}
                className="p-2 bg-white shadow drop-shadow-sm"
              >
                <img src={item['image'][2]['link']} alt="" />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default SearchResults;
