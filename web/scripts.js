function apicall() {
    $.ajax({
        url: "https://cionextgenapi.azure-api.net/test/HttpTrigger1",
        headers: { "Ocp-Apim-Subscription-Key": "3be26df1b0244eed86d86b58bd3b9360"},
        contentType: "application/json",
        type: "GET"
    }).done(function (data) {
        document.getElementById("text").innerHTML = data;
    }).error(function () {
        document.getElementById("text").innerHTML = "failed"
    });
}