# yoga-Form
Form to accept user data for joining Yoga Program

## <ins>Tech Stack Used</ins>
###### Frontend: 
1. React.js
2. TailwindCSS
                
###### Backend:  
1. Node.js
2. Express.js
3. Mongoose.js
                
###### Database: 
1. MongoDB Atlas

## <ins>Approach</ins>
###### Building the Frontend
1. Build the Form using React jsx for getting user input.
2. Once the User clicks on the subscribe(submit) button, then using React Hooks the app makes a call to a *completePayment()* function.
3. In the function, we use *event.preventDefault()* to stop data submitting and then performs input validations for checking user input.
4. Once all the input data is verified, then using axios we make call to our *<ins>Backend API</ins>* to store the Data in the Database.

###### Building the Backend
1. Using Node.js and Express.js Framework, all important packages are imported.
2. Following the ***Model-View-Controller (MVC)*** pattern of Node.js, the URL routing was done for controlling data saving to database.
3. Using ***Mongoose.js*** Database Schema was designed and connected application to ***MongoDB Atlas*** using URL string and saved the data in the database.

###### Database Design
***<ins>Database Name : yogaDB</ins>***<br />
***<ins>Table/Collection Name : yogausers</ins>***

***Attributes:***<br />
*1.Full Name (type : String)*<br />
*2.Age (type : Number)*<br />
*3.Date (type : Date)*<br />
*4.Amount (type : Number)*<br />
*5.Batch (type : String)*<br />

<ins>***ER Diagram:***</ins>
![ER](https://user-images.githubusercontent.com/90060873/208738257-56dc3002-50ae-4308-9a3c-55d7751f5dd5.png)

## MongoDB Atlas Data Storage
![DB](https://user-images.githubusercontent.com/90060873/208734440-7c9dbbe8-84f9-4f61-a77e-3ac8e219a731.PNG)

<ins>NOTE</ins>:<br />
<ins>1. ALL USER INPUT HAS BEEN TAKEN THROUGH A SINGLE FORM ONLY</ins><br />
<ins>2. AMOUNT HAS BEEN SET TO NON_EDITABLE AND KEPT SAME FOR ANY MONTH AND HAS BEEN SET TO DEFAULT Rs.500</ins>
