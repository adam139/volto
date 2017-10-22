/**
 * Document view component.
 * @module components/theme/View/ListView
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
/**
 * List view component class.
 * @function ListView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const ListView = ({ content }) => (
  <div id="page-home">
    <Helmet title={content.title} />
    <section id="content-core">
      {content.items.map(item => (
        <article key={item.url}>
          <h2>
            <Link to={item.url} title={item['@type']}>
              {item.title}
            </Link>
          </h2>
          {item.description && <p>{item.description}</p>}
        </article>
      ))}
    </section>
  </div>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ListView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
        '@type': PropTypes.string,
        description: PropTypes.string,
        review_state: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  }).isRequired,
};

export default ListView;
