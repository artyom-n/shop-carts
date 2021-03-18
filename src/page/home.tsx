import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { translations } from '../locales/translations';

const Home: FC = () => {
  const language = useSelector((state: RootState) => state.language);

  return (
    <section>
      <div className="container">
        <div className="row center-xs margin-bottom--24">
          <div className="col-xs-12">
            <h1>{translations[language].homeTitle}</h1>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <iframe
              title="Home"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QFaFIcGhPoM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     language: state.language,
//   };
// };

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

// export default connector(Home);

export default Home;
