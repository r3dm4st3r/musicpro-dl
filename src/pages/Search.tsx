import SearchMusic from '../components/music/SearchMusic';
import SearchResults from '../components/music/SearchResults';

const Search = () => {
  return (
    <section className="py-10">
      <div className="fixed inset-0 w-full h-full blur-xl scale-[2] z-[1]">
        <img
          className="w-full h-full object-cover"
          src="https://c.saavncdn.com/editorial/BestOfRomance-RetroHindi_20220311164609.jpg"
          alt="dummy"
        />
      </div>
      <div className="container relative z-10">
        <div className="py-10">
          <div className="grid grid-cols-1">
            <SearchMusic />
          </div>
        </div>
        <SearchResults />
      </div>
    </section>
  );
};

export default Search;
