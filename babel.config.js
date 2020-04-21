

module.exports = (api) => {
  // api.cache(true);
  // console.log(api);
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    // [
    //   require('@babel/preset-env', {
    //     // 'useBuiltIns': 'entry'
    //     'targets': {
    //       'node': '10'
    //     },
    //     // 'useBuiltIns': 'entry'
    //   })
    // ],
    // ['@babel/preset-env', {useBuiltIns: 'usage'}],
    // '@babel/preset-react',
  ];
  const plugins = [
    ['@babel/plugin-proposal-class-properties', {
    //   loose: true
    }],
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-object-rest-spread', {}, 'Plugin'],


    // 'babel-plugin-transform-remove-console'
    // '@babel/plugin-proposal-export-default-from',
    // 'react-hot-loader/babel'
  ];
  console.log('env: ', api.env());

  // if(api.env('production')) {
  //   plugins.push(['babel-plugin-transform-remove-console'])
  // };
  // console.log('env: ', api.env('production'));
  return {
    presets,
    plugins,
  };
};
