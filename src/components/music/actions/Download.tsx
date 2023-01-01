import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { downloadFile } from '../../../utils/global';

const Download = props => {
  const downloadEl = useRef(null);
  const { links, name } = props;
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);

  const showMenu = e => {
    e.preventDefault();
    setShow(!show);
  };

  const handleDownload = (file, name) => {
    const isDownloaded = downloadFile(file, name);
    setShow(!isDownloaded);
    setFile(null);
  };

  // useClickAway(downloadEl, event => {
  //   event.preventDefault();
  //   setShow(false);
  //   setFile(null);
  // });

  return (
    <div className="relative" ref={downloadEl}>
      <button type="button" onClick={e => showMenu(e)} className="flex items-center justify-center">
        <Icon width={20} icon="ri:download-cloud-2-line" />
      </button>
      {show && (
        <ul className="absolute bottom-[-19px] right-8 bg-white w-[150px] p-5 shadow drop-shadow-md text-sm">
          {links.map((link, i) => {
            return (
              <li key={i} className="flex items-center justify-between">
                <div className="radio">
                  <input onChange={() => setFile(link.link)} name="quality" id={link.quality} type="radio" />
                  <label htmlFor={link.quality}> {link.quality} </label>
                </div>
              </li>
            );
          })}
          {file && (
            <button
              type="button"
              onClick={() => handleDownload(file, name)}
              className="bg-theme text-white w-full mt-3 py-1.5 px-2 text-xs"
            >
              Download
            </button>
          )}
        </ul>
      )}
    </div>
  );
};

Download.propTypes = {
  links: PropTypes.array,
  name: PropTypes.string
};
export default Download;
