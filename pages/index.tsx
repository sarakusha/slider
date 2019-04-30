import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import classNames from 'classnames';

const images = [
  'MSD_Digital_V3-01.png',
  'MSD_Digital_V3-02.png',
  'MSD_Digital_V3-03.png',
  'MSD_Digital_V3-05.png',
  'MSD_Digital_V3-07.png',
  'MSD_Digital_V3-08.png',
  'MSD_Digital_V3-09.png',
  'MSD_Digital_V3-11.png',
];

const IndexPage = () => {
  const [current, setCurrent] = useState(0);
  useEffect(
    () => {
      const timer = setInterval(
        () => setCurrent(current => (current + 1) % images.length),
        10000,
      );
      return () => {
        clearInterval(timer);
      };
    },
    [setCurrent, images],
  );
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <React.Fragment key={image}>
            <div className={classNames('fade', { hidden: current !== index })}>
              <img src={`/static/${image}`} />
            </div>
            <div className={classNames('fade', { hidden: current !== index })}>
              <img src={`/static/${image}`} />
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* language=CSS */}
      <style jsx>{`
        .slideshow-container {
          display: flex;
          width: 640px;
          height: 80px;
          position: relative;
          margin: auto;
          background-color: black;
        }

        .hidden {
          display: none;
        }

        img {
          width: 100%;
        }

        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 2s;
          animation-name: fade;
          animation-duration: 2s;
        }

        @-webkit-keyframes fade {
          from {
            opacity: .4
          }
          to {
            opacity: 1
          }
        }

        @keyframes fade {
          from {
            opacity: .4
          }
          to {
            opacity: 1
          }
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
