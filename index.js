import ConfigurationContext, { loadConfigurationFile } from './src/context/ConfigurationContext';
import withConfiguration from './src/hoc/AppConfiguration';


export default withConfiguration;
export { loadConfigurationFile, ConfigurationContext };

