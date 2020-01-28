# My Pet Infosheet
My Pet Infosheet is an app created as part of a school project focusing on building a RESTful API using React and Firebase. The app is aimed for pet users where they can store and customise their pet's data online.

## Features
### View
The user can view all the pets that have been added onto the database in the browse page ('/pets') right after they enter through the home page. They can view each individual pet's profile page that includes their general basic bio, photo, diet, medication, notes, and gallery sections.  

The owners section page ('/owner') documents the owner's information and all other owners involved. 

### Add 
Users can add their pets using a form that can be accessed on the browse page ('/pets'). From there they can enter the general bio (name, breed, sex, dob, thumbnail image). 
In the pet file ('/pet/:id'), users can then add specific data according to the categories - diet, medication, notes, gallery. These are stored under the subcollections of the related pet document in Firebase. 

In the owner's section, users can add owner information including first name, last name, email, and phone. 

### Edit
Users can edit information in their pet file in sections - general bio, diet, medication, and notes. The edit button is displayed as a Font Awesome icon pen nib. 

In the owner's section, information of each owner can be editted.

### Delete
The entire pet file can be deleted via clicking on the cross icon and confirming the action in the box. Each entry inside the pet file can also be deleted by entering the edit page and clicking the 'Delete Entry' link on the top right.

In the owner's section, each owner can be deleted via the edit section ('/editOwner').

## Main Pages
- Home Page 
- Pet File ('/pets') - displays the card of each pet added. User can also add pet here.
- Pet Document ('pet/:id') - all information about the pet is displayed when user views the card in the Pet File. They can add subcollections, edit and delete data here.
- Owner Info ('/owner') - displays data of the owners. Can add, edit and delete data here.
- About Page

## Installation
```javascript
npm start
```

## Tech Stack
- ReactJS
- Bootstrap
- Firebase 

## Limitations
- In order to be a fully functional app, ideally it should have an authorisation function for users to login and view and edit their data. Currently there isn't one made for this app. 
- The images are stored and retrieved via URL (from unsplash.source), although realistically the images should be uploaded and stored in a cloud based system, and retrieved from that system.
