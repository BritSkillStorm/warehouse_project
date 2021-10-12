








const getItems = async () =>{
    const response = await fetch('')
    const items = await response.json();

    return items;

}


document.addEventListener("DOMContentLoaded", async () =>{
    let items =[];
    try {
     items = await getItems();
    } catch(err){
        console.log("Error!");
        console.log(error);
    }

    console.log(items);
})