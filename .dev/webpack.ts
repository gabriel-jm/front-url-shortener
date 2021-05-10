import 'dotenv/config'
import path from 'path'
import webpack from 'webpack'

export default <webpack.Configuration> {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.ts',
  module: <webpack.ModuleOptions> {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'main.js',
    path: path.resolve('public')
  },
  plugins: [
    new webpack.EnvironmentPlugin(['SERVER_URL'])
  ]
}
