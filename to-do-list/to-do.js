function item_added()
{
    var new_item = document.createElement("li");
    var name = document.getElementById("item_name");

    new_item.innerHTML = '<input class="not_completed" type="button" onclick="item_completed(this)" value="'+ name.value + '"/>';
    document.getElementById("list").appendChild(new_item);
}

function item_completed(item)
{
    if(item.className == 'not_completed')
        item.className='completed';
    else 
        item.className='not_completed';
}