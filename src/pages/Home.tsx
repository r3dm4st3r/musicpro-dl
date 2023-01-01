import HomeCards from '../components/music/home/HomeCards';
import { useHomeQuery } from '../services/saavn.service';

const Home = () => {
  const { data, isLoading } = useHomeQuery('hindi');
  const albums = data?.data?.albums;
  const playlists = data?.data?.playlists;
  const charts = data?.data?.charts;
  const trendingAlbums = data?.data?.trending?.albums;
  const trendingSongs = data?.data?.trending?.songs;
  return (
    <section className="py-10 relative overflow-hidden min-h-screen">
      {!isLoading && (
        <div className="fixed w-full h-full inset-0 blur-2xl scale-[1.5]">
          <img className="w-full h-full object-cover" src={albums[0]['image'][2]['link']} alt={albums[0]['name']} />
        </div>
      )}
      <div className="container">
        <HomeCards data={albums} loading={isLoading} />
        <HomeCards data={trendingAlbums} loading={isLoading} />
        <HomeCards data={trendingSongs} loading={isLoading} />
        <HomeCards data={playlists} loading={isLoading} />
        <HomeCards data={charts} loading={isLoading} />
      </div>
    </section>
  );
};

export default Home;
