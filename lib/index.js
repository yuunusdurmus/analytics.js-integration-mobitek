var integration = require('@segment/analytics.js-integration');
var push = require('global-queue')('dataLayer', { wrap: false });
var specificationMap = require('./specification-map.js').array;

var GTM = module.exports = integration('Google Tag Manager')
    .global('dataLayer')
    .global('google_tag_manager')
    .option('containerId', '')
    .option('environment', '')
    .option('trackNamedPages', true)
    .option('trackCategorizedPages', true)
    .tag('no-env', '<script src="//www.googletagmanager.com/gtm.js?id={{ containerId }}&l=dataLayer">')
    .tag('with-env', '<script src="//www.googletagmanager.com/gtm.js?id={{ containerId }}&l=dataLayer&gtm_preview={{ environment }}">');



GTM.prototype.specificationMap = specificationMap;

GTM.prototype.arrayToString = function(array, key) {
    if(key){
        var _array = [];
        array.forEach(function(item){
            _array.push(item[key])
        }) 

        return _array.join();
    } else {
        return '';
    }
}

GTM.prototype.specificationMapper = function(props, _obj) {
    var obj = _obj;
    this.specificationMap.forEach(function(item){
        if(props[item.prop]){
            if(item.parsing){
                obj[item.tPKey] = this[item.parsing.type](props[item.prop],item.parsing.key)
            } else {
                obj[item.tPKey] = props[item.prop];              
            }
        }
    }.bind(this));
    return obj;
}

GTM.prototype.loaded = function() {
    return !!(window.dataLayer && Array.prototype.push !== window.dataLayer.push);
};

GTM.prototype.initialize = function() {
    push({ 'gtm.start': Number(new Date()), event: 'gtm.js' });

    if(this.options.environment.length) {
        this.load('with-env', this.options, this.ready);
    }else {
        this.load('no-env', this.options, this.ready);
    }
};

GTM.prototype.identify = function(identify) {
    this.user = identify.traits()
};

GTM.prototype.page = function(page) {
    if(page.name && this.options.trackNamedPages) {
        var tracker = page.track(name);
        tracker.obj.properties.pageName = tracker.obj.name;
        this.track(tracker);
    }
};

GTM.prototype.track = function(track) {
    var props = track.properties();
    var obj = {};

    obj = this.specificationMapper(this.user, obj);
    obj = this.specificationMapper(props, obj);
 
    push(obj);
};
