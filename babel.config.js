module.exports = (api) => {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = [
    ['@babel/plugin-proposal-class-properties', {
    }],
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-object-rest-spread', {}, 'Plugin'],
  ];

  return {
    presets,
    plugins,
  };
};
