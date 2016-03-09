function log(containerId, message) {
    var container = document.getElementById(containerId);
    
    var logElement = document.createElement("span");
    logElement.innerHTML = message;
    
    container.appendChild(logElement);
}

var logCount = 0;

var logVar = function log(containerId, message) {
    var container = document.getElementById(containerId);
    
    var logElement = document.createElement("span");
    logCount++;
    logElement.innerHTML = logCount + ":" + message +  "<br/>";
    container.appendChild(logElement);

    if (logCount <= 5) {
        logVar(containerId, message);
    }
}

var logAnonymous = function (containerId, message) {
    var container = document.getElementById(containerId);
    
    var logElement = document.createElement("span");
    logCount++;
    logElement.innerHTML = logCount + ":" + message  + "<br/>";
    container.appendChild(logElement);

    if (logCount <= 5) {
        logVar(containerId, message);
    }
}

var logTempInnerFunction = (function() {
    var counter = 0;
    var junk = "will be popped out";
    return function(containerId, message) {
        var container = document.getElementById(containerId);

        var logElement = document.createElement("span");
        counter++;
        logElement.innerHTML = counter + ":" + message + "<br/>";
        container.appendChild(logElement);
    };
})();

var Logger = (function() {
    var LogLevels = { 
        "TRACE" : { value: 0, className : "logger-trace"}, 
        "DEBUG" : { value: 1, className : "logger-debug"}, 
        "INFO" : { value: 2, className : "logger-info"}, 
        "ERROR" : { value: 3, className : "logger-error"},
        "FATAL" : { value: 4, className : "logger-fatal"}
    };
    function createLogunction(loggerType) {
        function log(message) {
            if (LogLevels[this.logLevel].value <= LogLevels[loggerType].value) {
                var container = document.getElementById(this.container);

                var logElement = document.createElement("p");
                logElement.classList.add(LogLevels[loggerType].className);
                logElement.innerHTML = message;
                container.appendChild(logElement);
            }
        }
        
        return log;
    }
    
    return  {
        container : "logDiv",
        logLevel : "DEBUG",
        debug: createLogunction("DEBUG"),
        info : createLogunction("INFO")
    };
})();