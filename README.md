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



### Code Refactoring
If we were to refactor the project, React hooks and functions that handles multiple variables of the same scenario will produce cleaner code
Example: we can turn the current file: [Current Code](https://github.com/winniecwng/HomeSweetWoof/blob/main/frontend/src/components/dog/dog_form.jsx)

from:
```...javascript

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      name: "",
      breed: "",
      gender: "female",
      description: "",
      photoFile: null,
      photoUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToDogIndex = this.navigateToDogIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e){
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        this.setState({photoFile: file, photoUrl: fileReader.result})
    }
    if (file){
        fileReader.readAsDataURL(file)
    }
    
}

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.age === "" || 
        this.state.name === "" || 
        this.state.breed === "" || 
        !this.state.photoFile || 
        !this.state.photoUrl) {
        window.alert("Please fill out all fields");
    } else {
      const formData = new FormData();
      formData.append("age", this.state.age)
      formData.append("name", this.state.name)
      formData.append("breed", this.state.breed)
      formData.append("gender", this.state.gender)
      formData.append("photo", this.state.photoFile)
      formData.append("description", this.state.description)

      this.props.composeDog(formData)
        .then(()=>{
            this.props.history.push(`/users/${this.props.currentUser.id}`)
        });
      this.setState({ age: "", name: "", breed: "", gender: "female", description: "", photoFile: null, photoUrl: null });
    }
  
    
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ gender: e.target.value });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  navigateToDogIndex() {
    const url = `/dogs`;
    this.props.history.push(url);
  }

```

into:

```...javascript
const initialState = {
  age: "",
  name: "",
  breed: "",
  gender: "female",
  description: "",
  photoFile: null,
  photoUrl: null,
};

const DogForm = (props) => {
  const history = useHistory();
  const { composeDog, currentUser } = props;
  const [form, setForm] = useState(initialState);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setForm({ ...form, photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  // adding data to form
  const appendFormData = () => {
    const formData = new FormData();

    // for every key in initial state, we want to populate the form except
    // for photoUrl and photoFile:
    let intialData = Object.keys(initialState);

    intialData.forEach((data) => {
      if (data !== "photoFile" || data !== "photoUrl")
        formData.append(data, form[data]);
    });

    return formData;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setForm(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.age === "" ||
      this.state.name === "" ||
      this.state.breed === "" ||
      !this.state.photoFile ||
      !this.state.photoUrl
    ) {
      window.alert("Please fill out all fields");
    } else {
      const formData = appendFormData();
      composeDog(formData).then(() => {
        history.push(`/users/${currentUser.id}`);
      });

      clearForm();
    }
  };

  const preview = form.photoUrl ? (
    <img className="preview" src={form.photoUrl} alt="preview" />
  ) : null;
```
One example of refactoring here is:
Instead of creating multiple different handler functions for each state, we create one handler function called handleChange that can be used dynamically to listen to the changes of the input based on the target event value.
