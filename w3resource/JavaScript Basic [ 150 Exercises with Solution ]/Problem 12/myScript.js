function showUrl(){

    // Soluton One
    document.getElementById('result').innerHTML = document.URL

    // Solution Two
    document.getElementById('result_two').innerHTML = window.location.href

}
showUrl()

// const {
//     host, hostname, href, origin, pathname, port, protocol, search
//   } = window.location
  
//   host // "ui.dev"
//   hostname // "ui"
//   href // "https://ui.dev/get-current-url-javascript/?comments=false"
//   origin // "https://ui.dev"
//   pathname // "/get-current-url-javascript/""
//   port // ""
//   protocol // "https:"
//   search // "?comments=false"