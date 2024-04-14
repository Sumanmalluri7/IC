
document.addEventListener("DOMContentLoaded", function() {
    var chestXRayDoneYes = document.getElementById("Yes");
    var chestXRayDoneNo = document.getElementById("No");

    var hiddenDivs = document.querySelectorAll(".hidden");


    function showElements(elements) {
        elements.forEach(function(element) {
            element.style.display = "flex";
        });
    }

    function hideElements(elements) {
        elements.forEach(function(element) {
            element.style.display = "none";
        });
    }


    chestXRayDoneYes.addEventListener("click", function() {
        showElements(hiddenDivs);
    });

    chestXRayDoneNo.addEventListener("click", function() {
        hideElements(hiddenDivs);
    });

    
});