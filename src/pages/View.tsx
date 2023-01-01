import { useViewQuery } from '../services/saavn.service';
import { useParams } from 'react-router-dom';
import SongLists from '../components/music/view/SongLists';
import { Icon } from '@iconify/react';

const View = () => {
  const { type, id } = useParams();
  const { data, isLoading } = useViewQuery({ type, id });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="py-10 relative min-h-screen">
      <div className="fixed inset-0 w-full h-full blur-xl scale-[2]">
        <img
          className="w-full h-full object-cover"
          src={
            data['data']['image']
              ? data['data']['image'][2]['link']
              : 'https://staticfe.saavn.com/web6/jioindw/dist/1671110758/_i/default_images/default-playlist-500x500.jpg'
          }
          alt={data.name}
        />
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row relative p-2 gap-5 bg-white shadow drop-shadow-sm mb-5">
          <div className="w-full md:w-[350px]">
            <img
              className="w-full object-cover md:object-contain"
              src={
                data['data']['image']
                  ? data['data']['image'][2]['link']
                  : 'https://staticfe.saavn.com/web6/jioindw/dist/1671110758/_i/default_images/default-playlist-500x500.jpg'
              }
              alt={data['data']['name']}
            />
          </div>
          <div className="w-full md:w-[calc(100%-350px)]">
            <h1 className="mb-5 leading-[1.4]" dangerouslySetInnerHTML={{ __html: data['data']['name'] }} />
            <div className="text-sm flex items-center gap-3 mb-2">
              <span className="text-xl" title="Type">
                <Icon width={25} icon="vscode-icons:file-type-light-codacy" />
              </span>
              <b className="capitalize">{type}</b>
            </div>
            {data['data']['releaseDate'] && (
              <div className="text-sm flex items-center gap-3 mb-2">
                <span className="text-xl" title="Released on">
                  <Icon width={25} icon="circum:calendar-date" />
                </span>
                <b>{data['data']['releaseDate']}</b>
              </div>
            )}
            <div className="text-sm flex items-center gap-3 mb-2">
              <span className="text-xl" title="Song count">
                <Icon width={25} icon="ic:baseline-queue-music" />
              </span>
              <b>{data['data']['songCount']} song</b>
            </div>
            {data['data']['primaryArtists'] && (
              <div className="text-sm flex items-center gap-3 mb-2">
                <span className="text-xl" title="Artists">
                  <Icon width={25} icon="mdi:account-music-outline" />
                </span>
                <b>{data['data']['primaryArtists']}</b>
              </div>
            )}
            <div className="mt-5 flex items-center gap-3">
              <a
                className="bg-theme text-white text-sm px-5 py-3 inline-block uppercase font-bold"
                href={data['data']['url']}
                target="_blank"
                rel="noreferrer"
              >
                View on Saavn
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <SongLists songs={data['data']['songs']} />
        </div>
      </div>
    </section>
  );
};
export default View;
