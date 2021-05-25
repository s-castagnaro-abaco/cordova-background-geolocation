const plugin = function ()
{
    return (<any>window).BackgroundGeolocation;
}

export default class BackgroundGeolocation
{

    static get LOG_LEVEL_OFF() { return plugin().LOG_LEVEL_OFF; }
    static get LOG_LEVEL_ERROR() { return plugin().LOG_LEVEL_ERROR; }
    static get LOG_LEVEL_WARNING() { return plugin().LOG_LEVEL_WARNING; }
    static get LOG_LEVEL_INFO() { return plugin().LOG_LEVEL_INFO; }
    static get LOG_LEVEL_DEBUG() { return plugin().LOG_LEVEL_DEBUG; }
    static get LOG_LEVEL_VERBOSE() { return plugin().LOG_LEVEL_VERBOSE; }

    static get DESIRED_ACCURACY_NAVIGATION() { return plugin().DESIRED_ACCURACY_NAVIGATION; }
    static get DESIRED_ACCURACY_HIGH() { return plugin().DESIRED_ACCURACY_HIGH; }
    static get DESIRED_ACCURACY_MEDIUM() { return plugin().DESIRED_ACCURACY_MEDIUM; }
    static get DESIRED_ACCURACY_LOW() { return plugin().DESIRED_ACCURACY_LOW; }
    static get DESIRED_ACCURACY_VERY_LOW() { return plugin().DESIRED_ACCURACY_VERY_LOW; }
    static get DESIRED_ACCURACY_THREE_KILOMETER() { return plugin().DESIRED_ACCURACY_THREE_KILOMETER; }

    static get AUTHORIZATION_STATUS_NOT_DETERMINED() { return plugin().AUTHORIZATION_STATUS_NOT_DETERMINED; }
    static get AUTHORIZATION_STATUS_RESTRICTED() { return plugin().AUTHORIZATION_STATUS_RESTRICTED; }
    static get AUTHORIZATION_STATUS_DENIED() { return plugin().AUTHORIZATION_STATUS_DENIED; }
    static get AUTHORIZATION_STATUS_ALWAYS() { return plugin().AUTHORIZATION_STATUS_ALWAYS; }
    static get AUTHORIZATION_STATUS_WHEN_IN_USE() { return plugin().AUTHORIZATION_STATUS_WHEN_IN_USE; }

    static get NOTIFICATION_PRIORITY_DEFAULT() { return plugin().NOTIFICATION_PRIORITY_DEFAULT; }
    static get NOTIFICATION_PRIORITY_HIGH() { return plugin().NOTIFICATION_PRIORITY_HIGH; }
    static get NOTIFICATION_PRIORITY_LOW() { return plugin().NOTIFICATION_PRIORITY_LOW; }
    static get NOTIFICATION_PRIORITY_MAX() { return plugin().NOTIFICATION_PRIORITY_MAX; }
    static get NOTIFICATION_PRIORITY_MIN() { return plugin().NOTIFICATION_PRIORITY_MIN; }

    static get ACTIVITY_TYPE_OTHER() { return plugin().ACTIVITY_TYPE_OTHER; }
    static get ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION() { return plugin().ACTIVITY_TYPE_AUTOMOTIVE_NAVIGATION; }
    static get ACTIVITY_TYPE_FITNESS() { return plugin().ACTIVITY_TYPE_FITNESS; }
    static get ACTIVITY_TYPE_OTHER_NAVIGATION() { return plugin().ACTIVITY_TYPE_OTHER_NAVIGATION; }

    static get PERSIST_MODE_ALL() { return plugin().PERSIST_MODE_ALL; }
    static get PERSIST_MODE_LOCATION() { return plugin().PERSIST_MODE_LOCATION; }
    static get PERSIST_MODE_GEOFENCE() { return plugin().PERSIST_MODE_GEOFENCE; }
    static get PERSIST_MODE_NONE() { return plugin().PERSIST_MODE_NONE; }

    static get ACCURACY_AUTHORIZATION_FULL() { return plugin().ACCURACY_AUTHORIZATION_FULL; }
    static get ACCURACY_AUTHORIZATION_REDUCED() { return plugin().ACCURACY_AUTHORIZATION_REDUCED; }

    static get logger() { return plugin().logger; }

    static get deviceSettings() { return plugin().deviceSettings; }

    static ready(config: any, success?: Function, failure?: Function)
    {
        return true;
    }
    static configure()
    {
        
        return true;
    }
    static reset()
    {
        return true;
    }

    static onLocation(success: Function, failure: Function)
    {
        
    }
    static onMotionChange(callback: Function)
    {
        
    }
    static onHttp(callback: Function)
    {
        
    }
    static onHeartbeat(callback: Function)
    {
      
    }
    static onProviderChange(callback: Function)
    {
        
    }
    static onActivityChange(callback: Function)
    {
       
    }
    static onGeofence(callback: Function)
    {
       
    }
    static onGeofencesChange(callback: Function)
    {
        
    }
    static onSchedule(callback: Function)
    {
        
    }
    static onEnabledChange(callback: Function)
    {
       
    }
    static onConnectivityChange(callback: Function)
    {
        
    }
    static onPowerSaveChange(callback: Function)
    {
        
    }
    static onNotificationAction(callback: Function)
    {
        
    }
    static onAuthorization(callback: Function)
    {
        
    }
    static on()
    {
        
    }
    static un()
    {
        
    }
    static removeListener()
    {
       
    }
    static removeListeners()
    {
        
    }
    static getState()
    {
        
    }
    static start()
    {
        return true;
    }
    static stop()
    {
        return true;
    }
    static startSchedule()
    {
        return true;
    }
    static stopSchedule()
    {
        return true;
    }
    static startGeofences()
    {
        return true;
    }
    static startBackgroundTask()
    {
        return true;
    }

    static stopBackgroundTask()
    {
        return true;
    }
    // @deprecated.
    static finish()
    {
        return true;
    }
    static changePace()
    {
        return true;
    }
    static setConfig()
    {
        return true;
    }
    static getLocations()
    {
        return true;
    }
    static getCount()
    {
        return 0;
    }
    static destroyLocations()
    {
        return true;
    }
    static destroyLocation(uuid: string)
    {
        return true;
    }
    static insertLocation()
    {
        return true;
    }
    static sync()
    {
        return true;
    }
    static getOdometer()
    {
        return true;
    }
    static resetOdometer()
    {
        return true;
    }
    static setOdometer()
    {
        return true;
    }
    static addGeofence()
    {
        return true;
    }
    static removeGeofence()
    {
        return true;
    }
    static addGeofences()
    {
        return true;
    }
    static removeGeofences()
    {
        return true;
    }
    static getGeofences()
    {
        return true;
    }
    static getGeofence()
    {
        return true;
    }
    static geofenceExists()
    {
        return true;
    }
    static getCurrentPosition()
    {
        return true;
    }
    static watchPosition()
    {
        return true;
    }
    static stopWatchPosition()
    {
        return true;
    }
    static registerHeadlessTask()
    {
        return true;
    }
    static setLogLevel()
    {
        return true;
    }
    static getLog()
    {
        return true;
    }
    static destroyLog()
    {
        return true;
    }
    static emailLog()
    {
        return true;
    }
    static isPowerSaveMode()
    {
        return true;
    }
    static getSensors()
    {
        return true;
    }
    static getDeviceInfo()
    {
        return true;
    }
    static playSound()
    {
        return true;
    }
    static transistorTrackerParams()
    {
        return true;
    }
    static findOrCreateTransistorAuthorizationToken(orgname: string, username: string, host?: string)
    {
        return true;
    }
    static destroyTransistorAuthorizationToken(host: string)
    {
        return true;
    }
    static getProviderState()
    {
        return true;
    }
    static requestPermission()
    {
        return true;
    }
    static requestTemporaryFullAccuracy()
    {
        return true;
    }
}