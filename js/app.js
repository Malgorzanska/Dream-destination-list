document.addEventListener("DOMContentLoaded", function(){

    let input = document.querySelector("#place");
    let addBtn = document.querySelector(".addBtn");
    let moreError = document.querySelector(".more");
    let lessError = document.querySelector(".less");

    addBtn.addEventListener("click", function() {
       let newPlace = input.value;

       moreError.classList.add('is-hidden');
       lessError.classList.add('is-hidden');

       if (newPlace.length < 3 ){
           moreError.classList.remove('is-hidden');
       } else if (newPlace.length > 12){
            lessError.classList.remove('is-hidden');
       } else {
            addItem(newPlace);
            input.value  = "";
        }
    });

    function removeItem(){
        let li = this.parentElement.parentElement;
        let parent = li.parentElement;
        parent.removeChild(li);
    }

    function moveItem(){
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
        undone.innerText = "Remove";
        undone.addEventListener("click", removeItem);

        let done = document.createElement('button');
        done.classList.add('done');
        done.innerText = "Done";
        done.addEventListener("click", moveItem );

        buttons.appendChild(done);
        buttons.appendChild(undone);
        newItem.appendChild(buttons);

        newList.appendChild(newItem, newList.childNodes[0]);
    }

    input.addEventListener('keydown', function (e) {
        let value = this.value;

        moreError.classList.add('is-hidden');
        lessError.classList.add('is-hidden');

         if ((e.code === "Enter" || event.code === "NumpadEnter") && (value.length < 3 ) ) {
            moreError.classList.remove('is-hidden');
        } else if ((e.code === "Enter" || event.code === "NumpadEnter") && (value.length > 12) ){
             lessError.classList.remove('is-hidden');
        } else if ((e.code === "Enter" || event.code === "NumpadEnter") && value) {
             addItem(value);
             input.value  = "";
         }

    });
});