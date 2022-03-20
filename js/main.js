// Disable Text Selection
var cursor = document.getElementsByTagName('body');
cursor[0].setAttribute('onselectstart', 'return false');

// Pagination
var current_page = 1;
var records_per_page = 1;

var objJson = [{
    adName: `<p>We are a community of animal lovers, especially cats and dogs, we have the initiative
                                    to maintain environmental health by helping abandoned animals.
                                    <br><br>
                                    In addition we also open charities and adoptions for other animal lovers, we are
                                    also always willing to accept pets or abandoned animals to be cared for here.
                                    <br><br>
                                    Our goal is to make animals feel comfortable and healthy so they won't go extinct.
                                </p>`
}, {
    adName: `<p>We are a community of animal lovers, especially cats and dogs, we have the initiative
                                    to maintain environmental health by helping abandoned animals.
                                    <br><br>
                                    Our goal is to make animals feel comfortable and healthy so they won't go extinct.
                                    <br><br>
                                    In addition we also open charities and adoptions for other animal lovers, we are
                                    also always willing to accept pets or abandoned animals to be cared for here.
                                </p>`
}, {
    adName: `<p>Our goal is to make animals feel comfortable and healthy so they won't go extinct.
                                    <br><br>
                                    We are a community of animal lovers, especially cats and dogs, we have the initiative
                                    to maintain environmental health by helping abandoned animals.
                                    <br><br>
                                    In addition we also open charities and adoptions for other animal lovers, we are
                                    also always willing to accept pets or abandoned animals to be cared for here.
                                </p>`
}]; // Can be obtained from another source, such as your objJson variable

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function numPages() {
    return Math.ceil(objJson.length / records_per_page);
}

function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
        listing_table.innerHTML += objJson[i].adName;
    }
    page_span.innerHTML = page + " / " + numPages();

    if (page == 1) {
        btn_prev.style.opacity = 0.4;
        btn_prev.disabled = true;
    } else {
        btn_prev.style.opacity = 1;
        btn_prev.disabled = false;
    }

    if (page == numPages()) {
        btn_next.style.opacity = 0.4;
        btn_next.disabled = true;
    } else {
        btn_next.style.opacity = 1;
        btn_next.disabled = false;
    }
}

window.onload = function () {
    changePage(1);
};