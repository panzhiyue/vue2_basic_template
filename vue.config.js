module.exports = {
    // 其余项略
    configureWebpack: {
      // 其余项略
      module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
          }
        ] 
      }
    }
  }