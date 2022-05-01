window.onload = about_btn;

function item_added()
{
    var new_item = document.createElement("li");
    var text_box = document.getElementById("text_box");
    var list_ = document.getElementById("list");

    new_item.innerHTML = '<input class="not_completed" type="button" onclick="item_completed(this)" value="'+ text_box.value + '"/>';
    //list_.removeChild(text_box);
    list_.appendChild(new_item);
    list_.appendChild(text_box);
}

function item_completed(item)
{
    if(item.className == 'not_completed')
        item.className='completed';
    else 
        item.className='not_completed';
}

var shown = true;

function about_btn(clear)
{
    if(!shown && !clear) {
        document.getElementById("about_txt").style.display = "block";
        shown = true;
    } else if (shown || clear) {
        document.getElementById("about_txt").style.display = "none";
        shown = false;
    }
}
