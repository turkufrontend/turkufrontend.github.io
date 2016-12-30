$(document).ready(function(){
    $.get("https://meetabit.unit.run/events?turku-3-frontend", function(data, status){
        for (var i = 0; i < data.results.length; i++) {
            if (data.results[i]["past"] === true) {
                if (i <= 5) {
                    $(".past").append(
                        '<div>' +
                        data.results[i]["date"] + ' <a href="' + data.results[i]["url"] + '">' + data.results[i]["name"] + '</a>' +
                        '</div>'
                    );
                }
            } else {
                $(".upcoming").append(
                    '<div>' +
                    data.results[i]["date"] + ' <a href="' + data.results[i]["url"] + '">' + data.results[i]["name"] + '</a>' +
                    '</div>'
                );
            }
        }
    });

    $.get("https://mkaski.unit.run/medium-feed-cors", function(data, status){
        for (var i = 0; i < data.length; i++) {
            var date = new Date(Date.parse(data[i]["date"]));
            date = date.toDateString();
            $(".blog").append(
                '<div>' +
                date + ' <a href="' + data[i]["link"] + '">' + data[i]["title"] + '</a>' +
                '</div>'
            );
        }
    });
});