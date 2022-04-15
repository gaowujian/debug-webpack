# finalOption

每次使用 webpack 命令打包的时候，会输出 webpack 打包所使用的最终配置到 finalOption.json 文件中
如果创建一个空的 webpack.config.js，然后进行打包就可以轻松查看到 webpack 打包的默认配置

在 C:\Users\admin\Desktop\debug-webpack\node_modules\webpack\lib\webpack.js 文件下 57 加上

require("fs").writeFileSync(require("path").resolve(process.cwd(),"finalOptions.json"), JSON.stringify(compiler.options, null, 2));
