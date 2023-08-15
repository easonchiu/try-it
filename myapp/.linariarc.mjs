/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-21 16:10:19
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-25 17:09:46
 * @Description: 
 */

let lastId = 0;

function getNextCssClassName() {
  return `seq_${++lastId}`;
}

module.exports = {
  rules: [
    {
      action: require.resolve('@linaria/shaker'),
    },
    {
      test: /\/node_modules\//,
      action: 'ignore',
    },
    {
      test: (filename, code) => {
        if (!/\/node_modules\//.test(filename)) {
          return false
        }
        return /(?:^|\n|;)\s*(?:export|import)\s+/.test(code)
      },
      action: require.resolve('@linaria/shaker'),
    },
  ],
  // displayName: true,
  // classNameSlug(hash, title) {
  //   return getNextCssClassName()
  // }
}
