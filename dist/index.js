'use strict';

var React = require('react');

var img$h = "data:image/png;base64,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";

const Header = () => {
    return (React.createElement("div", { className: "w-full px-5 px-24 h-[56px] z-10 bg-white" },
        React.createElement("div", { className: "px-2 flex justify-between items-center w-full h-full" },
            React.createElement("div", { className: "flex items-ceter" },
                React.createElement("div", { className: "text-sm font-[500] mr-4 sm:text-2lg" },
                    React.createElement("img", { src: img$h, alt: "oaaslogo", className: "h-8 w-32" }))))));
};

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((undefined && undefined.MODE) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var withSelectorExports = {};
var withSelector = {
  get exports(){ return withSelectorExports; },
  set exports(v){ withSelectorExports = v; },
};

var withSelector_production_min = {};

var shimExports = {};
var shim = {
  get exports(){ return shimExports; },
  set exports(v){ shimExports = v; },
};

var useSyncExternalStoreShim_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production_min;

function requireUseSyncExternalStoreShim_production_min () {
	if (hasRequiredUseSyncExternalStoreShim_production_min) return useSyncExternalStoreShim_production_min;
	hasRequiredUseSyncExternalStoreShim_production_min = 1;
var e=React;function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c});},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c});})},[a]);p(d);return d}
	function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k(a,d)}catch(f){return !0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;
	return useSyncExternalStoreShim_production_min;
}

var useSyncExternalStoreShim_development = {};

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_development;

function requireUseSyncExternalStoreShim_development () {
	if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
	hasRequiredUseSyncExternalStoreShim_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React$1 = React;

	var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	// dispatch for CommonJS interop named imports.

	var useState = React$1.useState,
	    useEffect = React$1.useEffect,
	    useLayoutEffect = React$1.useLayoutEffect,
	    useDebugValue = React$1.useDebugValue;
	var didWarnOld18Alpha = false;
	var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.

	function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	getServerSnapshot) {
	  {
	    if (!didWarnOld18Alpha) {
	      if (React$1.startTransition !== undefined) {
	        didWarnOld18Alpha = true;

	        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
	      }
	    }
	  } // Read the current snapshot from the store on every render. Again, this
	  // breaks the rules of React, and only works here because of specific
	  // implementation details, most importantly that updates are
	  // always synchronous.


	  var value = getSnapshot();

	  {
	    if (!didWarnUncachedGetSnapshot) {
	      var cachedValue = getSnapshot();

	      if (!objectIs(value, cachedValue)) {
	        error('The result of getSnapshot should be cached to avoid an infinite loop');

	        didWarnUncachedGetSnapshot = true;
	      }
	    }
	  } // Because updates are synchronous, we don't queue them. Instead we force a
	  // re-render whenever the subscribed state changes by updating an some
	  // arbitrary useState hook. Then, during render, we call getSnapshot to read
	  // the current value.
	  //
	  // Because we don't actually use the state returned by the useState hook, we
	  // can save a bit of memory by storing other stuff in that slot.
	  //
	  // To implement the early bailout, we need to track some things on a mutable
	  // object. Usually, we would put that in a useRef hook, but we can stash it in
	  // our useState hook instead.
	  //
	  // To force a re-render, we call forceUpdate({inst}). That works because the
	  // new object always fails an equality check.


	  var _useState = useState({
	    inst: {
	      value: value,
	      getSnapshot: getSnapshot
	    }
	  }),
	      inst = _useState[0].inst,
	      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
	  // in the layout phase so we can access it during the tearing check that
	  // happens on subscribe.


	  useLayoutEffect(function () {
	    inst.value = value;
	    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	    // commit phase if there was an interleaved mutation. In concurrent mode
	    // this can happen all the time, but even in synchronous mode, an earlier
	    // effect may have mutated the store.

	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }
	  }, [subscribe, value, getSnapshot]);
	  useEffect(function () {
	    // Check for changes right before subscribing. Subsequent changes will be
	    // detected in the subscription handler.
	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }

	    var handleStoreChange = function () {
	      // TODO: Because there is no cross-renderer API for batching updates, it's
	      // up to the consumer of this library to wrap their subscription event
	      // with unstable_batchedUpdates. Should we try to detect when this isn't
	      // the case and print a warning in development?
	      // The store changed. Check if the snapshot changed since the last time we
	      // read from the store.
	      if (checkIfSnapshotChanged(inst)) {
	        // Force a re-render.
	        forceUpdate({
	          inst: inst
	        });
	      }
	    }; // Subscribe to the store and return a clean-up function.


	    return subscribe(handleStoreChange);
	  }, [subscribe]);
	  useDebugValue(value);
	  return value;
	}

	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  var prevValue = inst.value;

	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(prevValue, nextValue);
	  } catch (error) {
	    return true;
	  }
	}

	function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	  // React do not expose a way to check if we're hydrating. So users of the shim
	  // will need to track that themselves and return the correct value
	  // from `getSnapshot`.
	  return getSnapshot();
	}

	var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

	var isServerEnvironment = !canUseDOM;

	var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
	var useSyncExternalStore$2 = React$1.useSyncExternalStore !== undefined ? React$1.useSyncExternalStore : shim;

	useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	return useSyncExternalStoreShim_development;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shimExports;
	hasRequiredShim = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireUseSyncExternalStoreShim_production_min();
		} else {
		  module.exports = requireUseSyncExternalStoreShim_development();
		}
} (shim));
	return shimExports;
}

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production_min;

function requireWithSelector_production_min () {
	if (hasRequiredWithSelector_production_min) return withSelector_production_min;
	hasRequiredWithSelector_production_min = 1;
var h=React,n=requireShim();function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
	withSelector_production_min.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
	u(function(){f.hasValue=!0;f.value=d;},[d]);w(d);return d};
	return withSelector_production_min;
}

var withSelector_development = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_development;

function requireWithSelector_development () {
	if (hasRequiredWithSelector_development) return withSelector_development;
	hasRequiredWithSelector_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React$1 = React;
	var shim = requireShim();

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var useSyncExternalStore = shim.useSyncExternalStore;

	// for CommonJS interop.

	var useRef = React$1.useRef,
	    useEffect = React$1.useEffect,
	    useMemo = React$1.useMemo,
	    useDebugValue = React$1.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

	function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
	  // Use this to track the rendered snapshot.
	  var instRef = useRef(null);
	  var inst;

	  if (instRef.current === null) {
	    inst = {
	      hasValue: false,
	      value: null
	    };
	    instRef.current = inst;
	  } else {
	    inst = instRef.current;
	  }

	  var _useMemo = useMemo(function () {
	    // Track the memoized state using closure variables that are local to this
	    // memoized instance of a getSnapshot function. Intentionally not using a
	    // useRef hook, because that state would be shared across all concurrent
	    // copies of the hook/component.
	    var hasMemo = false;
	    var memoizedSnapshot;
	    var memoizedSelection;

	    var memoizedSelector = function (nextSnapshot) {
	      if (!hasMemo) {
	        // The first time the hook is called, there is no memoized result.
	        hasMemo = true;
	        memoizedSnapshot = nextSnapshot;

	        var _nextSelection = selector(nextSnapshot);

	        if (isEqual !== undefined) {
	          // Even if the selector has changed, the currently rendered selection
	          // may be equal to the new selection. We should attempt to reuse the
	          // current value if possible, to preserve downstream memoizations.
	          if (inst.hasValue) {
	            var currentSelection = inst.value;

	            if (isEqual(currentSelection, _nextSelection)) {
	              memoizedSelection = currentSelection;
	              return currentSelection;
	            }
	          }
	        }

	        memoizedSelection = _nextSelection;
	        return _nextSelection;
	      } // We may be able to reuse the previous invocation's result.


	      // We may be able to reuse the previous invocation's result.
	      var prevSnapshot = memoizedSnapshot;
	      var prevSelection = memoizedSelection;

	      if (objectIs(prevSnapshot, nextSnapshot)) {
	        // The snapshot is the same as last time. Reuse the previous selection.
	        return prevSelection;
	      } // The snapshot has changed, so we need to compute a new selection.


	      // The snapshot has changed, so we need to compute a new selection.
	      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.

	      // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.
	      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
	        return prevSelection;
	      }

	      memoizedSnapshot = nextSnapshot;
	      memoizedSelection = nextSelection;
	      return nextSelection;
	    }; // Assigning this to a constant so that Flow knows it can't change.


	    // Assigning this to a constant so that Flow knows it can't change.
	    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

	    var getSnapshotWithSelector = function () {
	      return memoizedSelector(getSnapshot());
	    };

	    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
	      return memoizedSelector(maybeGetServerSnapshot());
	    };
	    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
	  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
	      getSelection = _useMemo[0],
	      getServerSelection = _useMemo[1];

	  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
	  useEffect(function () {
	    inst.hasValue = true;
	    inst.value = value;
	  }, [value]);
	  useDebugValue(value);
	  return value;
	}

	withSelector_development.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	return withSelector_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireWithSelector_production_min();
	} else {
	  module.exports = requireWithSelector_development();
	}
} (withSelector));

var useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelectorExports);

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
function useStore$1(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((undefined && undefined.MODE) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore$1(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;

const useStore = create((set) => ({
    // steps: stepsData?.filter((step: StepDataType) => step.isVisible),
    steps: [],
    image: null,
    finish: false,
    completed: false,
    fetchData: false,
    isYourPan: false,
    getLocation: false,
    cameraStatus: false,
    sideBarToggle: false,
    preview: '',
    cameraType: '',
    selectedFile: '',
    status: 'In Progress',
    panStatusResult: 'Good Match',
    panStatus: 0,
    currentStep: 0,
    uploadedImage: 0,
    manageVeriyStep: 0,
    panVerificationfailed: 0,
    setSideBarToggle: () => set(() => ({})),
    setImage: (input) => set(() => ({ image: input })),
    setPreview: (input) => set(() => ({ preview: input })),
    setStatus: (input) => set(() => ({ status: input })),
    setFinish: (input) => set(() => ({ finish: input })),
    setPanStatus: (input) => set(() => ({ panStatus: input })),
    setFetchData: (input) => set(() => ({ fetchData: input })),
    setIsYourPan: (input) => set(() => ({ isYourPan: input })),
    setCompleted: (input) => set(() => ({ completed: input })),
    setCameraType: (input) => set(() => ({ cameraType: input })),
    setSelectedFile: (input) => set(() => ({ selectedFile: input })),
    setGetlocation: (input) => set(() => ({ getLocation: input })),
    setCameraStatus: (input) => set(() => ({ cameraStatus: input })),
    setUploadedImage: (input) => set(() => ({ uploadedImage: input })),
    setCurrentStepInput: (input) => set(() => ({ currentStep: input })),
    setPanStatusResult: (input) => set(() => ({ panStatusResult: input })),
    setCurrentStepInitial: (input) => set((state) => ({ currentStep: input === null || input === undefined ? state.currentStep : input })),
    setCurrentStepPlus: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    setCurrentStepMinus: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    setPanVerificationdone: (input) => set(() => ({ panVerificationfailed: input })),
    setPanVerificationfailed: (input) => set(() => ({ panVerificationfailed: input })),
    setManageVeriyStep: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep + 1 })),
    setManageVeriyStepinital: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep })),
    setManageVeriyStepback: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep - 1 })),
    setStepsData: (step) => set((state) => ({ steps: state.steps.map((stepItem) => (stepItem.id === step.id ? (stepItem = step) : stepItem)) })),
    setInitialStepsData: (stepData) => set(() => ({ steps: stepData }))
}));

var img$g = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8.612' height='15.692' viewBox='0 0 8.612 15.692'%3e %3cpath id='Path_8529' data-name='Path 8529' d='M413%2c3085.334l6.434%2c6.866L413%2c3099.334' transform='translate(-412.072 -3084.479)' fill='none' stroke='white' stroke-linejoin='round' stroke-width='2.5'/%3e%3c/svg%3e";

var img$f = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8.612' height='15.692' viewBox='0 0 8.612 15.692'%3e %3cpath id='Path_8529' data-name='Path 8529' d='M419.434%2c3085.334%2c413%2c3092.2l6.434%2c7.134' transform='translate(-411.75 -3084.479)' fill='none' stroke='white' stroke-linejoin='round' stroke-width='2.5'/%3e%3c/svg%3e";

const Headermobile = ({ handleSidebarToggle }) => {
    const { steps, currentStep, setCurrentStepMinus } = useStore();
    return (React.createElement("div", { className: `${currentStep !== 0 ? 'block shadow-xl border-2 border-lightdefault p-2' : 'hidden'} sm:hidden` },
        React.createElement("span", { className: "flex px-4" },
            currentStep !== 1 ? React.createElement("img", { src: img$f, alt: "previous_arrow", className: "bg-primary p-3 rounded-lg", onClick: () => setCurrentStepMinus() }) : '',
            React.createElement("span", { className: "w-[100%] flex justify-center" }, steps.map((val, index) => {
                return (React.createElement("span", { key: val.id }, currentStep - 1 === index ? (React.createElement("span", { className: "flex" },
                    React.createElement("span", { className: "text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center mr-2" }, index + 1),
                    React.createElement("span", null,
                        React.createElement("div", { className: "text-[18px] text-primary font-[500]" }, val.label),
                        React.createElement("div", { className: "text-[15px] text-warning" }, "In-Progress")))) : ('')));
            })),
            React.createElement("img", { src: img$g, alt: "next_arrow", className: "bg-primary p-3 rounded-lg", onClick: handleSidebarToggle }))));
};

const UseGeoLocation = () => {
    const [location, setLocation] = React.useState({
        loaded: false,
        coordinates: { lat: 'nothing', lng: '' }
    });
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };
    const onError = (error) => {
        setLocation({
            loaded: true,
            error
        });
    };
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    React.useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            });
        }
        handleLocation();
    }, []);
    return location;
};

const ButtonGlobal = ({ className, children, onClick, disabled, setCapturelocationData, getLocation, type, id }) => {
    const hndlCapturLoction = () => {
        const location = UseGeoLocation();
        setCapturelocationData === null || setCapturelocationData === void 0 ? void 0 : setCapturelocationData(location);
    };
    if (getLocation === true) {
        hndlCapturLoction();
    }
    return (React.createElement("button", { className: className, id: id, onClick: onClick, disabled: disabled, type: type }, children));
};

const Labelglobal = ({ className, children }) => {
    return React.createElement("label", { className: className }, children);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const InputGlobal = (_a) => {
    var { type, id, className, placeholder, onChange, value, name, maxLength, max, minLength } = _a, props = __rest(_a, ["type", "id", "className", "placeholder", "onChange", "value", "name", "maxLength", "max", "minLength"]);
    const handleChange = (e) => {
        if (maxLength) {
            if (e.target.value.length <= maxLength) {
                onChange(e);
            }
            else if (e.target.value.length >= minLength) {
                onChange();
            }
        }
        else {
            e.preventDefault();
            onChange(e);
        }
    };
    return (React.createElement("input", Object.assign({ type: type, id: id, className: className, onChange: handleChange, placeholder: placeholder, value: value }, props, { max: max, name: name, maxLength: maxLength, minLength: minLength })));
};

var isArray$2 = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray$2(a)
      , arrB = isArray$2(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;

/** Built-in value references. */
var Symbol$1 = root$1.Symbol;

var Symbol$2 = Symbol$1;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$d.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$c.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

var getPrototype$1 = getPrototype;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$b = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$9.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1['__core-js_shared__'];

var coreJsData$1 = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$a = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root$1, 'Map');

var Map$2 = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

var nativeCreate$1 = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$1 && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments$1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray$1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root$1.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

var isBuffer$1 = isBuffer;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] =
typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] =
typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] =
typedArrayTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal$1.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

var nodeUtil$1 = nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray$1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value),
      isArg = !isArr && isArguments$1(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

var nativeKeys$1 = nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root$1.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var getSymbols$1 = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};

var getSymbolsIn$1 = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root$1, 'DataView');

var DataView$1 = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root$1, 'Promise');

var Promise$2 = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative(root$1, 'Set');

var Set$2 = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root$1, 'WeakMap');

var WeakMap$2 = WeakMap$1;

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$3 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map$2),
    promiseCtorString = toSource(Promise$2),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap$2);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$2 && getTag(new Map$2) != mapTag$3) ||
    (Promise$2 && getTag(Promise$2.resolve()) != promiseTag) ||
    (Set$2 && getTag(new Set$2) != setTag$3) ||
    (WeakMap$2 && getTag(new WeakMap$2) != weakMapTag$1)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$3;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$3;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/** Built-in value references. */
var Uint8Array = root$1.Uint8Array;

var Uint8Array$1 = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$2 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$1:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var baseCreate$1 = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate$1(getPrototype$1(object))
    : {};
}

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$1;
}

/* Node.js helper references. */
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

var isMap$1 = isMap;

/** `Object#toString` result references. */
var setTag$1 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}

/* Node.js helper references. */
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

var isSet$1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$2 = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$2;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject$2(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone$1(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG$1);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var stringToPath$1 = stringToPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolToString$1 = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray$1(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath$1(toString$1(value)));
}

var isProduction = process.env.NODE_ENV === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var reactIsExports = {};
var reactIs$1 = {
  get exports(){ return reactIsExports; },
  set exports(v){ reactIsExports = v; },
};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs$1));

var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject$1 = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject$1(value) && isFunction(value.then);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn$1(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = toPath(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = clone$1(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = toPath(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn$1(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject$1(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone$1(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject$1(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

var FormikContext = /*#__PURE__*/React.createContext(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
FormikContext.Consumer;
function useFormikContext() {
  var formik = React.useContext(FormikContext);
  !!!formik ? process.env.NODE_ENV !== "production" ? warning(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : warning(false) : void 0;
  return formik;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (reactFastCompare(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = React.useRef(props.initialValues);
  var initialErrors = React.useRef(props.initialErrors || emptyErrors);
  var initialTouched = React.useRef(props.initialTouched || emptyTouched);
  var initialStatus = React.useRef(props.initialStatus);
  var isMounted = React.useRef(false);
  var fieldRegistry = React.useRef({});

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(function () {
      !(typeof isInitialValid === 'undefined') ? process.env.NODE_ENV !== "production" ? warning(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : warning(false) : void 0; // eslint-disable-next-line
    }, []);
  }

  React.useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useReducer = React.useReducer(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var runValidateHandler = React.useCallback(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = React.useCallback(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (process.env.NODE_ENV !== 'production') {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = React.useCallback(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = React.useCallback(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn$1(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = React.useCallback(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = deepmerge_1.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
        dispatch({
          type: 'SET_ERRORS',
          payload: combinedErrors
        });
      }

      return combinedErrors;
    });
  });
  React.useEffect(function () {
    if (validateOnMount && isMounted.current === true && reactFastCompare(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = React.useCallback(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  React.useEffect(function () {
    if (isMounted.current === true && !reactFastCompare(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }

      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  React.useEffect(function () {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  React.useEffect(function () {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  React.useEffect(function () {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn$1(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = React.useCallback(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = React.useCallback(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = React.useCallback(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = isFunction(values) ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = React.useCallback(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = React.useCallback(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && process.env.NODE_ENV !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
          handlerName: 'handleChange'
        });
      }

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn$1(state.values, field), checked, value) : options && multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = React.useCallback(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && process.env.NODE_ENV !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: 'handleblur-e-any--void',
        handlerName: 'handleBlur'
      });
    }

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = React.useCallback(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = React.useCallback(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = React.useCallback(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function (result) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }

          return result;
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if (process.env.NODE_ENV !== "production" && typeof document !== 'undefined') {
      // Safely get the active element (works with IE)
      var activeElement = getActiveElement();

      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ? process.env.NODE_ENV !== "production" ? warning(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : warning(false) : void 0;
      }
    }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = React.useCallback(function (name) {
    return {
      value: getIn$1(state.values, name),
      error: getIn$1(state.errors, name),
      touched: !!getIn$1(state.touched, name),
      initialValue: getIn$1(initialValues.current, name),
      initialTouched: !!getIn$1(initialTouched.current, name),
      initialError: getIn$1(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = React.useCallback(function (name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = React.useCallback(function (nameOrOptions) {
    var isAnObject = isObject$1(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn$1(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = React.useMemo(function () {
    return !reactFastCompare(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = React.useMemo(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  React.useImperativeHandle(innerRef, function () {
    return formikbag;
  });

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(function () {
      !!props.render ? process.env.NODE_ENV !== "production" ? warning(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : warning(false) : void 0; // eslint-disable-next-line
    }, []);
  }

  return React.createElement(FormikProvider, {
    value: formikbag
  }, component ? React.createElement(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? React.Children.only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn$1(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  if (context === void 0) {
    context = {};
  }

  var validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || isPlainObject(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if (isPlainObject(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? deepmerge_1(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = deepmerge_1(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function useEventCallback(fn) {
  var ref = React.useRef(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

var Form = /*#__PURE__*/React.forwardRef(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action != null ? action : '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return React.createElement("form", Object.assign({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
        var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn$1(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn$1(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn$1(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [cloneDeep(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    }; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1


    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !reactFastCompare(getIn$1(prevProps.formik.values, prevProps.name), getIn$1(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      }

      return copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array;

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? React.createElement(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? React.Children.only(children) : null : null;
  };

  return FieldArrayInner;
}(React.Component);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};

/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */

function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function () {
  this._size = 0;
  this._values = Object.create(null);
};
Cache.prototype.get = function (key) {
  return this._values[key]
};
Cache.prototype.set = function (key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values)) this._size++;

  return (this._values[key] = value)
};

var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  DIGIT_REGEX = /^\d+$/,
  LEAD_DIGIT_REGEX = /^\d/,
  SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
  MAX_CACHE_SIZE = 512;

var pathCache = new Cache(MAX_CACHE_SIZE),
  setCache = new Cache(MAX_CACHE_SIZE),
  getCache = new Cache(MAX_CACHE_SIZE);

var propertyExpr = {
  Cache: Cache,

  split: split,

  normalizePath: normalizePath,

  setter: function (path) {
    var parts = normalizePath(path);

    return (
      setCache.get(path) ||
      setCache.set(path, function setter(obj, value) {
        var index = 0;
        var len = parts.length;
        var data = obj;

        while (index < len - 1) {
          var part = parts[index];
          if (
            part === '__proto__' ||
            part === 'constructor' ||
            part === 'prototype'
          ) {
            return obj
          }

          data = data[parts[index++]];
        }
        data[parts[index]] = value;
      })
    )
  },

  getter: function (path, safe) {
    var parts = normalizePath(path);
    return (
      getCache.get(path) ||
      getCache.set(path, function getter(data) {
        var index = 0,
          len = parts.length;
        while (index < len) {
          if (data != null || !safe) data = data[parts[index++]];
          else return
        }
        return data
      })
    )
  },

  join: function (segments) {
    return segments.reduce(function (path, part) {
      return (
        path +
        (isQuoted(part) || DIGIT_REGEX.test(part)
          ? '[' + part + ']'
          : (path ? '.' : '') + part)
      )
    }, '')
  },

  forEach: function (path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  },
};

function normalizePath(path) {
  return (
    pathCache.get(path) ||
    pathCache.set(
      path,
      split(path).map(function (part) {
        return part.replace(CLEAN_QUOTES_REGEX, '$2')
      })
    )
  )
}

function split(path) {
  return path.match(SPLIT_REGEX) || ['']
}

function forEach(parts, iter, thisArg) {
  var len = parts.length,
    part,
    idx,
    isArray,
    isBracket;

  for (idx = 0; idx < len; idx++) {
    part = parts[idx];

    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }

      isBracket = isQuoted(part);
      isArray = !isBracket && /^\d+$/.test(part);

      iter.call(thisArg, part, isBracket, isArray, idx, parts);
    }
  }
}

function isQuoted(str) {
  return (
    typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1
  )
}

function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX)
}

function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part)
}

function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
}

const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;

const words = (str) => str.match(reWords) || [];

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1);

const join = (str, d) => words(str).join(d).toLowerCase();

const camelCase = (str) =>
  words(str).reduce(
    (acc, next) =>
      `${acc}${
        !acc
          ? next.toLowerCase()
          : next[0].toUpperCase() + next.slice(1).toLowerCase()
      }`,
    '',
  );

const pascalCase = (str) => upperFirst(camelCase(str));

const snakeCase = (str) => join(str, '_');

const kebabCase = (str) => join(str, '-');

const sentenceCase = (str) => upperFirst(join(str, ' '));

const titleCase = (str) => words(str).map(upperFirst).join(' ');

var tinyCase = {
  words,
  upperFirst,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  sentenceCase,
  titleCase,
};

var toposortExports = {};
var toposort$1 = {
  get exports(){ return toposortExports; },
  set exports(v){ toposortExports = v; },
};

/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */

toposort$1.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges)
};

toposortExports.array = toposort;

function toposort(nodes, edges) {
  var cursor = nodes.length
    , sorted = new Array(cursor)
    , visited = {}
    , i = cursor
    // Better data structures make algorithm much faster.
    , outgoingEdges = makeOutgoingEdges(edges)
    , nodesHash = makeNodesHash(nodes);

  // check for unknown nodes
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error('Unknown node. There is an unknown node in the supplied edges.')
    }
  });

  while (i--) {
    if (!visited[i]) visit(nodes[i], i, new Set());
  }

  return sorted

  function visit(node, i, predecessors) {
    if(predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch(e) {
        nodeRep = "";
      }
      throw new Error('Cyclic dependency' + nodeRep)
    }

    if (!nodesHash.has(node)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
    }

    if (visited[i]) return;
    visited[i] = true;

    var outgoing = outgoingEdges.get(node) || new Set();
    outgoing = Array.from(outgoing);

    if (i = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i];
        visit(child, nodesHash.get(child), predecessors);
      } while (i)
      predecessors.delete(node);
    }

    sorted[--cursor] = node;
  }
}

function uniqueNodes(arr){
  var res = new Set();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res)
}

function makeOutgoingEdges(arr){
  var edges = new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    if (!edges.has(edge[0])) edges.set(edge[0], new Set());
    if (!edges.has(edge[1])) edges.set(edge[1], new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges
}

function makeNodesHash(arr){
  var res = new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i);
  }
  return res
}

const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => '';
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val) return 'NaN';
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? '-0' : '' + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return '' + val;
  const typeOf = typeof val;
  if (typeOf === 'number') return printNumber(val);
  if (typeOf === 'string') return quoteStrings ? `"${val}"` : val;
  if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
  if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
  const tag = toString.call(val).slice(8, -1);
  if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
  if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
  if (tag === 'RegExp') return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function (key, value) {
    let result = printSimpleValue(this[key], quoteStrings);
    if (result !== null) return result;
    return value;
  }, 2);
}

function toArray(value) {
  return value == null ? [] : [].concat(value);
}

let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || 'this';
    if (path !== params.path) params = Object.assign({}, params, {
      path
    });
    if (typeof message === 'string') return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === 'function') return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === 'ValidationError';
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = 'ValidationError';
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach(err => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
  }
}

let mixed = {
  default: '${path} is invalid',
  required: '${path} is a required field',
  defined: '${path} must be defined',
  notNull: '${path} cannot be null',
  oneOf: '${path} must be one of the following values: ${values}',
  notOneOf: '${path} must not be one of the following values: ${values}',
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : '.';
    return type !== 'mixed' ? `${path} must be a \`${type}\` type, ` + `but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. ` + `The validated value was: \`${printValue(value, true)}\`` + castMsg;
  }
};
let string = {
  length: '${path} must be exactly ${length} characters',
  min: '${path} must be at least ${min} characters',
  max: '${path} must be at most ${max} characters',
  matches: '${path} must match the following: "${regex}"',
  email: '${path} must be a valid email',
  url: '${path} must be a valid URL',
  uuid: '${path} must be a valid UUID',
  trim: '${path} must be a trimmed string',
  lowercase: '${path} must be a lowercase string',
  uppercase: '${path} must be a upper case string'
};
let number = {
  min: '${path} must be greater than or equal to ${min}',
  max: '${path} must be less than or equal to ${max}',
  lessThan: '${path} must be less than ${less}',
  moreThan: '${path} must be greater than ${more}',
  positive: '${path} must be a positive number',
  negative: '${path} must be a negative number',
  integer: '${path} must be an integer'
};
let date = {
  min: '${path} field must be later than ${min}',
  max: '${path} field must be at earlier than ${max}'
};
let boolean = {
  isValue: '${path} field must be ${value}'
};
let object = {
  noUnknown: '${path} field has unspecified keys: ${unknown}'
};
let array = {
  min: '${path} field must have at least ${min} items',
  max: '${path} field must have less than or equal to ${max} items',
  length: '${path} must have ${length} items'
};
Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});

const isSchema = obj => obj && obj.__isYupSchema__;

class Condition {
  static fromOptions(refs, config) {
    if (!config.then && !config.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let {
      is,
      then,
      otherwise
    } = config;
    let check = typeof is === 'function' ? is : (...values) => values.every(value => value === is);
    return new Condition(refs, (values, schema) => {
      var _branch;
      let branch = check(...values) ? then : otherwise;
      return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
    });
  }
  constructor(refs, builder) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    this.fn = builder;
  }
  resolve(base, options) {
    let values = this.refs.map(ref =>
    // TODO: ? operator here?
    ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn(values, base, options);
    if (schema === undefined ||
    // @ts-ignore this can be base
    schema === base) {
      return base;
    }
    if (!isSchema(schema)) throw new TypeError('conditions must return a schema object');
    return schema.resolve(options);
  }
}

const prefixes = {
  context: '$',
  value: '.'
};
function create$9(key, options) {
  return new Reference(key, options);
}
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
    this.key = key.trim();
    if (key === '') throw new TypeError('ref must be a non-empty string');
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter) result = this.getter(result || {});
    if (this.map) result = this.map(result);
    return result;
  }

  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: 'ref',
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}

// @ts-ignore
Reference.prototype.__isYupRef = true;

const isAbsent = value => value == null;

function createValidation(config) {
  function validate({
    value,
    path = '',
    options,
    originalValue,
    schema
  }, panic, next) {
    const {
      name,
      test,
      params,
      message,
      skipAbsent
    } = config;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec
      }, params, overrides.params);
      for (const key of Object.keys(nextParams)) nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next;
    let ctx = {
      path,
      parent,
      type: name,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = validOrError => {
      if (ValidationError.isError(validOrError)) invalid(validOrError);else if (!validOrError) invalid(createError());else next(null);
    };
    const handleError = err => {
      if (ValidationError.isError(err)) invalid(err);else panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (!options.sync) {
      try {
        Promise.resolve(!shouldSkip ? test.call(ctx, value, ctx) : true).then(handleResult, handleError);
      } catch (err) {
        handleError(err);
      }
      return;
    }
    let result;
    try {
      var _result;
      result = !shouldSkip ? test.call(ctx, value, ctx) : true;
      if (typeof ((_result = result) == null ? void 0 : _result.then) === 'function') {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` + `This test will finish after the validate call has returned`);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result);
  }
  validate.OPTIONS = config;
  return validate;
}

function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;

  // root path: ''
  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  propertyExpr.forEach(path, (_part, isBracket, isArray) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === 'tuple';
    let idx = isArray ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` + `because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }

    // sometimes the array index part of a path doesn't exist: "nested.arr.child"
    // in these cases the current part is the next schema and should be processed
    // in this iteration. For cases where the index signature is included this
    // check will fail and we'll handle the `child` part on the next iteration like normal
    if (!isArray) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. ` + `(failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}

class ReferenceSet extends Set {
  describe() {
    const description = [];
    for (const item of this.values()) {
      description.push(Reference.isRef(item) ? item.describe() : item);
    }
    return description;
  }
  resolveAll(resolve) {
    let result = [];
    for (const item of this.values()) {
      result.push(resolve(item));
    }
    return result;
  }
  clone() {
    return new ReferenceSet(this.values());
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.forEach(value => next.add(value));
    removeItems.forEach(value => next.delete(value));
    return next;
  }
}

// tweaked from https://github.com/Kelin2025/nanoclone/blob/0abeb7635bda9b68ef2277093f76dbe3bf3948e1/src/index.js
function clone(src, seen = new Map()) {
  if (isSchema(src) || !src || typeof src !== 'object') return src;
  if (seen.has(src)) return seen.get(src);
  let copy;
  if (src instanceof Date) {
    // Date
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src instanceof RegExp) {
    // RegExp
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (Array.isArray(src)) {
    // Array
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i = 0; i < src.length; i++) copy[i] = clone(src[i], seen);
  } else if (src instanceof Map) {
    // Map
    copy = new Map();
    seen.set(src, copy);
    for (const [k, v] of src.entries()) copy.set(k, clone(v, seen));
  } else if (src instanceof Set) {
    // Set
    copy = new Set();
    seen.set(src, copy);
    for (const v of src) copy.add(clone(v, seen));
  } else if (src instanceof Object) {
    // Object
    copy = {};
    seen.set(src, copy);
    for (const [k, v] of Object.entries(src)) copy[k] = clone(v, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy;
}

class Schema {
  constructor(options) {
    this.type = void 0;
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this.internalTests = {};
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = Object.create(null);
    this._typeCheck = void 0;
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = options.type;
    this._typeCheck = options.check;
    this.spec = Object.assign({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      optional: true,
      coerce: true
    }, options == null ? void 0 : options.spec);
    this.withMutation(s => {
      s.nonNullable();
    });
  }

  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec) Object.assign(this.spec, spec);
      return this;
    }

    // if the nested value is a schema we can skip cloning, since
    // they are already immutable
    const next = Object.create(Object.getPrototypeOf(this));

    // @ts-expect-error this is readonly
    next.type = this.type;
    next._typeCheck = this._typeCheck;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.internalTests = Object.assign({}, this.internalTests);
    next.exclusiveTests = Object.assign({}, this.exclusiveTests);

    // @ts-expect-error this is readonly
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(Object.assign({}, this.spec, spec));
    return next;
  }
  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this) return this;
    if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = Object.assign({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);

    // manually merge the blacklist/whitelist (the other `schema` takes
    // precedence in case of conflicts)
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);

    // start with the current tests
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;

    // manually add the new tests to ensure
    // the deduping logic is consistent
    combined.withMutation(next => {
      schema.tests.forEach(fn => {
        next.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v) {
    if (v == null) {
      if (this.spec.nullable && v === null) return true;
      if (this.spec.optional && v === undefined) return true;
      return false;
    }
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  resolveOptions(options) {
    var _options$strict, _options$abortEarly, _options$recursive;
    return Object.assign({}, options, {
      from: options.from || [],
      strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
      abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
      recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive
    });
  }

  /**
   * Run the configured transform pipeline over an input value.
   */

  cast(value, options = {}) {
    let resolvedSchema = this.resolve(Object.assign({
      value
    }, options));
    let allowOptionality = options.assert === 'ignore-optionality';
    let result = resolvedSchema._cast(value, options);
    if (options.assert !== false && !resolvedSchema.isType(result)) {
      if (allowOptionality && isAbsent(result)) {
        return result;
      }
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` + `that satisfies the schema type: "${resolvedSchema.type}". \n\n` + `attempted value: ${formattedValue} \n` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ''));
    }
    return result;
  }
  _cast(rawValue, options) {
    let value = rawValue === undefined ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
    if (value === undefined) {
      value = this.getDefault(options);
    }
    return value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      path,
      originalValue = _value,
      strict = this.spec.strict
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, Object.assign({
        assert: false
      }, options));
    }
    let initialTests = [];
    for (let test of Object.values(this.internalTests)) {
      if (test) initialTests.push(test);
    }
    this.runTests({
      path,
      value,
      originalValue,
      options,
      tests: initialTests
    }, panic, initialErrors => {
      // even if we aren't ending early we can't proceed further if the types aren't correct
      if (initialErrors.length) {
        return next(initialErrors, value);
      }
      this.runTests({
        path,
        value,
        originalValue,
        options,
        tests: this.tests
      }, panic, next);
    });
  }

  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(runOptions, panic, next) {
    let fired = false;
    let {
      tests,
      value,
      originalValue,
      path,
      options
    } = runOptions;
    let panicOnce = arg => {
      if (fired) return;
      fired = true;
      panic(arg, value);
    };
    let nextOnce = arg => {
      if (fired) return;
      fired = true;
      next(arg, value);
    };
    let count = tests.length;
    let nestedErrors = [];
    if (!count) return nextOnce([]);
    let args = {
      value,
      originalValue,
      path,
      options,
      schema: this
    };
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      test(args, panicOnce, function finishTestRun(err) {
        if (err) {
          nestedErrors = nestedErrors.concat(err);
        }
        if (--count <= 0) {
          nextOnce(nestedErrors);
        }
      });
    }
  }
  asNestedTest({
    key,
    index,
    parent,
    parentPath,
    originalParent,
    options
  }) {
    const k = key != null ? key : index;
    if (k == null) {
      throw TypeError('Must include `key` or `index` for nested validations');
    }
    const isIndex = typeof k === 'number';
    let value = parent[k];
    const testOptions = Object.assign({}, options, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: true,
      parent,
      value,
      originalValue: originalParent[k],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: undefined,
      // index: undefined,
      [isIndex ? 'index' : 'key']: k,
      path: isIndex || k.includes('.') ? `${parentPath || ''}[${value ? k : `"${k}"`}]` : (parentPath ? `${parentPath}.` : '') + key
    });
    return (_, panic, next) => this.resolve(testOptions)._validate(value, testOptions, panic, next);
  }
  validate(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      reject(error);
    }, (errors, validated) => {
      if (errors.length) reject(new ValidationError(errors, validated));else resolve(validated);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let result;
    schema._validate(value, Object.assign({}, options, {
      sync: true
    }), (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      throw error;
    }, (errors, validated) => {
      if (errors.length) throw new ValidationError(errors, value);
      result = validated;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, err => {
      if (ValidationError.isError(err)) return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err)) return false;
      throw err;
    }
  }
  _getDefault(_options) {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === 'function' ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options
  // If schema is defaulted we know it's at least not undefined
  ) {
    let schema = this.resolve(options || {});
    return schema._getDefault(options);
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    return this.clone({
      strict: isStrict
    });
  }
  nullability(nullable, message) {
    const next = this.clone({
      nullable
    });
    next.internalTests.nullable = createValidation({
      message,
      name: 'nullable',
      test(value) {
        return value === null ? this.schema.spec.nullable : true;
      }
    });
    return next;
  }
  optionality(optional, message) {
    const next = this.clone({
      optional
    });
    next.internalTests.optionality = createValidation({
      message,
      name: 'optionality',
      test(value) {
        return value === undefined ? this.schema.spec.optional : true;
      }
    });
    return next;
  }
  optional() {
    return this.optionality(true);
  }
  defined(message = mixed.defined) {
    return this.optionality(false, message);
  }
  nullable() {
    return this.nullability(true);
  }
  nonNullable(message = mixed.notNull) {
    return this.nullability(false, message);
  }
  required(message = mixed.required) {
    return this.clone().withMutation(next => next.nonNullable(message).defined(message));
  }
  notRequired() {
    return this.clone().withMutation(next => next.nullable().optional());
  }
  transform(fn) {
    let next = this.clone();
    next.transforms.push(fn);
    return next;
  }

  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */

  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === 'function') {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === undefined) opts.message = mixed.default;
    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    }
    if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter(fn => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys, options) {
    if (!Array.isArray(keys) && typeof keys !== 'string') {
      options = keys;
      keys = '.';
    }
    let next = this.clone();
    let deps = toArray(keys).map(key => new Reference(key));
    deps.forEach(dep => {
      // @ts-ignore readonly array
      if (dep.isSibling) next.deps.push(dep.key);
    });
    next.conditions.push(typeof options === 'function' ? new Condition(deps, options) : Condition.fromOptions(deps, options));
    return next;
  }
  typeError(message) {
    let next = this.clone();
    next.internalTests.typeError = createValidation({
      message,
      name: 'typeError',
      skipAbsent: true,
      test(value) {
        if (!this.schema._typeCheck(value)) return this.createError({
          params: {
            type: this.schema.type
          }
        });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next.internalTests.whiteList = createValidation({
      message,
      name: 'oneOf',
      skipAbsent: true,
      test(value) {
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: Array.from(valids).join(', '),
            resolved
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next.internalTests.blacklist = createValidation({
      message,
      name: 'notOneOf',
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value)) return this.createError({
          params: {
            values: Array.from(invalids).join(', '),
            resolved
          }
        });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }

  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(options) {
    const next = (options ? this.resolve(options) : this).clone();
    const {
      label,
      meta,
      optional,
      nullable
    } = next.spec;
    const description = {
      meta,
      label,
      optional,
      nullable,
      default: next.getDefault(options),
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map(fn => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex(c => c.name === n.name) === idx)
    };
    return description;
  }
}
// @ts-expect-error
Schema.prototype.__isYupSchema__ = true;
for (const method of ['validate', 'validateSync']) Schema.prototype[`${method}At`] = function (path, value, options = {}) {
  const {
    parent,
    parentPath,
    schema
  } = getIn(this, path, value, options.context);
  return schema[method](parent && parent[parentPath], Object.assign({}, options, {
    parent,
    path
  }));
};
for (const alias of ['equals', 'is']) Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of ['not', 'nope']) Schema.prototype[alias] = Schema.prototype.notOneOf;

// Taken from HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
let rEmail =
// eslint-disable-next-line
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let rUrl =
// eslint-disable-next-line
/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

// eslint-disable-next-line
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = value => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$6() {
  return new StringSchema();
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: 'string',
      check(value) {
        if (value instanceof String) value = value.valueOf();
        return typeof value === 'string';
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value)) return value;

        // don't ever convert arrays
        if (Array.isArray(value)) return value;
        const strValue = value != null && value.toString ? value.toString() : value;

        // no one wants plain objects converted to [Object object]
        if (strValue === objStringTag) return value;
        return strValue;
      });
    });
  }
  required(message) {
    return super.required(message).withMutation(schema => schema.test({
      message: message || mixed.required,
      name: 'required',
      skipAbsent: true,
      test: value => !!value.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation(schema => {
      schema.tests = schema.tests.filter(t => t.OPTIONS.name !== 'required');
      return schema;
    });
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: 'max',
      exclusive: true,
      message,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === 'object') {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || 'matches',
      message: message || string.matches,
      params: {
        regex
      },
      skipAbsent: true,
      test: value => value === '' && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: 'email',
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: 'url',
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: 'uuid',
      message,
      excludeEmptyString: false
    });
  }

  //-- transforms --
  ensure() {
    return this.default('').transform(val => val === null ? '' : val);
  }
  trim(message = string.trim) {
    return this.transform(val => val != null ? val.trim() : val).test({
      message,
      name: 'trim',
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform(value => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      skipAbsent: true,
      test: value => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform(value => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      skipAbsent: true,
      test: value => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$6.prototype = StringSchema.prototype;

//
// Number Interfaces
//

/* eslint-disable */
/**
 *
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */

//              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11],
    minutesOffset = 0,
    timestamp,
    struct;
  if (struct = isoReg.exec(date)) {
    // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
    for (var i = 0, k; k = numericKeys[i]; ++i) struct[k] = +struct[k] || 0;

    // allow undefined days and months
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;

    // allow arbitrary sub-second precision beyond milliseconds
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;

    // timestamps without timezone identifiers should be considered local time
    if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);else {
      if (struct[8] !== 'Z' && struct[9] !== undefined) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else timestamp = Date.parse ? Date.parse(date) : NaN;
  return timestamp;
}

// @ts-ignore
let invalidDate = new Date('');
let isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';
class DateSchema extends Schema {
  constructor() {
    super({
      type: 'date',
      check(v) {
        return isDate(v) && !isNaN(v.getTime());
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        // null -> InvalidDate isn't useful; treat all nulls as null and let it fail on
        // nullability check vs TypeErrors
        if (!ctx.spec.coerce || ctx.isType(value) || value === null) return value;
        value = parseIsoDate(value);

        // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
        return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
      });
    });
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, 'min');
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    let limit = this.prepareParam(max, 'max');
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
DateSchema.prototype;

// @ts-expect-error
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
  function addNode(depPath, key) {
    let node = propertyExpr.split(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);else if (isSchema(value) && 'deps' in value) value.deps.forEach(path => addNode(path, key));
  }
  return toposortExports.array(Array.from(nodes), edges).reverse();
}

function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys) {
  return (a, b) => {
    return findIndex(keys, a) - findIndex(keys, b);
  };
}

const parseJson = (value, _, ctx) => {
  if (typeof value !== 'string') {
    return value;
  }
  let parsed = value;
  try {
    parsed = JSON.parse(value);
  } catch (err) {
    /* */
  }
  return ctx.isType(parsed) ? parsed : value;
};

// @ts-ignore
function deepPartial(schema) {
  if ('fields' in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === 'array') {
    const nextArray = schema.optional();
    if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === 'tuple') {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ('optional' in schema) {
    return schema.optional();
  }
  return schema;
}
const deepHas = (obj, p) => {
  const path = [...propertyExpr.normalizePath(p)];
  if (path.length === 1) return path[0] in obj;
  let last = path.pop();
  let parent = propertyExpr.getter(propertyExpr.join(path), true)(obj);
  return !!(parent && last in parent);
};
let isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter(key => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
  return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
  constructor(spec) {
    super({
      type: 'object',
      check(value) {
        return isObject(value) || typeof value === 'function';
      }
    });
    this.fields = Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);

    //should ignore nulls here
    if (value === undefined) return this.getDefault(options);
    if (!this._typeCheck(value)) return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = [].concat(this._nodes, Object.keys(value).filter(v => !this._nodes.includes(v)));
    let intermediateValue = {}; // is filled during the transform below
    let innerOptions = Object.assign({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = (prop in value);
      if (field) {
        let fieldValue;
        let inputValue = value[prop];

        // safe to mutate since this is fired in sequence
        innerOptions.path = (options.path ? `${options.path}.` : '') + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = field instanceof Schema ? field.spec : undefined;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec != null && fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ?
        // TODO: use _cast, this is double resolving
        field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== undefined) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      from = [],
      originalValue = _value,
      recursive = this.spec.recursive
    } = options;
    options.from = [{
      schema: this,
      value: originalValue
    }, ...from];
    // this flag is needed for handling `strict` correctly in the context of
    // validation vs just casting. e.g strict() on a field is only used when validating
    options.__validating = true;
    options.originalValue = originalValue;
    super._validate(_value, options, panic, (objectErrors, value) => {
      if (!recursive || !isObject(value)) {
        next(objectErrors, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = [];
      for (let key of this._nodes) {
        let field = this.fields[key];
        if (!field || Reference.isRef(field)) {
          continue;
        }
        tests.push(field.asNestedTest({
          options,
          key,
          parent: value,
          parentPath: options.path,
          originalParent: originalValue
        }));
      }
      this.runTests({
        tests,
        value,
        originalValue,
        options
      }, panic, fieldErrors => {
        next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
      });
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = Object.assign({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      nextFields[field] = target === undefined ? schemaOrRef : target;
    }
    return next.withMutation(s =>
    // XXX: excludes here is wrong
    s.setFields(nextFields, [...this._excludedEdges, ...schema._excludedEdges]));
  }
  _getDefault(options) {
    if ('default' in this.spec) {
      return super._getDefault(options);
    }

    // if there is no default set invent one
    if (!this._nodes.length) {
      return undefined;
    }
    let dft = {};
    this._nodes.forEach(key => {
      var _innerOptions;
      const field = this.fields[key];
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      dft[key] = field && 'getDefault' in field ? field.getDefault(innerOptions) : undefined;
    });
    return dft;
  }
  setFields(shape, excludedEdges) {
    let next = this.clone();
    next.fields = shape;
    next._nodes = sortFields(shape, excludedEdges);
    next._sortErrors = sortByKeyOrder(Object.keys(shape));
    // XXX: this carries over edges which may not be what you want
    if (excludedEdges) next._excludedEdges = excludedEdges;
    return next;
  }
  shape(additions, excludes = []) {
    return this.clone().withMutation(next => {
      let edges = next._excludedEdges;
      if (excludes.length) {
        if (!Array.isArray(excludes[0])) excludes = [excludes];
        edges = [...next._excludedEdges, ...excludes];
      }

      // XXX: excludes here is wrong
      return next.setFields(Object.assign(next.fields, additions), edges);
    });
  }
  partial() {
    const partial = {};
    for (const [key, schema] of Object.entries(this.fields)) {
      partial[key] = 'optional' in schema && schema.optional instanceof Function ? schema.optional() : schema;
    }
    return this.setFields(partial);
  }
  deepPartial() {
    const next = deepPartial(this);
    return next;
  }
  pick(keys) {
    const picked = {};
    for (const key of keys) {
      if (this.fields[key]) picked[key] = this.fields[key];
    }
    return this.setFields(picked);
  }
  omit(keys) {
    const fields = Object.assign({}, this.fields);
    for (const key of keys) {
      delete fields[key];
    }
    return this.setFields(fields);
  }
  from(from, to, alias) {
    let fromGetter = propertyExpr.getter(from, true);
    return this.transform(obj => {
      if (!obj) return obj;
      let newObj = obj;
      if (deepHas(obj, from)) {
        newObj = Object.assign({}, obj);
        if (!alias) delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }

  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow !== 'boolean') {
      message = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: 'noUnknown',
      exclusive: true,
      message: message,
      test(value) {
        if (value == null) return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(', ')
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform(obj => {
      if (!obj) return obj;
      const result = {};
      for (const key of Object.keys(obj)) result[fn(key)] = obj[key];
      return result;
    });
  }
  camelCase() {
    return this.transformKeys(tinyCase.camelCase);
  }
  snakeCase() {
    return this.transformKeys(tinyCase.snakeCase);
  }
  constantCase() {
    return this.transformKeys(key => tinyCase.snakeCase(key).toUpperCase());
  }
  describe(options) {
    let base = super.describe(options);
    base.fields = {};
    for (const [key, value] of Object.entries(this.fields)) {
      var _innerOptions2;
      let innerOptions = options;
      if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      base.fields[key] = value.describe(innerOptions);
    }
    return base;
  }
}
create$3.prototype = ObjectSchema.prototype;

const consentText = 'You hereby consent to Eko India Financial Services Private Limited as your authorized representative to receive your personal and credit information from UIDAI, CIBIL and other government and private agencies for the purpose of providing you credit in the form of loans or line of credit through our lending partners (&quot;End Use Purpose&quot;).';
const aadhaarConsentSchema = create$3().shape({
    name: create$6().required('Required').min(3, 'Minimum 3 characters required')
});
const AadhaarConsent = ({ stepData, handleSubmit, isDisabledCTA }) => {
    const { label, description, isSkipable, primaryCTAText } = stepData;
    console.log('stepDAta', stepData);
    // const handleAadhaarConsentClick = () => {
    //     handleSubmit({ ...stepData, form_data: { is_consent: 'Y', consent_text: consentText, name: consentData }, stepStatus: 3 });
    // };
    const formValues = { name: '' };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" }, description),
        React.createElement("div", { className: "mt-10 relative" }),
        React.createElement("span", { className: `flex flex-col items-center sm:block` },
            React.createElement(Formik, { initialValues: formValues, validationSchema: aadhaarConsentSchema, onSubmit: (formData) => {
                    // handleSubmit({ ...stepData, form_data: formData, stepStatus: 3 });
                    // console.log('this is form data', formData);
                    handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { is_consent: 'Y', consent_text: consentText, name: formData.name }, stepStatus: 3 }));
                } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, null,
                React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Name"),
                React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "name", value: values.name, onChange: handleChange('name'), id: "name", type: "text", placeholder: "" }),
                errors.name && touched.name ? React.createElement("div", { className: "text-darkdanger" }, errors.name) : null,
                React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", disabled: isDisabledCTA }, isDisabledCTA ? 'Please wait...' : primaryCTAText),
                isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step"))))))));
};

var img$e = "data:image/svg+xml,%3csvg id='Group_4806' data-name='Group 4806' xmlns='http://www.w3.org/2000/svg' width='30' height='26.842' viewBox='0 0 30 26.842'%3e %3cpath id='Union_1' data-name='Union 1' d='M3.948%2c26.842A3.947%2c3.947%2c0%2c0%2c1%2c0%2c22.895V8.684A3.947%2c3.947%2c0%2c0%2c1%2c3.948%2c4.737h2A2.369%2c2.369%2c0%2c0%2c0%2c8.062%2c3.428l.622-1.246A3.947%2c3.947%2c0%2c0%2c1%2c12.215%2c0h5.57a3.947%2c3.947%2c0%2c0%2c1%2c3.531%2c2.182l.623%2c1.246a2.369%2c2.369%2c0%2c0%2c0%2c2.119%2c1.309h2A3.947%2c3.947%2c0%2c0%2c1%2c30%2c8.684V22.895a3.947%2c3.947%2c0%2c0%2c1-3.948%2c3.947ZM1.579%2c8.684V22.895a2.368%2c2.368%2c0%2c0%2c0%2c2.368%2c2.368h22.1a2.368%2c2.368%2c0%2c0%2c0%2c2.368-2.368V8.684a2.368%2c2.368%2c0%2c0%2c0-2.368-2.368h-2a3.947%2c3.947%2c0%2c0%2c1-3.531-2.182L19.9%2c2.888a2.369%2c2.369%2c0%2c0%2c0-2.119-1.309h-5.57A2.369%2c2.369%2c0%2c0%2c0%2c10.1%2c2.888L9.473%2c4.134a3.947%2c3.947%2c0%2c0%2c1-3.53%2c2.182h-2A2.368%2c2.368%2c0%2c0%2c0%2c1.579%2c8.684ZM7.895%2c15A7.105%2c7.105%2c0%2c1%2c1%2c15%2c22.105%2c7.105%2c7.105%2c0%2c0%2c1%2c7.895%2c15Zm1.579%2c0A5.526%2c5.526%2c0%2c1%2c0%2c15%2c9.474%2c5.526%2c5.526%2c0%2c0%2c0%2c9.474%2c15Z' fill='%23555'/%3e%3c/svg%3e";

var img$d = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18.527' height='14' viewBox='0 0 18.527 14'%3e %3cg id='Group_4834' data-name='Group 4834' transform='translate(-3488.719 -959)'%3e %3cpath id='Path_3762' data-name='Path 3762' d='M293.516%2c244a2.4%2c2.4%2c0%2c1%2c1-2.4-2.4%2c2.4%2c2.4%2c0%2c0%2c1%2c2.4%2c2.4' transform='translate(3206.864 722.893)' fill='white'/%3e %3cpath id='Path_3763' data-name='Path 3763' d='M113.25%2c104.914v8.337A1.859%2c1.859%2c0%2c0%2c0%2c115.1%2c115.1h14.821a1.859%2c1.859%2c0%2c0%2c0%2c1.854-1.852v-8.337a1.859%2c1.859%2c0%2c0%2c0-1.854-1.852H127.7a.825.825%2c0%2c0%2c1-.732-.527l-.575-.9a.822.822%2c0%2c0%2c0-.731-.527h-6.3a.824.824%2c0%2c0%2c0-.731.527l-.576.9a.822.822%2c0%2c0%2c1-.731.527H115.1A1.859%2c1.859%2c0%2c0%2c0%2c113.25%2c104.914Zm4.895%2c4.115a4.369%2c4.369%2c0%2c1%2c1%2c4.369%2c4.369A4.369%2c4.369%2c0%2c0%2c1%2c118.145%2c109.029Z' transform='translate(3375.469 857.896)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

var reactWebcamExports = {};
var reactWebcam = {
  get exports(){ return reactWebcamExports; },
  set exports(v){ reactWebcamExports = v; },
};

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(React);
	})(commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_react__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "./src/react-webcam.tsx":
	/*!******************************!*\
	  !*** ./src/react-webcam.tsx ***!
	  \******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	__webpack_require__.r(__webpack_exports__);
	/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
	var __extends = (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __rest = function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	};

	// polyfill based on https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	(function polyfillGetUserMedia() {
	    if (typeof window === 'undefined') {
	        return;
	    }
	    // Older browsers might not implement mediaDevices at all, so we set an empty object first
	    if (navigator.mediaDevices === undefined) {
	        navigator.mediaDevices = {};
	    }
	    // Some browsers partially implement mediaDevices. We can't just assign an object
	    // with getUserMedia as it would overwrite existing properties.
	    // Here, we will just add the getUserMedia property if it's missing.
	    if (navigator.mediaDevices.getUserMedia === undefined) {
	        navigator.mediaDevices.getUserMedia = function (constraints) {
	            // First get ahold of the legacy getUserMedia, if present
	            var getUserMedia = navigator.getUserMedia ||
	                navigator.webkitGetUserMedia ||
	                navigator.mozGetUserMedia ||
	                navigator.msGetUserMedia;
	            // Some browsers just don't implement it - return a rejected promise with an error
	            // to keep a consistent interface
	            if (!getUserMedia) {
	                return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
	            }
	            // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
	            return new Promise(function (resolve, reject) {
	                getUserMedia.call(navigator, constraints, resolve, reject);
	            });
	        };
	    }
	})();
	function hasGetUserMedia() {
	    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
	}
	var Webcam = /** @class */ (function (_super) {
	    __extends(Webcam, _super);
	    function Webcam(props) {
	        var _this = _super.call(this, props) || this;
	        _this.canvas = null;
	        _this.ctx = null;
	        _this.requestUserMediaId = 0;
	        _this.unmounted = false;
	        _this.state = {
	            hasUserMedia: false
	        };
	        return _this;
	    }
	    Webcam.prototype.componentDidMount = function () {
	        var _a = this, state = _a.state, props = _a.props;
	        this.unmounted = false;
	        if (!hasGetUserMedia()) {
	            props.onUserMediaError("getUserMedia not supported");
	            return;
	        }
	        if (!state.hasUserMedia) {
	            this.requestUserMedia();
	        }
	        if (props.children && typeof props.children != 'function') {
	            console.warn("children must be a function");
	        }
	    };
	    Webcam.prototype.componentDidUpdate = function (nextProps) {
	        var props = this.props;
	        if (!hasGetUserMedia()) {
	            props.onUserMediaError("getUserMedia not supported");
	            return;
	        }
	        var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !==
	            JSON.stringify(props.audioConstraints);
	        var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !==
	            JSON.stringify(props.videoConstraints);
	        var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
	        var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
	        if (videoConstraintsChanged ||
	            minScreenshotWidthChanged ||
	            minScreenshotHeightChanged) {
	            this.canvas = null;
	            this.ctx = null;
	        }
	        if (audioConstraintsChanged || videoConstraintsChanged) {
	            this.stopAndCleanup();
	            this.requestUserMedia();
	        }
	    };
	    Webcam.prototype.componentWillUnmount = function () {
	        this.unmounted = true;
	        this.stopAndCleanup();
	    };
	    Webcam.stopMediaStream = function (stream) {
	        if (stream) {
	            if (stream.getVideoTracks && stream.getAudioTracks) {
	                stream.getVideoTracks().map(function (track) {
	                    stream.removeTrack(track);
	                    track.stop();
	                });
	                stream.getAudioTracks().map(function (track) {
	                    stream.removeTrack(track);
	                    track.stop();
	                });
	            }
	            else {
	                stream.stop();
	            }
	        }
	    };
	    Webcam.prototype.stopAndCleanup = function () {
	        var state = this.state;
	        if (state.hasUserMedia) {
	            Webcam.stopMediaStream(this.stream);
	            if (state.src) {
	                window.URL.revokeObjectURL(state.src);
	            }
	        }
	    };
	    Webcam.prototype.getScreenshot = function (screenshotDimensions) {
	        var _a = this, state = _a.state, props = _a.props;
	        if (!state.hasUserMedia)
	            return null;
	        var canvas = this.getCanvas(screenshotDimensions);
	        return (canvas &&
	            canvas.toDataURL(props.screenshotFormat, props.screenshotQuality));
	    };
	    Webcam.prototype.getCanvas = function (screenshotDimensions) {
	        var _a = this, state = _a.state, props = _a.props;
	        if (!this.video) {
	            return null;
	        }
	        if (!state.hasUserMedia || !this.video.videoHeight)
	            return null;
	        if (!this.ctx) {
	            var canvasWidth = this.video.videoWidth;
	            var canvasHeight = this.video.videoHeight;
	            if (!this.props.forceScreenshotSourceSize) {
	                var aspectRatio = canvasWidth / canvasHeight;
	                canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
	                canvasHeight = canvasWidth / aspectRatio;
	                if (props.minScreenshotHeight &&
	                    canvasHeight < props.minScreenshotHeight) {
	                    canvasHeight = props.minScreenshotHeight;
	                    canvasWidth = canvasHeight * aspectRatio;
	                }
	            }
	            this.canvas = document.createElement("canvas");
	            this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
	            this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
	            this.ctx = this.canvas.getContext("2d");
	        }
	        var _b = this, ctx = _b.ctx, canvas = _b.canvas;
	        if (ctx && canvas) {
	            // mirror the screenshot
	            if (props.mirrored) {
	                ctx.translate(canvas.width, 0);
	                ctx.scale(-1, 1);
	            }
	            ctx.imageSmoothingEnabled = props.imageSmoothing;
	            ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
	            // invert mirroring
	            if (props.mirrored) {
	                ctx.scale(-1, 1);
	                ctx.translate(-canvas.width, 0);
	            }
	        }
	        return canvas;
	    };
	    Webcam.prototype.requestUserMedia = function () {
	        var _this = this;
	        var props = this.props;
	        var sourceSelected = function (audioConstraints, videoConstraints) {
	            var constraints = {
	                video: typeof videoConstraints !== "undefined" ? videoConstraints : true
	            };
	            if (props.audio) {
	                constraints.audio =
	                    typeof audioConstraints !== "undefined" ? audioConstraints : true;
	            }
	            _this.requestUserMediaId++;
	            var myRequestUserMediaId = _this.requestUserMediaId;
	            navigator.mediaDevices
	                .getUserMedia(constraints)
	                .then(function (stream) {
	                if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
	                    Webcam.stopMediaStream(stream);
	                }
	                else {
	                    _this.handleUserMedia(null, stream);
	                }
	            })
	                .catch(function (e) {
	                _this.handleUserMedia(e);
	            });
	        };
	        if ("mediaDevices" in navigator) {
	            sourceSelected(props.audioConstraints, props.videoConstraints);
	        }
	        else {
	            var optionalSource_1 = function (id) { return ({ optional: [{ sourceId: id }] }); };
	            var constraintToSourceId_1 = function (constraint) {
	                var deviceId = constraint.deviceId;
	                if (typeof deviceId === "string") {
	                    return deviceId;
	                }
	                if (Array.isArray(deviceId) && deviceId.length > 0) {
	                    return deviceId[0];
	                }
	                if (typeof deviceId === "object" && deviceId.ideal) {
	                    return deviceId.ideal;
	                }
	                return null;
	            };
	            // @ts-ignore: deprecated api
	            MediaStreamTrack.getSources(function (sources) {
	                var audioSource = null;
	                var videoSource = null;
	                sources.forEach(function (source) {
	                    if (source.kind === "audio") {
	                        audioSource = source.id;
	                    }
	                    else if (source.kind === "video") {
	                        videoSource = source.id;
	                    }
	                });
	                var audioSourceId = constraintToSourceId_1(props.audioConstraints);
	                if (audioSourceId) {
	                    audioSource = audioSourceId;
	                }
	                var videoSourceId = constraintToSourceId_1(props.videoConstraints);
	                if (videoSourceId) {
	                    videoSource = videoSourceId;
	                }
	                sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
	            });
	        }
	    };
	    Webcam.prototype.handleUserMedia = function (err, stream) {
	        var props = this.props;
	        if (err || !stream) {
	            this.setState({ hasUserMedia: false });
	            props.onUserMediaError(err);
	            return;
	        }
	        this.stream = stream;
	        try {
	            if (this.video) {
	                this.video.srcObject = stream;
	            }
	            this.setState({ hasUserMedia: true });
	        }
	        catch (error) {
	            this.setState({
	                hasUserMedia: true,
	                src: window.URL.createObjectURL(stream)
	            });
	        }
	        props.onUserMedia(stream);
	    };
	    Webcam.prototype.render = function () {
	        var _this = this;
	        var _a = this, state = _a.state, props = _a.props;
	        var audio = props.audio; props.forceScreenshotSourceSize; props.onUserMedia; props.onUserMediaError; props.screenshotFormat; props.screenshotQuality; props.minScreenshotWidth; props.minScreenshotHeight; props.audioConstraints; props.videoConstraints; props.imageSmoothing; var mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
	        var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
	        var childrenProps = {
	            getScreenshot: this.getScreenshot.bind(this),
	        };
	        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
	            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, src: state.src, muted: !audio, playsInline: true, ref: function (ref) {
	                    _this.video = ref;
	                }, style: videoStyle }, rest)),
	            children && children(childrenProps)));
	    };
	    Webcam.defaultProps = {
	        audio: false,
	        forceScreenshotSourceSize: false,
	        imageSmoothing: true,
	        mirrored: false,
	        onUserMedia: function () { return undefined; },
	        onUserMediaError: function () { return undefined; },
	        screenshotFormat: "image/webp",
	        screenshotQuality: 0.92,
	    };
	    return Webcam;
	}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
	/* harmony default export */ __webpack_exports__["default"] = (Webcam);


	/***/ }),

	/***/ "react":
	/*!**************************************************************************************!*\
	  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
	  \**************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

	/***/ })

	/******/ })["default"];
	});
	
} (reactWebcam));

var Webcam = /*@__PURE__*/getDefaultExportFromCjs(reactWebcamExports);

const resolutions = [
    // All possible resolution sets
    //{ w:{min:1920, max:1980}, h:{min:1080, max:1200} },
    { w: { min: 1280, max: 1920 }, h: { min: 720, max: 1200 } },
    { w: { min: 1024, max: 1920 }, h: { min: 768, max: 1200 } },
    { w: { min: 960, max: 1920 }, h: { min: 720, max: 1200 } },
    { w: { min: 960, max: 1920 }, h: { min: 540, max: 1200 } },
    { w: { min: 800, max: 1920 }, h: { min: 600, max: 1200 } },
    { w: { min: 848, max: 1920 }, h: { min: 480, max: 1200 } },
    { w: { min: 640, max: 1920 }, h: { min: 480, max: 1200 } },
    { w: { min: 640, max: 1920 }, h: { min: 360, max: 1200 } },
    { w: undefined, h: undefined }
];

const Camera = ({ capturing, setCapturing, mediaRecorderRef, recordedChunks, setRecordedChunks, type, imagesVal, handleImageCapture, cameraType }) => {
    const { setCameraStatus } = useStore();
    /**
     * Camera facing mode: "envoironment" or "user"
     */
    const [facingMode, setFacingMode] = React.useState('user');
    // Check if camers has flash or not
    const [hasFlash, setHasFlash] = React.useState(false);
    const [flashOn, setFlashOn] = React.useState(false);
    const [resolutionIndex, setResolutionIndex] = React.useState(0);
    const [camDevices, setCamDevices] = React.useState([]);
    const [videoConstraints, setVideoConstraints] = React.useState({
        audio: false,
        width: 1280,
        height: 720,
        aspectRatio: 0.8,
        facingMode: 'user'
    });
    const webcamRef = React.useRef(null);
    const [deviceId, setDeviceId] = React.useState();
    const handleDevices = React.useCallback((mediaDevices) => {
        setCamDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput'));
    }, [setCamDevices]);
    const detectFlashSupport = React.useCallback(() => {
        if (!('ImageCapture' in window)) {
            // return Promise.resolve(false);
            setHasFlash(false);
        }
        const track = getCameraTrack();
        if (track) {
            const imageCapture = new window.ImageCapture(track);
            imageCapture
                .getPhotoCapabilities()
                .then((result) => {
                setHasFlash(result.fillLightMode.includes('flash') ? true : false);
            })
                .catch(() => {
                setHasFlash(false);
            });
            /* globals ImageCapture: false */
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((mediaStream) => {
                webcamRef.current.srcObject = mediaStream;
            })
                .catch((error) => console.error(error));
        }
        else {
            console.log(':::Cam No camera track found:::');
        }
    }, [setHasFlash]);
    const getCameraTrack = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((mediaStream) => {
            webcamRef.current.srcObject = mediaStream;
            return mediaStream.getVideoTracks()[0];
        })
            .catch((error) => console.error(error));
    };
    const toggleFlash = () => {
        const track = getCameraTrack();
        if (track) {
            setFlashOn((flashOn) => {
                track.applyConstraints({
                    advanced: [{ torch: flashOn ? true : false }]
                });
                return !flashOn;
            });
        }
    };
    const switchCamera = () => {
        const currentCamIdx = camDevices.map((cd) => cd.deviceId).indexOf(deviceId);
        let newCamIdx = camDevices.map((cd) => cd.deviceId).indexOf(deviceId);
        if (camDevices[currentCamIdx + 1]) {
            newCamIdx = camDevices[currentCamIdx + 1];
        }
        else {
            newCamIdx = camDevices[0];
        }
        setDeviceId(newCamIdx);
        setFacingMode(facingMode === 'user' ? 'environment' : 'user');
    };
    const capture = React.useCallback((e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        const imageSrc = (_a = webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) === null || _a === void 0 ? void 0 : _a.getScreenshot();
        const blob = yield fetch(imageSrc).then((res) => res.blob());
        const fileData = new File([blob], `${type}_${cameraType}.${blob.type.split('/')[1]}`, { type: blob.type });
        // formData.append('images', blob);
        handleImageCapture(imageSrc, fileData);
        setCameraStatus(false);
        // setManageVeriyStep();
    }), [webcamRef]);
    //Initializing Camera with effects
    const initCamera = (residx = 0) => {
        var _a;
        const res = resolutions[residx];
        camDevices && camDevices[0] ? (_a = camDevices[0]) === null || _a === void 0 ? void 0 : _a.deviceId : undefined;
        setVideoConstraints(Object.assign(Object.assign({}, videoConstraints), { audio: false, deviceId: deviceId, width: res.w, height: res.h, facingMode: facingMode }));
    };
    React.useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }, [handleDevices]);
    React.useEffect(() => {
        detectFlashSupport();
    }, [detectFlashSupport]);
    React.useEffect(() => {
        if (webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current) {
            initCamera(resolutionIndex);
        }
    }, [webcamRef === null || webcamRef === void 0 ? void 0 : webcamRef.current, facingMode]);
    return (React.createElement("span", null,
        React.createElement(React.Fragment, null,
            React.createElement("span", { className: `${type === 'Pan' || type === 'videoRecord' ? 'flex justify-end' : 'flex'}` },
                React.createElement("div", { className: "flex flex-col mr-3" },
                    React.createElement(Webcam, { audio: false, 
                        // height={500}
                        // width={500}
                        ref: webcamRef, minScreenshotHeight: 500, minScreenshotWidth: 500, screenshotFormat: "image/jpeg", videoConstraints: videoConstraints, imageSmoothing: true, mirrored: false, className: "rounded-[10px]", onUserMediaError: (err) => {
                            initCamera(resolutionIndex > resolutions.length ? 0 : resolutionIndex + 1);
                        } }),
                    React.createElement("div", { className: `flex justify-between mt-3` },
                        hasFlash && (React.createElement(ButtonGlobal, { onClick: toggleFlash, className: "bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]" },
                            React.createElement(React.Fragment, null,
                                "Turn Flash ",
                                flashOn ? 'Off' : 'On'))),
                        React.createElement(ButtonGlobal, { onClick: capture, className: "bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]" },
                            React.createElement(React.Fragment, null,
                                React.createElement("img", { src: img$d, className: "w-[16px] h-[16px] mr-1" }),
                                " Capture")),
                        (setCamDevices === null || setCamDevices === void 0 ? void 0 : setCamDevices.length) > 1 && (React.createElement(ButtonGlobal, { onClick: switchCamera, className: "bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]" }, "Switch Camera"))))))));
};

var img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='27.183' viewBox='0 0 30 27.183'%3e %3cpath id='Path_8521' data-name='Path 8521' d='M0%2c23.136V22.2a11.018%2c11.018%2c0%2c0%2c1%2c.663-1.825Q5.845%2c11.329%2c11.079%2c2.314A4.348%2c4.348%2c0%2c0%2c1%2c13.446.281%2c4.412%2c4.412%2c0%2c0%2c1%2c18.9%2c2.306q5.237%2c9.03%2c10.438%2c18.082a4.288%2c4.288%2c0%2c0%2c1-.129%2c4.757A4.381%2c4.381%2c0%2c0%2c1%2c25.3%2c27.183q-10.319-.006-20.637%2c0c-.176%2c0-.352%2c0-.526-.017A4.28%2c4.28%2c0%2c0%2c1%2c.518%2c24.736%2c10.52%2c10.52%2c0%2c0%2c1%2c0%2c23.136M16.642%2c10.17c0-.151.017-.405%2c0-.656A1.645%2c1.645%2c0%2c0%2c0%2c15.213%2c8a1.674%2c1.674%2c0%2c0%2c0-1.753.993%2c2.7%2c2.7%2c0%2c0%2c0-.154%2c1.349q.145%2c2.352.287%2c4.7c.052.847.087%2c1.7.169%2c2.54A1.172%2c1.172%2c0%2c0%2c0%2c14.99%2c18.64a1.216%2c1.216%2c0%2c0%2c0%2c1.233-1.064c.037-.289.027-.584.044-.876.122-2.143.246-4.286.375-6.53m-.015%2c11.353A1.658%2c1.658%2c0%2c0%2c0%2c15.006%2c19.8a1.669%2c1.669%2c0%2c0%2c0-.031%2c3.337%2c1.641%2c1.641%2c0%2c0%2c0%2c1.653-1.619' transform='translate(0 0)' fill='%23ff4040'/%3e%3c/svg%3e";

const Browse = ({ copyType }) => {
    const { panVerificationfailed, preview, selectedFile, isYourPan, setIsYourPan, setManageVeriyStep, setPanVerificationfailed, setSelectedFile, setManageVeriyStepback, setUploadedImage } = useStore();
    const clearSelectedImg = () => {
        setSelectedFile(undefined);
        setManageVeriyStepback();
        setUploadedImage(0);
    };
    return (React.createElement("div", null, panVerificationfailed === 3 ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "browse_img_div max-w[36rem]" },
            React.createElement("div", { className: "flex justify-start" },
                React.createElement("img", { src: preview, className: "w-8 h-8" }),
                React.createElement("span", { className: "flex flex-col ml-2" },
                    React.createElement("div", { className: "text-xs text-darkdefault font-sans font-[300]" }, copyType), selectedFile === null || selectedFile === void 0 ? void 0 :
                    selectedFile.name))),
        React.createElement("div", { className: "block w-full p-3 mt-5 text-sm text-darkdefault border border-default rounded-md" },
            React.createElement("div", { className: "mt-1 mb-3" },
                React.createElement("span", { className: "font-[600] sm:font-[500] text-lg sm:text-sm text-black" }, "Your PAN Details"),
                React.createElement("div", { className: "font-[450] sm:font-normal" }, "Below are the details as per PAN record.")),
            React.createElement("div", { className: "sm:flex justify-between w-[50%] mt-8 mb-4" },
                React.createElement("div", null,
                    React.createElement("div", { className: "text-darkdefault text-[16px] sm:text-xs" }, "Your Full Name"),
                    React.createElement("div", { className: "text-black text-[18px] sm:text-[14px] font-[400] mt-2" }, "Priyanka Kothari")),
                React.createElement("div", null,
                    React.createElement("div", { className: "text-darkdefault text-[16px] sm:text-xs mt-4 sm:mt-0" }, "PAN"),
                    React.createElement("div", { className: "text-black text-[18px] sm:text-[14px] font-[400] mt-2" }, "AAGPQ3801C")))))) : panVerificationfailed === 1 ? (React.createElement("div", { className: "max-w-[21rem] sm:max-w-[57rem] mb-7" },
        React.createElement("div", { className: "flex" },
            React.createElement("div", { className: "w-[100%] sm:w-[32rem] sm:mr-3 p-[5px] text-sm text-black border rounded-md bg-danger border-darkdanger" },
                React.createElement("div", { className: "flex justify-start" },
                    React.createElement("img", { src: preview, className: "w-8 h-8" }),
                    React.createElement("span", { className: "flex flex-col ml-2" },
                        React.createElement("div", { className: "text-xs text-darkdefault font-sans font-[300]" }, "Pan Copy"), selectedFile === null || selectedFile === void 0 ? void 0 :
                        selectedFile.name))),
            React.createElement("div", { className: "hidden sm:block h-0 w-0 mt-4 border-t-white border-b-white border-r-darkdanger border-r-[12px] border-t-[8px] border-b-[8px]" }),
            React.createElement("div", { className: "hidden sm:w-[10rem] sm:flex justify-center items-center p-2 text-white text-[12px] rounded-md bg-darkdanger" }, "You have 1 attempt left")),
        React.createElement("div", { className: "mt-2 text-[14px] sm:text-[12px] max-w-[37rem] sm:max-w-[32rem] text-darkdefault flex font-sans" },
            React.createElement("img", { src: img$c, alt: "alert", className: "w-6 h-6 mr-3" }),
            React.createElement("div", null,
                "We couldn\u2018t fetch details from PAN. Please upload a clear copy of PAN to proceed. You can also skip this step to proceed with next option.",
                React.createElement("div", { className: "text-darkdanger block sm:hidden mt-2" }, "You have 1 attempt left"))))) : panVerificationfailed === 2 ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative p-[5px] text-sm text-black border border-default rounded-md max-w[36rem]" },
            React.createElement("div", { className: "flex justify-start" },
                React.createElement("img", { src: preview, className: "w-8 h-8" }),
                React.createElement("span", { className: "flex flex-col ml-2" },
                    React.createElement("div", { className: "text-xs text-darkdefault font-sans font-[300]" }, "Pan Copy"), selectedFile === null || selectedFile === void 0 ? void 0 :
                    selectedFile.name))),
        React.createElement("div", { className: "block w-full p-3 mt-5 text-sm text-darkdefault border border-default rounded-md mb-6" },
            React.createElement("div", { className: "sm:flex sm:justify-between items-center" },
                React.createElement("div", { className: "mt-1 mb-3" },
                    React.createElement("span", { className: "font-[500] text-black text-[16px]" }, "Is this your PAN"),
                    React.createElement("div", { className: "text-md mt-2 text-[16px]" }, "BJGD6432G")),
                isYourPan === false ? (React.createElement("div", null,
                    React.createElement(ButtonGlobal, { className: "bg-primary text-white mr-3 hover:bg-black brws_btn", onClick: () => (setIsYourPan(true), setManageVeriyStep()) }, "Yes"),
                    React.createElement(ButtonGlobal, { className: "bg-white text-primary hover:bg-white shadow-2xl brws_btn", onClick: () => (setPanVerificationfailed(0), setSelectedFile(undefined)) }, "No"))) : (''))))) : panVerificationfailed === 0 || panVerificationfailed === 4 ? (React.createElement(React.Fragment, null,
        selectedFile ? (React.createElement("div", { className: "relative p-[5px] text-sm text-black border border-default rounded-md p-2 mb-8 max-w[36rem]" },
            React.createElement("div", { className: "flex justify-start" },
                React.createElement("img", { src: preview, className: "w-8 h-8" }),
                React.createElement("span", { className: "flex flex-col ml-2" },
                    React.createElement("div", { className: "text-xs text-darkdefault font-sans font-[300]" }, "Pan Copy"), selectedFile === null || selectedFile === void 0 ? void 0 :
                    selectedFile.name)))) : (''),
        selectedFile ? (React.createElement(ButtonGlobal, { className: "cancel text-white", onClick: () => clearSelectedImg() }, "X")) : (''))) : ('')));
};

var img$b = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18.527' height='14.618' viewBox='0 0 18.527 14.618'%3e %3cg id='Group_4837' data-name='Group 4837' transform='translate(-3372.078 -949)'%3e %3cpath id='Path_3760' data-name='Path 3760' d='M127.529%2c90.719H110.514a.765.765%2c0%2c0%2c0-.756.756v13.107a.765.765%2c0%2c0%2c0%2c.756.756h17.015a.765.765%2c0%2c0%2c0%2c.756-.756V91.475A.738.738%2c0%2c0%2c0%2c127.529%2c90.719Zm-.756%2c9.047L123.685%2c97.3a.779.779%2c0%2c0%2c0-.972.022l-3.476%2c3.023-4.6-5.182a.856.856%2c0%2c0%2c0-.583-.259.783.783%2c0%2c0%2c0-.561.238l-2.224%2c2.418V92.23h15.5Z' transform='translate(3262.32 858.281)' fill='white'/%3e %3cpath id='Path_3761' data-name='Path 3761' d='M288.085%2c146.65a2.483%2c2.483%2c0%2c1%2c0-2.483-2.483A2.483%2c2.483%2c0%2c0%2c0%2c288.085%2c146.65Z' transform='translate(3093.416 809.204)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

const Uploadfile = ({ type, handleUpload }) => {
    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined);
    //         return;
    //     }
    //     const objectUrl = URL.createObjectURL(selectedFile);
    //     setPreview(objectUrl);
    //     setUploadedImage(uploadedImage + 1);
    //     return () => URL.revokeObjectURL(objectUrl);
    // }, [selectedFile, panVerificationfailed]);
    const onSelectFile = (e) => {
        // setCameraType(cameraType);
        if (!e.target.files || e.target.files.length === 0) {
            // setSelectedFile(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(e.target.files[0]);
        handleUpload(objectUrl, type, e.target.files[0]);
        // setManageVeriyStep();
    };
    return (React.createElement("label", { htmlFor: type, className: "text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center flex" },
        React.createElement("input", { type: "file", onChange: onSelectFile, name: type, id: type, style: { display: 'none' }, accept: ".jpg, .jpeg, png" }),
        React.createElement("img", { src: img$b, className: "w-[18px] h-[18px] mr-2" }),
        "Browse"));
};

const Modal = ({ showModal, setShowModal, handleOnclick, attentionmsg }) => {
    const { setCameraStatus, setManageVeriyStepinital, setFetchData, setSelectedFile, setManageVeriyStepback, setUploadedImage, setPanVerificationfailed, setImage } = useStore();
    const handleproceed = () => {
        setShowModal(false);
        handleOnclick === null || handleOnclick === void 0 ? void 0 : handleOnclick();
        setCameraStatus(false);
        setManageVeriyStepinital();
        setFetchData(true);
        setManageVeriyStepback();
        setSelectedFile(undefined);
        setUploadedImage(0);
        setPanVerificationfailed(0);
        setImage(null);
    };
    return (React.createElement(React.Fragment, null, showModal ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "justify-center items-center p-6 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none outline-none" },
            React.createElement("div", { className: "relative w-auto my-6 mx-auto max-w-3xl" },
                React.createElement("div", { className: "border-0 rounded-lg relative flex flex-col w-full bg-white outline-none outline-none shadow-lg" },
                    React.createElement("button", { className: "flex absolute text-lg -right-2.5 -top-2.5 bg-black text-white outline-none font-medium rounded-full p-2 bg-primary", onClick: () => setShowModal(false) },
                        React.createElement("span", { className: "flex absolute text-lg -right-2.5 -top-2.5 bg-black text-white outline-none font-medium rounded-full p-2 bg-sky_spn" }, "\u00D7")),
                    React.createElement("div", { className: "flex flex-col justify-center items-center p-5 p-10 text-center" },
                        React.createElement("div", { className: "text-xl font-[500]" }, "Attention!"),
                        React.createElement("div", { className: "flex flex-col justify-center items-center p-5 p-10 text-center" }, attentionmsg),
                        React.createElement("div", { className: "mt-6 sm:mt-4" },
                            React.createElement("button", { className: "bg-primary text-white bg-black text-[18px] text-[14px] px-8 py-2 rounded outline-none outline-none mr-1 mb-1 ease-linear transition-all duration-150 block inline-block text-center font-[500] font-normal", onClick: handleproceed }, "Yes, Proceed"),
                            React.createElement("button", { className: "px-[3.5rem] text-[18px] text-[14px] py-2 text-sm outline-none outline-none mr-1 mb-1 ease-linear transition-all duration-150 block inline-block mt-7 mt-0 font-[500] font-normal", onClick: () => setShowModal(false) }, "Cancel")))))),
        React.createElement("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }))) : null));
};

var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAABEVJREFUaEPVmdt1EzEQhnEFkApwGoCkAXAqgFSAqQCoAKcDeOYhpgJIBdhpAEIDOBUAFZj/2yMtWnkk7XrtZD3n6Piy0mj+0Vy1owc7oPV6PRab5xonbvCbAf3ReDcajeZdtxLfR1rzVONG6+GzQaOuTP18x/yVfk+d0DlWKwlwbE1wfDx4BEYJ/tMvQfhz8VjEPDoDcBu+EaO3bqM2OrjV5v5E6vnu5L635HMlHi97AdCGaPxDyw39XjeAtbQnfjM9e99GA5pzIR7Mb1CrE3Ca+lIwFQT9qvGDoc1WJcFaAliKz8ISHv5FANoEm/yW0Pqt/p9zKikny4EQ76meXybmYPdn4otCkpQFkNngrzjOxBxz2prEf+KUk+JRBJEEkBH+Srth00UTKSFzpvmrNE/PX6fCsAnAmQ3RIaYkoxZCmFO01zp6cKHfsWMnT2IDQCa07Vx4BNd+nOTjAMSpvuN3sW8A4jj2NQsAmodBSKclZ+pxAgutJZF5wnEXCRMmGp2FezUAJBZRBvRy1hw47QlvEqOnWlmJMNuwhBqAy7BofxwwM7Pfttq21jmT5RQwo49SFhm+Jj2PT6hhSiGAmVaFzkOoHG8T3/cAMI5UdVauADjtM4kiypOZuncpXFtehinVp+ABTMUs9PpBaN8DdAomI4fRqvIFD4Aa5sUQtR+AiJ298s+RQ/c7Ok7i7artEd/FvERyPQIANTaVpie6nzgP3IWMxT0kK2ZEh+bpHAAz/Qqjz2CcN0Zkyqo/Y/undeO/wZGRaJecAOFzHEi7t7Khr0aM8rsC0KgGpf1ik9NXkG3XWwHnoAAAfEPhh3QCBw/AygWY0ELINurxbe10n+tSTjzXptz3/E8Oww2jcdK9shLZRk2+T6124W00PxdWKcGlFH3p4EgA4nb33Fej1NcPA4mHWMzRq8RF59EhldMzAQhrtqUsZZJqaMwrjPu0KZkP2g87xuqyIWwpV5EZDaYqNYq4umPMNfWcAoUdwO6NSv16fC+EsGHfuXGRJIb0zlMN5nIJtVeA2o9mi/jvqdGvt7nYqvOCkco/CwBg9kKG6bBP46LNulqMGxwWVTcAZipXJNiH9Anhq8gT7mcBwNPjK4wKhMZCI7xkSr686wMqITymcxKbbO56HWHD5IZMc42Gyey6AZLw3JNad7Fmp5h7wcHNhAUiVu5OsraLNgSI0GH9XpUJW6daesXUBgSRCKBbk9P6TAzCRFUUngnF/tdFHhw7DK+hsEnt5BCJ71jP/YtyvseEzU+kHPwxSSkfQBPY4sSNHI9ixnZKwJ8QlFOFb+7ybKnn0zY5JgWA4+z1AtqFXGza0m5KIWidF4jznMbCZykAVi6weJqhjYnGfVNOJvgQeTq/b+4SRnkTT32ETfpPSg2+b5AArPRnym/8fExl3kXj8UalKPRMC7jsRUOdSACeaMEnDT5/ange1/p+LZ589qZ/cbkc0dA9Mv8AAAAASUVORK5CYII=";

const Frontcam = ({ handleRetake, imageVal, type }) => {
    const { image } = useStore();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `w-full justify-center flex ${type === 'videoKyc' ? '' : 'h-[190px]'}` },
            React.createElement("img", { src: imageVal || image, alt: "screenshot", className: "rounded-[10px] w-full", id: "previewImage" })),
        React.createElement("span", { className: "flex flex-col justify-end items-end mt-3 " },
            React.createElement(ButtonGlobal, { onClick: handleRetake, className: "bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[10rem]" },
                React.createElement(React.Fragment, null,
                    React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-[16px] h-[16px]  mr-1" }),
                    " Re-Capture")))));
};

const Backcam = ({ handleRetake, imageVal }) => {
    return (React.createElement("div", { className: "flex flex-col w-[50%] md:w-[100%] lg:w-[50%] sm:w-[100%] max-[450px]:w-[100%] max-[640px]:w-[100%] md:mb-2 sm:mb-2  mr-3" },
        React.createElement("div", { className: "w-full justify-center flex h-[190px]" },
            React.createElement("img", { src: imageVal, alt: "screenshot", className: "rounded-[10px] w-full" })),
        React.createElement("span", { className: "flex flex-col justify-end items-end mt-3" },
            React.createElement(ButtonGlobal, { onClick: handleRetake, className: "bg-primary flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]" },
                React.createElement(React.Fragment, null,
                    React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-[16px] h-[16px] mr-1" }),
                    " Re-Capture")))));
};

const AdharVerifiction = ({ stepData, handleSubmit, isDisabledCTA }) => {
    var _a, _b, _c, _d, _e, _f;
    const { cameraStatus, uploadedImage, setCameraStatus, image, selectedFile, setImage, preview } = useStore();
    const [cameraType, setCameraType] = React.useState('');
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const [showInfoModal, setShowInfoModal] = React.useState(false);
    const [frontError, setFrontError] = React.useState(true);
    const [backError, setBackError] = React.useState(true);
    const [aadhaarImages, setAadhaarImages] = React.useState({ back: { url: null }, front: { url: null } });
    React.useEffect(() => {
        setCameraStatus(false);
    }, []);
    // useEffect(() => {
    //     if (image && cameraType) {
    //         console.log('image', image);
    //         // const objectUrl = URL.createObjectURL(image);
    //         // console.log('objectUrl', objectUrl);
    //         setAadhaarImages({
    //             ...aadhaarImages,
    //             [cameraType]: { url: image }
    //         });
    //     }
    // }, [image]);
    const handleImageCapture = (image, fileData) => {
        setAadhaarImages(Object.assign(Object.assign({}, aadhaarImages), { [cameraType]: { url: image, fileData } }));
        if (cameraType === 'front') {
            setFrontError(false);
        }
        else {
            setBackError(false);
        }
    };
    const handleClickAdhar = () => {
        if (!frontError && !backError) {
            setShowInfoModal(true);
        }
    };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    const handleOnclick = () => {
        if (frontError === false && backError === false) {
            handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { aadhaarImages }, stepStatus: 3 }));
        }
    };
    const handleImageUpload = (files, type, fileData) => {
        setAadhaarImages(Object.assign(Object.assign({}, aadhaarImages), { [type]: { url: files, fileData: fileData } }));
        if (type === 'front') {
            setFrontError(false);
        }
        else {
            setBackError(false);
        }
    };
    const handleRetake = (type) => {
        setAadhaarImages(Object.assign(Object.assign({}, aadhaarImages), { [type]: { url: null, fileData: null } }));
        if (type === 'front') {
            setFrontError(true);
        }
        else {
            setBackError(true);
        }
        setCameraStatus(false);
    };
    return (React.createElement("div", { className: "pt-8 sm:p-8 w-full" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" },
            description,
            React.createElement("span", { className: "text-primary" }, " .jpg, .png")),
        React.createElement("div", { className: "mt-10 relative" }, uploadedImage == 0 ? (
        // <div></div>
        React.createElement("div", { className: "sm:flex flex-col text-center lg:flex-row max-[640px]:flex  max-[640px]:items-center " },
            React.createElement("div", { className: "sm:flex flex-col text-center lg:flex-row w-[90%]" },
                cameraStatus === true && cameraType === 'front' && ((_a = aadhaarImages === null || aadhaarImages === void 0 ? void 0 : aadhaarImages.front) === null || _a === void 0 ? void 0 : _a.url) == null ? (React.createElement(Camera, { type: "Aadhaar", cameraType: "front", handleImageCapture: handleImageCapture, imagesVal: aadhaarImages })) : (React.createElement(React.Fragment, null, ((_b = aadhaarImages === null || aadhaarImages === void 0 ? void 0 : aadhaarImages.front) === null || _b === void 0 ? void 0 : _b.url) !== null || undefined ? (React.createElement("div", { className: "flex flex-col w-[50%] md:w-[100%] lg:w-[50%] sm:w-[100%] max-[450px]:w-[100%] max-[640px]:w-[100%] max-[640px]:mb-2 md:mb-2 sm:mb-2  mr-3" },
                    React.createElement(Frontcam, { imageVal: (_c = aadhaarImages === null || aadhaarImages === void 0 ? void 0 : aadhaarImages.front) === null || _c === void 0 ? void 0 : _c.url, handleRetake: () => handleRetake('front') }))) : (React.createElement("div", { className: "flex flex-col xl:w-[50%] lg:w-[50%] lg:mr-4 max-[640px]:mr-0 md:mr-0 max-[640px]:mb-8 sm:mb-8 " },
                    React.createElement("div", { className: "p-8 text-sm text-darkdefault border border-default rounded-md bg-lightdefault border-dashed flex flex-col justify-center items-center md:w-[100%]  h-[190px] sm:w-[100%]   " },
                        React.createElement("img", { src: img$e, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
                        React.createElement("div", { className: "text-sm" }, "Drag and drop front copy of Aadhaar or you can"),
                        React.createElement("div", { className: "flex mt-4 ml-1.5" },
                            React.createElement(Uploadfile, { type: "front", handleUpload: (files, type, fileData) => {
                                    handleImageUpload(files, type, fileData);
                                } }),
                            React.createElement(ButtonGlobal, { className: "text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center", onClick: () => (setCameraStatus(true), setCameraType('front'), setImage(null)) },
                                React.createElement(React.Fragment, null,
                                    React.createElement("img", { src: img$d, className: "h-[4vh] mr-2" }),
                                    " Open Camera")))),
                    frontError === true && React.createElement("div", { className: "self-start text-darkdanger" }, "Required"))))),
                cameraStatus === true && cameraType === 'back' && ((_d = aadhaarImages === null || aadhaarImages === void 0 ? void 0 : aadhaarImages.back) === null || _d === void 0 ? void 0 : _d.url) == null ? (React.createElement(Camera, { type: "Aadhaar", cameraType: "back", handleImageCapture: handleImageCapture, imagesVal: aadhaarImages })) : (React.createElement(React.Fragment, null, ((_e = aadhaarImages === null || aadhaarImages === void 0 ? void 0 : aadhaarImages.back) === null || _e === void 0 ? void 0 : _e.url) !== null || undefined ? (React.createElement(Backcam, { imageVal: (_f = aadhaarImages === null || aadhaarImages === void 0 ? void 0 : aadhaarImages.back) === null || _f === void 0 ? void 0 : _f.url, handleRetake: () => handleRetake('back') })) : (React.createElement("div", { className: "flex flex-col xl:w-[50%] lg:w-[50%] lg:mr-4 max-[640px]:mr-0 md:mr-0 max-[640px]:mb-8 sm:mb-8 " },
                    React.createElement("div", { className: "p-8 text-sm text-darkdefault border border-default rounded-md bg-lightdefault border-dashed flex flex-col justify-center items-center md:w-[100%]  h-[190px] sm:w-[100%]   " },
                        React.createElement("img", { src: img$e, className: "w-[2rem] h-[2rem] flex-col mb-4" }),
                        React.createElement("div", { className: "text-sm" }, "Drag and drop back copy of Aadhaar or you can"),
                        React.createElement("div", { className: "flex mt-4 ml-1.5" },
                            React.createElement(Uploadfile, { type: "back", handleUpload: (files, type, fileData) => {
                                    handleImageUpload(files, type, fileData);
                                } }),
                            React.createElement(ButtonGlobal, { className: "text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center", onClick: () => (setCameraStatus(true), setCameraType('back')) },
                                React.createElement(React.Fragment, null,
                                    React.createElement("img", { src: img$d, className: "h-[4vh] mr-2" }),
                                    " Open Camera")))),
                    backError === true && React.createElement("div", { className: "self-start text-darkdanger" }, "Required")))))))) : (React.createElement(Browse, { copyType: "Aadhaar copy" }))),
        React.createElement("span", { className: `flex flex-col items-center sm:block` },
            React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", onClick: handleClickAdhar, 
                // setCapturelocationData={handleLocationCapture}
                // getLocation={true}
                disabled: isDisabledCTA || frontError || backError }, isDisabledCTA ? 'Please wait ...' : primaryCTAText),
            isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step"))),
        React.createElement(Modal, { showModal: showInfoModal, setShowModal: setShowInfoModal, handleOnclick: handleOnclick, attentionmsg: React.createElement(React.Fragment, null,
                "Are you sure you want to upload this Aadhaar. You will ",
                React.createElement("br", null),
                " get only one attempt for Aadhaar verification.") })));
};

const aadhaarNumberVerifySchema = create$3().shape({
    otpVal: create$6().required('(Required) OTP received on Aadhaar linked mobile number through SMS').min(6, '(Minimum 6 digits required)OTP received on Aadhaar linked mobile number through SMS'),
    shareCode: create$6().required('(Required) Please set up your 4-digit share code').min(4, '(Minimum 4 digits required) Please set up your 4-digit share code')
});
const AadhaarNumberOtpVerify = ({ stepData, handleSubmit, isDisabledCTA, handleStepCallBack }) => {
    React.useState('');
    React.useState('');
    const [isResend, setIsResend] = React.useState(false);
    const [resendTimerCount, setResendTimerCount] = React.useState(30);
    const formValues = { otpVal: '', shareCode: '' };
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const handleResendTimer = () => {
        let timer = 30;
        console.log('Inside handleTimer', timer, resendTimerCount);
        setInterval(() => {
            console.log('Inside timwer', timer, resendTimerCount);
            if (timer >= 0) {
                timer = timer - 1;
                setResendTimerCount(timer);
            }
            if (timer === 0) {
                console.log('Inside timer complete', timer, resendTimerCount);
                setIsResend(true);
            }
        }, 1000);
        // if (timerOut !== null) {
        //     timerOut;
        // }
    };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    React.useEffect(() => {
        if (resendTimerCount === 30) {
            console.log('Inside detectTimer', resendTimerCount);
            handleResendTimer();
        }
        // return () => {
        //     clearTimeout(timerOut);
        // };
    }, []);
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" }, description),
        React.createElement("div", { className: "mt-10 relative" }),
        React.createElement("span", { className: `flex flex-col items-center sm:block` },
            React.createElement(Formik, { initialValues: formValues, validationSchema: aadhaarNumberVerifySchema, onSubmit: (formData) => {
                    handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { otp: formData.otpVal, is_consent: 'Y', share_code: formData.shareCode }, stepStatus: 3 }));
                } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, null,
                React.createElement("div", { className: "mb-7 w-[65%]" },
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "OTP"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", maxLength: "6", name: "otpVal", value: values.otpVal, onChange: handleChange('otpVal'), id: "otp", type: "number", placeholder: "" }),
                    errors.otpVal && touched.otpVal ? React.createElement("div", { className: "text-darkdanger" }, errors.otpVal) : null,
                    !isResend ? (React.createElement("small", null,
                        "Resend OTP in ",
                        resendTimerCount,
                        " sec")) : (React.createElement(React.Fragment, null,
                        React.createElement("small", null, "Did not receive yet?"),
                        React.createElement("p", { style: { color: 'rgb(31 90 167 / var(--tw-bg-opacity))', cursor: 'pointer' }, onClick: () => {
                                setResendTimerCount(30);
                                setIsResend(false);
                                handleResendTimer();
                                handleStepCallBack({ type: stepData.id, method: 'resendOtp' });
                            } }, "Resend OTP")))),
                React.createElement("div", { className: "mb-7 w-[65%]" },
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Share Code"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "shareCode", value: values.shareCode, onChange: handleChange('shareCode'), maxLength: "4", id: "shareCode", type: "number", placeholder: "" }),
                    errors.shareCode && touched.shareCode ? React.createElement("div", { className: "text-darkdanger" }, errors.shareCode) : null),
                React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px] mt-10", disabled: isDisabledCTA }, isDisabledCTA ? 'Please wait...' : primaryCTAText),
                isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step"))))))));
};

const ConfirmAadhaarNumberSchema = create$3().shape({
    aadhaarCardNumber: create$6().required('Required').min(12, 'Minimum 12 characters required')
});
const ConfirmAadhaarNumber = ({ stepData, handleSubmit, isDisabledCTA }) => {
    const formValues = { aadhaarCardNumber: '' };
    const { label, description, isSkipable, primaryCTAText } = stepData;
    // const handleConfirmAadhaarClick = () => {
    //     handleSubmit({ ...stepData, form_data: { aadhaar: aadhaarCardNumber, is_consent: 'Y' }, stepStatus: 3 });
    // };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" }, description),
        React.createElement("div", { className: "mt-10 relative" }),
        React.createElement("span", { className: `flex flex-col items-center sm:block` },
            React.createElement(Formik, { initialValues: formValues, validationSchema: ConfirmAadhaarNumberSchema, onSubmit: (formData) => {
                    handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { aadhar: formData.aadhaarCardNumber, is_consent: 'Y' }, stepStatus: 3 }));
                } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, null,
                React.createElement("div", { className: "mb-7 w-[80%] xl:w-[45%]" },
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Aadhaar card Number"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "aadhaarCardNumber", value: values.aadhaarCardNumber, onChange: handleChange('aadhaarCardNumber'), id: "username", maxLength: "12", type: "number", placeholder: "" }),
                    errors.aadhaarCardNumber && touched.aadhaarCardNumber ? React.createElement("div", { className: "text-darkdanger" }, errors.aadhaarCardNumber) : null),
                React.createElement("div", null, "You hereby consent to Eko India Financial Services Private Limited as your authorized representative to receive your Aadhaar verification information from UIDAI to validate your Aadhaar details."),
                React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px] mt-10", disabled: isDisabledCTA }, isDisabledCTA ? 'Please wait...' : primaryCTAText),
                isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step"))))))));
};

const ActivationPlan = ({ stepData, handleSubmit, isDisabledCTA, handleStepCallBack }) => {
    React.useState('');
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const handleActivationPlan = () => {
        // handleSubmit({ ...stepData, form_data: { is_consent: 'Y', consent_text: consentText, name: consentData }, stepStatus: 3 });
    };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    React.useEffect(() => {
        if (typeof handleStepCallBack === 'function')
            handleStepCallBack({ type: stepData.id, method: 'getInitialActivationPlan' });
    }, []);
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" }, description),
        React.createElement("div", { className: "mt-10 relative" }),
        React.createElement("span", { className: `flex flex-col items-center sm:block` },
            React.createElement("div", null),
            React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", onClick: handleActivationPlan, disabled: isDisabledCTA }, isDisabledCTA ? 'Please wait...' : primaryCTAText),
            isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step")))));
};

const SignAgreement = ({ stepData, handleSubmit, isDisabledCTA = false, handleStepCallBack }) => {
    useStore();
    React.useState(false);
    React.useEffect(() => {
        if (typeof handleStepCallBack === 'function')
            handleStepCallBack({ type: stepData.id, method: 'getSignUrl' });
    }, []);
    const openPopupTab = () => {
        handleStepCallBack({ type: stepData.id, method: 'legalityOpen' });
    };
    return (React.createElement("div", { className: "w-full min-h-[80vh] sm:min-h-[85%] flex items-center justify-center bg-white rounded-2xl" },
        React.createElement("div", { className: "items-center text-center text-black" },
            React.createElement("img", { src: "https://files.eko.co.in/docs/onborading/agreement.png", alt: "welcome icon", className: "flex items-center text-center h-48 w-48 h-52 w-52 mr-auto ml-auto mt-auto mb-6 mb-6" }),
            React.createElement("p", { className: "sm:font-normal text-[18px] pt-2 pl-4 pr-4" },
                React.createElement("span", { className: "sm:block" }, "Happy to see you here. Lets start your onboarding journey."),
                React.createElement("span", { className: "sm:block" }, " We ensure, you'll be assisted at every step.")),
            React.createElement(ButtonGlobal, { className: "bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded", disabled: isDisabledCTA, onClick: openPopupTab }, isDisabledCTA ? 'Loading...' : stepData === null || stepData === void 0 ? void 0 : stepData.primaryCTAText))));
};

const SignupSchema$1 = create$3().shape({
    name: create$6().required('Required').min(3, 'Minimum 3 characters required'),
    shop_address_line2: create$6().required('Required').min(3, 'Minimum 3 characters required'),
    shop_address_pincode: create$6().required('Required').min(6, 'Minimum 6 digits are required'),
    sender_district: create$6().required('Required').min(3, 'Minimum 3 characters required')
    // sender_state: Yup.string().required('Required')
});
const companyTypeData$1 = [
    { label: 'Private Ltd', value: 'privateltd' },
    { label: 'LLP', value: 'llp' },
    { label: 'Partnership', value: 'partnership' },
    { label: 'Sole Proprietorship', value: 'soleproprietorship' }
];
const genderData = [
    { label: 'Male', value: 49 },
    { label: 'Female', value: 50 }
];
const BusinessMerchant = ({ stepData, handleSubmit, isDisabledCTA = false, shopTypes = [], stateTypes = [] }) => {
    const [formValues, setFormValues] = React.useState({
        name: '',
        gender: 49,
        businessType: 'privateltd',
        shop_address_line2: '',
        shop_landmark: '',
        shop_address_pincode: '',
        sender_district: '',
        sender_state: '',
        // addressCheck: '',
        latlong: ''
    });
    const [locationVal, setLocationVal] = React.useState();
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    const onSuccess = (location) => {
        console.log('Location', location);
        // handleLocationCapture({
        //     loaded: true,
        //     coordinates: {
        //         lat: location.coords.latitude,
        //         lng: location.coords.longitude,
        //         accuracy: location.coords.accuracy
        //     }
        // });
        const locationValue = `${location.coords.latitude},${location.coords.longitude},${location.coords.accuracy}`;
        setLocationVal(locationValue);
    };
    const onError = (error) => {
        console.log('Error in GeoLocation=>', error);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Formik, { initialValues: formValues, validationSchema: SignupSchema$1, onSubmit: (formData) => {
                handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: Object.assign(Object.assign({}, formData), { latlong: locationVal }), stepStatus: 3 }));
            } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, { className: "bg-white mt-4 ml-6 w-full mr-2" },
            React.createElement("div", { className: "mt-8 text-black text-lg mb-4 font-bold" }, "Enter Your Details"),
            React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-3 mb-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", onClick: handleLocation, type: "button" }, "Location Capture"),
            React.createElement("div", { className: "xl:grid xl:grid-cols-2 sm:flex sm:flex-col gap-4 xl:w-full\t" },
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Full Name(as per your panCard)"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none mb-0", name: "name", value: values.name, onChange: handleChange('name'), id: "username", type: "text", placeholder: "" }),
                    errors.name && touched.name ? React.createElement("div", { className: "text-red" }, errors.name) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Gender"),
                    React.createElement("select", { name: "gender", value: values.gender, onChange: handleChange('gender'), id: "cars", className: "px-0.5 py-[8px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault" }, genderData.map((gender, idx) => {
                        return (React.createElement("option", { value: gender.value, key: `${idx}_${gender.value}` }, gender.label));
                    }))),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Business Type"),
                    React.createElement("select", { name: "businessType", value: values.businessType, onChange: handleChange('businessType'), id: "cars", className: "px-0.5 py-[8px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault" }, companyTypeData$1.map((company, idx) => {
                        return (React.createElement("option", { value: company.value, key: `${idx}_${company.value}` }, company.label));
                    }))),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Business Address"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "shop_address_line2", value: values.shop_address_line2, onChange: handleChange('shop_address_line2'), id: "username", type: "text", placeholder: "" }),
                    errors.shop_address_line2 && touched.shop_address_line2 ? React.createElement("div", { className: "text-red" }, errors.shop_address_line2) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Landmark(optional)"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "shop_landmark", value: values.shop_landmark, onChange: handleChange('shop_landmark'), id: "username", type: "text", placeholder: "" })),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Pincode"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "shop_address_pincode", value: values.shop_address_pincode, onChange: handleChange('shop_address_pincode'), id: "username", type: "number", placeholder: "", maxLength: "6" }),
                    errors.shop_address_pincode && touched.shop_address_pincode ? React.createElement("div", { className: "text-red" }, errors.shop_address_pincode) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "City"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "sender_district", value: values.sender_district, onChange: handleChange('sender_district'), id: "username", type: "text", placeholder: "" }),
                    errors.sender_district && touched.sender_district ? React.createElement("div", { className: "text-red" }, errors.sender_district) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "State"),
                    React.createElement("select", { name: "sender_state", value: values.sender_state, onChange: handleChange('sender_state'), className: "px-0.5 py-[8px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault" }, stateTypes.map((state, idx) => {
                        return (React.createElement("option", { value: state.value, key: `${idx}_${state.value}` }, state.label));
                    })))),
            React.createElement(ButtonGlobal, { className: "bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded", disabled: isDisabledCTA }, isDisabledCTA ? 'Loading...' : stepData === null || stepData === void 0 ? void 0 : stepData.primaryCTAText))))));
};

const SignupSchema = create$3().shape({
    name: create$6().required('Required'),
    authorized_signatory_name: create$6().required('Required'),
    contact_person_cell: create$6().required('Required'),
    current_address_line1: create$6().required('Required').min(3, 'Minimum 3 characters are required'),
    current_address_line2: create$6().required('Required').min(3, 'Minimum 3 characters are required'),
    current_address_pincode: create$6().required('Required').min(6, 'Must be exactly 6 digits').max(6, 'Must be exactly 6 digits'),
    current_address_district: create$6().required('Required').min(3, 'Minimum 3 characters are allowed')
});
const companyTypeData = [
    { label: 'Private Ltd', value: 1 },
    { label: 'LLP', value: 2 },
    { label: 'Partnership', value: 3 },
    { label: 'Sole Proprietorship', value: 4 }
];
const Business = ({ stepData, handleSubmit, isDisabledCTA = false, shopTypes = [], stateTypes = [] }) => {
    const [formValues, setFormValues] = React.useState({
        name: '',
        alternate_mobile: '',
        company_type: 1,
        authorized_signatory_name: '',
        contact_person_cell: '',
        current_address_line1: '',
        current_address_line2: '',
        current_address_pincode: '',
        current_address_district: '',
        current_address_state: ''
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Formik, { initialValues: formValues, validationSchema: SignupSchema, onSubmit: (formData) => {
                handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: formData, stepStatus: 3 }));
            } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, { className: "bg-white mt-4 min-[640px]:ml-6 w-full min-[640px]:mr-3 xl:mr-6 sm:mr-0 sm:ml-0" },
            React.createElement("div", { className: "mt-8 text-black text-lg mb-4 font-bold" }, "Business Type"),
            React.createElement("div", { className: "xl:grid xl:grid-cols-2 sm:flex sm:flex-col gap-4 xl:w-full" },
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Company/Firm's name"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "name", value: values.name, onChange: handleChange('name'), id: "username", type: "text", placeholder: "" }),
                    errors.name && touched.name ? React.createElement("div", { className: "text-darkdanger" }, errors.name) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Alternate mobile number(optional)"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "alternate_mobile", value: values.alternate_mobile, onChange: handleChange('alternate_mobile'), id: "username", maxLength: "10", type: "number", placeholder: "" })),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Company Type"),
                    React.createElement("select", { name: "company_type", value: values.company_type, onChange: handleChange('company_type'), className: "px-0.5 py-[7px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault" }, companyTypeData.map((company, idx) => {
                        return (React.createElement("option", { value: company.value, key: `${idx}_${company.value}` }, company.label));
                    }))),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Director/Authorised Signatory Full Name"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "authorized_signatory_name", value: values.authorized_signatory_name, onChange: handleChange('authorized_signatory_name'), id: "username", type: "text", placeholder: "" }),
                    errors.authorized_signatory_name && touched.authorized_signatory_name ? React.createElement("div", { className: "text-darkdanger" }, errors.authorized_signatory_name) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Contact Person's Cell Number "),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "contact_person_cell", value: values.contact_person_cell, onChange: handleChange('contact_person_cell'), id: "username", maxLength: "10", type: "tel", placeholder: "" }),
                    errors.contact_person_cell && touched.contact_person_cell ? React.createElement("div", { className: "text-darkdanger" }, errors.contact_person_cell) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Registedanger Business address(Line1)"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "current_address_line1", value: values.current_address_line1, onChange: handleChange('current_address_line1'), id: "username", type: "text", placeholder: "" }),
                    errors.current_address_line1 && touched.current_address_line1 ? React.createElement("div", { className: "text-darkdanger" }, errors.current_address_line1) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Registered Business address(Line2)"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "current_address_line2", value: values.current_address_line2, onChange: handleChange('current_address_line2'), id: "username", type: "text", placeholder: "" }),
                    errors.current_address_line2 && touched.current_address_line2 ? React.createElement("div", { className: "text-darkdanger" }, errors.current_address_line2) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Pincode"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "current_address_pincode", value: values.current_address_pincode, onChange: handleChange('current_address_pincode'), maxLength: "6", id: "username", type: "number", max: "9999999", placeholder: "" }),
                    errors.current_address_pincode && touched.current_address_pincode ? React.createElement("div", { className: "text-darkdanger" }, errors.current_address_pincode) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "City"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "current_address_district", value: values.current_address_district, onChange: handleChange('current_address_district'), id: "username", type: "text", placeholder: "" }),
                    errors.current_address_district && touched.current_address_district ? React.createElement("div", { className: "text-darkdanger" }, errors.current_address_district) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "State"),
                    React.createElement("select", { name: "current_address_state", value: values.current_address_state, onChange: handleChange('current_address_state'), className: "px-0.5 py-[7px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault " }, stateTypes.map((state, idx) => {
                        return (React.createElement("option", { value: state.value, key: `${idx}_${state.value}` }, state.label));
                    })))),
            React.createElement(ButtonGlobal, { className: "bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded", disabled: isDisabledCTA }, isDisabledCTA ? 'Loading...' : stepData === null || stepData === void 0 ? void 0 : stepData.primaryCTAText))))));
};

var img$9 = "data:image/png;base64,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";

const VideoKYC = ({ stepData, handleSubmit, isDisabledCTA = false }) => {
    const { cameraStatus, setCameraStatus } = useStore();
    const [videoKycError, setVideoKycError] = React.useState(true);
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const [videoKyc, setVideoKyc] = React.useState({ url: null, fileData: null });
    React.useEffect(() => {
        setCameraStatus(false);
    }, []);
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    const handleImageCapture = (image, fileData) => {
        setVideoKyc({
            url: image,
            fileData
        });
        setVideoKycError(false);
    };
    const handleRetake = () => {
        setVideoKyc({
            url: null,
            fileData: null
        });
        setCameraStatus(true);
        setVideoKycError(true);
    };
    const handleOnSubmit = () => {
        if (!videoKycError) {
            handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { videoKyc }, stepStatus: 3 }));
        }
    };
    return (React.createElement("div", { className: "pt-8 sm:p-8 xl:w-4/5 md:w-full" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "sm:font-[400] my-6" }, description),
        cameraStatus === true ? (React.createElement(Camera, { handleImageCapture: handleImageCapture, imagesVal: videoKyc, type: "videoRecor", cameraType: "front" })) : (React.createElement(React.Fragment, null,
            videoKyc.url !== null || undefined ? (React.createElement("div", { className: "flex flex-col w-[100%] max-[640px]:mb-2 md:mb-2 sm:mb-2  mr-3" },
                React.createElement(Frontcam, { type: "videoKyc", imageVal: videoKyc.url, handleRetake: () => handleRetake() }))) : (React.createElement("div", null,
                React.createElement("div", { className: "relative sm:hidden block w-[100%]", onClick: () => setCameraStatus(true) },
                    React.createElement("div", { className: "p-5 text-lg text-darkdefault border border-default rounded-md bg-lightdefault border-dashed flex flex-col justify-center items-center w-[100%] h-[180px] text-center text-[22px]" },
                        React.createElement("img", { src: img$e, className: "w-[3rem] h-[3rem] flex-col mb-6" }),
                        "Click here to take a live photo/video with ID proof")),
                React.createElement("div", { className: "hidden sm:flex w-full mt-8 sm:flex-col sm:items-center xl:flex-row " },
                    React.createElement("img", { src: String(img$9), alt: "selfie icon", className: "w-28 h-28" }),
                    React.createElement("div", { className: " w-full py-3 pl-2 text-sm xl:border-default xl:rounded-md xl:bg-lightdefault xl:border-dashed sm:justify-center sm:bg-white px-2 w-[60%] xl:ml-9 sm:ml-0 sm:mt-4 sm:w-[100%] flex xl:justify-between items-center" },
                        React.createElement("div", { className: "sm:hidden xl:block" }, "Take a live photo/video with ID proof"),
                        React.createElement(ButtonGlobal, { className: "text-white text-xs bg-primary hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary max-h-8 min-w-fit font-medium rounded-md pl-2 pr-2 py-[6px] w-fit flex justify-center items-center", onClick: () => setCameraStatus(true) },
                            React.createElement(React.Fragment, null,
                                React.createElement("img", { src: img$d, className: "h-[2vh] mr-2" }),
                                " Open Camera")))),
                videoKycError === true && React.createElement("div", { className: "flex justify-center text-red" }, "Required"))),
            React.createElement("span", { className: `flex flex-col items-center sm:block mt-8` },
                React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", onClick: handleOnSubmit, disabled: isDisabledCTA || videoKycError }, isDisabledCTA ? 'Loading...' : primaryCTAText),
                isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step")))))));
};

const LoctionCapture = ({ stepData, handleSubmit, isDisabledCTA = false }) => {
    const { label, description, primaryCTAText } = stepData;
    const onSuccess = (location) => {
        handleLocationCapture({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
                accuracy: location.coords.accuracy
            }
        });
    };
    const onError = (error) => {
        console.log('Error in GeoLocation=>', error);
    };
    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    const handleLocationCapture = (location) => {
        var _a, _b, _c;
        handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { latlong: `${(_a = location === null || location === void 0 ? void 0 : location.coordinates) === null || _a === void 0 ? void 0 : _a.lat},${(_b = location === null || location === void 0 ? void 0 : location.coordinates) === null || _b === void 0 ? void 0 : _b.lng},${(_c = location === null || location === void 0 ? void 0 : location.coordinates) === null || _c === void 0 ? void 0 : _c.accuracy}` }, stepStatus: 3 }));
    };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" }, description),
        React.createElement("ul", { className: "pt-2 pl-5 text-[18px] sm:text-[16px] font-[300]" },
            React.createElement("li", { className: "pb-2" }, "Please click the button below to allow browser to capture your location."),
            React.createElement("li", { className: "pb-2" }, "In browser popup, click \"Allow\" button to enable location capturing."),
            React.createElement("li", { className: "pb-2" }, "You will be re-directed to next step after successful location capture.")),
        React.createElement("span", { className: `flex flex-col items-center sm:block` },
            React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", onClick: handleLocation, 
                // setCapturelocationData={handleLocationCapture}
                // getLocation={true}
                disabled: isDisabledCTA }, isDisabledCTA ? 'Loading...' : primaryCTAText),
            (stepData === null || stepData === void 0 ? void 0 : stepData.isSkipable) && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step")))));
};

var img$8 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='34.548' viewBox='0 0 36 34.548'%3e %3cpath id='Union_28' data-name='Union 28' d='M24.062%2c34.537A15.4%2c15.4%2c0%2c0%2c1%2c21.9%2c34.32a39.666%2c39.666%2c0%2c0%2c1-6.389-1.74%2c26.915%2c26.915%2c0%2c0%2c0-3.173-.869c-1.036-.2-1.531-.663-1.531-1.731q0-6.959%2c0-13.917c0-.094%2c0-.187.006-.281A1.524%2c1.524%2c0%2c0%2c1%2c12%2c14.392a2.766%2c2.766%2c0%2c0%2c0%2c.959-.464%2c7.178%2c7.178%2c0%2c0%2c0%2c1.052-1.03q2.292-2.708%2c4.554-5.442a4.041%2c4.041%2c0%2c0%2c0%2c.372-.551%2c9.068%2c9.068%2c0%2c0%2c0%2c.9-2.866%2c8.314%2c8.314%2c0%2c0%2c1%2c.991-2.976c.388-.6.832-1.127%2c1.644-1.056a14.611%2c14.611%2c0%2c0%2c1%2c1.459.185%2c3.668%2c3.668%2c0%2c0%2c1%2c2.909%2c2.276A8.485%2c8.485%2c0%2c0%2c1%2c27.1%2c7.643a13.737%2c13.737%2c0%2c0%2c1-1.32%2c3.05c-.127.253-.217.524-.339.823h.451q2.847%2c0%2c5.693%2c0a4.308%2c4.308%2c0%2c0%2c1%2c3.523%2c1.728A4.846%2c4.846%2c0%2c0%2c1%2c36%2c15.31v1.125a1.14%2c1.14%2c0%2c0%2c0-.062.2%2c4.292%2c4.292%2c0%2c0%2c1-.873%2c2.153.942.942%2c0%2c0%2c0-.161.954%2c4.574%2c4.574%2c0%2c0%2c1-.58%2c3.928.828.828%2c0%2c0%2c0-.117.687%2c4.741%2c4.741%2c0%2c0%2c1-.984%2c4.021%2c1.14%2c1.14%2c0%2c0%2c0-.3.842%2c4.7%2c4.7%2c0%2c0%2c1-4.307%2c5.207%2c25.577%2c25.577%2c0%2c0%2c1-2.8.124C25.232%2c34.548%2c24.646%2c34.54%2c24.062%2c34.537ZM1.63%2c31.684A1.482%2c1.482%2c0%2c0%2c1%2c0%2c30.046q0-7.01%2c0-14.02A1.477%2c1.477%2c0%2c0%2c1%2c1.635%2c14.4q3.057%2c0%2c6.114%2c0a1.467%2c1.467%2c0%2c0%2c1%2c1.607%2c1.616q0%2c3.514%2c0%2c7.028%2c0%2c3.5%2c0%2c6.992a1.483%2c1.483%2c0%2c0%2c1-1.648%2c1.65l-3.187%2c0Zm2.68-5.759A1.438%2c1.438%2c0%2c0%2c0%2c4.324%2c28.8a1.438%2c1.438%2c0%2c1%2c0-.01-2.877Z' transform='translate(0 0)' fill='%2300c341'/%3e%3c/svg%3e";

const OnboardingStatus = ({ stepData, handleSubmit }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex mt-8" },
            React.createElement("span", { className: "w-[20%] sm:w-fit" },
                React.createElement("span", { className: "ounded-[100%] w-[16vw] h-[16vw] w-16 h-16 flex items-center justify-center border-2 border-success" },
                    React.createElement("img", { src: img$8, alt: "thump up icon", className: "w-[35px] h-[35px] sm:w-7 sm:h-7" }))),
            React.createElement("span", { className: "flex flex-col ml-5" },
                React.createElement("span", { className: "text-lg font-semibold text-success" }, "64% Completed"),
                React.createElement("div", { className: "mt-1 text-md" }, "4 Steps completed, 1 step skipped, 1 step disqualified"),
                React.createElement("span", { className: "hidden sm:flex mt-8 items-center justify-between w-[80%]" },
                    React.createElement("span", { className: "flex-col" },
                        React.createElement("div", { className: "text-sm text-darkdefault" }, "Skipped"),
                        React.createElement("div", { className: "text-md text-black font-bold" }, "Aadhaar Verification")),
                    React.createElement(ButtonGlobal, { className: "flex items-center justify-center bg-primary bg-black text-white font-semibold w-28 h-8 px-5 rounded" },
                        React.createElement(React.Fragment, null,
                            React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-4 h-4 mr-2" }),
                            " Retry"))),
                React.createElement("span", { className: "hidden flex mt-8 mb-4 items-center justify-between w-[60%]" },
                    React.createElement("span", { className: "flex-col" },
                        React.createElement("span", { className: "text-sm text-darkdefault" }, "Disqualified"),
                        React.createElement("div", { className: "text-md text-black font-bold" }, "Video KYC")),
                    React.createElement("div", { className: "w-fit rounded-full p-2 text-xs text-center text-red bg-white border-red border-2" }, "No Attempts Left")))),
        React.createElement("div", { className: "sm:hidden border-2 border-lightdefault rounded-2xl mt-6" },
            React.createElement("span", { className: "flex items-center justify-between w-[100%] border-b-2 border-lightdefault p-5" },
                React.createElement("span", { className: "flex-col" },
                    React.createElement("div", { className: "text-md text-darkdefault" }, "Skipped"),
                    React.createElement("div", { className: "text-md text-black font-bold" }, "Aadhaar Verification")),
                React.createElement(ButtonGlobal, { className: "flex items-center justify-center bg-primary bg-black text-white font-[400] w-28 h-8 px-2 rounded text-[18px] py-5" },
                    React.createElement(React.Fragment, null,
                        React.createElement("img", { src: img$a, alt: "retry_icon", className: "w-4 h-4 mr-2" }),
                        " Retry"))),
            React.createElement("span", { className: "sm:hidden flex p-5 items-center justify-between w-[100%]" },
                React.createElement("span", { className: "flex-col" },
                    React.createElement("span", { className: "text-md text-darkdefault" }, "Disqualified"),
                    React.createElement("div", { className: "text-md text-black font-bold" }, "Video KYC")),
                React.createElement("div", { className: "w-fit rounded-full py-2 px-5 text-[14px] text-center text-red bg-white border-red border-2" }, "No Attempts Left")))));
};

var img$7 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13.564' viewBox='0 0 18 13.564'%3e %3cpath id='Path_8520' data-name='Path 8520' d='M6.291%2c9.2c1.35-1.356%2c2.668-2.68%2c3.987-4q2.3-2.3%2c4.6-4.6a1.8%2c1.8%2c0%2c0%2c1%2c2.715%2c2.351c-.091.111-.2.211-.3.313L7.775%2c12.8a1.854%2c1.854%2c0%2c0%2c1-3.009-.014C3.361%2c11.378%2c1.949%2c9.978.555%2c8.561a1.793%2c1.793%2c0%2c0%2c1%2c.813-3.043%2c1.771%2c1.771%2c0%2c0%2c1%2c1.767.535Q4.553%2c7.48%2c5.977%2c8.9c.092.092.187.179.313.3' transform='translate(0 0.001)' fill='white'/%3e%3c/svg%3e";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".disabled{color:gray!important;pointer-events:none}.step-item:not(:first-child):before{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-content:\"\";background-color:rgb(242 242 242/var(--tw-bg-opacity));border-color:rgb(242 242 242/var(--tw-border-opacity));border-width:1px;content:var(--tw-content);display:block;height:100%;left:1.5rem;position:absolute;top:-3.5rem;width:.125rem}.step{--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:rgb(242 242 242/var(--tw-bg-opacity));border-radius:9999px;color:rgb(12 36 59/var(--tw-text-opacity));display:flex;font-size:14px;font-weight:600;height:2.75rem;justify-content:center;margin-bottom:.5rem;position:relative;width:2.75rem;z-index:10}.active .step{background-color:rgb(31 90 167/var(--tw-bg-opacity))}.active .step,.complete .step{--tw-bg-opacity:1;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.complete .step{background-color:rgb(0 195 65/var(--tw-bg-opacity))}";
styleInject(css_248z$1,{"insertAt":"top"});

const Sidebar = ({ steps, userData }) => {
    var _a, _b;
    const { currentStep, completed, setCurrentStepInput } = useStore();
    console.log('currentStep => ', currentStep);
    let visibleStepData = steps;
    console.log('Jalaj Steps', steps, visibleStepData);
    if (((_a = userData === null || userData === void 0 ? void 0 : userData.userDetails) === null || _a === void 0 ? void 0 : _a.user_type) === 3) {
        visibleStepData = visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.filter((step) => step.isVisible && step.id !== 10 && step.id !== 9);
    }
    else {
        visibleStepData = visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.filter((step) => step.isVisible);
    }
    const progressRef = React.useRef(null);
    const currentStepIndex = (_b = visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.map((step) => step.id)) === null || _b === void 0 ? void 0 : _b.indexOf(currentStep);
    React.useEffect(() => {
        let progress = `0%`;
        if (currentStepIndex + 1 > 1) {
            progress = `${currentStepIndex + 1 * 10}%`;
        }
        if (progressRef === null || progressRef === void 0 ? void 0 : progressRef.current) {
            progressRef.current.style.width = progress;
        }
    }, [currentStepIndex]);
    return (React.createElement("div", { className: "w-[75%] sm:w-full sm:rounded-2xl bg-white" },
        React.createElement("div", { className: "px-5 pt-5 p-5 bg-primary rounded-t-2xl" },
            React.createElement("div", { className: "flex-col" },
                React.createElement("div", { className: "mb-2 text-base text-white" }, "ONBOARDING PROGRESS"),
                React.createElement("div", { className: "w-[100%] bg-white rounded-full h-[12px] h-2.5 mb-4" },
                    React.createElement("div", { ref: progressRef, className: `bg-success h-[12px] sm:h-3.0 rounded-full` }),
                    React.createElement("div", { className: "text-[14px] text-xs text-end pt-1 text-white mt-2 mt-1" },
                        currentStepIndex > 1 ? `${currentStepIndex} Steps` : '0 Step',
                        " Completed")))),
        React.createElement("div", { className: "pt-4 pl-3 p-5 bg-white rounded-b-2xl  h-full mb-10" }, visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.map((step, i) => {
            return (React.createElement("span", { key: step.id, className: `flex flex-col relative w-60 ${currentStep === step.id ? 'active' : ''} ${step.id < currentStep ? 'complete' : ''}` },
                React.createElement(ButtonGlobal
                // onClick={() => {
                //     i > 0 && steps[i - 1].stepStatus !== 0 && setCurrentStepInput(steps[i]?.id);
                // }}
                , null,
                    React.createElement("span", { className: "flex pb-5 items-center" },
                        React.createElement("span", { className: `step ${i > 0 && step.id > currentStep ? 'disabled' : ''}` }, step.id >= currentStep ? i + 1 : React.createElement("img", { src: img$7, alt: "complete mark", className: "w-[15px] h-[15px]" })),
                        React.createElement("span", null,
                            React.createElement("p", { className: `text-black ml-2 pb-2 pr-2 text-[15.5px] font-[500] font-normal ${i > 0 && steps[i - 1].stepStatus === 0 ? 'disabled' : ''}` }, step.label),
                            step.stepStatus > 1 && step.stepStatus < 3 && (React.createElement("div", { className: `w-[80px] rounded-full h-[20px] ml-2 text-xs flex justify-center items-center ${step.stepStatus === 2 ? 'text-darkdanger bg-white border-darkdanger border-2' : 'text-white bg-warning'}` }, step.stepStatus === 1 ? 'In Progress' : step.stepStatus === 2 ? 'Skipped' : '')))))));
        }))));
};

var img$6 = "data:image/png;base64,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";

const Welcome = ({ stepData, handleSubmit }) => {
    const { steps, currentStep, setCompleted, setCurrentStepPlus } = useStore();
    return (React.createElement("div", { className: "w-full min-h-[80vh] min-h-[85%] flex items-center justify-center bg-white rounded-2xl" },
        React.createElement("div", { className: "items-center text-center text-black" },
            React.createElement("img", { src: String(img$6), alt: "welcome icon", className: "flex items-center text-center h-48 w-48 h-52 w-52 mr-auto ml-auto mt-auto mb-6 mb-6" }),
            React.createElement("b", { className: "text-[24px]" }, "Welcome!"),
            React.createElement("p", { className: "sm:font-normal text-[18px] pt-2 pl-4 pr-4" },
                React.createElement("span", { className: "sm:block" }, "Happy to see you here. Lets start your onboarding journey."),
                React.createElement("span", { className: "sm:block" }, " We ensure, you'll be assisted at every step.")),
            React.createElement(ButtonGlobal, { className: "bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded", 
                // onClick={() => {
                //     currentStep === steps.length + 1 ? setCompleted(true) : (setCurrentStepPlus(), setStepsStatus([...stepsStatus, { progress: 'In Progress', step: currentStep + 1 }]));
                // }}
                onClick: () => handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 3 })) }, currentStep === steps.length + 1 ? 'Done' : stepData === null || stepData === void 0 ? void 0 : stepData.primaryCTAText))));
};

const panRegex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
const panSchema = create$3().shape({
    shopName: create$6().required('Required'),
    panNumber: create$6().required('Required').matches(panRegex, 'Pan number is invalid')
    // shopType: Yup.string().required('Please select any one option')
});
const PanVerification = ({ stepData, handleSubmit, isDisabledCTA = false, shopTypes = [] }) => {
    const { cameraStatus, uploadedImage, setCameraStatus, selectedFile, preview } = useStore();
    const [panError, setPanError] = React.useState(true);
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const formValues = {
        shopType: '',
        shopName: '',
        panNumber: ''
    };
    const [panImage, setPanImage] = React.useState({ url: null, fileData: null });
    React.useEffect(() => {
        setCameraStatus(false);
    }, []);
    // const handleOnSubmit = () => {
    //     handleSubmit({ ...stepData, form_data: { panImage, ...formValues }, stepStatus: 3 });
    // };
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    const handleImageCapture = (image, fileData) => {
        setPanImage({
            url: image,
            fileData: fileData
        });
        setPanError(false);
    };
    const handleImageUpload = (files, type, fileData) => {
        setPanImage({
            url: files,
            fileData: fileData
        });
        setPanError(false);
    };
    const handleRetake = () => {
        setPanImage({
            url: null,
            fileData: null
        });
        setPanError(true);
        setCameraStatus(false);
    };
    // const handleChange = (e: any) => {
    //     console.log('handleChange', e.target.name, e.target.value);
    //     setFormValues({
    //         ...formValues,
    //         [e.target.name]: e.target.value
    //     });
    // };
    return (React.createElement("div", { className: "pt-8 sm:p-8 xl:w-[55%] lg:w-[70%]" },
        React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
        React.createElement("div", { className: "mt-3 mb-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" },
            description,
            React.createElement("span", { className: "text-primary" }, " .jpg, .png, .pdf")),
        React.createElement(Formik, { initialValues: formValues, validationSchema: panSchema, onSubmit: (formData) => {
                if (!panError) {
                    handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: Object.assign({ panImage }, formData), stepStatus: 3 }));
                }
            } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, null,
            React.createElement("div", null,
                React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Pan Card Number"),
                React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "panNumber", value: values.panNumber.toUpperCase(), maxLength: "10", onChange: handleChange('panNumber'), id: "panNumber", type: "text", placeholder: "" }),
                errors.panNumber && touched.panNumber ? React.createElement("div", { className: "text-red" }, errors.panNumber) : null),
            React.createElement("div", { className: "relative sm:block mt-10" }, uploadedImage === 0 ? (cameraStatus === true && (panImage === null || panImage === void 0 ? void 0 : panImage.url) === null ? (React.createElement(Camera, { type: "pan", cameraType: "front", handleImageCapture: handleImageCapture, imagesVal: panImage })) : (React.createElement(React.Fragment, null, panImage.url !== null || undefined ? (React.createElement("div", { className: "flex flex-col w-[100%] md:w-[100%] lg:w-[100%] sm:w-[100%] max-[450px]:w-[100%] max-[640px]:w-[100%] max-[640px]:mb-2 md:mb-2 sm:mb-2  mr-3" },
                React.createElement(Frontcam, { imageVal: panImage.url, handleRetake: () => handleRetake() }))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "p-8 text-sm text-darkdefault border border-default rounded-md bg-lightdefault border-dashed flex flex-col justify-center items-center overflow-hidden w-[100%]" },
                    React.createElement("img", { src: img$e, className: "w-[3rem] h-[3rem] flex-col mb-6" }),
                    "Drag and drop copy of PAN Card or you can",
                    React.createElement("div", { className: "flex  mt-8" },
                        React.createElement(Uploadfile, { type: "pan", handleUpload: (files, type, fileData) => handleImageUpload(files, type, fileData) }),
                        React.createElement(ButtonGlobal, { className: "text-white text-xs bottom-1.5 bg-primary font-medium rounded-md pl-2 pr-2 py-[6px] w-max flex mr-2 justify-center items-center", onClick: () => setCameraStatus(true) },
                            React.createElement(React.Fragment, null,
                                React.createElement("img", { src: img$d, className: "h-[2vh] mr-2" }),
                                " Open Camera")))),
                panError === true && React.createElement("div", { className: "self-start text-red" }, "Required")))))) : (React.createElement(Browse, { copyType: "Pan Copy" }))),
            React.createElement("div", { className: "mt-2" },
                React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Shop Type"),
                React.createElement("select", { name: "shopType", value: values.shopType, onChange: handleChange('shopType'), id: "cars", className: "px-0.5 py-[9px] border-2 border-lightdefault-800 w-full rounded-md bg-white border-lightdefault" }, (shopTypes === null || shopTypes === void 0 ? void 0 : shopTypes.length) > 0 &&
                    (shopTypes === null || shopTypes === void 0 ? void 0 : shopTypes.map((shop, idx) => (React.createElement("option", { value: shop.value, key: `${idx}_${shop.value}` }, shop.label)))))),
            React.createElement("div", { className: "mt-2" },
                React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Shop Name"),
                React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "shopName", value: values.shopName, onChange: handleChange('shopName'), id: "shopName", type: "text", placeholder: "" }),
                errors.shopName && touched.shopName ? React.createElement("div", { className: "text-red" }, errors.shopName) : null),
            React.createElement("span", { className: `flex flex-col items-center sm:block` },
                React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", disabled: isDisabledCTA }, isDisabledCTA ? 'Loading...' : primaryCTAText),
                isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step"))))))));
};

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='36' height='34.548' viewBox='0 0 36 34.548'%3e %3cpath id='Union_28' data-name='Union 28' d='M24.061.011A15.4%2c15.4%2c0%2c0%2c0%2c21.9.228a39.666%2c39.666%2c0%2c0%2c0-6.389%2c1.74%2c26.915%2c26.915%2c0%2c0%2c1-3.173.869C11.3%2c3.036%2c10.8%2c3.5%2c10.8%2c4.567q0%2c6.959%2c0%2c13.917c0%2c.094%2c0%2c.187.006.281a1.524%2c1.524%2c0%2c0%2c0%2c1.185%2c1.391%2c2.766%2c2.766%2c0%2c0%2c1%2c.959.464%2c7.178%2c7.178%2c0%2c0%2c1%2c1.052%2c1.03q2.292%2c2.708%2c4.554%2c5.442a4.041%2c4.041%2c0%2c0%2c1%2c.372.551%2c9.068%2c9.068%2c0%2c0%2c1%2c.9%2c2.866%2c8.314%2c8.314%2c0%2c0%2c0%2c.991%2c2.976c.388.6.832%2c1.127%2c1.644%2c1.056a14.611%2c14.611%2c0%2c0%2c0%2c1.459-.185%2c3.668%2c3.668%2c0%2c0%2c0%2c2.909-2.276%2c8.485%2c8.485%2c0%2c0%2c0%2c.266-5.174%2c13.737%2c13.737%2c0%2c0%2c0-1.32-3.05c-.127-.253-.217-.524-.339-.823h.451q2.847%2c0%2c5.693%2c0a4.308%2c4.308%2c0%2c0%2c0%2c3.523-1.728A4.846%2c4.846%2c0%2c0%2c0%2c36%2c19.238V18.113a1.14%2c1.14%2c0%2c0%2c1-.062-.2%2c4.292%2c4.292%2c0%2c0%2c0-.873-2.153.942.942%2c0%2c0%2c1-.161-.954%2c4.574%2c4.574%2c0%2c0%2c0-.58-3.928.828.828%2c0%2c0%2c1-.117-.687%2c4.741%2c4.741%2c0%2c0%2c0-.984-4.021%2c1.14%2c1.14%2c0%2c0%2c1-.3-.842A4.7%2c4.7%2c0%2c0%2c0%2c28.621.124%2c25.577%2c25.577%2c0%2c0%2c0%2c25.818%2c0C25.232%2c0%2c24.646.008%2c24.061.011ZM1.629%2c2.864A1.482%2c1.482%2c0%2c0%2c0%2c0%2c4.5q0%2c7.01%2c0%2c14.02a1.477%2c1.477%2c0%2c0%2c0%2c1.634%2c1.629q3.057%2c0%2c6.114%2c0a1.467%2c1.467%2c0%2c0%2c0%2c1.607-1.616q0-3.514%2c0-7.028%2c0-3.5%2c0-6.992a1.483%2c1.483%2c0%2c0%2c0-1.648-1.65l-3.187%2c0Zm2.68%2c5.759a1.438%2c1.438%2c0%2c0%2c1%2c.015-2.877%2c1.438%2c1.438%2c0%2c1%2c1-.01%2c2.877Z' fill='%23ff4040'/%3e%3c/svg%3e";

const PanAdharMatch = () => {
    const { panStatus = 1, panStatusResult } = useStore();
    return (React.createElement(React.Fragment, null, panStatus === 0 ? (React.createElement("ul", { className: "pt-2 pl-5 text-[16px] font-[300]" },
        React.createElement("li", { className: "pb-2" }, "Please click the button below to start matching your details."),
        React.createElement("li", { className: "pb-2" }, "It is required to for verification purpose."),
        React.createElement("li", { className: "pb-2" }, "Minimum match requirement is 60%"))) : panStatusResult === 'Matching Failed' ? (React.createElement("div", { className: "flex mt-4" },
        React.createElement("span", { className: "w-[20%] sm:w-fit" },
            React.createElement("span", { className: "rounded-[100%] w-[16vw] h-[16vw] w-16 h-16 border-2 flex justify-center items-center border-success" },
                React.createElement("img", { src: img$8, alt: "tumpup icon", className: "w-[35px] h-[35px] sm:w-7 sm:h-7" }))),
        React.createElement("span", { className: "ml-3" },
            React.createElement("span", { className: "text-lg font-semibold text-success" }, "Good match"),
            React.createElement("div", { className: "mt-1 font-[400] text-[18px] sm:text-md" },
                "Your name, PAN and Aadhaar matches by ",
                React.createElement("span", { className: "font-bold text-lg" }, "70%"))))) : (React.createElement("div", { className: "flex mt-4" },
        React.createElement("span", { className: "w-[20%] sm:w-fit" },
            React.createElement("span", { className: "rounded-[100%] w-[16vw] h-[16vw] w-16 h-16 border-2 flex justify-center items-center border-red" },
                React.createElement("img", { src: img$5, alt: "tumpdown icon", className: "w-[32px] h-[32px] sm:w-7 sm:h-7" }))),
        React.createElement("span", { className: "ml-3 sm:ml-5" },
            React.createElement("span", { className: "text-lg font-[500] text-red" }, "Matching Failed"),
            React.createElement("div", { className: "mt-1 font-[400] text-[18px] sm:text-md" },
                "Your name, PAN and Aadhaar matches by ",
                React.createElement("span", { className: "font-bold text-lg" }, "30%")),
            React.createElement("div", { className: "text-red block sm:hidden mt-2" }, "You have 1 attempt left"))))));
};

var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAEEpJREFUeF7tXXmQXEUZ7zc7x87smU12E0IIh6CWIgQp0SqvsvAALcUiO3uxYASMZwgWgoiooFgWFEcgECAKalFULCkv1BIV8Sg8EAQRLRXkSDab7JHdmdlj7jfPrwey6X7TM93T8+a9fm9eV+0/O939+vu+3+vX/fu+/lpDfmlpDWgtLb0vPPIB0OIg8AHgA6DFNdDi4vszgA+AFtdAi4vvzwA+AFpLA8n40HOGrp9oEGJHu7pQe1cn/s/D2u23v6eVNNIyM0BqaOgxvaifQRo30hFDse5ulr0f1O6445xWAEJLAGApPmTkdZ2yZ/ea1agtFKpl4xKAoM3rIPA8AFjG7+zrQ6FIWMS2WQBBVKSiW+t4GgALIyO7i/nCx0jjBIJB1NO/RtxemnY1rAu+Lt7AXTU9DYD5czeTa72yZVYdta5uC8Es4Fk9eVawRHxoCVb7HaS1Y91dKNJB/UsMDIbxkrZr1/Fild1Vy5MASF988YbsfGKCMgXMBavW1//2r/SRyXRr99676C7z8kfrSQAsDsaNQqlESd8z0I8CbfSi/uC+6XKdozau5WsqEEDazp2e05fnBFoYHb2smMvfSFpUC2iody1t5JnJWZTLFcrVIpEQGji6nw8CwxiDT8EefkX31PAcAJgLv/VHIWTQ68GJFw5QVjrmhPVCVvPagtBTAACa96mSrm8iLRmORlFHbw9lXLPx8Y/R9gBaI7ZGeAhAcLYQWlxQyVMAENn25bI5NHNgrsI0ndEA6gZ+oA14Al7x0izgGQCwGL+u1X0oGKYZP9bbj41/uAjxBJqWB3IowgOKG373BACWxsbenc/mfm1WuNmYidkkWlpMU9VgcY9ikSMAaO/sQNg7yC2adgqA4BluPcUreAIACWD8zJRfxZusaWji+Unm1M8DDtOG0B8AwPX6c70AqeHh+/VCcYw0UhC8fF3g7SPL5EsHUalEwyQS0lAoWKkCzBdg3kCgXA/rgSsF6ilbxfUAEFn4wc4ATe59mfQhC/ntN//Wu24t0uAt5xW3Lwj5EvI04ODvicH4slEqxcghsPj+fTD1m43ZAds+nn2FFoQI7QUQHOegGhp6tGsBkDn//I2Z5fReSnpYCazCpA9RllJLKDG3QP0PGx4DgFcwf4B5BG4JBHqAJqYfwm2kRgXXAmAB+P5iBd8/AHw/bVjeto9nBqFZwMV+AlcCYGF49PJiIX8DaTwNjNC7doCy5zTw/flX+P7DP+BFH178iZZQJII6+1bxqxvGOPgJ7udXVKuGuCYUGrcs349FqLXwqyai0CwAjd24IHQdAJLx4adLevEU0ljCfD8QPqYvhDCshUBgGL+CWeB9wp0qUNFVADAMQ0tsHqQd/aBEs3Fq8f2yOu9eA36CkPf8BK4CgFV8vywIhGYBhArwKRAKOZYdh5XtXAOApfPOe28+k/2lWfhKvj8BfH+Gqmbm+2UV2A7xhFGIK+SWQGATbAuf5tZToIJrAGA13y+r+3JcYUWssak3F/kJXAEA4Pv3AN8/Qqq5Ub5fFgDCfgLDuBEWhJfLPseudq4AgAjfrwPff6BOvl9WyV7yEygPAOD708D3U3wsPtCJD3aSZd/zByq4fRG+XxYEggvCCVgQbpR9hh3tlAZA5qKLjs0kki9RimDw/YvA9ycl+X5ZJQv7CQqFXm337pTsc5rdTmkALGweNIqmUI8eoHsDeFlPlEb5flklC80CivsJlAVAcnj0ylIh/w3SOM3i+2UBgOMNcdyhQLkAPgX3CdSzvYqyALCb75fVvNAsAJ2r6idQEgAQ3/8MRPGcTBolEouiWI85vh/H+NEiRBvg+5sKAsN4GLaFyqWfUQ4AxjXXBBL/eIZO5wGWqeD7MxDff5Ad3y9rSNl2AtlGyl2rOAsoBwCn+X5ZEAh+CooAgpp5aWSfL9tOKQCkRsfP0nOZX5iFMSt3fjaBlpvE98sqEucdwPGI3GIYp8Gn4O/cejZVUAoAqvD9srp3o59AGQAA3/894PuHSeU7xffLAkDYT4DQTfAp+Jzsc6xspwwAhPj+IvD9ryR1IJUgE+ZlpRLJvnAeApyPgFdUWRDyR8qTxILfk/F4pqSX2smuVOD7pURjUNVV+tkPIDhG6hkWNnIcABDffzzE979AycTi+5PA98/Lxfeb9aVv2Ijmt1+BjFek18C/33f9tajt0KwlqhX2E4RCq7QdO5KWPFSyE8cBwOL7cXg3pn3JYhXfnwTD54/eQPUdDIZRe6wLBfbvRe3XXSWpSrqZ0LZQAT+BowCARI5XQSJHKgkjk+/fP4Py+SKl4Xrj+8uNIVJn5vpbKwzc2X3kIGn0i9uRNneoYRDU4SfYAp+C7zb8QMkOHAWA3Xx/ftPpKDn2EZOqDNTZfSRzaPiB+1DwNw9JqlNiFsC4dDARpWMASMTj/zL00utIlUVikL27h87ePfGCdXy/EAC+DwB4xBoAYNmEPgUIPQIgONMS1NXZiSMAMOLxtoReoud0hrJyFvP9TgAA5ynAfAavODULOAIANt8PigrTirJq4XdY+U4AoI5ZQAcQ8E+e8JBU5++2AyA1NvZ+PZv7uXmcFXz/DPD9S3R8Pz7Whd29ssUpAAj7CRA6HUDwpKx8Mu1sB4CTfL9TACjPAoxklRUGc+A8ga0AgECPByDQY5AUHE/7XatN+XxehHw+pljAavl86kG9kwDAeQt6Bujj61XGvgNmgc/WI1cjdW0FgNN8v5MAwEZiEVws49m5ILQNAMnBeLZUKlHJFfGWD2/9yNLM+H6nAYDzFZtT2FR5eycBBDRd2chrXqOtLQDIjo2dkM7mnqfGweT7F4Hvp1Pyi+bzEdGP4wCAQQr7CUqlPu3OOxMicjVSxxYA2M33V1OICgAQ3hba5CdoOgBSIyNf0vOFr5JGYfH9U8D3F6zg+2u8DqoAQNhPoGkXQjbSbzfyhvPaNh0AdvP9tQRWBQDCswBUbPaCsKkAgIXfv2Hh91rSKKzbOss5fE1ZG3ECZ5NHmAdm7u8qAaAOEPwOQPAurnCSFZoGAIjvD0J8/8t3shDFzPhlge+ftSm+XzUAqOAnaBoAmHw/wzFiNd/vlk/A4XEKegub5idoCgCWR8Y/kMtnfsZ7++ebwPe7DQA1LrCmRdG0N8GC8AnJmb5qs6YAwEm+320AKK8FHPQTWA4ASOT4A0jkeC5pCBbfvx/4fsj7R9nLCr7fjQDA+Q5w3gOBchssCLcL1BOuYjkAnOb73QgAPGan/ASWAgC2fXnY9lFRHXbz/W4FgLCfwDAOwtlCsUsOBeYBywCQHR8/MZ3OPEc90wG+37UAgIHj/Ac4DwK3hMOrtVtumefWE6hgGQBU4fvdDIDyglDkenu400i77TZLbGdJJ4vDo18uFPLXkspnLWymJoDvL1gQ3y+AbFYV1Ygg1hiF/QSGcTF8Cu6RVMVKM0sAoBLf7/YZQHgWgIpW+AkaBgCEef0XwrxeTSreSb6/FgAKJ29CiQsuNFUxHQzZ8x0U/H3FHZSNvmh1txf6FCD0BwDBO+vunGjQEACMrVtDiUNzefMAKvj+dBbNTlWuWew+1q0Vi2j65l0V+iKPhsU+DlcQ8q4Ta0Tjgm3t8hM0BAAV+X6efvNv2ISS59OzAL5SrqOrD4W/tRMFn/gLrwvbfhecBUowC7TJDkoaAMujox/M5fIP8t7+uZl5lF7KUtUaje+XFXalHdw2Vjj5VFRYfzQcEYfbQ6emUPjpvyHL/c8NDlTYT6Drb9buuuuvMo+TBoCqfL+MElRu02w/gRQAkkPDPyoVix8mFcfavux/8QAmuKjSbL5fZWPKjI0VPsfsR9NuB2/htnqfIQUAEb6/CAuug/tmKhdcUfmjXfUK55X6zfQT1A2A5OAQ8P26ie+vpDCbGd/vFcMKyyF+nmAKFoT03bmch9QFgOyWLSelFxafpfpkDG4huYhSTYzvF1achyqynGpM8QqFfrifQDjFSV0ASEH+ft30UW9mPh8P2c8SUYS2hXWeJxAGwOLI2DWFfO4rpCSsA49O8/2imtYKBZQ58yy4AayE2n/7MEJB6a206CMbrscKrGF2ahhbwU/wTZEHCgNAiO+HFf8ErPzNxW7Gr6bgMIPNQqIowxRzHkVtqOuKT4vozNE6QrMAjFDUTyAEAEjk+CwkcjyJlFxVvp9nnZkb70CoRGejj0KKuDZIFQdHk1Bs20d5XTj+uyAIHgUQvJ03WC4AIJ9PGPL55Mwdqcr31xJY33AsmrvkssoZikwTd+VnkJZs+plMnl1q/o7zKZjT6bAaiMwCXAC4ke+vpr3Upy5FueNOoH5uC4ZQNHYkM1nw8T+h8D0wSyheBGcBA0BQk3ipCYCFsbFzitncj3lv/9w08P3LZr5fg3w+XHzZqubkpZ9HeeD/yRIMQZbQ6JE8/21PPY4id++wdVwyD2Ol1KvSz1sABI9Ve0ZNC3mN78+f+kaUPG9LzU9A+3VfgJSx+2RsYnsbK/wEVQGQGBr6iVHUP0S9LYxr0ph8fxg8bG1qvf2H5Zi5CaZ3uGaWLB1dqyAEAGZK2BnEto7abkjZBwr7CQxjF2wLmVucqlYS4vshvu8gxPmZi1LbPvPgwPgzt96NEPgqyBLr6EWdnxxXziXMA0ejfgImACC+vwDx/VTSQlZqEzfz/UasA6Xf+g5482Gt8udHkbZIp6LnKV6Z38X9BNOwFlhnHncFALLjF74mnU79h6rI4vsTwPfDH1mszOejjIJdMBDW5RrMYQcCA9rOndSlCBUAEOL7odUE3NbtqqnfBYZsZIhC20LGeQIKAJDP52uQz+dqciCsi5CmJqYhvp9eSEnl729EYr8tpQHWBVtMFRnGJ2BBCIuglwsFABG+H5/oxSd7/bdfPQQKzQLY6MT9BCsAgPj+/0F8/6tIsVhJju3K56Oeet0xIiEQaNofIXzsbSszgLFtWyQxeYCm8uBXN/L97jBT80ZZr5+gPAMsx4eMnIkc6VrdBw4H8JARxc58Ps1Tkfd7FpoFgA7D9xNo81u39qBDcxVXl5k7cQvf733z8iUU9hP094e0VHz4SV0vnkZ2G45GyzltVwps8MvfflNRmvHj68nTNYT8BIbxU411rr9noB/h7d/hwuL724HvDyrK93vasoLCCfkJMC/A2/rBzgBN7p32335BxatUrXcd3GNc66ArvqGEB4Cl1BJKzFXy5P70r5Kp2WMRSU2vMX3+prx1U/unUT5He8/8T4DaAAhFInAVT1/tQeIZgBXyJYIctcX3RyeogYyWGh7erheKVAwU/m7g74dfPK4BTRsqE0G8dYDH1dCy4mGfQBkAqaGRW/Vi4RJSEwE4KdPT39+yymkBwS8DANy84gxKDcbhLucSJTeLDm4BxbSCiEtg/HIoNOUOZi0Iu/vXwKkZ26+0bQUjOCVjEYy/cry/IiII3MKPAflzBjm69o4OFO0+Ejvv1Mj95zaoAU37IbiBN5O9VI0KBh/BPyHt++vJDC/CZ9QbHKff3EIN4GWeYTwEb/3ZrF7VDN63UH6/q9oa8AHQ4gjxAeADoMU10OLi+zOAD4AW10CLi+/PAD4AWlwDLS7+/wGL4DC0mc05xQAAAABJRU5ErkJggg==";

const Alert = () => {
    const { setFinish } = useStore();
    return (React.createElement("div", { className: "z-20 absolute top-14 top-0 backdrop-blur-[32px] left-0 bottom-0 right-0 rounded-2xl flex flex-col items-center justify-center" },
        React.createElement("span", { className: "w-32 h-32 items-center justify-center flex rounded-full border-4 border-lightdanger" },
            React.createElement("span", { className: "alert_comn_snd_spn" },
                React.createElement("img", { src: String(img$4), alt: "alert", className: "w-12 h-12" }))),
        React.createElement("span", { className: "mt-4 font-bold text-black text-xl" }, "Alert!"),
        React.createElement("span", { className: "mt-2 mt-4 text-black text-[16px] p-5 p-0 text-[18px] w-[35%] text-center" }, "Your onboarding process can not be completed without Aadhaar verification. Please complete the same to proceed."),
        React.createElement(ButtonGlobal, { className: "bg-bg-sky bg-black text-white font-semibold mt-8 py-2 py-2 px-8 w-[80%] w-[10%] text-lg px-8 rounded", onClick: () => {
                setFinish(false);
            } }, "Go Back")));
};

var img$3 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='13.564' viewBox='0 0 18 13.564'%3e %3cpath id='Path_8520' data-name='Path 8520' d='M6.291%2c9.2c1.35-1.356%2c2.668-2.68%2c3.987-4q2.3-2.3%2c4.6-4.6a1.8%2c1.8%2c0%2c0%2c1%2c2.715%2c2.351c-.091.111-.2.211-.3.313L7.775%2c12.8a1.854%2c1.854%2c0%2c0%2c1-3.009-.014C3.361%2c11.378%2c1.949%2c9.978.555%2c8.561a1.793%2c1.793%2c0%2c0%2c1%2c.813-3.043%2c1.771%2c1.771%2c0%2c0%2c1%2c1.767.535Q4.553%2c7.48%2c5.977%2c8.9c.092.092.187.179.313.3' transform='translate(0 0.001)' fill='%2300C341'/%3e%3c/svg%3e";

const Fetching = () => {
    const { setFetchData } = useStore();
    return (React.createElement("div", { className: "z-20 absolute top-[7.5rem] top-0 backdrop-blur-[70px] left-0 bottom-0 right-0 rounded-2xl flex flex-col items-center justify-center" },
        React.createElement("span", { className: "w-32 h-32 items-center justify-center flex rounded-full border-4 border-success" },
            React.createElement("span", { className: "w-24 h-24 items-center justify-center flex rounded-full bg-white drop-shadow-2xl", onClick: () => {
                    setFetchData(false);
                } },
                React.createElement("span", { className: "w-24 h-24 items-center justify-center flex flex-col rounded-full" },
                    React.createElement("img", { src: img$3, alt: "complete mark", className: "w-[3rem] h-[2.3rem]" }),
                    React.createElement("div", { className: "text-success" }, "70%")))),
        React.createElement("span", { className: "mt-4 font-bold text-black text-xl" }, "Fetching Details!"),
        React.createElement("span", { className: "mt-4 text-black text-[16px] text-[16px] font-[500] font-normal text-center text-start p-2" }, "Please wait while we fetch details from PAN. This may take a few seconds.")));
};

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAMAAACfvvDEAAABSlBMVEUAAAAAAAAAAAAAAACZmTPzxVEuCQnQrE6TJydlHR3HKirRrEr/0Vv/33Z7IiDELi7wwlfTMDDTLy/pZ2b423TqhofnTEno9f7p9/zoQT3qsbbp8Pn/43jTLy/pVFLrQz/rSUbrt7vpXFrp7PXqR0PqoaTqp6rq+P8Ecs4Fc85RjthSj9hjnN5ont6NxPONxPSv2P2y2v6z2f2z2v600/W02v602/612/622/623P633P643f663f+73v+83v+83/++udW+3//Bi5/B4P/B4f/CiJrC4f/EgZPE4v7E4v/F4/7H5P7Ig5LJZnHKv9XLV2DMWGDMv9bMwNbM5P3M5f7M5v/N3fPOSlDO5/7QPkHR6f7S6v7TLS3TLy/TNDTT6v7UWFzW7P7X2+vY7P7Y7f7oQT7oRULp9f/qQz/q9v/+4oD/0Vv/4Xf/43jhJEaqAAAAKHRSTlMAAgMEBRYcMTQ1Nzc4OFlkZJbk6fP2+Pj4+vr7+/z8/Pz8/f39/f3+LN7aYAAAAVhJREFUOMvllNdOw0AQRU3oEHrvHZLQGQyEGtNNJ2B6aKEkOPz/K3vdbWVlI5Qn7sP47OhotNauLQh6ylVVzeVLt+BJNc/8zmtmPfnimsFnBjCJtmR+igKbIYeZSJwkLxVFuUiysKeC57kJxbZYmWHBy3aa0GRCP8A2sepFP2MKIya0u8xarMZc5qgJWqvPOdJuazQAaAENO4ZWvLMMfrIMgT5AbaBWUBeoQzfrUizPaZZX0CPoDfRgUeq3ZhXwCN0r0BnoHnQLegH1GBsFE7rkpjmLrPNsOCaiwxtW9k5ZObgTiXau54n2n5aINhvLnOceZwZJKBsoqygrKMtEIdcNiQe8IYUxSRSxK1qUyZNdjzkVjY4jJC+k067Pbv1/mJOBzSzMGWO6kdgfTW2fs5FIzJEJiWtur7kiyVzT74YUwpwOYpZw/saONOtmvb+Z083ScLjGL0z7ASjEf5erpC1gAAAAAElFTkSuQmCC";

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABhlBMVEUAAAAAAAAAZmYzZjOZMzOZZgAqVSoqVYCAKiqAVQAARERVVVVQUFAbQ0NDQ0NRQ0NRUVEAAAAAAAAAAAgACAg3fEx8MDCDMDAfaneAagBoY2MeandnZ2cAX2NkYGBmY19jXV0dVGEAXmMdTylgDDVqYAI7iVSLfQIAfIOMMjInbTkub4OBFEaLcQDkzwRg4IsAzNbkUlJOuNg/r1zTHHH/twD5+PkA5e76+Pn69/ol5/H79/r69vj69/hy0PH17Or17On17esA5O9r+pv37ez/XFz/5wX16+pbzPHrHn8A5O9EwmRTzvD/zAAA4+7/5wVEwmPrHoFEwWTrHYBdzPFezPFr+pv/XFz/zAAAGRoA5O8j5u8u5/FDwGJZ6/Ndy/Fey/Fkze9r+pt20fCT1u7A4+vD8vfqHIHv6unx6unz9vn16uj16+n26Ob29/n36+n51db69ff69vj69/n7zM/79/n87Ov9w8b9xMj95+T+wsX+4t7+4t//XFz/ub7/ywD/3Nf/5wXLeBJiAAAAWXRSTlMAAQUFBQUGBgYGDw8QExMTExwdHh8lJSU6Ojs8PkNKS01PampqanBwcXF1dXV1w8XJyc/Q0NHS1NXY6Ojp6evs7e7w8PDw8vP09PX19fX29vr6+/v+/v7+/skBZukAAAHqSURBVDjLjdXpV9QwEADwKSCnClsO7wsQBAVEFG9FUUFRATl2u1qoFS1KxCNeoL3+c5MmWVo6ebvzqUl+bzJ57aQAYMzHYTgC2hjyfW/J4E/n45jR8IVOPvYZ9bx+ljMWNLyGy3FfUM+AeUVDnPqKLkJcoS2YbKhQL0WPYfQISqsU4MGgoiWcFhW9BPBEUstMltomKaWEkJmOZGhakj7lo1FOS5ZldQGcpEmQJM4CdLLpIqdX5SYH2IkKbNK8TdOUTCWTAD3N2aJYAkqzlJBkq3yYNE+JiZ71joL/ouCPolOYlCei36MoCoJgS9ozCFU5I0EDlTcvD0r5TdHPkrbn6I1KoZLuSvpAu/8vRb9qK6D7a92qTv8K+ptUp3SH0x+kFkrXXr/dIDXQ7TILh8VHLb0p5Ieyos57IR/laFsif5b3qPMloYc1L7acpo7mxcJxJj9l6SaTp7FP6y6lb7L0HSH30e+1UNlf0XVCCpjkDbOPOvmGqTsh2/BWlt6TbdjdKOFlvrQsmvtUmp4Tzb3qurY9weVDuSSvjNbrYvz8kLwyXJdTew7ggsqygl9Eq5Law7C3IU5dRe0UPYrJbpQ2YbQ+RV/WWsACGIpewemYoux31CvorO5nNC1oH382njF6Uf+LG2D0Fcv5H6CNez5HWsjiAAAAAElFTkSuQmCC";

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA21BMVEUAAACKioy1t7egpanbwFI1iL6ssrW9w8bExrkpgLovqMwwicQwqMwxicQxqMw2kMs7l9M9mdM/mtJAm9JApbtBm9JCnNJIodFPptBQp9BRqdBUqs9Vq89VrM9WrM9Yrs5Zrs5fsspgtM1htM1htc1itc1jtsxmucxnucxvtMp5vL56vL1/jI1/jY6DuMmEuMmFucmGjISHoKiOvsqVpKSVpaWav8mfxJ6gxZ6lxZqxkEa0yI69w8e/w8fAxMfFxrfKq07Lq07ev1Tfv1Xh0Wrh0mni0mnr02Hz1VsivMZlAAAACXRSTlMAWVm+3t/g8/osabwGAAAA/ElEQVQ4y83Ta1OCQBSA4S0DNStBLCtpLVfESzczyZAuWl7+/y/y7JwBV0AlUKf3y5k583zY3ZklJJgTjISWAKbDIVF8SWQL8IbSEgxKqboeNiBFucAhrTp7UpjKfPkCWGWsAoMxdrs449HM16pb/wUO3tz6CHVdv8JxuQQbixCGXWY38Lfl1kbIDOMaRs0wznf8PO+ml3fGOo7yf3me6dhtglDTtAIONd6tf77dhghzXnkRjmwhDrNCeQEO7R70eg91EL7wxQNfZE/jQf4O5jFURHjHF2d8sQ9oWU9NEXat58dQCD//U4QfsDjZzxk3wAMnUofEiRiRozl5DjsGwqb6StyYAAAAAElFTkSuQmCC";

const SelectionScreen = ({ stepData, handleSubmit, isDisabledCTA }) => {
    var _a, _b, _c;
    const { id, name, label, primaryCTAText, form_data } = stepData;
    const [roleVal, setRoleVal] = React.useState(2);
    const handleChange = (e) => {
        setRoleVal(parseInt(e.target.value));
    };
    return (React.createElement("div", { className: "bg-lightdefault-100 rounded-lg p-8 flex flex-col max-w-md mt-10 md:mt-0", id: `step_${id}_${name}` },
        React.createElement("h2", { className: "text-lightdefault-900 text-lg font-medium title-font mb-5" }, label),
        ((_a = form_data === null || form_data === void 0 ? void 0 : form_data.roles) === null || _a === void 0 ? void 0 : _a.length) > 0 &&
            ((_c = (_b = form_data.roles) === null || _b === void 0 ? void 0 : _b.filter((role) => role.isVisible)) === null || _c === void 0 ? void 0 : _c.map((role, idx) => (React.createElement("div", { className: "flex mb-5", key: `${idx}_${role.id}` },
                React.createElement("div", { className: "mr-5 border-2 border-slate-200  p-4 rounded-full" },
                    React.createElement("img", { src: role.id === 1 ? img$2 : role.id === 2 ? img$1 : img })),
                React.createElement("div", { className: "flex flex-col mr-5 w-full justify-center" },
                    React.createElement("label", null, role.label),
                    React.createElement("div", { className: "text-xs font-light" }, role.description)),
                React.createElement("div", null,
                    React.createElement("input", { id: role.id, type: "radio", value: role.merchant_type, name: "role", onChange: handleChange, checked: roleVal === role.merchant_type })))))),
        React.createElement(ButtonGlobal, { className: "bg-primary bg-black text-white font-bold mt-6 mt-8 py-2 px-8 rounded", onClick: () => {
                handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: { merchant_type: roleVal } }));
            }, disabled: isDisabledCTA }, isDisabledCTA ? 'Please wait...' : primaryCTAText)));
};

const secretPinValidationSchema = create$3().shape({
    first_okekey: create$6().required('Required').min(4, 'Must be exactly 4 digits').max(4, 'Must be exactly 4 digits'),
    second_okekey: create$6()
        .oneOf([create$9('first_okekey')], 'secret PIN must match')
        .required('Required')
});
const SecretPin = ({ stepData, handleSubmit, isDisabledCTA, handleStepCallBack }) => {
    const { label, description, isSkipable, primaryCTAText } = stepData;
    const [formValues, setFormValues] = React.useState({
        first_okekey: '',
        second_okekey: ''
    });
    const handleSkip = () => {
        handleSubmit(Object.assign(Object.assign({}, stepData), { stepStatus: 2 }));
    };
    React.useEffect(() => {
        handleStepCallBack({ type: stepData.id, method: 'getBookletNumber' });
        // handleStepCallBack({ type: stepData.id, method: 'getBookletKey' });
        // handleStepCallBack({ type: stepData.id, method: 'getBookletKey' });
    }, []);
    return (React.createElement("div", { className: "pt-8 sm:p-8" },
        React.createElement(Formik, { initialValues: formValues, validationSchema: secretPinValidationSchema, onSubmit: (formData) => {
                handleSubmit(Object.assign(Object.assign({}, stepData), { form_data: formData, stepStatus: 3 }));
            } }, ({ errors, touched, values, handleChange }) => (React.createElement(Form, { className: "bg-white mt-4 sm:ml-2 xl:ml-6 w-full mr-2" },
            React.createElement("div", { className: "text-[22px] font-[500] sm:font-[400]" }, label),
            React.createElement("div", { className: "mt-3 text-[16px] sm:text-[14px] font-[400] sm:font-[300]" }, description),
            React.createElement("div", { className: "mt-10 relative" }),
            React.createElement("span", { className: `flex flex-col sm:block` },
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Secret PIN"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "first_okekey", value: values.first_okekey, onChange: handleChange('first_okekey'), id: "username", type: "number", maxLength: "4", placeholder: "" }),
                    errors.first_okekey && touched.first_okekey ? React.createElement("div", { className: "text-red" }, errors.first_okekey) : null),
                React.createElement("div", null,
                    React.createElement(Labelglobal, { className: "block text-black text-sm font-bold mb-2" }, "Confirm Secret PIN"),
                    React.createElement(InputGlobal, { className: "block w-full border-2 border-lightdefault rounded py-2 px-3 mb-2 leading-tight outline-none", name: "second_okekey", value: values.second_okekey, onChange: handleChange('second_okekey'), id: "username", type: "number", maxLength: "4", placeholder: "" }),
                    errors.second_okekey && touched.second_okekey ? React.createElement("div", { className: "text-red" }, errors.second_okekey) : null),
                "Note:",
                React.createElement("div", { className: "ml-8" },
                    React.createElement("li", null, "Please set a stron secret PIN to secure your account"),
                    React.createElement("li", null, "Your 4-digit secret pin will be required in all the transactions")),
                React.createElement(ButtonGlobal, { className: "bg-primary hover:bg-black text-white font-semibold mt-4 py-2 px-8 rounded w-fit sm:w-fit text-[16px]", 
                    // onClick={handleAadhaarConsentClick}
                    type: "submit", disabled: isDisabledCTA }, isDisabledCTA ? 'Please wait...' : primaryCTAText),
                isSkipable && (React.createElement(ButtonGlobal, { className: "font-semibold sm:ml-10 mt-6", onClick: handleSkip }, "Skip this step"))))))));
};

const OnBoradingWrapper = ({ sideBarToggle, setSideBarToggle, handleSubmit, stepResponse, shopTypes, selectedMerchantType, stateTypes, handleStepCallBack, userData }) => {
    const { currentStep, panStatus, fetchData, finish, steps, preview, selectedFile, image, cameraType, setCurrentStepInitial, setStepsData } = useStore();
    const [isDisable, setIsDisable] = React.useState(false);
    const [currentStepData, setCurrentStepData] = React.useState();
    const handleStepSubmit = (data) => {
        var _a, _b;
        if (data.id === 1) {
            const currentStepIndex = (_a = steps === null || steps === void 0 ? void 0 : steps.map((step) => step === null || step === void 0 ? void 0 : step.id)) === null || _a === void 0 ? void 0 : _a.indexOf(data === null || data === void 0 ? void 0 : data.id);
            setCurrentStepInitial((_b = steps[currentStepIndex + 1]) === null || _b === void 0 ? void 0 : _b.id);
            setStepsData(data);
            setCurrentStepData(data);
            // handleSubmit(data);
        }
        else {
            setIsDisable(true);
            setCurrentStepData(data);
            handleSubmit(data);
        }
        // return void;
    };
    const renderStep = (currentStep) => {
        var _a;
        const stepData = steps === null || steps === void 0 ? void 0 : steps.find((step) => step.id === currentStep);
        if (stepData) {
            switch (currentStep) {
                case 2:
                    return React.createElement(SelectionScreen, { handleSubmit: handleStepSubmit, stepData: stepData, isDisabledCTA: isDisable });
                case 3:
                    return React.createElement(LoctionCapture, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
                case 4:
                    return React.createElement(AdharVerifiction, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
                case 5:
                    return React.createElement(AadhaarConsent, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
                case 6:
                    return React.createElement(ConfirmAadhaarNumber, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
                case 7:
                    return React.createElement(AadhaarNumberOtpVerify, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, handleStepCallBack: handleStepCallBack });
                case 8:
                    return React.createElement(PanVerification, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, shopTypes: shopTypes });
                case 9:
                    if (((_a = userData === null || userData === void 0 ? void 0 : userData.userDetails) === null || _a === void 0 ? void 0 : _a.user_type) === 1) {
                        return React.createElement(Business, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, shopTypes: shopTypes, stateTypes: stateTypes });
                    }
                    else {
                        return React.createElement(BusinessMerchant, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, shopTypes: shopTypes, stateTypes: stateTypes });
                    }
                case 10:
                    return React.createElement(SecretPin, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, handleStepCallBack: handleStepCallBack });
                case 11:
                    return React.createElement(VideoKYC, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
                case 12:
                    return React.createElement(SignAgreement, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, handleStepCallBack: handleStepCallBack });
                case 13:
                    return React.createElement(ActivationPlan, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable, handleStepCallBack: handleStepCallBack });
                case 14:
                    return React.createElement(OnboardingStatus, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
                case 15:
                    return React.createElement(PanAdharMatch, null);
                default:
                    return React.createElement(Welcome, { stepData: stepData, handleSubmit: handleStepSubmit, isDisabledCTA: isDisable });
            }
        }
    };
    React.useEffect(() => {
        var _a, _b;
        if (stepResponse) {
            if ((stepResponse === null || stepResponse === void 0 ? void 0 : stepResponse.status) === 0 || (currentStepData === null || currentStepData === void 0 ? void 0 : currentStepData.id) === 4) {
                if (currentStepData) {
                    if ((currentStepData === null || currentStepData === void 0 ? void 0 : currentStepData.id) !== 2) {
                        const currentStepIndex = (_a = steps.map((step) => step === null || step === void 0 ? void 0 : step.id)) === null || _a === void 0 ? void 0 : _a.indexOf(currentStepData === null || currentStepData === void 0 ? void 0 : currentStepData.id);
                        setCurrentStepInitial((_b = steps[currentStepIndex + 1]) === null || _b === void 0 ? void 0 : _b.id);
                    }
                    setStepsData(currentStepData);
                    setCurrentStepData(null);
                }
            }
            setIsDisable(false);
        }
    }, [stepResponse]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${currentStep === 1 && 'pt-0'} ${currentStep === 0 && 'pt-7'} h-screens sm:pt-7 px-8 w-full md:px-24` },
            React.createElement("div", { className: "flex items-center" },
                React.createElement("div", { className: "flex flex-col w-full h-full relative" },
                    React.createElement("div", { className: "sm:flex sm:justify-between" },
                        React.createElement("span", { className: "hidden sm:block md:block lg:block xl:block" },
                            React.createElement(Sidebar, { steps: steps, userData: userData })),
                        React.createElement("div", { className: "flex w-full rounded-2xl sm:ml-8 mb-10 pb-10 sm:bg-white relative" }, renderStep(currentStep))),
                    finish === true ? (React.createElement("span", { className: "hidden sm:block" },
                        React.createElement(Alert, null))) : ('')))),
        fetchData === true ? (React.createElement("span", { className: "hidden" },
            React.createElement(Fetching, null))) : (''),
        finish === true ? (React.createElement("span", { className: "hidden" },
            React.createElement(Alert, null))) : (''),
        React.createElement("span", { className: "hidden block" }, sideBarToggle ? (React.createElement("div", { className: "z-20 absolute top-14 top-0 backdrop-blur-[1px] left-0 bottom-0 right-0 rounded-2xl flex justify-center" },
            React.createElement(Sidebar, { steps: steps, userData: userData }),
            React.createElement("div", { className: "w-[25%]", onClick: () => setSideBarToggle((prev) => !prev) }))) : (''))));
};

var css_248z = "/*! tailwindcss v3.2.7 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{bottom:0;left:0;right:0;top:0}.-right-2{right:-.5rem}.-right-2\\.5{right:-.625rem}.-top-2{top:-.5rem}.-top-2\\.5{top:-.625rem}.bottom-0{bottom:0}.bottom-1{bottom:.25rem}.bottom-1\\.5{bottom:.375rem}.left-0{left:0}.right-0{right:0}.top-0{top:0}.top-14{top:3.5rem}.top-\\[7\\.5rem\\]{top:7.5rem}.z-10{z-index:10}.z-20{z-index:20}.z-40{z-index:40}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-0{margin-bottom:0}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-7{margin-bottom:1.75rem}.mb-8{margin-bottom:2rem}.ml-1{margin-left:.25rem}.ml-1\\.5{margin-left:.375rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-5{margin-left:1.25rem}.ml-6{margin-left:1.5rem}.ml-8{margin-left:2rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-5{margin-right:1.25rem}.mr-auto{margin-right:auto}.mt-0{margin-top:0}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:.5rem}.mt-20{margin-top:5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.hidden{display:none}.h-0{height:0}.h-12{height:3rem}.h-16{height:4rem}.h-2{height:.5rem}.h-2\\.5{height:.625rem}.h-24{height:6rem}.h-28{height:7rem}.h-32{height:8rem}.h-4{height:1rem}.h-48{height:12rem}.h-52{height:13rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[11px\\]{height:11px}.h-\\[12px\\]{height:12px}.h-\\[15px\\]{height:15px}.h-\\[16px\\]{height:16px}.h-\\[16vw\\]{height:16vw}.h-\\[180px\\]{height:180px}.h-\\[18px\\]{height:18px}.h-\\[190px\\]{height:190px}.h-\\[2\\.3rem\\]{height:2.3rem}.h-\\[20px\\]{height:20px}.h-\\[2rem\\]{height:2rem}.h-\\[2vh\\]{height:2vh}.h-\\[32px\\]{height:32px}.h-\\[35px\\]{height:35px}.h-\\[3rem\\]{height:3rem}.h-\\[4vh\\]{height:4vh}.h-\\[56px\\]{height:56px}.h-full{height:100%}.max-h-8{max-height:2rem}.min-h-\\[80vh\\]{min-height:80vh}.min-h-\\[85\\%\\]{min-height:85%}.min-h-screen{min-height:100vh}.w-0{width:0}.w-12{width:3rem}.w-16{width:4rem}.w-24{width:6rem}.w-28{width:7rem}.w-32{width:8rem}.w-4{width:1rem}.w-48{width:12rem}.w-52{width:13rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-72{width:18rem}.w-8{width:2rem}.w-\\[10\\%\\]{width:10%}.w-\\[100\\%\\]{width:100%}.w-\\[10rem\\]{width:10rem}.w-\\[15px\\]{width:15px}.w-\\[16px\\]{width:16px}.w-\\[16vw\\]{width:16vw}.w-\\[18px\\]{width:18px}.w-\\[20\\%\\]{width:20%}.w-\\[25\\%\\]{width:25%}.w-\\[2rem\\]{width:2rem}.w-\\[32px\\]{width:32px}.w-\\[35\\%\\]{width:35%}.w-\\[35px\\]{width:35px}.w-\\[3rem\\]{width:3rem}.w-\\[50\\%\\]{width:50%}.w-\\[60\\%\\]{width:60%}.w-\\[65\\%\\]{width:65%}.w-\\[6rem\\]{width:6rem}.w-\\[75\\%\\]{width:75%}.w-\\[80\\%\\]{width:80%}.w-\\[80px\\]{width:80px}.w-\\[90\\%\\]{width:90%}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.max-w-3xl{max-width:48rem}.max-w-\\[21rem\\]{max-width:21rem}.max-w-\\[37rem\\]{max-width:37rem}.max-w-md{max-width:28rem}.flex-col{flex-direction:column}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.self-start{align-self:flex-start}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-\\[10px\\]{border-radius:10px}.rounded-\\[4px\\]{border-radius:4px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-b-2xl{border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}.rounded-t-2xl{border-top-left-radius:1rem;border-top-right-radius:1rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-4{border-width:4px}.border-b-2{border-bottom-width:2px}.border-b-\\[8px\\]{border-bottom-width:8px}.border-r-\\[12px\\]{border-right-width:12px}.border-t-\\[8px\\]{border-top-width:8px}.border-dashed{border-style:dashed}.border-darkdanger{--tw-border-opacity:1;border-color:rgb(255 64 64/var(--tw-border-opacity))}.border-default{--tw-border-opacity:1;border-color:rgb(212 212 212/var(--tw-border-opacity))}.border-lightdanger{--tw-border-opacity:1;border-color:rgb(255 64 129/var(--tw-border-opacity))}.border-lightdefault{--tw-border-opacity:1;border-color:rgb(242 242 242/var(--tw-border-opacity))}.border-slate-200{--tw-border-opacity:1;border-color:rgb(226 232 240/var(--tw-border-opacity))}.border-success{--tw-border-opacity:1;border-color:rgb(0 195 65/var(--tw-border-opacity))}.border-b-white{--tw-border-opacity:1;border-bottom-color:rgb(255 255 255/var(--tw-border-opacity))}.border-r-darkdanger{--tw-border-opacity:1;border-right-color:rgb(255 64 64/var(--tw-border-opacity))}.border-t-white{--tw-border-opacity:1;border-top-color:rgb(255 255 255/var(--tw-border-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgb(12 36 59/var(--tw-bg-opacity))}.bg-danger{background-color:#ff40401a}.bg-darkdanger{--tw-bg-opacity:1;background-color:rgb(255 64 64/var(--tw-bg-opacity))}.bg-default{--tw-bg-opacity:1;background-color:rgb(212 212 212/var(--tw-bg-opacity))}.bg-lightdefault{--tw-bg-opacity:1;background-color:rgb(242 242 242/var(--tw-bg-opacity))}.bg-primary{--tw-bg-opacity:1;background-color:rgb(31 90 167/var(--tw-bg-opacity))}.bg-success{--tw-bg-opacity:1;background-color:rgb(0 195 65/var(--tw-bg-opacity))}.bg-warning{--tw-bg-opacity:1;background-color:rgb(254 159 0/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-0{padding:0}.p-1{padding:.25rem}.p-10{padding:2.5rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-\\[5px\\]{padding:5px}.px-0{padding-left:0;padding-right:0}.px-0\\.5{padding-left:.125rem;padding-right:.125rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-24{padding-left:6rem;padding-right:6rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[3\\.5rem\\]{padding-left:3.5rem;padding-right:3.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-\\[6px\\]{padding-bottom:6px;padding-top:6px}.py-\\[7px\\]{padding-bottom:7px;padding-top:7px}.py-\\[8px\\]{padding-bottom:8px;padding-top:8px}.py-\\[9px\\]{padding-bottom:9px;padding-top:9px}.pb-10{padding-bottom:2.5rem}.pb-2{padding-bottom:.5rem}.pb-5{padding-bottom:1.25rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pl-5{padding-left:1.25rem}.pr-2{padding-right:.5rem}.pr-4{padding-right:1rem}.pt-0{padding-top:0}.pt-1{padding-top:.25rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.pt-7{padding-top:1.75rem}.pt-8{padding-top:2rem}.text-center{text-align:center}.text-start{text-align:start}.text-end{text-align:end}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.text-\\[12px\\]{font-size:12px}.text-\\[14px\\]{font-size:14px}.text-\\[15\\.5px\\]{font-size:15.5px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[18px\\]{font-size:18px}.text-\\[22px\\]{font-size:22px}.text-\\[24px\\]{font-size:24px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-\\[300\\]{font-weight:300}.font-\\[400\\]{font-weight:400}.font-\\[450\\]{font-weight:450}.font-\\[500\\]{font-weight:500}.font-\\[600\\]{font-weight:600}.font-bold{font-weight:700}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.leading-tight{line-height:1.25}.text-black{--tw-text-opacity:1;color:rgb(12 36 59/var(--tw-text-opacity))}.text-darkdanger{--tw-text-opacity:1;color:rgb(255 64 64/var(--tw-text-opacity))}.text-darkdefault{--tw-text-opacity:1;color:rgb(85 85 85/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-primary{--tw-text-opacity:1;color:rgb(31 90 167/var(--tw-text-opacity))}.text-success{--tw-text-opacity:1;color:rgb(0 195 65/var(--tw-text-opacity))}.text-warning{--tw-text-opacity:1;color:rgb(254 159 0/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.opacity-25{opacity:.25}.shadow-2xl{--tw-shadow:0px 0px 7px -2px #1f5aa7;--tw-shadow-colored:0px 0px 7px -2px var(--tw-shadow-color)}.shadow-2xl,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -20px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -20px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.drop-shadow-2xl{--tw-drop-shadow:drop-shadow(0 25px 25px rgba(0,0,0,.15))}.drop-shadow-2xl,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px)}.backdrop-blur-\\[1px\\],.backdrop-blur-\\[32px\\]{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-\\[32px\\]{--tw-backdrop-blur:blur(32px)}.backdrop-blur-\\[70px\\]{--tw-backdrop-blur:blur(70px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition-all{transition-duration:.15s}.ease-linear{transition-timing-function:linear}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgb(12 36 59/var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-primary:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(31 90 167/var(--tw-ring-opacity))}@media (max-width:640px){.max-\\[640px\\]\\:mb-2{margin-bottom:.5rem}.max-\\[640px\\]\\:mb-8{margin-bottom:2rem}.max-\\[640px\\]\\:mr-0{margin-right:0}.max-\\[640px\\]\\:flex{display:flex}.max-\\[640px\\]\\:w-\\[100\\%\\]{width:100%}.max-\\[640px\\]\\:items-center{align-items:center}}@media (max-width:450px){.max-\\[450px\\]\\:w-\\[100\\%\\]{width:100%}}@media (min-width:640px){.sm\\:mb-2{margin-bottom:.5rem}.sm\\:mb-8{margin-bottom:2rem}.sm\\:ml-0{margin-left:0}.sm\\:ml-10{margin-left:2.5rem}.sm\\:ml-2{margin-left:.5rem}.sm\\:ml-5{margin-left:1.25rem}.sm\\:ml-8{margin-left:2rem}.sm\\:mr-0{margin-right:0}.sm\\:mr-3{margin-right:.75rem}.sm\\:mt-0{margin-top:0}.sm\\:mt-4{margin-top:1rem}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-3{height:.75rem}.sm\\:h-7{height:1.75rem}.sm\\:min-h-\\[85\\%\\]{min-height:85%}.sm\\:w-7{width:1.75rem}.sm\\:w-\\[100\\%\\]{width:100%}.sm\\:w-\\[10rem\\]{width:10rem}.sm\\:w-\\[32rem\\]{width:32rem}.sm\\:w-fit{width:-moz-fit-content;width:fit-content}.sm\\:w-full{width:100%}.sm\\:max-w-\\[32rem\\]{max-width:32rem}.sm\\:max-w-\\[57rem\\]{max-width:57rem}.sm\\:flex-col{flex-direction:column}.sm\\:items-center{align-items:center}.sm\\:justify-center{justify-content:center}.sm\\:justify-between{justify-content:space-between}.sm\\:rounded-2xl{border-radius:1rem}.sm\\:bg-lightdefault{--tw-bg-opacity:1;background-color:rgb(242 242 242/var(--tw-bg-opacity))}.sm\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.sm\\:p-8{padding:2rem}.sm\\:pt-7{padding-top:1.75rem}.sm\\:text-\\[12px\\]{font-size:12px}.sm\\:text-\\[14px\\]{font-size:14px}.sm\\:text-\\[16px\\]{font-size:16px}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:text-xs{font-size:.75rem;line-height:1rem}.sm\\:font-\\[300\\]{font-weight:300}.sm\\:font-\\[400\\]{font-weight:400}.sm\\:font-\\[500\\]{font-weight:500}.sm\\:font-normal{font-weight:400}.min-\\[640px\\]\\:ml-6{margin-left:1.5rem}.min-\\[640px\\]\\:mr-3{margin-right:.75rem}}@media (min-width:768px){.md\\:mb-2{margin-bottom:.5rem}.md\\:mr-0{margin-right:0}.md\\:mt-0{margin-top:0}.md\\:block{display:block}.md\\:w-\\[100\\%\\]{width:100%}.md\\:w-\\[80\\%\\]{width:80%}.md\\:w-full{width:100%}.md\\:px-24{padding-left:6rem;padding-right:6rem}}@media (min-width:1024px){.lg\\:mr-4{margin-right:1rem}.lg\\:block{display:block}.lg\\:w-\\[100\\%\\]{width:100%}.lg\\:w-\\[50\\%\\]{width:50%}.lg\\:w-\\[70\\%\\]{width:70%}.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:ml-6{margin-left:1.5rem}.xl\\:ml-9{margin-left:2.25rem}.xl\\:mr-6{margin-right:1.5rem}.xl\\:block{display:block}.xl\\:grid{display:grid}.xl\\:w-4\\/5{width:80%}.xl\\:w-\\[36\\%\\]{width:36%}.xl\\:w-\\[45\\%\\]{width:45%}.xl\\:w-\\[50\\%\\]{width:50%}.xl\\:w-\\[55\\%\\]{width:55%}.xl\\:w-full{width:100%}.xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.xl\\:flex-row{flex-direction:row}.xl\\:justify-between{justify-content:space-between}.xl\\:rounded-md{border-radius:.375rem}.xl\\:border-dashed{border-style:dashed}.xl\\:border-default{--tw-border-opacity:1;border-color:rgb(212 212 212/var(--tw-border-opacity))}.xl\\:bg-lightdefault{--tw-bg-opacity:1;background-color:rgb(242 242 242/var(--tw-bg-opacity))}}";
styleInject(css_248z,{"insertAt":"top"});

const OnboardingWidget = ({ defaultStep = '12400', handleSubmit, isBranding = true, stepResponse, shopTypes = [], selectedMerchantType, stateTypes = [], handleStepCallBack, userData, stepsData, theme }) => {
    var _a;
    const { steps, currentStep, setCurrentStepInitial, setInitialStepsData } = useStore();
    const [sideBarToggle, setSideBarToggle] = React.useState(false);
    React.useEffect(() => {
    }, [theme]);
    const handleSidebarToggle = () => {
        setSideBarToggle((prev) => !prev);
    };
    let visibleStepData = stepsData;
    if (visibleStepData) {
        if (((_a = userData === null || userData === void 0 ? void 0 : userData.userDetails) === null || _a === void 0 ? void 0 : _a.user_type) === 3) {
            visibleStepData = visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.filter((step) => step.isVisible && step.id !== 10 && step.id !== 9);
        }
        else {
            visibleStepData = visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.filter((step) => step.isVisible);
        }
    }
    React.useEffect(() => {
        setInitialStepsData(stepsData === null || stepsData === void 0 ? void 0 : stepsData.filter((step) => step.isVisible));
    }, [stepsData]);
    React.useEffect(() => {
        if (visibleStepData) {
            const initialStep = visibleStepData === null || visibleStepData === void 0 ? void 0 : visibleStepData.find((step) => step.role && (defaultStep === null || defaultStep === void 0 ? void 0 : defaultStep.includes(`${step.role}`)));
            setCurrentStepInitial(initialStep ? initialStep === null || initialStep === void 0 ? void 0 : initialStep.id : 3);
        }
    }, [defaultStep]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${currentStep === 0 ? 'bg-lightdefault' : 'bg-white'} sm:bg-lightdefault w-full min-h-screen` },
            isBranding && (React.createElement(React.Fragment, null,
                React.createElement(Header, null),
                React.createElement(Headermobile, { handleSidebarToggle: handleSidebarToggle }))),
            React.createElement(OnBoradingWrapper, { sideBarToggle: sideBarToggle, setSideBarToggle: setSideBarToggle, handleSubmit: handleSubmit, stepResponse: stepResponse, shopTypes: shopTypes, stateTypes: stateTypes, selectedMerchantType: selectedMerchantType, handleStepCallBack: handleStepCallBack, userData: userData }))));
};

exports.OnboardingWidget = OnboardingWidget;
exports.SelectionScreen = SelectionScreen;
//# sourceMappingURL=index.js.map
