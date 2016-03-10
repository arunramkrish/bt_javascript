function validateRequiredFields() {
    for(arg in arguments) {
        var form = document.forms[0];
        var fieldValue = form[arguments[arg]].value;
        
        if (!fieldValue) {
            Logger.info("Specify value for " + arguments[arg]);
        }
    }
}