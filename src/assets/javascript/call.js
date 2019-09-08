export default class Call {
   _events = {};

   static _events = null;

   on(event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
         for (var i = 0, l = event.length; i < l; i++) {
            vm.on(event[i], fn);
         }
      } else {
         (vm._events[event] || (vm._events[event] = [])).push(fn);
      }
      return vm
   }

   off(event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
         vm._events = {};
         return vm
      }
      // array of events
      if (Array.isArray(event)) {
         for (var i = 0, l = event.length; i < l; i++) {
            vm.off(event[i], callback);
         }
         return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
         return vm
      }
      if (!fn) {
         vm._events[event] = null;
         return vm
      }
      if (fn) {
         // specific handler
         var cb;
         var i$1 = cbs.length;
         while (i$1--) {
            cb = cbs[i$1];
            if (cb === fn || cb.fn === fn) {
               cbs.splice(i$1, 1);
               break
            }
         }
      }
      return vm
   };

   emit (event) {

      var hyphenate = function (str) {
         str = str.slice(0,2);
         return str[0] + '-' + str[1]
      };
      var toArray =  function (args, n) {
         return Array.prototype.slice.call(args, n || 0)
      };
      var vm = this;
      if (true) {
         var lowerCaseEvent = event.toLowerCase();
         if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
            console.warn(
               "Event \"" + lowerCaseEvent + "\" is emitted in component " +
               " but the handler is registered for \"" + event + "\". " +
               "Note that HTML attributes are case-insensitive and you cannot use " +
               "v-on to listen to camelCase events when using in-DOM templates. " +
               "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
            );
         }
      }
      var cbs = vm._events[event];

      if (cbs) {
         cbs = cbs.length > 1 ? toArray(cbs) : cbs;
         var args = toArray(arguments, 1);
         for (var i = 0, l = cbs.length; i < l; i++) {
            try {
               cbs[i].apply(vm, args);
            } catch (e) {
               console.error(e, vm, ("event handler for \"" + event + "\""));
            }
         }
      }
      return vm
   };
   once  (event, fn) {
      var vm = this;
      function on () {

         vm.off(event, on);
         fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.on(event, on);
      return vm
   }
}