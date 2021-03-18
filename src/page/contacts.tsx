import React, { FC } from 'react';

const Contacts: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>This is contacts Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <form action="">
              <div className="row margin-bottom--8">
                <div className="col-xs-12">
                  <label htmlFor="name" className="w100">
                    name
                  </label>
                  <input type="text" id="name" className="w100" />
                </div>
              </div>
              <div className="row margin-bottom--8">
                <div className="col-xs-12">
                  <label htmlFor="lastname" className="w100">
                    lastname
                  </label>
                  <input type="text" id="lastname" className="w100" />
                </div>
              </div>
              <div className="row margin-bottom--24">
                <div className="col-xs-12">
                  <label htmlFor="password" className="w100">
                    password
                  </label>
                  <input type="password" id="password" className="w100" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <button type="submit">submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
