function resizeWindow() {

   
}

$(function () {

    const $img = $(".icons");

    $img.on("click", function (event) {

        $.ajax({
            url: $(this).attr("src"),
            method: "GET",
            dataType: "text",
            success: function (response) {
                $("#selectedIcon").html(response);
            }
        });
    });

    $("input[type='search']").on("keyup", function (event) {

        const searchTerm = event.target.value;

        $img.each(function () {

            const $this = $(this);

            if ($this.attr("src").toLowerCase().includes(searchTerm.toLowerCase())) {
                $this.addClass("d-inline").removeClass("d-none");
            } else {
                $this.addClass("d-none").removeClass("d-inline");
            }
        });
    });

    $("#download").on("click", function (event) {

        event.preventDefault();

        var svgElement = document.querySelector("#selectedIcon svg");

        let { width, height } = svgElement.getBBox();

        let clonedSvgElement = svgElement.cloneNode(true);

        let outerHTML = clonedSvgElement.outerHTML,
            blob = new Blob([outerHTML], { type: "image/svg+xml;charset=utf-8" });

        let URL = window.URL || window.webkitURL || window;
        let blobURL = URL.createObjectURL(blob);

        let image = new Image();

        image.onload = () => {

            let canvas = document.createElement("canvas");

            canvas.width = width;

            canvas.height = height;
            let context = canvas.getContext("2d");
            // draw image in canvas starting left-0 , top - 0  
            context.drawImage(image, 0, 0, width, height);
            //  downloadImage(canvas); need to implement

            canvas.toBlob(function (blob) {
                // console.log(blob)
                saveAs(blob, "canvas.png");
            });
        };
        image.src = blobURL;
    });

    $(window).resize(resizeWindow).trigger("resize");
});