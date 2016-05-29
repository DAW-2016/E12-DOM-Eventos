function transformFormToUpperCase() {
    for(var i = 0 ; i < document.body.getElementsByTagName("input").length; i++) {
        document.body.getElementsByTagName("input")[i].value = document.body.getElementsByTagName("input")[i].value.toUpperCase();
    }
}
