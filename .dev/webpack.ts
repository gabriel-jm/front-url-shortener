import * as path from 'path'
import * as webpack from 'webpack'

export default <webpack.Configuration> {
  mode: 'development',
  entry: './src/index.ts',
  module: <webpack.ModuleOptions> {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|html)$/,
        use: ['raw-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.html', '.css', '.ts']
  },
  output: {
    filename: 'main.js',
    path: path.resolve('public')
  }
}
