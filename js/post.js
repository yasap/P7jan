var postSubmit = document.getElementById("postSubmit");

postSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hi");

    var  title= document.getElementById("title").value;
    var message = document.getElementById("message").value;
    var dateCreated = document.getElementById("date-created").value;
    var image = document.getElementById("image").value;
    
    let post = { 
        title: title,
        message: message,
        dateCreated: dateCreated,
        image: image
    }
    console.log(post);

    var postItem = JSON.stringify(post);
    localStorage.setItem("postData",postItem)
     console.log("post added");
      document.location = '/home.html';
})

