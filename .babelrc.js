module.exports = {
   "presets": ["@babel/preset-react"],
   "plugins": [
      [
         "@babel/plugin-proposal-class-properties", {
            "loose": true
         }
      ],
      "babel-plugin-react-scoped-css",
      "@babel/plugin-syntax-dynamic-import",
   ]
}