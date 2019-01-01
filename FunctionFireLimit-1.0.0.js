/*
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
-                                                                       -
+  ###################################################################  +
-  #  Title:       Javascript Function Fire Rate Limit               #  -
+  #  File Name:   FunctionFireLimit-1.0.0.js                        #  +
+  #  Version:     1.0.0                        					 #  +
-  #  License:     MIT License                                       #  -
+  #  Copyright:   (c) 2019 ImanFarahi - professionalProgrammer.ir   #  +
-  #  Author:      Iman Farahi                                       #  -
+  #  Website:     http://professionalProgrammer.ir                  #  +
-  #  Email:       professionalProgrammer.ir@gmail.com               #  -
+  ###################################################################  +
-                                                                       -
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
*/

"use strict";

/**
 * @namespace
 * @public
 * @description Function Fire Rate Limit
 */
var FunctionFireLimit;
(function (FunctionFireLimit) {


    /**
     * @description  Returns a function, that, as long as it continues to be invoked, will not
     *               be triggered. The function will be called after it stops being called for
     *               N milliseconds. If `immediate` is passed, trigger the function on the
     *               leading edge, instead of the trailing.
     * @public
     * @static
     * @version 1.0.0
     * @param {function} callBack
     * @param {number} delay
     * @param {Boolean} immediate
     * @param {Object} scope
     * @returns {function} debounce function
     */
    FunctionFireLimit.debounce = function (callBack, delay, immediate, scope) {
        var timeoutId = null, context, args, callNow;
        var later = function () {
            timeoutId = null;
            if (!immediate) return callBack.apply(context, args);
        };
        delay || (delay = 250);
        return function () {
            context = (scope || this), args = arguments, callNow = immediate && !timeoutId;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(later, delay);
            if (callNow) return callBack.apply(context, args);
        };
    };



    /** 
    * @description Returns a function, that, when invoked, will only be triggered at most once
    *              during a given window of time. Normally, the throttled function will run
    *              as much as it can, without ever going more than once per `threshhold` duration;
    *              but if you'd like to disable the execution on the leading edge,
    *              If `immediate` is passed, trigger the function on the leading edge,.
    * @public
    * @static
    * @version 1.0.0
    * @param {function} callBack
    * @param {number} threshhold
    * @param {Boolean} immediate
    * @param {Object} scope
    * @returns {function} throttle function
    */
    FunctionFireLimit.throttle = function (callBack, threshhold, immediate, scope) {
        var context, args, result, now, timeoutId = null, previous = 0;
        var later = function () {
            timeoutId = null;
            result = callBack.apply(context, args);
        };
        threshhold || (threshhold = 250);
        return function () {
            now = +new Date; args = arguments; context = (scope || this);
            if (immediate && now > (previous + threshhold)) {
                result = callBack.apply(context, args);
                previous = now;
            } else if (!immediate && !timeoutId) {
                timeoutId = setTimeout(later, threshhold);
            }
            return result;
        };
    };


})(FunctionFireLimit || (FunctionFireLimit = {}));
