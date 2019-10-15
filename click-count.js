$(document).ready(function () {
    // block for code snippet 1
    {
        // append buttons to html without id
        for (var i = 0; i < 4; i++) {
            $("#code-snippet-1").append("\n\n                <div class=\"row border m-3\">\n                    <button class=\"col-5 button-1 btn btn-primary m-2\" type=\"submit\">class: button-1</button>\n                    <div class=\"col-6 d-flex flex-column justify-content-center align-items-center\">\n                        <div class=\"output-1 display-4\">0</div>\n                        <div>class: output-1</div>\n                    </div>\n                </div>\n\n            ");
        }
        // create "arrays" with button elements
        var btns = document.getElementsByClassName("button-1");
        var outputs_1 = document.getElementsByClassName("output-1");
        // function to change text of output field (you can also use anonymous function within event listener)
        function printValue(i) {
            var output = $(outputs_1[i]).text();
            $(outputs_1[i]).text(parseInt(output) + 1);
        }
        var _loop_1 = function (i) {
            $(btns[i]).on("click", function () {
                printValue(i);
            });
        };
        // add event listener to buttons
        for (var i = 0; i < btns.length; i++) {
            _loop_1(i);
        }
    }
    // block for code snippet 2
    {
        // append buttons to html with id
        for (var i = 0; i < 4; i++) {
            $("#code-snippet-2").append("\n\n                <div class=\"row border m-3\">\n                    <button id=\"id-button-" + i + "\" class=\"col-5 button-2 btn btn-success m-2\" type=\"submit\">class: button-2<br>id: id-button-" + i + "</button>\n                    <div class=\"col-6 d-flex flex-column justify-content-center align-items-center\">\n                        <div id=\"id-output-" + i + "\" class=\"output-2 display-4\">0</div>\n                        <div>class: output-2<br>id: id-output-" + i + "</div>\n                    </div>\n                </div>\n\n            ");
        }
        // add event listener to buttons and change text of output field
        $(".button-2").on("click", function () {
            for (var i = 0; i < 4; i++) {
                if ("id-button-" + i == $(this).attr("id")) {
                    var output = $("#id-output-" + i).text();
                    $("#id-output-" + i).text(parseInt(output) + 1);
                }
            }
        });
    }
});
