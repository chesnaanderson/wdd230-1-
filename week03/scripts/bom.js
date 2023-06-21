    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });
     // new js
      let chaptersArray = getChapterList() || [];
      chaptersArray.forEach(chapter => {
        displayList(chapter);
        });
        button.addEventListener('click', () => {
          if (input.value != '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
          }
        });
      function displayList(item) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = item;
        deletebutton.textContent = '❌';
        deletebutton.classList.add('delete');
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener('click', function (){
          list.removeChild(li);
          deleteChapter(li.textContent);
          input.focus();
        });
        console.log('I like to type out the code myself and try to understand it.')
      }
      function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
      }
      function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMLList'));
      }
      function deleteChapter(chapter){
      chapter = chapter.slice(0, chapter.length - 1);
      chaptersArray = chaptersArray.filter((item) => item !== chapter);
      setChapterList();
      }
