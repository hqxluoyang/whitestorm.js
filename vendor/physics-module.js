/*! Physics module "Ammonext" v0.0.1-dev.1 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("THREE"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE"], factory);
	else if(typeof exports === 'object')
		exports["PHYSICS"] = factory(require("THREE"));
	else
		root["PHYSICS"] = factory(root["THREE"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(93);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(91);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(45);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _typeof2 = __webpack_require__(45);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(92);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventable__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Mesh; });








var Mesh = function (_MeshNative) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Mesh, _MeshNative);

  function Mesh(geometry, material, mass) {
    var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { group: false, mask: false };

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Mesh);

    if (!geometry) return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).call(this, geometry, material));

    Object.assign(_this, new __WEBPACK_IMPORTED_MODULE_5__eventable__["a" /* Eventable */]());
    __WEBPACK_IMPORTED_MODULE_5__eventable__["a" /* Eventable */].make(Mesh);

    if (!geometry.boundingBox) geometry.computeBoundingBox();

    _this._physijs = {
      type: null,
      mass: mass || 0,
      touches: [],
      linearVelocity: new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"](),
      angularVelocity: new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"](),
      group: params.group,
      mask: params.mask
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Mesh, [{
    key: 'applyCentralImpulse',
    value: function applyCentralImpulse(force) {
      if (this.world) this.world.execute('applyCentralImpulse', { id: this._physijs.id, x: force.x, y: force.y, z: force.z });
    }
  }, {
    key: 'applyImpulse',
    value: function applyImpulse(force, offset) {
      if (this.world) {
        this.world.execute('applyImpulse', {
          id: this._physijs.id,
          impulse_x: force.x,
          impulse_y: force.y,
          impulse_z: force.z,
          x: offset.x,
          y: offset.y,
          z: offset.z
        });
      }
    }
  }, {
    key: 'applyTorque',
    value: function applyTorque(force) {
      if (this.world) {
        this.world.execute('applyTorque', {
          id: this._physijs.id,
          torque_x: force.x,
          torque_y: force.y,
          torque_z: force.z
        });
      }
    }
  }, {
    key: 'applyCentralForce',
    value: function applyCentralForce(force) {
      if (this.world) this.world.execute('applyCentralForce', { id: this._physijs.id, x: force.x, y: force.y, z: force.z });
    }
  }, {
    key: 'applyForce',
    value: function applyForce(force, offset) {
      if (this.world) {
        this.world.execute('applyForce', {
          id: this._physijs.id,
          force_x: force.x,
          force_y: force.y,
          force_z: force.z,
          x: offset.x,
          y: offset.y,
          z: offset.z
        });
      }
    }
  }, {
    key: 'getAngularVelocity',
    value: function getAngularVelocity() {
      return this._physijs.angularVelocity;
    }
  }, {
    key: 'setAngularVelocity',
    value: function setAngularVelocity(velocity) {
      if (this.world) this.world.execute('setAngularVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z });
    }
  }, {
    key: 'getLinearVelocity',
    value: function getLinearVelocity() {
      return this._physijs.linearVelocity;
    }
  }, {
    key: 'setLinearVelocity',
    value: function setLinearVelocity(velocity) {
      if (this.world) this.world.execute('setLinearVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z });
    }
  }, {
    key: 'setAngularFactor',
    value: function setAngularFactor(factor) {
      if (this.world) this.world.execute('setAngularFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z });
    }
  }, {
    key: 'setLinearFactor',
    value: function setLinearFactor(factor) {
      if (this.world) this.world.execute('setLinearFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z });
    }
  }, {
    key: 'setDamping',
    value: function setDamping(linear, angular) {
      if (this.world) this.world.execute('setDamping', { id: this._physijs.id, linear: linear, angular: angular });
    }
  }, {
    key: 'setCcdMotionThreshold',
    value: function setCcdMotionThreshold(threshold) {
      if (this.world) this.world.execute('setCcdMotionThreshold', { id: this._physijs.id, threshold: threshold });
    }
  }, {
    key: 'setCcdSweptSphereRadius',
    value: function setCcdSweptSphereRadius(radius) {
      if (this.world) this.world.execute('setCcdSweptSphereRadius', { id: this._physijs.id, radius: radius });
    }
  }, {
    key: 'clone',
    value: function clone() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new this.constructor(this.geometry, this.material, params).copy(this);
    }
  }, {
    key: 'mass',
    get: function get() {
      return this._physijs.mass;
    },
    set: function set(mass) {
      this._physijs.mass = mass;
      if (this.world) this.world.execute('updateMass', { id: this._physijs.id, mass: mass });
    }
  }]);

  return Mesh;
}(__WEBPACK_IMPORTED_MODULE_4_three__["Mesh"]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getEulerXYZFromQuaternion", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getQuatertionFromEuler", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp1Quat", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "addObjectChildren", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "MESSAGE_TYPES", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "REPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "COLLISIONREPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "VEHICLEREPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CONSTRAINTREPORT_ITEMSIZE", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp1Vector3", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp2Vector3", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "temp1Matrix4", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "convertWorldPositionToObject", function() { return __WEBPACK_IMPORTED_MODULE_0__api__["m"]; });
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventable__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Eventable", function() { return __WEBPACK_IMPORTED_MODULE_1__eventable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_index__ = __webpack_require__(65);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Mesh", function() { return __WEBPACK_IMPORTED_MODULE_2__core_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Scene", function() { return __WEBPACK_IMPORTED_MODULE_2__core_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Line", function() { return __WEBPACK_IMPORTED_MODULE_2__core_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PhysicsComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__core_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SoftbodyComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__core_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constraints_index__ = __webpack_require__(62);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConeTwistConstraint", function() { return __WEBPACK_IMPORTED_MODULE_3__constraints_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HingeConstraint", function() { return __WEBPACK_IMPORTED_MODULE_3__constraints_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PointConstraint", function() { return __WEBPACK_IMPORTED_MODULE_3__constraints_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SliderConstraint", function() { return __WEBPACK_IMPORTED_MODULE_3__constraints_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DOFConstraint", function() { return __WEBPACK_IMPORTED_MODULE_3__constraints_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meshes_index__ = __webpack_require__(84);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "BoxMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CapsuleMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConcaveMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConeMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ConvexMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CylinderMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HeightfieldMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PlaneMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SphereMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SoftMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ClothMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "RopeMesh", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_index__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_index__ = __webpack_require__(89);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "VehicleTunning", function() { return __WEBPACK_IMPORTED_MODULE_5__vehicle_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Vehicle", function() { return __WEBPACK_IMPORTED_MODULE_5__vehicle_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_index__ = __webpack_require__(67);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createBox", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createConvex", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createConvexConcave", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createConvexConcaveCustom", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createCylinder", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createLine", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createPlane", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createSphere", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createWorld", function() { return __WEBPACK_IMPORTED_MODULE_6__create_index__["i"]; });








/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_three__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getEulerXYZFromQuaternion; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getQuatertionFromEuler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return temp1Quat; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return addObjectChildren; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return MESSAGE_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return REPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return COLLISIONREPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return VEHICLEREPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return CONSTRAINTREPORT_ITEMSIZE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return temp1Vector3; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return temp2Vector3; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return temp1Matrix4; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return convertWorldPositionToObject; });


var MESSAGE_TYPES = {
  WORLDREPORT: 0,
  COLLISIONREPORT: 1,
  VEHICLEREPORT: 2,
  CONSTRAINTREPORT: 3,
  SOFTREPORT: 4
};

var REPORT_ITEMSIZE = 14,
    COLLISIONREPORT_ITEMSIZE = 5,
    VEHICLEREPORT_ITEMSIZE = 9,
    CONSTRAINTREPORT_ITEMSIZE = 6;

var temp1Vector3 = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](),
    temp2Vector3 = new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](),
    temp1Matrix4 = new __WEBPACK_IMPORTED_MODULE_0_three__["Matrix4"](),
    temp1Quat = new __WEBPACK_IMPORTED_MODULE_0_three__["Quaternion"]();

var getEulerXYZFromQuaternion = function getEulerXYZFromQuaternion(x, y, z, w) {
  return new __WEBPACK_IMPORTED_MODULE_0_three__["Vector3"](Math.atan2(2 * (x * w - y * z), w * w - x * x - y * y + z * z), Math.asin(2 * (x * z + y * w)), Math.atan2(2 * (z * w - x * y), w * w + x * x - y * y - z * z));
};

var getQuatertionFromEuler = function getQuatertionFromEuler(x, y, z) {
  var c1 = Math.cos(y);
  var s1 = Math.sin(y);
  var c2 = Math.cos(-z);
  var s2 = Math.sin(-z);
  var c3 = Math.cos(x);
  var s3 = Math.sin(x);
  var c1c2 = c1 * c2;
  var s1s2 = s1 * s2;

  return {
    w: c1c2 * c3 - s1s2 * s3,
    x: c1c2 * s3 + s1s2 * c3,
    y: s1 * c2 * c3 + c1 * s2 * s3,
    z: c1 * s2 * c3 - s1 * c2 * s3
  };
};

var convertWorldPositionToObject = function convertWorldPositionToObject(position, object) {
  temp1Matrix4.identity(); // reset temp matrix

  // Set the temp matrix's rotation to the object's rotation
  temp1Matrix4.identity().makeRotationFromQuaternion(object.quaternion);

  // Invert rotation matrix in order to "unrotate" a point back to object space
  temp1Matrix4.getInverse(temp1Matrix4);

  // Yay! Temp vars!
  temp1Vector3.copy(position);
  temp2Vector3.copy(object.position);

  // Apply the rotation
  return temp1Vector3.sub(temp2Vector3).applyMatrix4(temp1Matrix4);
};

var addObjectChildren = function addObjectChildren(parent, object) {
  for (var i = 0; i < object.children.length; i++) {
    if (object.children[i]._physijs) {
      object.children[i].updateMatrix();
      object.children[i].updateMatrixWorld();

      temp1Vector3.setFromMatrixPosition(object.children[i].matrixWorld);
      temp1Quat.setFromRotationMatrix(object.children[i].matrixWorld);

      object.children[i]._physijs.position_offset = {
        x: temp1Vector3.x,
        y: temp1Vector3.y,
        z: temp1Vector3.z
      };

      object.children[i]._physijs.rotation = {
        x: temp1Quat.x,
        y: temp1Quat.y,
        z: temp1Quat.z,
        w: temp1Quat.w
      };

      parent._physijs.children.push(object.children[i]._physijs);
    }

    addObjectChildren(parent, object.children[i]);
  }
};



/***/ },
/* 7 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 10 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(17)
  , IE8_DOM_DEFINE = __webpack_require__(49)
  , toPrimitive    = __webpack_require__(35)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50)
  , defined = __webpack_require__(25);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(7)
  , core      = __webpack_require__(8)
  , ctx       = __webpack_require__(47)
  , hide      = __webpack_require__(15)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(11)
  , createDesc = __webpack_require__(23);
module.exports = __webpack_require__(9) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(33)('wks')
  , uid        = __webpack_require__(24)
  , Symbol     = __webpack_require__(7).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(54)
  , enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Eventable; });


var Eventable = function () {
  function Eventable() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Eventable);

    this._eventListeners = {};
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Eventable, [{
    key: "addEventListener",
    value: function addEventListener(event_name, callback) {
      if (!this._eventListeners.hasOwnProperty(event_name)) this._eventListeners[event_name] = [];

      this._eventListeners[event_name].push(callback);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(event_name, callback) {
      var index = void 0;

      if (!this._eventListeners.hasOwnProperty(event_name)) return false;

      if ((index = this._eventListeners[event_name].indexOf(callback)) >= 0) {
        this._eventListeners[event_name].splice(index, 1);
        return true;
      }

      return false;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event_name) {
      var i = void 0;
      var parameters = Array.prototype.splice.call(arguments, 1);

      if (this._eventListeners.hasOwnProperty(event_name)) {
        for (i = 0; i < this._eventListeners[event_name].length; i++) {
          this._eventListeners[event_name][i].apply(this, parameters);
        }
      }
    }
  }], [{
    key: "make",
    value: function make(obj) {
      obj.prototype.addEventListener = Eventable.prototype.addEventListener;
      obj.prototype.removeEventListener = Eventable.prototype.removeEventListener;
      obj.prototype.dispatchEvent = Eventable.prototype.dispatchEvent;
    }
  }]);

  return Eventable;
}();

/***/ },
/* 22 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 24 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 25 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 26 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(17)
  , dPs         = __webpack_require__(113)
  , enumBugKeys = __webpack_require__(26)
  , IE_PROTO    = __webpack_require__(32)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(48)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(106).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 30 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f
  , has = __webpack_require__(10)
  , TAG = __webpack_require__(16)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys')
  , uid    = __webpack_require__(24);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(7)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 34 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(7)
  , core           = __webpack_require__(8)
  , LIBRARY        = __webpack_require__(28)
  , wksExt         = __webpack_require__(37)
  , defineProperty = __webpack_require__(11).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(16);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Line; });









var Line = function (_LineNative) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Line, _LineNative);

  function Line(geometry, material, mass) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Line);

    if (!geometry) return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(_this);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, geometry, material));

    Object.assign(_this, new __WEBPACK_IMPORTED_MODULE_5__eventable__["a" /* Eventable */]());
    __WEBPACK_IMPORTED_MODULE_5__eventable__["a" /* Eventable */].make(Line);

    _this._physijs = {
      type: null,
      mass: mass || 0,
      touches: [],
      linearVelocity: new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"](),
      angularVelocity: new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"]()
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Line, [{
    key: 'applyCentralImpulse',
    value: function applyCentralImpulse(force) {
      if (this.world) this.world.execute('applyCentralImpulse', { id: this._physijs.id, x: force.x, y: force.y, z: force.z });
    }
  }, {
    key: 'applyImpulse',
    value: function applyImpulse(force, offset) {
      if (this.world) {
        this.world.execute('applyImpulse', {
          id: this._physijs.id,
          impulse_x: force.x,
          impulse_y: force.y,
          impulse_z: force.z,
          x: offset.x,
          y: offset.y,
          z: offset.z
        });
      }
    }
  }, {
    key: 'applyTorque',
    value: function applyTorque(force) {
      if (this.world) {
        this.world.execute('applyTorque', {
          id: this._physijs.id,
          torque_x: force.x,
          torque_y: force.y,
          torque_z: force.z
        });
      }
    }
  }, {
    key: 'applyCentralForce',
    value: function applyCentralForce(force) {
      if (this.world) this.world.execute('applyCentralForce', { id: this._physijs.id, x: force.x, y: force.y, z: force.z });
    }
  }, {
    key: 'applyForce',
    value: function applyForce(force, offset) {
      if (this.world) {
        this.world.execute('applyForce', {
          id: this._physijs.id,
          force_x: force.x,
          force_y: force.y,
          force_z: force.z,
          x: offset.x,
          y: offset.y,
          z: offset.z
        });
      }
    }
  }, {
    key: 'getAngularVelocity',
    value: function getAngularVelocity() {
      return this._physijs.angularVelocity;
    }
  }, {
    key: 'setAngularVelocity',
    value: function setAngularVelocity(velocity) {
      if (this.world) this.world.execute('setAngularVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z });
    }
  }, {
    key: 'getLinearVelocity',
    value: function getLinearVelocity() {
      return this._physijs.linearVelocity;
    }
  }, {
    key: 'setLinearVelocity',
    value: function setLinearVelocity(velocity) {
      if (this.world) this.world.execute('setLinearVelocity', { id: this._physijs.id, x: velocity.x, y: velocity.y, z: velocity.z });
    }
  }, {
    key: 'setAngularFactor',
    value: function setAngularFactor(factor) {
      if (this.world) this.world.execute('setAngularFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z });
    }
  }, {
    key: 'setLinearFactor',
    value: function setLinearFactor(factor) {
      if (this.world) this.world.execute('setLinearFactor', { id: this._physijs.id, x: factor.x, y: factor.y, z: factor.z });
    }
  }, {
    key: 'setDamping',
    value: function setDamping(linear, angular) {
      if (this.world) this.world.execute('setDamping', { id: this._physijs.id, linear: linear, angular: angular });
    }
  }, {
    key: 'setCcdMotionThreshold',
    value: function setCcdMotionThreshold(threshold) {
      if (this.world) this.world.execute('setCcdMotionThreshold', { id: this._physijs.id, threshold: threshold });
    }
  }, {
    key: 'setCcdSweptSphereRadius',
    value: function setCcdSweptSphereRadius(radius) {
      if (this.world) this.world.execute('setCcdSweptSphereRadius', { id: this._physijs.id, radius: radius });
    }
  }, {
    key: 'clone',
    value: function clone() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new this.constructor(this.geometry, this.material, params).copy(this);
    }
  }, {
    key: 'mass',
    get: function get() {
      return this._physijs.mass;
    },
    set: function set(mass) {
      this._physijs.mass = mass;
      if (this.world) this.world.execute('updateMass', { id: this._physijs.id, mass: mass });
    }
  }]);

  return Line;
}(__WEBPACK_IMPORTED_MODULE_4_three__["Line"]);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eventable__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Scene; });











var Worker = __webpack_require__(132);

var Scene = function (_SceneNative) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Scene, _SceneNative);

  function Scene() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Scene);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this._worker = new Worker();
    _this._worker.transferableMessage = _this._worker.webkitPostMessage || _this._worker.postMessage;

    params.fixedTimeStep = params.fixedTimeStep || 1 / 60;
    params.rateLimit = params.rateLimit || true;

    params.whs = {
      softbody: init.softbody
    };

    _this.execute('init', params);

    _this._materials_ref_counts = {};
    _this._objects = {};
    _this._vehicles = {};
    _this._constraints = {};
    _this._is_simulating = false;
    _this.getObjectId = function () {
      var _id = 1;
      return function () {
        return _id++;
      };
    }();

    var ab = new ArrayBuffer(1);
    _this._worker.transferableMessage(ab, [ab]);
    _this.SUPPORT_TRANSFERABLE = ab.byteLength === 0;

    _this._worker.onmessage = function (event) {
      var _temp = void 0,
          data = event.data;

      if (data instanceof ArrayBuffer && data.byteLength !== 1) // byteLength === 1 is the worker making a SUPPORT_TRANSFERABLE test
        data = new Float32Array(data);

      if (data instanceof Float32Array) {
        // transferable object
        switch (data[0]) {
          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].WORLDREPORT:
            _this._updateScene(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].SOFTREPORT:
            _this._updateSoftbodies(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].COLLISIONREPORT:
            _this._updateCollisions(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].VEHICLEREPORT:
            _this._updateVehicles(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].CONSTRAINTREPORT:
            _this._updateConstraints(data);
            break;
          default:
        }
      } else if (data.cmd) {
        // non-transferable object
        switch (data.cmd) {
          case 'objectReady':
            _temp = data.params;
            if (_this._objects[_temp]) _this._objects[_temp].dispatchEvent('ready');
            break;

          case 'worldReady':
            _this.dispatchEvent('ready');
            break;

          case 'vehicle':
            window.test = data;
            break;

          default:
            // Do nothing, just show the message
            console.debug('Received: ' + data.cmd);
            console.dir(data.params);
            break;
        }
      } else {
        switch (data[0]) {
          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].WORLDREPORT:
            _this._updateScene(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].COLLISIONREPORT:
            _this._updateCollisions(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].VEHICLEREPORT:
            _this._updateVehicles(data);
            break;

          case __WEBPACK_IMPORTED_MODULE_7__api__["e" /* MESSAGE_TYPES */].CONSTRAINTREPORT:
            _this._updateConstraints(data);
            break;
          default:
        }
      }
    };

    Object.assign(_this, new __WEBPACK_IMPORTED_MODULE_6__eventable__["a" /* Eventable */]());
    __WEBPACK_IMPORTED_MODULE_6__eventable__["a" /* Eventable */].make(Scene);

    // this._stats = init.stats ? new Stats() : false;
    _this._world = init.world || false;

    // if (this._stats) {
    //   this._stats.setMode(0);
    //   this._stats.domElement.style.position = 'absolute';
    //   this._stats.domElement.style.left = '0px';
    //   this._stats.domElement.style.top = '48px';

    //   this._world.$element.appendChild(this._stats.domElement);
    // }
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Scene, [{
    key: '_updateScene',
    value: function _updateScene(data) {
      var index = data[1];

      while (index--) {
        var offset = 2 + index * __WEBPACK_IMPORTED_MODULE_7__api__["f" /* REPORT_ITEMSIZE */];
        var object = this._objects[data[offset]];

        if (object === null) continue;

        if (object.__dirtyPosition === false) {
          object.position.set(data[offset + 1], data[offset + 2], data[offset + 3]);

          object.__dirtyPosition = false;
        }

        if (object.__dirtyRotation === false) {
          object.quaternion.set(data[offset + 4], data[offset + 5], data[offset + 6], data[offset + 7]);

          object.__dirtyRotation = false;
        }

        object._physijs.linearVelocity.set(data[offset + 8], data[offset + 9], data[offset + 10]);

        object._physijs.angularVelocity.set(data[offset + 11], data[offset + 12], data[offset + 13]);
      }

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker

      this._is_simulating = false;
      this.dispatchEvent('update');
    }
  }, {
    key: '_updateSoftbodies',
    value: function _updateSoftbodies(data) {
      var index = data[1],
          offset = 2;

      while (index--) {
        var size = data[offset + 1];
        var object = this._objects[data[offset]];

        if (object === null) continue;

        var association = object._physijs.aIdxAssoc;
        var attributes = object.geometry.attributes;

        var volumePositions = attributes.position.array;

        var offsetVert = offset + 2;

        if (object._physijs.type === "softTrimesh") {
          var volumeNormals = attributes.normal.array;

          for (var i = 0; i < size; i++) {
            var offs = offsetVert + i * 6;

            var x = data[offs];
            var y = data[offs + 1];
            var z = data[offs + 2];

            var nx = data[offs + 3];
            var ny = data[offs + 4];
            var nz = data[offs + 5];

            var assocVertex = association[i];

            for (var k = 0, kl = assocVertex.length; k < kl; k++) {
              var indexVertex = assocVertex[k];

              volumePositions[indexVertex] = x;
              volumeNormals[indexVertex] = nx;
              indexVertex++;

              volumePositions[indexVertex] = y;
              volumeNormals[indexVertex] = ny;
              indexVertex++;

              volumePositions[indexVertex] = z;
              volumeNormals[indexVertex] = nz;
            }
          }

          attributes.normal.needsUpdate = true;
        } else if (object._physijs.type === "softRopeMesh") {
          for (var _i = 0; _i < size; _i++) {
            var _offs = offsetVert + _i * 3;

            var _x3 = data[_offs];
            var _y = data[_offs + 1];
            var _z = data[_offs + 2];

            volumePositions[_i * 3] = _x3;
            volumePositions[_i * 3 + 1] = _y;
            volumePositions[_i * 3 + 2] = _z;
          }
        } else {
          var _volumeNormals = attributes.normal.array;

          for (var _i2 = 0; _i2 < size; _i2++) {
            var _offs2 = offsetVert + _i2 * 6;

            var _x4 = data[_offs2];
            var _y2 = data[_offs2 + 1];
            var _z2 = data[_offs2 + 2];

            var _nx = data[_offs2 + 3];
            var _ny = data[_offs2 + 4];
            var _nz = data[_offs2 + 5];

            volumePositions[_i2 * 3] = _x4;
            volumePositions[_i2 * 3 + 1] = _y2;
            volumePositions[_i2 * 3 + 2] = _z2;

            _volumeNormals[_i2 * 3] = _nx;
            _volumeNormals[_i2 * 3 + 1] = _ny;
            _volumeNormals[_i2 * 3 + 2] = _nz;
          }

          attributes.normal.needsUpdate = true;
        }

        attributes.position.needsUpdate = true;

        offset += 2 + size * 6;
      }

      // if (this.SUPPORT_TRANSFERABLE)
      //   this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker

      this._is_simulating = false;
    }
  }, {
    key: '_updateVehicles',
    value: function _updateVehicles(data) {
      var vehicle = void 0,
          wheel = void 0;

      for (var i = 0; i < (data.length - 1) / __WEBPACK_IMPORTED_MODULE_7__api__["h" /* VEHICLEREPORT_ITEMSIZE */]; i++) {
        var offset = 1 + i * __WEBPACK_IMPORTED_MODULE_7__api__["h" /* VEHICLEREPORT_ITEMSIZE */];
        vehicle = this._vehicles[data[offset]];

        if (vehicle === null) continue;

        wheel = vehicle.wheels[data[offset + 1]];

        wheel.position.set(data[offset + 2], data[offset + 3], data[offset + 4]);

        wheel.quaternion.set(data[offset + 5], data[offset + 6], data[offset + 7], data[offset + 8]);
      }

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker
    }
  }, {
    key: '_updateConstraints',
    value: function _updateConstraints(data) {
      var constraint = void 0,
          object = void 0;

      for (var i = 0; i < (data.length - 1) / __WEBPACK_IMPORTED_MODULE_7__api__["i" /* CONSTRAINTREPORT_ITEMSIZE */]; i++) {
        var offset = 1 + i * __WEBPACK_IMPORTED_MODULE_7__api__["i" /* CONSTRAINTREPORT_ITEMSIZE */];
        constraint = this._constraints[data[offset]];
        object = this._objects[data[offset + 1]];

        if (constraint === undefined || object === undefined) continue;

        __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].set(data[offset + 2], data[offset + 3], data[offset + 4]);

        __WEBPACK_IMPORTED_MODULE_7__api__["l" /* temp1Matrix4 */].extractRotation(object.matrix);
        __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].applyMatrix4(__WEBPACK_IMPORTED_MODULE_7__api__["l" /* temp1Matrix4 */]);

        constraint.positiona.addVectors(object.position, __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */]);
        constraint.appliedImpulse = data[offset + 5];
      }

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker
    }
  }, {
    key: '_updateCollisions',
    value: function _updateCollisions(data) {
      /**
       * #TODO
       * This is probably the worst way ever to handle collisions. The inherent evilness is a residual
       * effect from the previous version's evilness which mutated when switching to transferable objects.
       *
       * If you feel inclined to make this better, please do so.
       */

      var collisions = {},
          normal_offsets = {};

      // Build collision manifest
      for (var i = 0; i < data[1]; i++) {
        var offset = 2 + i * __WEBPACK_IMPORTED_MODULE_7__api__["g" /* COLLISIONREPORT_ITEMSIZE */];
        var object = data[offset];
        var object2 = data[offset + 1];

        normal_offsets[object + '-' + object2] = offset + 2;
        normal_offsets[object2 + '-' + object] = -1 * (offset + 2);

        // Register collisions for both the object colliding and the object being collided with
        if (!collisions[object]) collisions[object] = [];
        collisions[object].push(object2);

        if (!collisions[object2]) collisions[object2] = [];
        collisions[object2].push(object);
      }

      // Deal with collisions
      for (var id1 in this._objects) {
        if (!this._objects.hasOwnProperty(id1)) continue;
        var _object = this._objects[id1];
        if (_object === null) continue;

        // If object touches anything, ...
        if (collisions[id1]) {
          // Clean up touches array
          for (var j = 0; j < _object._physijs.touches.length; j++) {
            if (collisions[id1].indexOf(_object._physijs.touches[j]) === -1) _object._physijs.touches.splice(j--, 1);
          }

          // Handle each colliding object
          for (var _j = 0; _j < collisions[id1].length; _j++) {
            var id2 = collisions[id1][_j];
            var _object2 = this._objects[id2];

            if (_object2) {
              // If object was not already touching object2, notify object
              if (_object._physijs.touches.indexOf(id2) === -1) {
                _object._physijs.touches.push(id2);

                __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].subVectors(_object.getLinearVelocity(), _object2.getLinearVelocity());
                var temp1 = __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].clone();

                __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].subVectors(_object.getAngularVelocity(), _object2.getAngularVelocity());
                var temp2 = __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].clone();

                var normal_offset = normal_offsets[_object._physijs.id + '-' + _object2._physijs.id];

                if (normal_offset > 0) {
                  __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].set(-data[normal_offset], -data[normal_offset + 1], -data[normal_offset + 2]);
                } else {
                  normal_offset *= -1;

                  __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */].set(data[normal_offset], data[normal_offset + 1], data[normal_offset + 2]);
                }

                _object.dispatchEvent('collision', _object2, temp1, temp2, __WEBPACK_IMPORTED_MODULE_7__api__["j" /* temp1Vector3 */]);
              }
            }
          }
        } else _object._physijs.touches.length = 0; // not touching other objects
      }

      this.collisions = collisions;

      if (this.SUPPORT_TRANSFERABLE) this._worker.transferableMessage(data.buffer, [data.buffer]); // Give the typed array back to the worker
    }
  }, {
    key: 'addConstraint',
    value: function addConstraint(constraint, show_marker) {
      constraint.id = this.getObjectId();
      this._constraints[constraint.id] = constraint;
      this.execute('addConstraint', constraint.getDefinition());

      if (show_marker) {
        var marker = void 0;

        switch (constraint.type) {
          case 'point':
            marker = new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_4_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_4_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'hinge':
            marker = new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_4_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_4_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'slider':
            marker = new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_4_three__["BoxGeometry"](10, 1, 1), new __WEBPACK_IMPORTED_MODULE_4_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);

            // This rotation isn't right if all three axis are non-0 values
            // TODO: change marker's rotation order to ZYX
            marker.rotation.set(constraint.axis.y, // yes, y and
            constraint.axis.x, // x axis are swapped
            constraint.axis.z);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'conetwist':
            marker = new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_4_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_4_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;

          case 'dof':
            marker = new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_4_three__["SphereGeometry"](1.5), new __WEBPACK_IMPORTED_MODULE_4_three__["MeshNormalMaterial"]());

            marker.position.copy(constraint.positiona);
            this._objects[constraint.objecta].add(marker);
            break;
          default:
        }
      }

      return constraint;
    }
  }, {
    key: 'onSimulationResume',
    value: function onSimulationResume() {
      this.execute('onSimulationResume', {});
    }
  }, {
    key: 'removeConstraint',
    value: function removeConstraint(constraint) {
      if (this._constraints[constraint.id] !== undefined) {
        this.execute('removeConstraint', { id: constraint.id });
        delete this._constraints[constraint.id];
      }
    }
  }, {
    key: 'execute',
    value: function execute(cmd, params) {
      this._worker.postMessage({ cmd: cmd, params: params });
    }
  }, {
    key: 'add',
    value: function add(object) {
      __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"].prototype.add.call(this, object);

      if (object._physijs) {
        object.world = this;
        object._physijs.id = this.getObjectId();

        if (object instanceof __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle__["a" /* Vehicle */]) {
          this.add(object.mesh);
          this._vehicles[object._physijs.id] = object;
          this.execute('addVehicle', object._physijs);
        } else {
          object.__dirtyPosition = false;
          object.__dirtyRotation = false;
          this._objects[object._physijs.id] = object;

          if (object.children.length) {
            object._physijs.children = [];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__api__["d" /* addObjectChildren */])(object, object);
          }

          if (object.material._physijs) {
            if (this._materials_ref_counts.hasOwnProperty(object.material._physijs.id)) this._materials_ref_counts[object.material._physijs.id]++;else {
              this.execute('registerMaterial', object.material._physijs);
              object._physijs.materialId = object.material._physijs.id;
              this._materials_ref_counts[object.material._physijs.id] = 1;
            }
          }

          // Object starting position + rotation
          object._physijs.position = {
            x: object.position.x,
            y: object.position.y,
            z: object.position.z
          };

          object._physijs.rotation = {
            x: object.quaternion.x,
            y: object.quaternion.y,
            z: object.quaternion.z,
            w: object.quaternion.w
          };

          // Check for scaling
          // var mass_scaling = new Vector3(1, 1, 1);

          if (object._physijs.width) object._physijs.width *= object.scale.x;
          if (object._physijs.height) object._physijs.height *= object.scale.y;
          if (object._physijs.depth) object._physijs.depth *= object.scale.z;

          this.execute('addObject', object._physijs);
        }
      }
    }
  }, {
    key: 'remove',
    value: function remove(object) {
      if (object instanceof __WEBPACK_IMPORTED_MODULE_5__vehicle_vehicle__["a" /* Vehicle */]) {
        this.execute('removeVehicle', { id: object._physijs.id });
        while (object.wheels.length) {
          this.remove(object.wheels.pop());
        }this.remove(object.mesh);
        this._vehicles[object._physijs.id] = null;
      } else {
        __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"].prototype.remove.call(this, object);

        if (object._physijs) {
          this._objects[object._physijs.id] = null;
          this.execute('removeObject', { id: object._physijs.id });
        }
      }
      if (object.material && object.material._physijs && this._materials_ref_counts.hasOwnProperty(object.material._physijs.id)) {
        this._materials_ref_counts[object.material._physijs.id]--;

        if (this._materials_ref_counts[object.material._physijs.id] === 0) {
          this.execute('unRegisterMaterial', object.material._physijs);
          this._materials_ref_counts[object.material._physijs.id] = null;
        }
      }
    }
  }, {
    key: 'setFixedTimeStep',
    value: function setFixedTimeStep(fixedTimeStep) {
      if (fixedTimeStep) this.execute('setFixedTimeStep', fixedTimeStep);
    }
  }, {
    key: 'setGravity',
    value: function setGravity(gravity) {
      if (gravity) this.execute('setGravity', gravity);
    }
  }, {
    key: 'simulate',
    value: function simulate(timeStep, maxSubSteps) {
      if (this._stats) this._stats.begin();

      if (this._is_simulating) return false;

      this._is_simulating = true;

      for (var object_id in this._objects) {
        if (!this._objects.hasOwnProperty(object_id)) continue;

        var object = this._objects[object_id];

        if (object !== null && (object.__dirtyPosition || object.__dirtyRotation)) {
          var update = { id: object._physijs.id };

          if (object.__dirtyPosition) {
            update.pos = {
              x: object.position.x,
              y: object.position.y,
              z: object.position.z
            };

            if (object._physijs.type === 'softbody') object.position.set(0, 0, 0);

            object.__dirtyPosition = false;
          }

          if (object.__dirtyRotation) {
            update.quat = {
              x: object.quaternion.x,
              y: object.quaternion.y,
              z: object.quaternion.z,
              w: object.quaternion.w
            };

            if (object._physijs.type === 'softbody') object.rotation.set(0, 0, 0);

            object.__dirtyRotation = false;
          }

          this.execute('updateTransform', update);
        }
      }

      this.execute('simulate', { timeStep: timeStep, maxSubSteps: maxSubSteps });

      if (this._stats) this._stats.end();
      return true;
    }
  }]);

  return Scene;
}(__WEBPACK_IMPORTED_MODULE_4_three__["Scene"]);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = $wrap;
/* unused harmony export $extend */
/* unused harmony export $define */
/* unused harmony export $defaults */
function $wrap(target) {
  var _proto = target.prototype || target.__proto__;

  return {
    onCallConstructor: function onCallConstructor(callback) {
      _proto.callConstructor = function (old) {
        return function (scope) {
          old(scope);
          callback(scope);
        };
      }(_proto.callConstructor);
    },
    onCallWrap: function onCallWrap(callback) {
      _proto.callWrap = function (old) {
        return function (scope) {
          for (var _len = arguments.length, tags = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            tags[_key - 1] = arguments[_key];
          }

          old.apply(undefined, [scope].concat(tags));
          callback.apply(undefined, [scope].concat(tags));
        };
      }(_proto.callWrap);
    },
    onCallAddTo: function onCallAddTo(callback) {
      _proto.callAddTo = function (old) {
        return function (scope) {
          old(scope);
          callback(scope);
        };
      }(_proto.callAddTo);
    },
    onCallCopy: function onCallCopy(callback) {
      _proto.callCopy = function (old) {
        return function (scope) {
          old(scope);
          callback(scope);
        };
      }(_proto.callCopy);
    }
  };
}

function $extend(target, obj) {
  var _proto = target.prototype || target.__proto__;
  Object.assign(_proto, obj);
}

function $define(target, obj) {
  for (var key in obj) {
    var value = obj[key];
    var _proto = target.prototype || target.__proto__;

    value.configurable = true;

    Object.defineProperty(_proto, key, value);
  }
}

function $defaults(target, obj) {
  var defs = target.defaults || {};
  target.defaults = Object.assign(defs, obj);
  target.params = Object.assign(defs, obj);
}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return extend; });
var extend = function extend(object) {
  for (var _len = arguments.length, extensions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    extensions[_key - 1] = arguments[_key];
  }

  // $.extend alternative, ... is the spread operator.
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var extension = _step.value;

      // console.log(extension);
      // console.log(typeof extension);

      if (!extension) continue; // Ignore null and undefined objects and paramaters.

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.getOwnPropertyNames(extension)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var prop = _step2.value;
          // Do not traverse the prototype chain.
          if (object[prop] !== undefined && object[prop].toString() === '[object Object]' && extension[prop].toString() === '[object Object]') {

            // Goes deep only if object[prop] and extension[prop] are both objects !
            if (extension[prop].uuid) object[prop] = extension[prop];else extend(object[prop], extension[prop]);
          } else object[prop] = typeof object[prop] === 'undefined' ? extension[prop] : object[prop];
          if (typeof object[prop] === 'undefined') object[prop] = extension[prop]; // Add values that do not already exist.
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return object;
};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VehicleTunning; });

var VehicleTunning = function VehicleTunning() {
  var suspension_stiffness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5.88;
  var suspension_compression = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.83;
  var suspension_damping = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.88;
  var max_suspension_travel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
  var friction_slip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10.5;
  var max_suspension_force = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 6000;

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, VehicleTunning);

  this.suspension_stiffness = suspension_stiffness;
  this.suspension_compression = suspension_compression;
  this.suspension_damping = suspension_damping;
  this.max_suspension_travel = max_suspension_travel;
  this.friction_slip = friction_slip;
  this.max_suspension_force = max_suspension_force;
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tunning__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Vehicle; });





var Vehicle = function () {
  function Vehicle(mesh) {
    var tuning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new VehicleTuning();

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Vehicle);

    this.mesh = mesh;
    this.wheels = [];

    this._physijs = {
      id: getObjectId(),
      rigidBody: mesh._physijs.id,
      suspension_stiffness: tuning.suspension_stiffness,
      suspension_compression: tuning.suspension_compression,
      suspension_damping: tuning.suspension_damping,
      max_suspension_travel: tuning.max_suspension_travel,
      friction_slip: tuning.friction_slip,
      max_suspension_force: tuning.max_suspension_force
    };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Vehicle, [{
    key: 'addWheel',
    value: function addWheel(wheel_geometry, wheel_material, connection_point, wheel_direction, wheel_axle, suspension_rest_length, wheel_radius, is_front_wheel, tuning) {
      var wheel = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](wheel_geometry, wheel_material);

      wheel.castShadow = wheel.receiveShadow = true;
      wheel.position.copy(wheel_direction).multiplyScalar(suspension_rest_length / 100).add(connection_point);

      this.world.add(wheel);
      this.wheels.push(wheel);

      this.world.execute('addWheel', {
        id: this._physijs.id,
        connection_point: { x: connection_point.x, y: connection_point.y, z: connection_point.z },
        wheel_direction: { x: wheel_direction.x, y: wheel_direction.y, z: wheel_direction.z },
        wheel_axle: { x: wheel_axle.x, y: wheel_axle.y, z: wheel_axle.z },
        suspension_rest_length: suspension_rest_length,
        wheel_radius: wheel_radius,
        is_front_wheel: is_front_wheel,
        tuning: tuning
      });
    }
  }, {
    key: 'setSteering',
    value: function setSteering(amount, wheel) {
      if (wheel !== undefined && this.wheels[wheel] !== undefined) this.world.execute('setSteering', { id: this._physijs.id, wheel: wheel, steering: amount });else if (this.wheels.length > 0) {
        for (var i = 0; i < this.wheels.length; i++) {
          this.world.execute('setSteering', { id: this._physijs.id, wheel: i, steering: amount });
        }
      }
    }
  }, {
    key: 'setBrake',
    value: function setBrake(amount, wheel) {
      if (wheel !== undefined && this.wheels[wheel] !== undefined) this.world.execute('setBrake', { id: this._physijs.id, wheel: wheel, brake: amount });else if (this.wheels.length > 0) {
        for (var i = 0; i < this.wheels.length; i++) {
          this.world.execute('setBrake', { id: this._physijs.id, wheel: i, brake: amount });
        }
      }
    }
  }, {
    key: 'applyEngineForce',
    value: function applyEngineForce(amount, wheel) {
      if (wheel !== undefined && this.wheels[wheel] !== undefined) this.world.execute('applyEngineForce', { id: this._physijs.id, wheel: wheel, force: amount });else if (this.wheels.length > 0) {
        for (var i = 0; i < this.wheels.length; i++) {
          this.world.execute('applyEngineForce', { id: this._physijs.id, wheel: i, force: amount });
        }
      }
    }
  }]);

  return Vehicle;
}();

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _assign = __webpack_require__(90);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(95);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(94);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 46 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(102);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19)
  , document = __webpack_require__(7).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(18)(function(){
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(28)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(55)
  , hide           = __webpack_require__(15)
  , has            = __webpack_require__(10)
  , Iterators      = __webpack_require__(27)
  , $iterCreate    = __webpack_require__(108)
  , setToStringTag = __webpack_require__(31)
  , getPrototypeOf = __webpack_require__(115)
  , ITERATOR       = __webpack_require__(16)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(22)
  , createDesc     = __webpack_require__(23)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(35)
  , has            = __webpack_require__(10)
  , IE8_DOM_DEFINE = __webpack_require__(49)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(54)
  , hiddenKeys = __webpack_require__(26).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(10)
  , toIObject    = __webpack_require__(12)
  , arrayIndexOf = __webpack_require__(104)(false)
  , IE_PROTO     = __webpack_require__(32)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConeTwistConstraint; });




var ConeTwistConstraint = function () {
  function ConeTwistConstraint(obja, objb, position) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConeTwistConstraint);

    var objecta = obja;
    var objectb = obja;

    if (position === undefined) console.error('Both objects must be defined in a ConeTwistConstraint.');

    this.type = 'conetwist';
    this.appliedImpulse = 0;
    this.scene = objecta.parent;
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.objectb = objectb._physijs.id;
    this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    this.axisa = { x: objecta.rotation.x, y: objecta.rotation.y, z: objecta.rotation.z };
    this.axisb = { x: objectb.rotation.x, y: objectb.rotation.y, z: objectb.rotation.z };
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ConeTwistConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axisa: this.axisa,
        axisb: this.axisb
      };
    }
  }, {
    key: 'setLimit',
    value: function setLimit(x, y, z) {
      this.scene.execute('conetwist_setLimit', { constraint: this.id, x: x, y: y, z: z });
    }
  }, {
    key: 'enableMotor',
    value: function enableMotor() {
      this.scene.execute('conetwist_enableMotor', { constraint: this.id });
    }
  }, {
    key: 'setMaxMotorImpulse',
    value: function setMaxMotorImpulse(max_impulse) {
      this.scene.execute('conetwist_setMaxMotorImpulse', { constraint: this.id, max_impulse: max_impulse });
    }
  }, {
    key: 'setMotorTarget',
    value: function setMotorTarget(target) {
      if (target instanceof THREE.Vector3) target = new THREE.Quaternion().setFromEuler(new THREE.Euler(target.x, target.y, target.z));else if (target instanceof THREE.Euler) target = new THREE.Quaternion().setFromEuler(target);else if (target instanceof THREE.Matrix4) target = new THREE.Quaternion().setFromRotationMatrix(target);

      this.scene.execute('conetwist_setMotorTarget', {
        constraint: this.id,
        x: target.x,
        y: target.y,
        z: target.z,
        w: target.w
      });
    }
  }]);

  return ConeTwistConstraint;
}();

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DOFConstraint; });




var DOFConstraint = function () {
  function DOFConstraint(obja, objb, position) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DOFConstraint);

    var objecta = obja;
    var objectb = objb;

    if (position === undefined) {
      position = objectb;
      objectb = undefined;
    }

    this.type = 'dof';
    this.appliedImpulse = 0;
    this.scene = objecta.parent;
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.axisa = { x: objecta.rotation.x, y: objecta.rotation.y, z: objecta.rotation.z };

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
      this.axisb = { x: objectb.rotation.x, y: objectb.rotation.y, z: objectb.rotation.z };
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(DOFConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axisa: this.axisa,
        axisb: this.axisb
      };
    }
  }, {
    key: 'setLinearLowerLimit',
    value: function setLinearLowerLimit(limit) {
      this.scene.execute('dof_setLinearLowerLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'setLinearUpperLimit',
    value: function setLinearUpperLimit(limit) {
      this.scene.execute('dof_setLinearUpperLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'setAngularLowerLimit',
    value: function setAngularLowerLimit(limit) {
      this.scene.execute('dof_setAngularLowerLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'setAngularUpperLimit',
    value: function setAngularUpperLimit(limit) {
      this.scene.execute('dof_setAngularUpperLimit', { constraint: this.id, x: limit.x, y: limit.y, z: limit.z });
    }
  }, {
    key: 'enableAngularMotor',
    value: function enableAngularMotor(which) {
      this.scene.execute('dof_enableAngularMotor', { constraint: this.id, which: which });
    }
  }, {
    key: 'configureAngularMotor',
    value: function configureAngularMotor(which, low_angle, high_angle, velocity, max_force) {
      this.scene.execute('dof_configureAngularMotor', { constraint: this.id, which: which, low_angle: low_angle, high_angle: high_angle, velocity: velocity, max_force: max_force });
    }
  }, {
    key: 'disableAngularMotor',
    value: function disableAngularMotor(which) {
      this.scene.execute('dof_disableAngularMotor', { constraint: this.id, which: which });
    }
  }]);

  return DOFConstraint;
}();

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HingeConstraint; });




var HingeConstraint = function () {
  function HingeConstraint(obja, objb, position, axis) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, HingeConstraint);

    var objecta = obja;
    var objectb = objb;

    if (axis === undefined) {
      axis = position;
      position = objectb;
      objectb = undefined;
    }

    this.type = 'hinge';
    this.appliedImpulse = 0;
    this.scene = objecta.parent;
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.position = position.clone();
    this.axis = axis;

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(HingeConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axis: this.axis
      };
    }
  }, {
    key: 'setLimits',
    value: function setLimits(low, high, bias_factor, relaxation_factor) {
      this.scene.execute('hinge_setLimits', {
        constraint: this.id,
        low: low,
        high: high,
        bias_factor: bias_factor,
        relaxation_factor: relaxation_factor
      });
    }
  }, {
    key: 'enableAngularMotor',
    value: function enableAngularMotor(velocity, acceleration) {
      this.scene.execute('hinge_enableAngularMotor', {
        constraint: this.id,
        velocity: velocity,
        acceleration: acceleration
      });
    }
  }, {
    key: 'disableMotor',
    value: function disableMotor() {
      this.scene.execute('hinge_disableMotor', { constraint: this.id });
    }
  }]);

  return HingeConstraint;
}();

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PointConstraint; });




var PointConstraint = function () {
  function PointConstraint(obja, objb, position) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PointConstraint);

    var objecta = obja;
    var objectb = objb;

    if (position === undefined) {
      position = objectb;
      objectb = undefined;
    }

    this.type = 'point';
    this.appliedImpulse = 0;
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(PointConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb
      };
    }
  }]);

  return PointConstraint;
}();

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SliderConstraint; });




var SliderConstraint = function () {
  function SliderConstraint(obja, objb, position, axis) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SliderConstraint);

    var objecta = obja;
    var objectb = objb;

    if (axis === undefined) {
      axis = position;
      position = objectb;
      objectb = undefined;
    }

    this.type = 'slider';
    this.appliedImpulse = 0;
    this.scene = objecta.parent;
    this.objecta = objecta._physijs.id;
    this.positiona = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objecta).clone();
    this.axis = axis;

    if (objectb) {
      this.objectb = objectb._physijs.id;
      this.positionb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api__["m" /* convertWorldPositionToObject */])(position, objectb).clone();
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SliderConstraint, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return {
        type: this.type,
        id: this.id,
        objecta: this.objecta,
        objectb: this.objectb,
        positiona: this.positiona,
        positionb: this.positionb,
        axis: this.axis
      };
    }
  }, {
    key: 'setLimits',
    value: function setLimits(lin_lower, lin_upper, ang_lower, ang_upper) {
      this.scene.execute('slider_setLimits', {
        constraint: this.id,
        lin_lower: lin_lower,
        lin_upper: lin_upper,
        ang_lower: ang_lower,
        ang_upper: ang_upper
      });
    }
  }, {
    key: 'setRestitution',
    value: function setRestitution(linear, angular) {
      this.scene.execute('slider_setRestitution', {
        constraint: this.id,
        linear: linear,
        angular: angular
      });
    }
  }, {
    key: 'enableLinearMotor',
    value: function enableLinearMotor(velocity, acceleration) {
      this.scene.execute('slider_enableLinearMotor', {
        constraint: this.id,
        velocity: velocity,
        acceleration: acceleration
      });
    }
  }, {
    key: 'disableLinearMotor',
    value: function disableLinearMotor() {
      this.scene.execute('slider_disableLinearMotor', { constraint: this.id });
    }
  }, {
    key: 'enableAngularMotor',
    value: function enableAngularMotor(velocity, acceleration) {
      this.scene.execute('slider_enableAngularMotor', {
        constraint: this.id,
        velocity: velocity,
        acceleration: acceleration
      });
    }
  }, {
    key: 'disableAngularMotor',
    value: function disableAngularMotor() {
      this.scene.execute('slider_disableAngularMotor', { constraint: this.id });
    }
  }]);

  return SliderConstraint;
}();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConeTwistConstraint__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ConeTwistConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HingeConstraint__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__HingeConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PointConstraint__ = __webpack_require__(60);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__PointConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SliderConstraint__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__SliderConstraint__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DOFConstraint__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__DOFConstraint__["a"]; });






/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_three__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ComponentUtils__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_extend__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PhysicsComponent; });










function PhysicsComponent(targetComponent) {
  var _class, _temp;

  var resultComponent = (_temp = _class = function (_targetComponent) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PhysicsComponentEnhance, _targetComponent);

    function PhysicsComponentEnhance() {
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PhysicsComponentEnhance);

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PhysicsComponentEnhance.__proto__ || Object.getPrototypeOf(PhysicsComponentEnhance)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PhysicsComponentEnhance, [{
      key: 'setAngularVelocity',
      value: function setAngularVelocity() {
        var _native;

        return (_native = this.native).setAngularVelocity.apply(_native, arguments);
      }
    }, {
      key: 'setLinearVelocity',
      value: function setLinearVelocity() {
        var _native2;

        return (_native2 = this.native).setLinearVelocity.apply(_native2, arguments);
      }
    }, {
      key: 'applyCentralImpulse',
      value: function applyCentralImpulse() {
        var _native3;

        return (_native3 = this.native).applyCentralImpulse.apply(_native3, arguments);
      }
    }, {
      key: 'applyImpulse',
      value: function applyImpulse() {
        var _native4;

        return (_native4 = this.native).applyImpulse.apply(_native4, arguments);
      }
    }, {
      key: 'applyTorque',
      value: function applyTorque() {
        var _native5;

        return (_native5 = this.native).applyTorque.apply(_native5, arguments);
      }
    }, {
      key: 'applyCentralForce',
      value: function applyCentralForce() {
        var _native6;

        return (_native6 = this.native).applyCentralForce.apply(_native6, arguments);
      }
    }, {
      key: 'applyForce',
      value: function applyForce() {
        var _native7;

        return (_native7 = this.native).applyForce.apply(_native7, arguments);
      }
    }, {
      key: 'getAngularVelocity',
      value: function getAngularVelocity() {
        var _native8;

        return (_native8 = this.native).getAngularVelocity.apply(_native8, arguments);
      }
    }, {
      key: 'getLinearVelocity',
      value: function getLinearVelocity() {
        var _native9;

        return (_native9 = this.native).getLinearVelocity.apply(_native9, arguments);
      }
    }, {
      key: 'setAngularFactor',
      value: function setAngularFactor() {
        var _native10;

        return (_native10 = this.native).setAngularFactor.apply(_native10, arguments);
      }
    }, {
      key: 'setLinearFactor',
      value: function setLinearFactor() {
        var _native11;

        return (_native11 = this.native).setLinearFactor.apply(_native11, arguments);
      }
    }, {
      key: 'setDamping',
      value: function setDamping() {
        var _native12;

        return (_native12 = this.native).setDamping.apply(_native12, arguments);
      }
    }, {
      key: 'setCcdMotionThreshold',
      value: function setCcdMotionThreshold() {
        var _native13;

        return (_native13 = this.native).setCcdMotionThreshold.apply(_native13, arguments);
      }
    }, {
      key: 'setCcdSweptSphereRadius',
      value: function setCcdSweptSphereRadius() {
        var _native14;

        return (_native14 = this.native).setCcdSweptSphereRadius.apply(_native14, arguments);
      }
    }, {
      key: 'appendAnchor',
      value: function appendAnchor(world, object, node, influence) {
        var collisionBetweenLinkedBodies = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        return this.native.appendAnchor(world.$scene, object.native, node, influence, collisionBetweenLinkedBodies);
      }
    }, {
      key: 'copy',
      value: function copy(source) {
        var sourceNative = source.native;

        if (sourceNative) {
          this.native = sourceNative.clone(source.params);

          if (sourceNative.mass) this.native.mass = sourceNative.mass;
          this.params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, source.params);
          this.isPhysics = source.isPhysics;

          this.wrap('no-transforms');

          this.position.copy(source.position);
          this.rotation.copy(source.rotation);
        } else this.params = source.params;

        this.callCopy(this);

        return this;
      }
    }, {
      key: 'position',
      get: function get() {
        return this.native.position;
      },
      set: function set(vector3) {
        var pos = this._native.position,
            native = this._native;

        Object.defineProperties(pos, {
          x: {
            get: function get() {
              return this._x;
            },
            set: function set(x) {
              native.__dirtyPosition = true;
              this._x = x;
            }
          },
          y: {
            get: function get() {
              return this._y;
            },
            set: function set(y) {
              native.__dirtyPosition = true;
              this._y = y;
            }
          },
          z: {
            get: function get() {
              return this._z;
            },
            set: function set(z) {
              native.__dirtyPosition = true;
              this._z = z;
            }
          }
        });

        native.__dirtyPosition = true;

        pos.copy(vector3);
      }
    }, {
      key: 'quaternion',
      get: function get() {
        this.__c_rot = true;
        return this.native.quaternion;
      },
      set: function set(quaternion) {
        var _this2 = this;

        var quat = this._native.quaternion,
            native = this._native;

        quat.copy(quaternion);

        quat.onChange(function () {
          if (_this2.__c_rot) {
            if (native.__dirtyRotation === true) {
              _this2.__c_rot = false;
              native.__dirtyRotation = false;
            }
            native.__dirtyRotation = true;
          }
        });
      }
    }, {
      key: 'rotation',
      get: function get() {
        this.__c_rot = true;
        return this._native.rotation;
      },
      set: function set(euler) {
        var _this3 = this;

        var rot = this._native.rotation,
            native = this._native;

        this.quaternion.copy(new __WEBPACK_IMPORTED_MODULE_5_three__["Quaternion"]().setFromEuler(euler));

        rot.onChange(function () {
          if (_this3.__c_rot) {
            _this3.quaternion.copy(new __WEBPACK_IMPORTED_MODULE_5_three__["Quaternion"]().setFromEuler(rot));
            native.__dirtyRotation = true;
          }
        });
      }
    }, {
      key: 'native',
      get: function get() {
        return this._native;
      },
      set: function set(mesh) {
        this._native = mesh;

        if (mesh instanceof __WEBPACK_IMPORTED_MODULE_5_three__["Object3D"]) {
          this.position = mesh.position.clone();
          this.quaternion = mesh.quaternion.clone();
          this.rotation = mesh.rotation.clone();
        }
      }
    }]);

    return PhysicsComponentEnhance;
  }(targetComponent), _class.defautls = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_extend__["a" /* extend */])(targetComponent.defaults, {
    mass: 10,
    physics: {
      restitution: 0.3,
      friction: 0.8,
      damping: 0,
      pressure: 100,
      margin: 0,
      klst: 0.9,
      kvst: 0.9,
      kast: 0.9,
      create: false
    }
  }), _temp);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_ComponentUtils__["a" /* $wrap */])(resultComponent).onCallConstructor(function (scope) {
    scope.isPhysics = scope.params.physics.create !== false;
    scope.__c_rot = false;
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_ComponentUtils__["a" /* $wrap */])(resultComponent).onCallAddTo(function (scope) {
    scope.native.addEventListener('collision', function () {
      scope.emit('collide');
    });
  });

  return resultComponent;
}



/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ComponentUtils__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_extend__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SoftbodyComponent; });








function SoftbodyComponent(targetComponent) {
  var _class, _temp;

  var resultComponent = (_temp = _class = function (_targetComponent) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SoftbodyComponentEnhance, _targetComponent);

    function SoftbodyComponentEnhance() {
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SoftbodyComponentEnhance);

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SoftbodyComponentEnhance.__proto__ || Object.getPrototypeOf(SoftbodyComponentEnhance)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SoftbodyComponentEnhance, [{
      key: 'proccessSoftbodyGeometry',
      value: function proccessSoftbodyGeometry(geometry) {
        var _params = this.params;
        var matrix = new THREE.Matrix4();

        matrix.compose(new THREE.Vector3(_params.position.x, _params.position.y, _params.position.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(_params.rotation.x, _params.rotation.y, _params.rotation.z)), new THREE.Vector3(_params.scale.x, _params.scale.y, _params.scale.z));

        geometry.applyMatrix(matrix);
      }
    }, {
      key: 'copy',
      value: function copy(source) {
        var sourceNative = source.native;

        if (sourceNative) {
          if (source.params.softbody) this.native = new sourceNative.constructor(sourceNative.tempGeometry.clone(), sourceNative.material, source.params);else this.native = sourceNative.clone(source.params);

          if (sourceNative.mass) this.native.mass = sourceNative.mass;
          this.params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, source.params);
          this.isPhysics = source.isPhysics;

          this.wrap('no-transforms');

          this.position.copy(source.position);
          this.rotation.copy(source.rotation);
          this.quaternion.copy(source.quaternion);
        } else this.params = source.params;

        this.callCopy(this);

        return this;
      }
    }, {
      key: 'wrapTransforms',
      value: function wrapTransforms() {
        var _params = this.params;

        if (!_params.softbody) {
          var position = _params.position,
              rotation = _params.rotation,
              scale = _params.scale;

          this.position.set(position.x, position.y, position.z);

          this.rotation.set(rotation.x, rotation.y, rotation.z);

          this.scale.set(scale.x, scale.y, scale.z);
        }
      }
    }, {
      key: 'clone',
      value: function clone() {
        return this.params.softbody ? new resultComponent(this.params) : new resultComponent({ build: false }).copy(this);
      }
    }]);

    return SoftbodyComponentEnhance;
  }(targetComponent), _class.defautls = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_extend__["a" /* extend */])(targetComponent.defaults, {
    softbody: false
  }), _temp);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_ComponentUtils__["a" /* $wrap */])(resultComponent).onCallAddTo(function (scope) {
    if (scope.params.softbody) {
      scope.native.position.set(0, 0, 0);
      scope.native.rotation.set(0, 0, 0);
    }
  });

  return resultComponent;
}



/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mesh__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PhysicsComponent__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__PhysicsComponent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SoftbodyComponent__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__SoftbodyComponent__["a"]; });







/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_scene__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three__);
/* harmony export (immutable) */ exports["a"] = createWorld;



function createWorld() {
  var scene = new __WEBPACK_IMPORTED_MODULE_0__core_scene__["a" /* Scene */]({
    fixedTimeStep: this.params.physics.fixedTimeStep,
    broadphase: this.params.physics.broadphase,
    ammo: this.params.physics.ammo
  }, {
    stats: this.params.stats,
    world: this,
    softbody: this.params.softbody
  });

  scene.setGravity(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](this.params.gravity.x, this.params.gravity.y, this.params.gravity.z));

  scene.simulate();

  return scene;
}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meshes_Box__ = __webpack_require__(68);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__meshes_Box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meshes_Convex__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__meshes_Convex__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meshes_ConvexConcave__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__meshes_ConvexConcave__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meshes_ConvexConcaveCustom__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__meshes_ConvexConcaveCustom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meshes_Cylinder__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__meshes_Cylinder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meshes_Line__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__meshes_Line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meshes_Plane__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__meshes_Plane__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meshes_Sphere__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__meshes_Sphere__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__World__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__World__["a"]; });










/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createBox;


function createBox(params, material) {
  return new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["BoxMesh"])(this.buildGeometry(params), material, params);
}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createConvex;


function createConvex(params, material) {
  return new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["ConvexMesh"])(this.buildGeometry(params), material, params);
}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createConvexConcave;


function createConvexConcave(params, material) {
  return new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : this.physics.type === 'concave' ? __WEBPACK_IMPORTED_MODULE_0__index_js__["ConcaveMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["ConvexMesh"])(this.buildGeometry(params), material, params);
}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createConvexConcaveCustom;


function createConvexConcaveCustom(params, material, geometry) {
  var geometry2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  return geometry2 ? new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : this.physics.type === 'concave' ? __WEBPACK_IMPORTED_MODULE_0__index_js__["ConcaveMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["ConvexMesh"])(geometry, material, params, geometry2) : new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : this.physics.type === 'concave' ? __WEBPACK_IMPORTED_MODULE_0__index_js__["ConcaveMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["ConvexMesh"])(geometry, material, params, geometry2);
}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createCylinder;


function createCylinder(params, material) {
  return new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["CylinderMesh"])(this.buildGeometry(params), material, params);
}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createLine;


function createLine(params, material) {
  return new __WEBPACK_IMPORTED_MODULE_0__index_js__["RopeMesh"](this.buildGeometry(params), material, params);
}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createPlane;


function createPlane(params, material) {
  return new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["ClothMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["PlaneMesh"])(this.buildGeometry(params), material, params);
}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createSphere;


function createSphere(params, material) {
  return new (params.softbody ? __WEBPACK_IMPORTED_MODULE_0__index_js__["SoftMesh"] : __WEBPACK_IMPORTED_MODULE_0__index_js__["SphereMesh"])(this.buildGeometry(params), material, params);
}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BoxMesh; });





var BoxMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(BoxMesh, _Mesh);

    function BoxMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BoxMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BoxMesh.__proto__ || Object.getPrototypeOf(BoxMesh)).call(this, geometry, material, mass, physParams));

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        var height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        var depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        _this._physijs.type = 'box';
        _this._physijs.width = width;
        _this._physijs.height = height;
        _this._physijs.depth = depth;
        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return BoxMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CapsuleMesh; });





var CapsuleMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(CapsuleMesh, _Mesh);

    function CapsuleMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CapsuleMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CapsuleMesh.__proto__ || Object.getPrototypeOf(CapsuleMesh)).call(this, geometry, material, mass, physParams));

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        var height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        var depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        _this._physijs.type = 'capsule';
        _this._physijs.radius = Math.max(width / 2, depth / 2);
        _this._physijs.height = height;
        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return CapsuleMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClothMesh; });






var ClothMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(ClothMesh, _Mesh);

    function ClothMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ClothMesh);

        var physParams = params.physics,
            geomParams = geometry.parameters;

        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ClothMesh.__proto__ || Object.getPrototypeOf(ClothMesh)).call(this, geometry, material, mass, physParams));

        _this._physijs.type = 'softClothMesh';

        var verts = geometry.attributes.position.array;

        if (!geomParams.widthSegments) geomParams.widthSegments = 1;
        if (!geomParams.heightSegments) geomParams.heightSegments = 1;

        var idx00 = 0;
        var idx01 = geomParams.widthSegments;
        var idx10 = (geomParams.heightSegments + 1) * (geomParams.widthSegments + 1) - (geomParams.widthSegments + 1);
        var idx11 = verts.length / 3 - 1;

        _this._physijs.corners = [verts[idx01 * 3], verts[idx01 * 3 + 1], verts[idx01 * 3 + 2], //   ╗
        verts[idx00 * 3], verts[idx00 * 3 + 1], verts[idx00 * 3 + 2], // ╔
        verts[idx11 * 3], verts[idx11 * 3 + 1], verts[idx11 * 3 + 2], //       ╝
        verts[idx10 * 3], verts[idx10 * 3 + 1], verts[idx10 * 3 + 2]];

        _this._physijs.segments = [geomParams.widthSegments + 1, geomParams.heightSegments + 1];

        _this._physijs.params = {
            friction: physParams.friction,
            damping: physParams.damping,
            margin: physParams.margin,
            klst: physParams.klst,
            kast: physParams.kast,
            kvst: physParams.kvst,
            drag: physParams.drag,
            lift: physParams.lift,
            piterations: physParams.piterations,
            viterations: physParams.viterations,
            diterations: physParams.diterations,
            citerations: physParams.citerations,
            anchorHardness: physParams.anchorHardness,
            rigidHardness: physParams.rigidHardness
        };

        _this._physijs.mass = mass;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ClothMesh, [{
        key: 'appendAnchor',
        value: function appendAnchor(world, object, node, influence) {
            var collisionBetweenLinkedBodies = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

            var o1 = this._physijs.id;
            var o2 = object._physijs.id;

            world.execute('appendAnchor', {
                obj: o1,
                obj2: o2,
                node: node,
                influence: influence,
                collisionBetweenLinkedBodies: collisionBetweenLinkedBodies
            });
        }
    }]);

    return ClothMesh;
}(__WEBPACK_IMPORTED_MODULE_4__core_mesh__["a" /* Mesh */]);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConcaveMesh; });





var ConcaveMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ConcaveMesh, _Mesh);

    function ConcaveMesh(geom, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var physicsReplacementGeometry = arguments[3];

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConcaveMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ConcaveMesh.__proto__ || Object.getPrototypeOf(ConcaveMesh)).call(this, geom, material, mass, physParams));

        var geometry = physicsReplacementGeometry ? physicsReplacementGeometry : geom;

        var isBuffer = geometry.type === 'BufferGeometry';

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var data = isBuffer ? geometry.attributes.position.array : new Float32Array(geometry.faces.length * 9);

        if (params.scale) geometry.scale(params.scale.x, params.scale.y, params.scale.z);

        var vertices = geometry.vertices;

        if (!isBuffer) {
            for (var i = 0; i < geometry.faces.length; i++) {
                var face = geometry.faces[i];

                data[i * 9] = vertices[face.a].x;
                data[i * 9 + 1] = vertices[face.a].y;
                data[i * 9 + 2] = vertices[face.a].z;

                data[i * 9 + 3] = vertices[face.b].x;
                data[i * 9 + 4] = vertices[face.b].y;
                data[i * 9 + 5] = vertices[face.b].z;

                data[i * 9 + 6] = vertices[face.c].x;
                data[i * 9 + 7] = vertices[face.c].y;
                data[i * 9 + 8] = vertices[face.c].z;
            }
        }

        var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        var height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        var depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        _this._physijs.type = 'concave';
        _this._physijs.data = data;
        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return ConcaveMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConeMesh; });





var ConeMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ConeMesh, _Mesh);

    function ConeMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConeMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ConeMesh.__proto__ || Object.getPrototypeOf(ConeMesh)).call(this, geometry, material, mass, physParams));

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        var height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

        _this._physijs.type = 'cone';
        _this._physijs.radius = width / 2;
        _this._physijs.height = height;
        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return ConeMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConvexMesh; });





var ConvexMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ConvexMesh, _Mesh);

    function ConvexMesh(geom, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var physicsReplacementGeometry = arguments[3];

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ConvexMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ConvexMesh.__proto__ || Object.getPrototypeOf(ConvexMesh)).call(this, geom, material, mass, physParams));

        var geometry = physicsReplacementGeometry ? physicsReplacementGeometry : geom;

        var isBuffer = geometry.type === 'BufferGeometry';

        if (params.scale) geometry.scale(params.scale.x, params.scale.y, params.scale.z);

        var data = isBuffer ? geometry.attributes.position.array : new Float32Array(geometry.vertices.length * 3);

        if (!geometry.boundingBox) geom.computeBoundingBox();

        if (!isBuffer) {
            for (var i = 0; i < geometry.vertices.length; i++) {
                data[i * 3] = geometry.vertices[i].x;
                data[i * 3 + 1] = geometry.vertices[i].y;
                data[i * 3 + 2] = geometry.vertices[i].z;
            }
        }

        var width = geom.boundingBox.max.x - geom.boundingBox.min.x;
        var height = geom.boundingBox.max.y - geom.boundingBox.min.y;
        var depth = geom.boundingBox.max.z - geom.boundingBox.min.z;

        _this._physijs.type = 'convex';
        _this._physijs.data = data;
        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return ConvexMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CylinderMesh; });





var CylinderMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(CylinderMesh, _Mesh);

    function CylinderMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CylinderMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (CylinderMesh.__proto__ || Object.getPrototypeOf(CylinderMesh)).call(this, geometry, material, mass, physParams));

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        var height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        var depth = geometry.boundingBox.max.z - geometry.boundingBox.min.z;

        _this._physijs.type = 'cylinder';
        _this._physijs.width = width;
        _this._physijs.height = height;
        _this._physijs.depth = depth;
        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return CylinderMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeightfieldMesh; });





var HeightfieldMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(HeightfieldMesh, _Mesh);

    function HeightfieldMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var xdiv = arguments[3];
        var ydiv = arguments[4];

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, HeightfieldMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (HeightfieldMesh.__proto__ || Object.getPrototypeOf(HeightfieldMesh)).call(this, geometry, material, mass, physParams));

        geometry.computeBoundingBox();

        var isBuffer = geometry instanceof THREE.BufferGeometry;
        var verts = isBuffer ? geometry.attributes.position.array : geometry.vertices;

        var size = isBuffer ? verts.length / 3 : verts.length;

        _this._physijs.type = 'heightfield';
        _this._physijs.xsize = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        _this._physijs.ysize = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        _this._physijs.xpts = typeof xdiv === 'undefined' ? Math.sqrt(size) : xdiv + 1;
        _this._physijs.ypts = typeof ydiv === 'undefined' ? Math.sqrt(size) : ydiv + 1;

        // note - this assumes our plane geometry is square, unless we pass in specific xdiv and ydiv
        _this._physijs.absMaxHeight = Math.max(geometry.boundingBox.max.z, Math.abs(geometry.boundingBox.min.z));

        var points = new Float32Array(size),
            xpts = _this._physijs.xpts,
            ypts = _this._physijs.ypts;

        while (size--) {
            var vNum = size % xpts + (ypts - Math.round(size / xpts - size % xpts / xpts) - 1) * ypts;

            if (isBuffer) points[size] = verts[vNum * 3 + 2];else points[size] = verts[vNum].z;
        }

        _this._physijs.points = points;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };

        _this._physijs.mass = mass;
        return _this;
    }

    return HeightfieldMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boxMesh__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__boxMesh__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__capsuleMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capsuleMesh__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concaveMesh__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__concaveMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coneMesh__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__coneMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__convexMesh__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__convexMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cylinderMesh__ = __webpack_require__(82);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__cylinderMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heightfieldMesh__ = __webpack_require__(83);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__heightfieldMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__planeMesh__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__planeMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sphereMesh__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__sphereMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__softMesh__ = __webpack_require__(87);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__softMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clothMesh__ = __webpack_require__(78);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__clothMesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ropeMesh__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__ropeMesh__["a"]; });













/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlaneMesh; });





var PlaneMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(PlaneMesh, _Mesh);

    function PlaneMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PlaneMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PlaneMesh.__proto__ || Object.getPrototypeOf(PlaneMesh)).call(this, geometry, material, mass, physParams));

        if (!geometry.boundingBox) geometry.computeBoundingBox();

        var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        var height = geometry.boundingBox.max.y - geometry.boundingBox.min.y;

        _this._physijs.type = 'plane';
        _this._physijs.normal = geometry.faces[0].normal.clone();

        _this._physijs.mass = mass;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };
        return _this;
    }

    return PlaneMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_line__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RopeMesh; });






var RopeMesh = function (_Line) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(RopeMesh, _Line);

  function RopeMesh(geometry, material) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RopeMesh);

    var physParams = params.physics;

    var mass = physParams.mass || params.mass;

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (RopeMesh.__proto__ || Object.getPrototypeOf(RopeMesh)).call(this, geometry, material, mass, physParams));

    _this._physijs.type = 'softRopeMesh';

    var v1 = params.geometry.curve.getPoint(0);
    var v2 = params.geometry.curve.getPoint(1);

    _this._physijs.data = [v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, params.geometry.points];

    _this._physijs.params = {
      friction: physParams.friction,
      damping: physParams.damping,
      margin: physParams.margin,
      klst: physParams.klst,
      kast: physParams.kast,
      kvst: physParams.kvst,
      drag: physParams.drag,
      lift: physParams.lift,
      piterations: physParams.piterations,
      viterations: physParams.viterations,
      diterations: physParams.diterations,
      citerations: physParams.citerations,
      anchorHardness: physParams.anchorHardness,
      rigidHardness: physParams.rigidHardness
    };

    _this._physijs.mass = mass;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(RopeMesh, [{
    key: 'appendAnchor',
    value: function appendAnchor(world, object, node, influence) {
      var collisionBetweenLinkedBodies = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      var o1 = this._physijs.id;
      var o2 = object._physijs.id;

      if (!o1 || !o2) console.error('Objects should be added to scene before calling .appendAnchor()');

      world.execute('appendAnchor', {
        obj: o1,
        obj2: o2,
        node: node,
        influence: influence,
        collisionBetweenLinkedBodies: collisionBetweenLinkedBodies
      });
    }
  }]);

  return RopeMesh;
}(__WEBPACK_IMPORTED_MODULE_4__core_line__["a" /* Line */]);

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SoftMesh; });






var SoftMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(SoftMesh, _Mesh);

    function SoftMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SoftMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;
        var tempGeometry = geometry.clone();

        if (!(geometry instanceof THREE.BufferGeometry)) // Converts to BufferGeometry.
            geometry = new THREE.BufferGeometry().fromGeometry(geometry);

        // console.log(tempGeometry.mergeVertices);
        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SoftMesh.__proto__ || Object.getPrototypeOf(SoftMesh)).call(this, geometry, material, mass, physParams));

        tempGeometry.mergeVertices();
        var idxGeometry = _this.createIndexedBufferGeometryFromGeometry(tempGeometry);
        _this.tempGeometry = tempGeometry;

        var aVertices = idxGeometry.attributes.position.array;
        var aIndices = idxGeometry.index.array;
        var aIdxAssoc = [];
        var vertices = geometry.attributes.position.array;

        var numIdxVertices = aVertices.length / 3;
        var numVertices = vertices.length / 3;

        for (var i = 0; i < numIdxVertices; i++) {
            var association = [];
            aIdxAssoc.push(association);

            var i3 = i * 3;

            for (var j = 0; j < numVertices; j++) {
                var j3 = j * 3;

                if (_this.isEqual(aVertices[i3], aVertices[i3 + 1], aVertices[i3 + 2], vertices[j3], vertices[j3 + 1], vertices[j3 + 2])) association.push(j3);
            }
        }

        _this._physijs.type = 'softTrimesh';
        _this._physijs.aVertices = aVertices;
        _this._physijs.aIndices = aIndices;
        _this._physijs.aIdxAssoc = aIdxAssoc;

        _this._physijs.params = {
            friction: physParams.friction,
            damping: physParams.damping,
            pressure: physParams.pressure,
            margin: physParams.margin,
            klst: physParams.klst,
            kast: physParams.kast,
            kvst: physParams.kvst,
            drag: physParams.drag,
            lift: physParams.lift,
            piterations: physParams.piterations,
            viterations: physParams.viterations,
            diterations: physParams.diterations,
            citerations: physParams.citerations,
            anchorHardness: physParams.anchorHardness,
            rigidHardness: physParams.rigidHardness
        };

        _this._physijs.mass = mass;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(SoftMesh, [{
        key: 'createIndexedBufferGeometryFromGeometry',
        value: function createIndexedBufferGeometryFromGeometry(geometry) {
            var numVertices = geometry.vertices.length;
            var numFaces = geometry.faces.length;
            var bufferGeom = new THREE.BufferGeometry();
            var vertices = new Float32Array(numVertices * 3);
            var indices = new (numFaces * 3 > 65535 ? Uint32Array : Uint16Array)(numFaces * 3);

            for (var i = 0; i < numVertices; i++) {
                var p = geometry.vertices[i];
                var i3 = i * 3;

                vertices[i3] = p.x;
                vertices[i3 + 1] = p.y;
                vertices[i3 + 2] = p.z;
            }

            for (var _i = 0; _i < numFaces; _i++) {
                var f = geometry.faces[_i];
                var _i2 = _i * 3;

                indices[_i2] = f.a;
                indices[_i2 + 1] = f.b;
                indices[_i2 + 2] = f.c;
            }

            bufferGeom.setIndex(new THREE.BufferAttribute(indices, 1));
            bufferGeom.addAttribute('position', new THREE.BufferAttribute(vertices, 3));

            return bufferGeom;
        }
    }, {
        key: 'isEqual',
        value: function isEqual(x1, y1, z1, x2, y2, z2) {
            var delta = 0.000001;

            return Math.abs(x2 - x1) < delta && Math.abs(y2 - y1) < delta && Math.abs(z2 - z1) < delta;
        }
    }, {
        key: 'appendAnchor',
        value: function appendAnchor(world, object, node, influence) {
            var collisionBetweenLinkedBodies = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

            var o1 = this._physijs.id;
            var o2 = object._physijs.id;

            world.execute('appendAnchor', {
                obj: o1,
                obj2: o2,
                node: node,
                influence: influence,
                collisionBetweenLinkedBodies: collisionBetweenLinkedBodies
            });
        }
    }]);

    return SoftMesh;
}(__WEBPACK_IMPORTED_MODULE_4__core_mesh__["a" /* Mesh */]);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_mesh__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SphereMesh; });





var SphereMesh = function (_Mesh) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SphereMesh, _Mesh);

    function SphereMesh(geometry, material) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SphereMesh);

        var physParams = params.physics;
        var mass = physParams.mass || params.mass;

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SphereMesh.__proto__ || Object.getPrototypeOf(SphereMesh)).call(this, geometry, material, mass, physParams));

        if (!geometry.boundingSphere) geometry.computeBoundingSphere();
        _this._physijs.type = 'sphere';
        _this._physijs.radius = geometry.boundingSphere.radius;

        _this._physijs.params = {
            friction: physParams.friction,
            restitution: physParams.restitution,
            damping: physParams.damping,
            margin: physParams.margin
        };

        _this._physijs.mass = mass;
        return _this;
    }

    return SphereMesh;
}(__WEBPACK_IMPORTED_MODULE_3__core_mesh__["a" /* Mesh */]);

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tunning__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tunning__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__vehicle__["a"]; });



/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(8).Object.assign;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(122);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(123);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(8).Object.setPrototypeOf;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(127);
__webpack_require__(125);
__webpack_require__(128);
__webpack_require__(129);
module.exports = __webpack_require__(8).Symbol;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(126);
__webpack_require__(130);
module.exports = __webpack_require__(37).f('iterator');

/***/ },
/* 102 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 103 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12)
  , toLength  = __webpack_require__(119)
  , toIndex   = __webpack_require__(118);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20)
  , gOPS    = __webpack_require__(30)
  , pIE     = __webpack_require__(22);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(46);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(29)
  , descriptor     = __webpack_require__(23)
  , setToStringTag = __webpack_require__(31)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(16)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(20)
  , toIObject = __webpack_require__(12);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(24)('meta')
  , isObject = __webpack_require__(19)
  , has      = __webpack_require__(10)
  , setDesc  = __webpack_require__(11).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(18)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(20)
  , gOPS     = __webpack_require__(30)
  , pIE      = __webpack_require__(22)
  , toObject = __webpack_require__(56)
  , IObject  = __webpack_require__(50)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(11)
  , anObject = __webpack_require__(17)
  , getKeys  = __webpack_require__(20);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12)
  , gOPN      = __webpack_require__(53).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(10)
  , toObject    = __webpack_require__(56)
  , IE_PROTO    = __webpack_require__(32)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(19)
  , anObject = __webpack_require__(17);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(47)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , defined   = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(103)
  , step             = __webpack_require__(109)
  , Iterators        = __webpack_require__(27)
  , toIObject        = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(51)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(112)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(29)});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(14);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(116).set});

/***/ },
/* 125 */
/***/ function(module, exports) {



/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(117)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(51)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(7)
  , has            = __webpack_require__(10)
  , DESCRIPTORS    = __webpack_require__(9)
  , $export        = __webpack_require__(14)
  , redefine       = __webpack_require__(55)
  , META           = __webpack_require__(111).KEY
  , $fails         = __webpack_require__(18)
  , shared         = __webpack_require__(33)
  , setToStringTag = __webpack_require__(31)
  , uid            = __webpack_require__(24)
  , wks            = __webpack_require__(16)
  , wksExt         = __webpack_require__(37)
  , wksDefine      = __webpack_require__(36)
  , keyOf          = __webpack_require__(110)
  , enumKeys       = __webpack_require__(105)
  , isArray        = __webpack_require__(107)
  , anObject       = __webpack_require__(17)
  , toIObject      = __webpack_require__(12)
  , toPrimitive    = __webpack_require__(35)
  , createDesc     = __webpack_require__(23)
  , _create        = __webpack_require__(29)
  , gOPNExt        = __webpack_require__(114)
  , $GOPD          = __webpack_require__(52)
  , $DP            = __webpack_require__(11)
  , $keys          = __webpack_require__(20)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(53).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f  = $propertyIsEnumerable;
  __webpack_require__(30).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(28)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(36)('asyncIterator');

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(36)('observable');

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(120);
var global        = __webpack_require__(7)
  , hide          = __webpack_require__(15)
  , Iterators     = __webpack_require__(27)
  , TO_STRING_TAG = __webpack_require__(16)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 131 */
/***/ function(module, exports) {

// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;
module.exports = function(content, url) {
	try {
		try {
			var blob;
			try { // BlobBuilder = Deprecated, but widely implemented
				var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
				blob = new BlobBuilder();
				blob.append(content);
				blob = blob.getBlob();
			} catch(e) { // The proposed API
				blob = new Blob([content]);
			}
			return new Worker(URL.createObjectURL(blob));
		} catch(e) {
			return new Worker('data:application/javascript,' + encodeURIComponent(content));
		}
	} catch(e) {
		return new Worker(url);
	}
}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function() {
};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }
/******/ ]);
});
//# sourceMappingURL=physics-module.js.map