import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../nav/nav';
import { Dropdown } from '../dropdown/dropdown';
import { changeLanguage } from '../../store/actions';
import { Languages, RootState } from '../../store/types';

const options = [
  {
    name: 'lv',
    value: 'lv',
  },
  {
    name: 'en',
    value: 'en',
  },
];

export const Header: FC = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language);

  return (
    <header>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <img
              src="https://ipsumcreativeco.com/wp-content/uploads/2020/01/Ipsum-Logo-Purple-01.png"
              alt=""
              width="130"
            />
          </div>
          <div className="col-xs-7">
            <Nav />
          </div>
          <div className="col-xs-2">
            <Dropdown
              value={language}
              options={options}
              chnageHandler={(e) => {
                const ln = e.target.value as Languages;

                dispatch(changeLanguage(ln));
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
