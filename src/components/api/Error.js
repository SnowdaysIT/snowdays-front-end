/* eslint-disable no-console */
import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

function Error({ error }) {
  const {
    graphQLErrors,
    networkError,
    message,
    extraInfo,
  } = error;
  console.error('GraphQL', graphQLErrors);
  console.error('Network', networkError);
  return (
    <Container>
      <h3>Error</h3>
      <p>{message}</p>
      <p>{extraInfo}</p>
      {networkError.result.errors.map((x) => (
        <p key={x}>{x.message}</p>
      ))}
    </Container>
  );
}

Error.propTypes = {
  error: PropTypes.exact({
    message: PropTypes.string,
    extraInfo: PropTypes.string,
    graphQLErrors: PropTypes.array,
    networkError: PropTypes.object,
  }),  
};

Error.defaultProps = {
  error: {
    message: '',
    extraInfo: '',
    graphQLErrors: [],
    networkError: {},
  },
};

export default Error;
