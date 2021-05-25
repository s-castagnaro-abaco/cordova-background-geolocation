var plugin = function () {
    return window.BackgroundGeolocation;
};
var BackgroundGeolocation = /** @class */ (function () {
    function BackgroundGeolocation() {
    }
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_OFF", {
        get: function () { return plugin().LOG_LEVEL_OFF; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_ERROR", {
        get: function () { return plugin().LOG_LEVEL_ERROR; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_WARNING", {
        get: function () { return plugin().LOG_LEVEL_WARNING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_INFO", {
        get: function () { return plugin().LOG_LEVEL_INFO; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_DEBUG", {
        get: function () { return plugin().LOG_LEVEL_DEBUG; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "LOG_LEVEL_VERBOSE", {
        get: function () { return plugin().LOG_LEVEL_VERBOSE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_NAVIGATION", {
        get: function () { return plugin().DESIRED_ACCURACY_NAVIGATION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_HIGH", {
        get: function () { return plugin().DESIRED_ACCURACY_HIGH; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_MEDIUM", {
        get: function () { return plugin().DESIRED_ACCURACY_MEDIUM; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_LOW", {
        get: function () { return plugin().DESIRED_ACCURACY_LOW; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_VERY_LOW", {
        get: function () { return plugin().DESIRED_ACCURACY_VERY_LOW; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "DESIRED_ACCURACY_THREE_KILOMETER", {
        get: function () { return plugin().DESIRED_ACCURACY_THREE_KILOMETER; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_NOT_DETERMINED", {
        get: function () { return plugin().AUTHORIZATION_STATUS_NOT_DETERMINED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_RESTRICTED", {
        get: function () { return plugin().AUTHORIZATION_STATUS_RESTRICTED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_DENIED", {
        get: function () { return plugin().AUTHORIZATION_STATUS_DENIED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_ALWAYS", {
        get: function () { return plugin().AUTHORIZATION_STATUS_ALWAYS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "AUTHORIZATION_STATUS_WHEN_IN_USE", {
        get: function () { return plugin().AUTHORIZATION_STATUS_WHEN_IN_USE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_DEFAULT", {
        get: function () { return plugin().NOTIFICATION_PRIORITY_DEFAULT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_HIGH", {
        get: function () { return plugin().NOTIFICATION_PRIORITY_HIGH; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_LOW", {
        get: function () { return plugin().NOTIFICATION_PRIORITY_LOW; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_MAX", {
        get: function () { return plugin().NOTIFICATION_PRIORITY_MAX; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "NOTIFICATION_PRIORITY_MIN", {
        get: function () { return plugin().NOTIFICATION_PRIORITY_MIN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_OTHER", {
        get: function () { return plugin().ACTIVITY_TYPE_OTHER; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION", {
        get: function () { return plugin().ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_FITNESS", {
        get: function () { return plugin().ACTIVITY_TYPE_FITNESS; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACTIVITY_TYPE_OTHER_NAVIGATION", {
        get: function () { return plugin().ACTIVITY_TYPE_OTHER_NAVIGATION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_ALL", {
        get: function () { return plugin().PERSIST_MODE_ALL; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_LOCATION", {
        get: function () { return plugin().PERSIST_MODE_LOCATION; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_GEOFENCE", {
        get: function () { return plugin().PERSIST_MODE_GEOFENCE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "PERSIST_MODE_NONE", {
        get: function () { return plugin().PERSIST_MODE_NONE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACCURACY_AUTHORIZATION_FULL", {
        get: function () { return plugin().ACCURACY_AUTHORIZATION_FULL; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "ACCURACY_AUTHORIZATION_REDUCED", {
        get: function () { return plugin().ACCURACY_AUTHORIZATION_REDUCED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "logger", {
        get: function () { return plugin().logger; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackgroundGeolocation, "deviceSettings", {
        get: function () { return plugin().deviceSettings; },
        enumerable: true,
        configurable: true
    });
    BackgroundGeolocation.ready = function (config, success, failure) {
        return true;
    };
    BackgroundGeolocation.configure = function () {
        return true;
    };
    BackgroundGeolocation.reset = function () {
        return true;
    };
    BackgroundGeolocation.onLocation = function (success, failure) {
    };
    BackgroundGeolocation.onMotionChange = function (callback) {
    };
    BackgroundGeolocation.onHttp = function (callback) {
    };
    BackgroundGeolocation.onHeartbeat = function (callback) {
    };
    BackgroundGeolocation.onProviderChange = function (callback) {
    };
    BackgroundGeolocation.onActivityChange = function (callback) {
    };
    BackgroundGeolocation.onGeofence = function (callback) {
    };
    BackgroundGeolocation.onGeofencesChange = function (callback) {
    };
    BackgroundGeolocation.onSchedule = function (callback) {
    };
    BackgroundGeolocation.onEnabledChange = function (callback) {
    };
    BackgroundGeolocation.onConnectivityChange = function (callback) {
    };
    BackgroundGeolocation.onPowerSaveChange = function (callback) {
    };
    BackgroundGeolocation.onNotificationAction = function (callback) {
    };
    BackgroundGeolocation.onAuthorization = function (callback) {
    };
    BackgroundGeolocation.on = function () {
    };
    BackgroundGeolocation.un = function () {
    };
    BackgroundGeolocation.removeListener = function () {
    };
    BackgroundGeolocation.removeListeners = function () {
    };
    BackgroundGeolocation.getState = function () {
    };
    BackgroundGeolocation.start = function () {
        return true;
    };
    BackgroundGeolocation.stop = function () {
        return true;
    };
    BackgroundGeolocation.startSchedule = function () {
        return true;
    };
    BackgroundGeolocation.stopSchedule = function () {
        return true;
    };
    BackgroundGeolocation.startGeofences = function () {
        return true;
    };
    BackgroundGeolocation.startBackgroundTask = function () {
        return true;
    };
    BackgroundGeolocation.stopBackgroundTask = function () {
        return true;
    };
    // @deprecated.
    BackgroundGeolocation.finish = function () {
        return true;
    };
    BackgroundGeolocation.changePace = function () {
        return true;
    };
    BackgroundGeolocation.setConfig = function () {
        return true;
    };
    BackgroundGeolocation.getLocations = function () {
        return true;
    };
    BackgroundGeolocation.getCount = function () {
        return 0;
    };
    BackgroundGeolocation.destroyLocations = function () {
        return true;
    };
    BackgroundGeolocation.destroyLocation = function (uuid) {
        return true;
    };
    BackgroundGeolocation.insertLocation = function () {
        return true;
    };
    BackgroundGeolocation.sync = function () {
        return true;
    };
    BackgroundGeolocation.getOdometer = function () {
        return true;
    };
    BackgroundGeolocation.resetOdometer = function () {
        return true;
    };
    BackgroundGeolocation.setOdometer = function () {
        return true;
    };
    BackgroundGeolocation.addGeofence = function () {
        return true;
    };
    BackgroundGeolocation.removeGeofence = function () {
        return true;
    };
    BackgroundGeolocation.addGeofences = function () {
        return true;
    };
    BackgroundGeolocation.removeGeofences = function () {
        return true;
    };
    BackgroundGeolocation.getGeofences = function () {
        return true;
    };
    BackgroundGeolocation.getGeofence = function () {
        return true;
    };
    BackgroundGeolocation.geofenceExists = function () {
        return true;
    };
    BackgroundGeolocation.getCurrentPosition = function () {
        return true;
    };
    BackgroundGeolocation.watchPosition = function () {
        return true;
    };
    BackgroundGeolocation.stopWatchPosition = function () {
        return true;
    };
    BackgroundGeolocation.registerHeadlessTask = function () {
        return true;
    };
    BackgroundGeolocation.setLogLevel = function () {
        return true;
    };
    BackgroundGeolocation.getLog = function () {
        return true;
    };
    BackgroundGeolocation.destroyLog = function () {
        return true;
    };
    BackgroundGeolocation.emailLog = function () {
        return true;
    };
    BackgroundGeolocation.isPowerSaveMode = function () {
        return true;
    };
    BackgroundGeolocation.getSensors = function () {
        return true;
    };
    BackgroundGeolocation.getDeviceInfo = function () {
        return true;
    };
    BackgroundGeolocation.playSound = function () {
        return true;
    };
    BackgroundGeolocation.transistorTrackerParams = function () {
        return true;
    };
    BackgroundGeolocation.findOrCreateTransistorAuthorizationToken = function (orgname, username, host) {
        return true;
    };
    BackgroundGeolocation.destroyTransistorAuthorizationToken = function (host) {
        return true;
    };
    BackgroundGeolocation.getProviderState = function () {
        return true;
    };
    BackgroundGeolocation.requestPermission = function () {
        return true;
    };
    BackgroundGeolocation.requestTemporaryFullAccuracy = function () {
        return true;
    };
    return BackgroundGeolocation;
}());
export default BackgroundGeolocation;
