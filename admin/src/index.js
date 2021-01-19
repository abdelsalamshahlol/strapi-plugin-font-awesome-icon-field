import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import IconPicker from "./components/IconPicker/IconPicker";

export default strapi => {
  const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon: pluginPkg.strapi.icon,
    id: pluginId,
    initializer: () => null,
    injectedComponents: [],
    isReady: true,
    isRequired: pluginPkg.strapi.required || false,
    mainComponent: null,
    name: pluginPkg.strapi.name,
    preventComponentRendering: false,
    settings: null,
    trads: {},
  };

  strapi.registerField({type: 'iconPicker', Component: IconPicker });

  return strapi.registerPlugin(plugin);
};
