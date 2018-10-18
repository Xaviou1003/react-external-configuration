import React from 'react';
import 'whatwg-fetch';

/* global fetch alert */

export const ConfigurationContext = React.createContext({
  properties: {},
});

export const loadConfigurationFile = async (relativeUrlFileConfig, renderAppCallback) => {
  const appConfigResult = await fetch(relativeUrlFileConfig);
  if (appConfigResult.status === 200 && appConfigResult.json) {
    const appConfiguration = await appConfigResult.json();
    if (renderAppCallback) {
      renderAppCallback(appConfiguration);
    }
  } else {
    alert('Fichier de configuration introuvable.');
  }
};

export default ConfigurationContext;
