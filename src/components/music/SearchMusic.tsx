import Radio from '../form/Radio';
import Input from '../form/Input';
import { Form, Formik } from 'formik';
import { useAppDispatch } from '../../redux/store';
import { SET_SEARCH } from '../../redux/reducers/config/app/app.slice';

const initialValue = {
  search: '',
  type: 'album'
};
const SearchMusic = () => {
  const dispatch = useAppDispatch();
  const handleSearch = values => {
    dispatch(SET_SEARCH(values));
  };
  return (
    <div className="relative z-10">
      <div className="max-w-[750px] mx-auto">
        <h3 className="text-center mb-10 text-3xl text-white">Search Music</h3>
        <Formik initialValues={initialValue} onSubmit={values => handleSearch(values)}>
          {() => (
            <Form>
              <div>
                <div className="relative">
                  <Input inputClass="form-search" name="search" type="text" placeholder="search" />
                  <button type="submit" className="absolute z-[1] top-2 right-2 bg-theme px-3 py-1.5 text-white">
                    Search
                  </button>
                </div>
                <div className="text-white capitalize tracking-wide flex items-center justify-center mt-5">
                  <Radio name="type" options={['album', 'playlist', 'song', 'artist']} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchMusic;
