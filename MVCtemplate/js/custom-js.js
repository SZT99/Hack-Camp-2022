function slideIn() {
    document.getElementById("slider").classList.toggle("show");
    document.getElementById("slider").classList.remove("hide");
    if (document.getElementById("slider").classList.contains("marginOut")) {
        document.getElementById("slider").classList.toggle("marginOut");
    }
}

function showOptions() {
    if(document.getElementById("options").classList.contains("show-options")) {
        document.getElementById("options").classList.toggle("hide-options");
        document.getElementById("options").classList.remove("show-options");
    } else {
        document.getElementById("options").classList.toggle("show-options");
        document.getElementById("options").classList.remove("hide-options");
    }
}

function showOptionButton(id) {
    if(document.getElementById(id).classList.contains("show-options")) {
        document.getElementById(id).classList.toggle("hide-options");
        document.getElementById(id).classList.remove("show-options");
    } else {
        document.getElementById(id).classList.toggle("show-options");
        document.getElementById(id).classList.remove("hide-options");
    }
}


function slideOut() {
    document.getElementById("slider").classList.toggle("marginOut");
    document.getElementById("slider").classList.remove("show");
}

function toggleFiltersMenu() {
    document.getElementById("filters").classList.toggle("hide-filters");
    document.getElementById("filters").classList.toggle("show-filters");
}

function hideCard() {
    document.getElementById("cardView").classList.toggle("hide-filters");
}

function toggleFilter(filter) {
    if (document.getElementById(filter).classList.contains("hide-slide")) {
        document.getElementById(filter).classList.toggle("slide-down");
        document.getElementById(filter).classList.remove("hide-slide");
    }
    else {
        document.getElementById(filter).classList.toggle("hide-slide");
        document.getElementById(filter).classList.remove("slide-down");
    }
}

function liveSearch(type, data, self) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/liveSearch.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        document.getElementById(type.toLowerCase() + 'List').innerHTML = xhr.response;
    };
    xhr.onerror = function() {
        alert("Request failed");
    };
    xhr.send("type=" + type + "&data=" + data);
}

function cardView(action, id) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/cardViewTest.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        let string = xhr.response;
        $('#full').html(string);
    };
    xhr.onerror = function() {
        alert("Request failed");
    };
    xhr.send("action=" + action + "&id=" + id);
}

<<<<<<< HEAD
=======
function cardViewEdit(action, id) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/cardViewTest.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        let string = "";
        string = xhr.response;
        $('#full').empty();
        $('#full').html(string);
    };
    xhr.onerror = function() {
        alert("Request failed");
    };
    let appID = document.querySelector('input[name="appID"]').value;
    let releaseDate = document.querySelector('input[name="releaseDate"]').value;
    let isEnglish = document.querySelector('input[name="isEnglish"]').value;
    let developer = document.querySelector('input[name="developer"]').value;
    let publisher = document.querySelector('input[name="publisher"]').value;
    let platforms = document.querySelector('input[name="platforms[]"]').value;
    let status = document.querySelector('input[name="status"]').value;
    let requiredAge = document.querySelector('input[name="requiredAge"]').value;
    let categories = document.querySelector('input[name="categories"]').value;
    let genres = document.querySelector('input[name="genres"]').value;
    let tags = document.querySelector('input[name="tags"]').value;
    let numberOfAchievements = document.querySelector('input[name="numberOfAchievements"]').value;
    let positiveRatings = document.querySelector('input[name="positiveRatings"]').value;
    let negativeRatings = document.querySelector('input[name="negativeRatings"]').value;
    let avgPlaytime = document.querySelector('input[name="avgPlaytime"]').value;
    let medianPlaytime = document.querySelector('input[name="medianPlaytime"]').value;
    let physical = document.querySelector('input[name="physical"]').value;
    let numberOfUnitsAvail = document.querySelector('input[name="numberOfUnitsAvail"]').value;
    let unitsSold = document.querySelector('input[name="unitsSold"]').value;
    let pricePerUnit = document.querySelector('input[name="pricePerUnit"]').value;
    xhr.send("action=" + action
        + "&id=" + id
        + "&appID=" + appID
        + "&releaseDate=" + releaseDate
        + "&isEnglish=" + isEnglish
        + "&developer=" + developer
        + "&publisher=" + publisher
        + "&platforms=" + platforms
        + "&status=" + status
        + "&requiredAge=" + requiredAge
        + "&categories=" + categories
        + "&categories=" + categories
        + "&genres=" + genres
        + "&tags=" + tags
        + "&numberOfAchievements=" + numberOfAchievements
        + "&positiveRatings=" + positiveRatings
        + "&negativeRatings=" + negativeRatings
        + "&avgPlaytime=" + avgPlaytime
        + "&medianPlaytime=" + medianPlaytime
        + "&physical=" + physical
        + "&numberOfUnitsAvail=" + numberOfUnitsAvail
        + "&unitsSold=" + unitsSold
        + "&pricePerUnit=" + pricePerUnit);
}

>>>>>>> parent of d5fd438 (Merge branch 'main' of https://github.com/SZT99/Hack-Camp)

function miniCard(source, mode, id) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/miniTile.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        document.getElementById(id).innerHTML = xhr.response;
    };
    xhr.onerror = function() {
        alert("Request failed");
    };
    xhr.send("source=" + source + "&id=" + id + "&mode=" + mode );
}

function miniCardEdit(source, mode, id) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/miniTile.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        document.getElementById(id).innerHTML = xhr.response;
    };
    xhr.onerror = function() {
        alert("Request failed");
    };
    att1 = document.getElementById("att1").value;
    att2 = document.getElementById("att2").value;
    att3 = document.getElementById("att3").value;
    att4 = document.getElementById("att4").value;
    xhr.send("source=" + source + "&id=" + id + "&mode=" + mode + "&edit=edit" + "&att1=" + att1 + "&att2=" + att2 + "&att3=" + att3 + "&att4=" + att4);
}

function clearSuggestions (type){
    document.getElementById(type + 'List').innerHTML = "";
}

function makeChart(id, type, yValues, xValues, legend){

    var barColors = [
        "#b91d47",
        "#00aba9"
    ];

    new Chart(id, {
        type: type,
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            responsive: true,
            legend: {display: legend, labels: {
                    fontColor: 'white'
                }},
        }
    });
}

function makeChartB(id, type, A, B, x1, x2, legend=true){

    var YvalueA = A;
    var YvalueB = B;
    var xValues = [x1, x2];
    var yValues = [YvalueA, YvalueB];

    var barColors = [
        "#b91d47",
        "#00aba9"
    ];

    new Chart(id, {
        type: type,
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: 'white'
                    },
                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'white'
                    },
                }]
            },
            responsive: true,
            legend: {display: legend, labels: {
                    fontColor: 'white'
                }},
        }
    });
}

function indexChartA(){


    var xValues = [Xvalue1, Xvalue2, Xvalue3, Xvalue4, Xvalue5];
    var yValues = [Yvalue1, Yvalue2, Yvalue3, Yvalue4, Yvalue5];
    //var yValues = [80,55];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#244CEB",
        "#DB0C02",
        "#F58E20"
    ];

    var chart = new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues

            }]
        },
        options: {
            onClick(e) {
                var activePoints = chart.getElementsAtEvent(e);
                var selectedIndex = activePoints[0]._index;
                alert(chart.data.labels[selectedIndex]);
                //console.log(chart.data.labels[selectedIndex]);
            },
            responsive: true,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{ticks: {
                        fontColor: 'white'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Game',
                        fontColor: 'white'
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'white'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Genre',
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function arrow(arrow) {
    if (document.getElementById(arrow).classList.contains("bi-arrow-down")) {
        document.getElementById(arrow).classList.toggle("bi-arrow-up");
        document.getElementById(arrow).classList.remove("bi-arrow-down");
    }
    else {
        document.getElementById(arrow).classList.toggle("bi-arrow-down");
        document.getElementById(arrow).classList.remove("bi-arrow-up");
    }
}

document.querySelector("form").addEventListener("keydown", function(event){
    return event.key != "Enter";
});

function select(id) {
    document.getElementById(id).classList.toggle("hover-bg");
    document.getElementById(id).classList.toggle("hover-bg-selected");
}

function selectAll() {
    if (document.getElementById("selectAll").innerText == "Deselect all") {
        document.querySelectorAll(".hover-bg-selected").forEach(function(e){
            select(e.id);
        });
        document.getElementById("selectAll").innerText = "Select all";
    }
    else {
        document.querySelectorAll(".hover-bg").forEach(function(e){
            select(e.id);
        });
        document.getElementById("selectAll").innerText = "Deselect all";
    }
}

function editSelected(target, item)
{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/edit.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onerror = function() {
        alert("Request failed");
    };
    xhr.send("target=" + target + "&item=" + item + "&array=" + getSelected());
    location.reload();
}

function getSelected() {
    let selected = [];
    document.querySelectorAll(".hover-bg-selected").forEach(function(e){
        selected.push(e.id);
    });
    return selected;
}

function editSelected(target, item, mode)
{
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "/edit.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onerror = function() {
        alert("Request failed");
    };
    xhr.send("target=" + target + "&item=" + item + "&array=" + getSelected() + "&mode=" + mode);
    location.reload();
}
//post from index graph to filters, not working
function indexFilter(filterAttribute) {

    //var valueA = "submitFilterOptions";
    var valueB = filterAttribute;
    console.log(filterAttribute);
    $.ajax({
        url: "Models/Filter.php",
        type: "POST",
        data: {genre: valueB, submitFilterOptions: 1 },
        dataType: 'text',
        success: function(data){
            alert("success" + data);
        },

    })

    // let xhr = new XMLHttpRequest();
    // xhr.open('POST', "Models.Filter.php", true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onload = function() {
    //     document.getElementById("full").innerHTML = xhr.response;
    // };
    //
    // xhr.onerror = function() {
    //     alert("Request failed");
    // };
    // //xhr.send("action=" + action + "&id=" + id);
}


    
    


