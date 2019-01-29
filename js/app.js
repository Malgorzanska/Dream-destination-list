document.addEventListener("DOMContentLoaded", function(){

    let input = document.querySelector("#item");
    let addBtn = document.querySelector(".addBtn");
    let newList = document.querySelector("#toGo");

    addBtn.addEventListener("click", function() {
       let newPlace = input.value;
       if (newPlace.length < 3) {
           alert("Please describe the place more specific")
       } else if (newPlace.length > 100) {
           alert("Please make it shorter")
       } else {
           addItem(newPlace);
           input.value  = "";
       }

    });

    function removeItem(event){
        let li = this.parentElement.parentElement;
        let parent = li.parentElement;
        parent.removeChild(li);
    }

    function crossOutItem(event){
        let li = this.parentElement.parentElement;
        let parent = li.parentElement;
        let parentID = parent.id;

        if (parentID === 'toGo'){
           var proper = document.querySelector("#completed");
        } else {
           var proper = document.querySelector("#toGo")
        }

        parent.removeChild(li);
        proper.appendChild(li);

    }

    function addItem(newPlace) {
        let newList = document.querySelector("#toGo");

       let newItem = document.createElement('li');
       newItem.innerText = newPlace;

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');

        let undone = document.createElement('button');
        undone.classList.add('undone');

        undone.addEventListener("click", removeItem );

        let done = document.createElement('button');
        done.classList.add('done');

        done.addEventListener("click", crossOutItem );

        buttons.appendChild(done);
        buttons.appendChild(undone);
        newItem.appendChild(buttons);

        newList.appendChild(newItem, newList.childNodes[0]);
    }


    // input.addEventListener('keydown', function (e) {
    //     let value = this.value;
    //
    //     if ((e.code === "Enter" || event.code === "NumpadEnter") && value) {
    //         addItem(value);
    // }
    // });


});