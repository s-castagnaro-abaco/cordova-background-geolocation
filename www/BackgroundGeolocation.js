
module.exports = {
    LOG_LEVEL_OFF: 0,
    LOG_LEVEL_ERROR: 1,
    LOG_LEVEL_WARNING: 2,
    LOG_LEVEL_INFO: 3,
    LOG_LEVEL_DEBUG: 4,
    LOG_LEVEL_VERBOSE: 5,

    // For #desiredAccuracy
    DESIRED_ACCURACY_NAVIGATION: -2,
    DESIRED_ACCURACY_HIGH: -1,
    DESIRED_ACCURACY_MEDIUM: 10,
    DESIRED_ACCURACY_LOW: 100,
    DESIRED_ACCURACY_VERY_LOW: 1000,
    DESIRED_ACCURACY_THREE_KILOMETER: 3000,

    // For providerchange event
    AUTHORIZATION_STATUS_NOT_DETERMINED: 0,
    AUTHORIZATION_STATUS_RESTRICTED: 1,
    AUTHORIZATION_STATUS_DENIED: 2,
    AUTHORIZATION_STATUS_ALWAYS: 3,
    AUTHORIZATION_STATUS_WHEN_IN_USE: 4,

    // For android #notificationPriority
    NOTIFICATION_PRIORITY_DEFAULT: 0,
    NOTIFICATION_PRIORITY_HIGH: 1,
    NOTIFICATION_PRIORITY_LOW: -1,
    NOTIFICATION_PRIORITY_MAX: 2,
    NOTIFICATION_PRIORITY_MIN: -2,

    // For iOS #activityType
    ACTIVITY_TYPE_OTHER: 1,
    ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION: 2,
    ACTIVITY_TYPE_FITNESS: 3,
    ACTIVITY_TYPE_OTHER_NAVIGATION: 4,

    // For persistMode
    PERSIST_MODE_ALL: 2,
    PERSIST_MODE_LOCATION: 1,
    PERSIST_MODE_GEOFENCE: -1,
    PERSIST_MODE_NONE: 0,

    ACCURACY_AUTHORIZATION_FULL: 0,
    ACCURACY_AUTHORIZATION_REDUCED: 1,

    deviceSettings: DeviceSettings,

    logger: Logger,

    ready: function (defaultConfig, success, failure) {
        return true
    },
    configure: function (config, success, failure) {
        
    },
    reset: function (config, success, failure) {
        return true
    },
    requestPermission: function (success, failure) {
        return true
    },
    requestTemporaryFullAccuracy: function (purpose) {
        return true
    },
    getProviderState: function (success, failure) {
        return true
    },
    onLocation: function (success, failure) {
        return true
    },

    onMotionChange: function (callback) {
        callback && callback();
    },

    onHttp: function (callback) {
        callback && callback();
    },

    onHeartbeat: function (callback) {
        callback && callback();
    },

    onProviderChange: function (callback) {
        callback && callback();
    },

    onActivityChange: function (callback) {
        callback && callback();
    },

    onGeofence: function (callback) {
        callback && callback();
    },

    onGeofencesChange: function (callback) {
        callback && callback();
    },

    onSchedule: function (callback) {
        callback && callback();
    },

    onEnabledChange: function (callback) {
        callback && callback();
    },

    onConnectivityChange: function (callback) {
        callback && callback();
    },

    onPowerSaveChange: function (callback) {
        callback && callback();
    },

    onNotificationAction: function (callback) {
        callback && callback();
    },

    onAuthorization: function (callback) {
        callback && callback();
    },

    on: function (event, success, failure) {
        
    },
    /**
    * @alias #removeListener
    */
    un: function () {
        
    },
    removeListener: function (event, handler, success, failure) {
        
    },
    removeListeners: function (success, failure) {
        
    },
    getState: function (success, failure) {
        
    },
    start: function (success, failure) {
        
    },
    stop: function (success, failure) {
        
    },
    startSchedule: function (success, failure) {
        
    },
    stopSchedule: function (success, failure) {
        
    },
    startGeofences: function (success, failure) {
        
    },
    startBackgroundTask: function (success, failure) {
        
    },
    stopBackgroundTask: function (taskId, success, failure) {
        
    },
    finish: function (taskId, success, failure) {
        
    },
    changePace: function (isMoving, success, failure) {
        
    },
    setConfig: function (config, success, failure) {
        
    },
    getLocations: function (success, failure) {
       
    },
    getCount: function (success, failure) {
        return 0;
    },
    destroyLocations: function (success, failure) {
        
    },
    destroyLocation: function (uuid) {
        
    },
    // @deprecated
    clearDatabase: function () {
        
    },
    insertLocation: function (location, success, failure) {
       
    },
    sync: function (success, failure) {
        
    },
    getOdometer: function (success, failure) {
        
    },
    resetOdometer: function (success, failure) {
        
    },
    setOdometer: function (value, success, failure) {
        
    },
    addGeofence: function (config, success, failure) {
        
    },
    removeGeofence: function (identifier, success, failure) {
       
    },
    addGeofences: function (geofences, success, failure) {
        
    },
    
    removeGeofences: function (identifiers, success, failure) {
       
    },
    getGeofences: function (success, failure) {
        
    },
    getGeofence: function (identifier, success, failure) {
        
    },
    geofenceExists: function (identifier, callback) {
        
    },
    getCurrentPosition: function (options, success, failure) {
       
    },
    watchPosition: function (success, failure, options) {
        
    },
    stopWatchPosition: function (success, failure) {
        
    },
    registerHeadlessTask: function (callback) {
        console.warn('[BackgroundGeolocation registerHeadlessTask] -- Cordova has no Javascript mechanism for registering Headless-tasks.  See Wiki https://github.com/transistorsoft/cordova-background-geolocation-lt/wiki/Android-Headless-Mode');
    },
    setLogLevel: function (logLevel, success, failure) {
        
    },
    getLog: function (success, failure) {
        
    },
    destroyLog: function (success, failure) {
        
    },
    emailLog: function (email, success, failure) {
        
    },
    isPowerSaveMode: function (success, failure) {
       
    },
    getSensors: function (success, failure) {
        
    },
    getDeviceInfo: function () {
        
    },

    
    playSound: function (soundId) {
       
    },
   
    transistorTrackerParams: function (device) {
        
    },
    
    findOrCreateTransistorAuthorizationToken: function (orgname, username, url) {
       
    },

    destroyTransistorAuthorizationToken: function (url) {
      
    },
    test: function (delay) {
      
    }
};
