import PropTypes from 'prop-types';
import { timeToReadableFormat } from '../../../utils/global';
import Download from '../actions/Download';

const SongLists = props => {
  const { songs } = props;
  return (
    <ul className="block w-full h-full">
      {songs
        ?.filter(song => song['downloadUrl'] !== false)
        .map((item, i) => {
          return (
            <li
              key={i}
              className="bg-white flex items-center justify-between gap-5 p-2 mb-3 last:mb-0 shadow-sm drop-shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-[calc(100%-50px)] sm:w-[calc(100%-250px)] flex items-center gap-5">
                <div className="w-[60px]">
                  <img src={item['image'][1]['link']} alt={item['name']} />
                </div>
                <h6
                  className="text-left w-[calc(100%-60px)] whitespace-nowrap text-ellipsis overflow-hidden"
                  style={{ textOverflow: '...' }}
                  dangerouslySetInnerHTML={{ __html: item['name'] }}
                />
              </div>
              <span className="hidden sm:block sm:w-[50px]">{timeToReadableFormat(item['duration'])}</span>
              <div className="w-[50px] flex items-center justify-end w-full gap-5 pr-3">
                <Download links={item['downloadUrl']} name={item['name']} />
              </div>
            </li>
          );
        })}
    </ul>
  );
};
SongLists.propTypes = {
  songs: PropTypes.array
};
export default SongLists;
