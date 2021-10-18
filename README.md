# HomeSweetWoof
### [Live](https://homesweetwoof.herokuapp.com/#/)

## Team Members
* [Alex Lam](https://github.com/alexsaintlam)
* [Julian Kang](https://github.com/juka1031) 
* [Kira Porter](https://github.com/kierxin)
* [Winnie Ng](https://github.com/WinnieNg3210)

## Overview

![HOW - splash](https://user-images.githubusercontent.com/82779931/134609901-c477e222-c48e-4af6-8b03-27ebef3040ba.JPG)

Home Sweet Woof is a fullstack MERN application that connects adopters to dog shelter organizations. Users can sign up as either an adopter or a shelter organization. Depending on the login credentials, the user has access to different types of functionality. Adopters can look through dog listings and make an appointment with dog shelters. Shelter organizations can add adoptable dogs to the list and update the dog's information. Both users can communicate with each other in real-time through a chat box.

## Main Features

Home Sweet Woof has an appointment booking feature that utilizes DatePicker from the React library. DatePicker is a reusable React component to display dates using a calendar dialog. The local state in the calendar class is set to conditionally render appointments for both shelters and adopters. 


## Technologies

* MongoDB
* Express
* React/Redux
* Node.js
* Socket.IO

## Features

### Live chatting

* Adopters and shelters can live chat with each other and ask any questions they may have.
![HOW - live chat](https://user-images.githubusercontent.com/82779931/134609904-d41059c1-5153-4f27-9449-6ca7347d7884.JPG)

### Filtering
* Adopters can sort through the dog listings to narrow down their search based upon their preferences
![HOW - home](https://user-images.githubusercontent.com/82779931/134609903-95b70f2b-1d93-471a-9405-f9b902baba58.JPG)

### Appointments
* Adopters can schedule appointments with shelters, which will be noted on shelters home page.
![HOW - shelter profile](https://user-images.githubusercontent.com/82779931/134609902-02bacea0-e946-4988-af22-2aa72516bd80.JPG)

### Full CRUD for Dogs/Users
* Shelters can create/edit/delete dog listings and users can freely edit their profile
![HOW - adopter profile](https://user-images.githubusercontent.com/82779931/134609900-39986994-ee23-4879-a698-d2b388d9d414.JPG)

### Code

```...javascript
  if (this.props.user._id === this.props.currentUser.id) {
    editNumber = (
      <button id="add-phone-number-btn" onClick={this.editNumber}>
        +
      </button>
    );

    editDescription = (
      <button id="user-description-edit-btn" onClick={this.editDescription}>
        ✎ Edit
      </button>
    );
  }
```

As one of the key features of the website is the conditional rendering of what is displayed based upon the user's priviledge. One of the common themes throughout the code is what is and what is not displayed based upon the type of user logged in.


