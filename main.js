$('#building').removeAttr('dynamic-body');
$("#box").attr("dynamic-body","true");

// &lt;![CDATA[  &lt;-- For SVG support
if ('WebSocket' in window) {
    (function() {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i &lt; sheets.length; ++i) {
                var elem = sheets[i];
                head.removeChild(elem);
                var rel = elem.rel;
                if (elem.href &amp;&amp; typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&amp;|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') &gt;= 0 ? '&amp;' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                head.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function(msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        console.log('Live reload enabled.');
    })();
}

$('a-entity').click(function() {
    alert("This works!")
})

// ]]&gt;
