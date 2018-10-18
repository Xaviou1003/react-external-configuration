import React from 'react';
import ConfigurationContext from '../context/ConfigurationContext';

const withConfiguration = ComponentToWrap => props => (
  <ConfigurationContext.Consumer>
    {properties => <ComponentToWrap {...props} properties={properties} />}
  </ConfigurationContext.Consumer>
);


export default withConfiguration;
