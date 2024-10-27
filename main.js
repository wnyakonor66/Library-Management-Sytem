document.addEventListener("DOMContentLoaded", function(){
   
    const library = ["Oliver Twist", "The Night Angel", "Rich Dad Poor Dad", "Naked Flames", "The Girl Who Can", "Harry Porter", "100 Ways to make money",
        "Into The Ireland", "Joker", "They key to become Successful", "Think and Grow Rich"
    ];  //array for the library

    //object for displaying the library information
    const libraryObject = {
        "Oliver Twist": {
            "Author": " Luis Vendz",
            "Date of Published": " 20th September, 1997",
            "Title": " Oliver Twist",
            "Pages": " 100",
             isRead: false,
            "Content": " Oliver the homeless guy being that poor, he hustled in life. The taught of even eating 3 square meals a day was a problem for him but at the end of it all he survived the hardship and was happy at the end",
        },
        "The Girl Who Can":{
            "Author": " Ama Arthur Aidoo",
            "Date of Published": " 15th January, 2001",
            "Title": " The Girl Who Can",
            "Pages": " 120",
            isRead: true,
            "Content": " The Girl who can is a story that serves to motivate people to pursuing their dreams. Being undermined by his Grandmother and laughed at because she had very tiny and elongated legs. She proved everyone wrong by being an athlete, therefore winning prices and medals for the school. At the end the Grandmother realized that she was destined for great things and having tiny legs doesn't disqualify her from being a lady who bears kid"
        },
        "The Night Angel": {
            "Author": " George frost",
            "Date of Published": " 2nd March, 1996",
            "Title": " The Night Angel",
            "Pages": " 80",
            isRead: true,
            "Content": ".........."
        }
    }

    function displayResult(content){
        const resultArea = document.querySelector('.resultArea');
        resultArea.innerHTML = content;
    }

    //manipulating the first form to display the result of the search when button is clicked
    document.getElementById("form_Search").addEventListener("submit", function(e) {       
         e.preventDefault();
        const name = document.getElementById('name').value;//get the value for the name in the textbox
        if(library.includes(name)){
            const bookDetails = libraryObject[name];
            if(bookDetails){
                displayResult(`
                    <h2>${bookDetails.Title || name}</h2>
                    <p><strong>Arthur:</strong>${bookDetails.Author}</p>
                    <p><strong>Date Of Published:</strong>${bookDetails["Date of Published"]}</p>
                    <p><strong>Pages:</strong>${bookDetails.Pages}</p>
                    <p><strong>Read:</strong>${bookDetails.isRead}</p>
                    <p><strong>Content:</strong>${bookDetails.Content}</p>
                    `

                )
            }else{
                displayResult(`<p>Book found but details are missing</p>`);
            }
        }else{
                displayResult(`<p> Book Not Found </p>`);
        }


    });

    function createForm(){
        const new_btn_form = document.createElement('form');
        new_btn_form.classList.add("new_btn_form");

        //New Book Name
        const Title = document.createElement('input');
        Title.type = "text";
        Title.placeholder= "Enter New Book Name";
        Title.required = true;

        //Author's Name
        const Author = document.createElement('input');
        Author.type = "text";
        Author.placeholder = "Enter Author's Name";
        Author.required = true;

        //Number of Pages
        const Pages = document.createElement('input');
        Pages.type = "text";
        Pages.placeholder = "Enter the Pages Number";
        Pages.required =true;

        //Is read
        const isRead = document.createElement('input');
        isRead.type = "boolean";
        isRead.placeholder = "Is It Read Before";
        isRead.required = true;

        //The content
        const content = document.createElement('textarea');
        content.type = "text";
        content.placeholder = "Enter the content for the Book";
        content.rows = 10;
        content.cols = 40;
        content.required = true;

        //add new book button
        const new_submit_btn = document.createElement('input');
        new_submit_btn.classList.add("new_submit_btn");
        new_submit_btn.type = "submit";
        new_submit_btn.value = "submit";

        //adding each input to the form
        new_btn_form.appendChild(Title);
        new_btn_form.appendChild(Author);
        new_btn_form.appendChild(Pages);
        new_btn_form.appendChild(isRead);
        new_btn_form.appendChild(content);
        new_btn_form.appendChild(new_submit_btn);
        

        const newFormArea = document.querySelector(".newFormArea");
        newFormArea.innerHTML = ""; //clear any previous form
        newFormArea.appendChild(new_btn_form);

        new_btn_form.addEventListener("submit", function(e){
            e.preventDefault();
            const bookTitle = Title.value;
            const bookAuthor = Author.value;
            const bookPages = Pages.value;
            const bookIsRead = isRead.value.toLowerCase() === "true";
            const bookContent = content.value;

            if(!library.includes(bookTitle)){
                library.push(bookTitle);
            }
            libraryObject[bookTitle] = {
                "Title": bookTitle,
                "Author": bookAuthor,
                "Date of Published": new Date().toLocaleDateString(),
                "Pages": bookPages,
                isRead : bookIsRead,
                "Content": bookContent
            }

            // Clear the form after submission
            newFormArea.innerHTML = "";
            displayResult(`<p>New book "${bookTitle}" has been added to the library.</p>`);


        })
    
    }

    const new_book_btn = document.getElementById('new_book_btn');
    new_book_btn.addEventListener('click', createForm);

    

})