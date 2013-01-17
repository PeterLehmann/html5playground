// this is my worker
//
// Chrome must be started with --disable-web-security for this to work:
//
// C:\Users\tjk\AppData\Local\Google\Chrome\Application\chrome.exe --disable-web-security
// 


self.addEventListener("message", function(e) {
    debugger;
    var theword = e.data.word;  
    var request = new XMLHttpRequest();
    request.open("GET", "https://www.googleapis.com/books/v1/volumes?q="+theword, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var jsonResponse = JSON.parse(request.responseText);
            self.postMessage(jsonResponse.items[0].volumeInfo.title + "\r\n");
        }
    };
    request.send();
});

// often uses self

//  The postMessage() method is used to send data into a worker, when called on the Worker instance in the page, and to send data out of the worker when called on the worker global object.


//onmessage = function(e) {
//    var theword = e.data;  
//    var request = new XMLHttpRequest();
//    request.open("GET", "https://www.googleapis.com/books/v1/volumes?q="+theword, true);
//    request.onreadystatechange = function () {
//        if (request.readyState == 4 && request.status == 200) {
//            var jsonResponse = JSON.parse(request.responseText);
//            postMessage(jsonResponse.items[0].volumeInfo.title + "\r\n");
//        }
//    };
//    request.send();
//};

//importScripts("file1.js", "file2.js");