class MyWebpackPlugin {

   constructor () {

      this.n = 0;

   }
   apply( compiler ) {

      compiler.hooks.compile.tap( 'MyWebpackPlugin', () => {

         // 做一些异步的事情……
         console.log( '[ 欲上青天揽明月 ]: --------------------第' + ++this.n + '次编译------------------' );

      } );

   }

}

module.exports = MyWebpackPlugin;