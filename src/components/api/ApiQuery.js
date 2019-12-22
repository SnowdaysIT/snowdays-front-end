/* eslint-disable react/jsx-props-no-spreading */
/**
 * NOTE this is a HOC
 * > don't use inside a render() method since HOC creates a copy of the wrapped component
 * > Usage e.g.:
 * 
 * function Component({ apiData }) {
 *  return apiData.forEach(({ id, title }) => (
 *    <>
 *      <span>{id}</span>
 *      <span>{title}</span>
 *    </>
 *  );
 * }
 * export ApiQuery(Component, `
 *  {
 *    todo {
 *      id
 *      title
 *    }
 *  }
 * `)
 * 
 * Your Component will be decorated with the new property 'apiData'
 * 
 * > mind static methods of wrapped components
 * > https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
 * > the suggested solution is to export the static method separately from the component itself.
 * > mind refs problem
 * > https://reactjs.org/docs/higher-order-components.html#refs-arent-passed-through
 */
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loading from './Loading';
import Error from './Error';

function ApiQuery(WrappedComponent, query) {
  const { loading, error, data } = useQuery(gql`${query}`);

  if (loading) return <Loading />;
  if (error) return <Error />;
  
  const Wrapper = (props) => (
    <WrappedComponent apiData={data} {...props} />
  );

  Wrapper.displayName = `ApiQuery(${
    WrappedComponent.displayName ||
    WrappedComponent.name
  })`;
  
  return Wrapper;
}

export default ApiQuery;
