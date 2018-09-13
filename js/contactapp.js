//connect variable with xmlhttprequest function
let xhttp = new XMLHttpRequest();
function loadXMLDoc() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
}


