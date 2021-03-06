import CopyWebpackPlugin from 'copy-webpack-plugin';
import marked from 'marked';
import { resolve } from 'path';

export function graphql(config) {
  config.module.rules.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  });
}

const renderer = new marked.Renderer();
export function markdown(config, env, helpers) {
  renderer.table = (header, body) => {
    if (body) body = `<tbody>${body}</tbody>`; // eslint-disable-line no-param-reassign

    return `<div class="table-wrapper"><table><thead>${header}</thead>${body}</table></div>`;
  };

  // Overwrite default configuration, which loads md and html via raw-loader
  helpers.getLoadersByName(config, 'raw-loader')[0].rule.test = /\(.(xml|txt)$/; // eslint-disable-line no-param-reassign

  // Instead resolve html, and md files via custom configuration
  config.module.rules.push({
    test: /\.md$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
        options: {
          gfm: true,
          breaks: true,
          smartypants: true,
          renderer,
        },
      },
    ],
  });
}

export function staticFiles(config) {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        { from: 'robots.txt' },
        { from: 'security.txt', to: '.well-known/security.txt' },
      ],
    }),
  );
}

export function babel(config, env, helpers) {
  const babelLoader = helpers.getLoadersByName(config, 'babel-loader')[0];

  babelLoader.rule.options.plugins.push(
    require.resolve('@babel/plugin-proposal-optional-chaining'),
  );

  if (env.dev)
    // get full stack on preact/debug hints. See https://github.com/preactjs/preact/releases/tag/10.1.1
    babelLoader.rule.options.plugins.push(
      require.resolve('@babel/plugin-transform-react-jsx-source'),
    );
}

export function typescript(config) {
  // Use any `index` file, not just index.js
  /* eslint-disable no-param-reassign */
  config.resolve.alias['preact-cli-entrypoint'] = resolve(
    process.cwd(),
    'src',
    'index',
  );
  /* eslint-enable no-param-reassign */
}
