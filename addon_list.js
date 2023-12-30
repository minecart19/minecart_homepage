let view_type = "list";

function view_type_tile() {
    let item_group = document.getElementsByClassName("item_group");
    let items = document.getElementsByClassName("items");
    let img = document.querySelectorAll(".image_container");
    let item_desc = document.getElementsByClassName("item_desc");
    let item_main = document.getElementsByClassName("item_main");

    if (view_type == "list") {
        document.getElementById("tile_view").style.display = 'none';
        document.getElementById("tile_view_sel").style.display = 'block';
        document.getElementById("list_view").style.display = 'block';
        document.getElementById("list_view_sel").style.display = 'none';

        for (let i = 0; i < item_group.length; i++) {
            item_group[i].style.flexDirection = 'row';
        }
        for (let i = 0; i < items.length; i++) {
            items[i].style.width = 25 + '%';
            items[i].style.flexDirection = 'column';
            items[i].style.alignItems = 'center';
            items[i].style.border = "1px solid #c5c5c5";
            item_desc[i].style.transform = "translate(-0.5rem, 0)";
            /*item_desc[i].style.paddingTop = 1.5 + 'rem';
            item_main[i].style.marginBottom = 1 + 'rem';*/
        }
        for (let i = 0; i < img.length; i++) {
            img[i].style.width = 80 + '%';
            img[i].style.height = 'auto';
        }
        view_type = "tile";
    }
}

function view_type_list() {
    let item_group = document.getElementsByClassName("item_group");
    let items = document.getElementsByClassName("items");
    let img = document.querySelectorAll(".image_container");
    let item_desc = document.getElementsByClassName("item_desc");
    let item_main = document.getElementsByClassName("item_main");

    if (view_type == "tile") {
        document.getElementById("tile_view").style.display = 'block';
        document.getElementById("tile_view_sel").style.display = 'none';
        document.getElementById("list_view").style.display = 'none';
        document.getElementById("list_view_sel").style.display = 'block';
        for (let i = 0; i < item_group.length; i++) {
            item_group[i].style.flexDirection = 'column';
        }
        for (let i = 0; i < items.length; i++) {
            items[i].style.width = 'auto';
            items[i].style.flexDirection = 'row';
            items[i].style.alignItems = 'normal';
            items[i].style.border = "none";
            items[i].style.borderTop = "1px dotted #c5c5c5";
            /*item_desc[i].style.marginLeft = 1.5 + 'rem';
            item_desc[i].style.paddingTop = 0 + 'px';
            item_main[i].style.marginBottom = 0 + 'px';*/
        }
        for (let i = 0; i < img.length; i++) {
            img[i].style.width = 15 + 'rem';
            img[i].style.height = 'auto';
        }
        view_type = "list";
    }
}

function items_dropdown(id) {
    let container = document.getElementById(id);
    let text = document.getElementById(id + '_viewButton');
    if (container.style.display == 'none') {
        container.style.display = 'flex';
        text.innerHTML = '접기';
    }
    else {
        container.style.display = 'none';
        text.innerHTML = '펼치기';
    }
}