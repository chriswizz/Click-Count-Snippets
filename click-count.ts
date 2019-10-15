declare var $;
$(document).ready(function() {

    // block for code snippet 1
    {
        // append buttons to html without id
        for (let i = 0; i < 4; i++) {
            $("#code-snippet-1").append(`

                <div class="row border m-3">
                    <button class="col-5 button-1 btn btn-primary m-2" type="submit">class: button-1</button>
                    <div class="col-6 d-flex flex-column justify-content-center align-items-center">
                        <div class="output-1 display-4">0</div>
                        <div>class: output-1</div>
                    </div>
                </div>

            `);
        }

        // create "arrays" with button elements
        let btns = document.getElementsByClassName("button-1");
        let outputs = document.getElementsByClassName("output-1");

        // function to change text of output field (you can also use anonymous function within event listener)
        function printValue(i) {
            let output = $(outputs[i]).text()
            $(outputs[i]).text(parseInt(output) + 1);
        }

        // add event listener to buttons
        for (let i = 0; i < btns.length; i++) {
            $(btns[i]).on("click", () => {
                printValue(i);
            });
        }
    }

    // block for code snippet 2
    {
        // append buttons to html with id
        for (let i = 0; i < 4; i++){
            $("#code-snippet-2").append(`

                <div class="row border m-3">
                    <button id="id-button-${i}" class="col-5 button-2 btn btn-success m-2" type="submit">class: button-2<br>id: id-button-${i}</button>
                    <div class="col-6 d-flex flex-column justify-content-center align-items-center">
                        <div id="id-output-${i}" class="output-2 display-4">0</div>
                        <div>class: output-2<br>id: id-output-${i}</div>
                    </div>
                </div>

            `);
        }

        // add event listener to buttons and change text of output field
        $(".button-2").on("click", function() {
            for (let i = 0; i < 4; i++) {
                if ( `id-button-${i}` == $(this).attr("id") ) {
                    let output = $(`#id-output-${i}`).text()
                    $(`#id-output-${i}`).text(parseInt(output) + 1);
                }
            }
        });
    }
});
