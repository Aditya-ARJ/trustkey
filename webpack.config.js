module.exports = {
  
   resolve: {
     alias: {
       '@mui/styled-engine': '@mui/styled-engine-sc'
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true
   },
   },
  };
 