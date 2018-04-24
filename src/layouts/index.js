import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/header'

import '../css/style-guide.css'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Gatsby Default (Blog) Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="l-page-layout l-page-layout--two-column-fixed">

          <div className="l-page-layout__secondary">

            <Header siteTitle="Hello" />

          </div>

          <div className="l-page-layout__main">
            <main role="main">
              <div className="l-container">
                {this.props.children()}
              </div>
            </main>
          </div>

          </div>
      </div>
    );
  }
}
