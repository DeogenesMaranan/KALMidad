<p align="center">
 <img src="https://iili.io/38aMAVs.gif" height="150"</a>
</p>
<p align="center">
    <em><code>Document and Share Experiences During Calamities </code></em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=flat-square&logo=CSS3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
</p>

<details>
	
<summary><h2>🔎 Contents</h2></summary>

- [Overview](#-overview)
- [Features](#-features)
  - [Client Features](#-client-features)
  - [Admin Features](#-admin-features)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
  - [Installation](#-installation)
  - [Running KALMidad](#-running-kalmidad)
- [Member Profile](#members)

</details>

## 📍 Overview

<div align="justify">
	
KALMidad is a web application designed to collect reports documenting the effects of a calamity to an area, alerting the authorities about the immediate needs of the residents of that area during or after a calamity. In creating this project, we structured the program into four main directories inside the src folder: model, server, services, and web. We created these directories in order to adhere to the MVC architecture wherein the user interface, database interaction and the data templates are separated to enable efficient code organization, scalability and separation of concerns. 

</div>
<br>

## 📦 Features

Below are the features of the application referred to as **KALMidad**. Here's a breakdown of its functionalities:

### 🌐 Client Features
1. **User Registration and Verification**
   - Create a new account via the **Register** button on the landing page.
   - Verify the email address by clicking the link sent to the registered email.
   - Proceed to the login page after successful verification.

2. **User Dashboard**
   - Access the home page upon login, which serves as the main dashboard.
   - Navigate through various sections of the application.

3. **Add and Submit Reports**
   - **First-Time Setup**: Before submitting a report, complete your **Account Information Setup** in a popup form.
   - **Create a New Report**: Fill out all required fields in the report submission page.
   - **Cloud Integration**:
     - Upload selected images to **Cloudinary** for secure storage.
     - Retrieve the image link and assign it to the report model.
   - **Database Handling**:
     - Assign input data to corresponding models.
     - Store the report data in the **Firestore collection** through API requests.
   - Receive a **confirmation message** upon successful submission.

4. **Navigation**
   - Seamlessly move between pages to manage or view your reports.

### 🔒 Admin Features
1. **Admin Dashboard**
   - Log in using admin credentials provided on the **Run KALMidad** page.
   - View a list of submitted reports with detailed information.

2. **Reports Management**
   - Filter reports by categories.
   - View the total count of reports for each category.

3. **Account Management**
   - Update admin account information directly from the dashboard.

4. **Report Status Updates**
   - Mark reports as **Resolved** or **In Progress** to keep track of their status.
<br>

## 📂 Repository Structure

The KALMidad repository is structured with a modular and organized layout, ensuring clarity and ease of maintainability. This project aims to streamline disaster management and reporting processes through an integrated system. Below is an overview of the repository structure:

<details closed> <summary>Click to see Repository Structure</summary>

```sh

└── KALMidad/
    └── src
        ├── model
        │   ├── report-details.js
        │   ├── user-credentials.js
        ├── server
        │   ├── controller
        │   │   ├── image-server-controller.js
        │   │   ├── user-controller.js
        │   │   ├── user-credential.js
        │   ├── database
        │   │   ├── firebase-config.js
        │   │   ├── image-server.js
        │   │   ├── init-multer.js
        │   │   ├── user-auth.js
        │   │   ├── user-credential.js
        │   ├── route
        │   │   ├── data-route.js
        │   │   ├── use-route.js
        ├── services
        │   ├── image-models/flood
        │   │   ├── metadata.json
        │   │   ├── model.json
        │   │   ├── weights.bin
        │   ├── cipher.js
        │   ├── converter.js
        │   ├── image-severity-processor.js
        │   ├── request.js
        │   ├── string-validator.js
        ├── web
        │   ├── assets
        │   ├── presenter
        │   │   ├── add-report.js
        │   │   ├── home-admin.js
        │   │   ├── home-client.js
        │   │   ├── home-skeleton.js
        │   │   ├── landing.js
        │   │   ├── location.js
        │   │   ├── login.js
        │   │   ├── manage-reports.js
        │   │   ├── recent-asssessments.js
        │   │   ├── signup.js
        │   │   ├── user-profile.js
        │   ├── structure
        │   │   ├── add-report.html
        │   │   ├── home-admin.html
        │   │   ├── home-client.html
        │   │   ├── home-skeleton.html
        │   │   ├── landing.html
        │   │   ├── login.html
        │   │   ├── manage-reports.html
        │   │   ├── message-panel.html
        │   │   ├── recent-assessment.html
        │   │   ├── signup-confirmation.html
        │   │   ├── signup.html
        │   │   ├── user-profile.html
        │   ├── styling
        │   │   ├── add-report.css
        │   │   ├── assessment.css
        │   │   ├── home-admin.css
        │   │   ├── home-client.css
        │   │   ├── home-skeleton.css
        │   │   ├── home.css
        │   │   ├── landing.css
        │   │   ├── login.css
        │   │   ├── manage-assessment.css
        │   │   ├── recent-assessment.css
        │   │   ├── setup-account-popup.css
        │   │   ├── signup-confirmation.css
        │   │   ├── user-profile.css
    ├── package-lock.json
    ├── package.json
    ├── webpack.config.cjs
    ├── README.md


```
</details>
<br>

## 🚀 Getting Started

To set up and run **KALMidad**, ensure you have the necessary tools and frameworks installed. Follow the steps below:

***Prerequisites***

1. Download and install **Node.js** (LTS Version) from [Node.js Official Site](https://nodejs.org/en).
2. Download and install **Postman** from [Postman Downloads](https://www.postman.com/downloads/).

### 🔧 Installation

Install the required frameworks and libraries using the following commands. You can copy-paste them directly into your terminal:

1. **Express**
   ```bash
   npm i --save express@^4.21.1
2. **Firebase**
   ```bash
   npm i --save firebase@^11.0.1
3. **Webpack**
   ```bash
   npm i --save webpack@^5.96.1
4. **Webpack CLI**
   ```bash
   npm i --save webpack-cli@^5.1.4
5. **Cloudinary**
   ```bash
   npm i --save cloudinary@^2.5.1
6. **Axios**
   ```bash
   npm i --save axios@^1.7.7
7. **Crypto-JS**
   ```bash
   npm i --save crypto-js@^4.2.0
8. **Dotenv**
   ```bash
   npm i --save dotenv@^16.4.5
9. **Multer**
   ```bash
   npm i --save multer@^1.4.5-lts.1
10. **TensorFlow.js**  
    Add this script to your HTML file:
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
    ```

    <br>
   
### 🤖 Running KALMidad

```sh
landing.html
```

<br>

### <a name="members"></a>
### Member Profile

<div align="center">

<table width="100%">
  <tr>
    <td width="70%" align="center">
      <img src="https://i.ibb.co/MZMmvPN/Passport-Picture-1-removebg-preview.png" width=40%">
    </td>
    <td>
      <strong>💡 Vince Clyde S. Banaag</strong><br>
      ➟ 22-06373
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://iili.io/38aO8Pt.jpg"  width=40%">
    </td>
    <td>
      <strong>💡 Jeseryl Mae D. Comia</strong><br>
      ➟ 22-03496
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://iili.io/38lfJRI.png"  width=40%">
    </td>
    <td>
      <strong>💡 Iemerie Jom C. Manguit</strong><br>
      ➟ 22-09658
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://iili.io/38aNbyv.jpg"  width=40%">
    </td>
    <td>
      <strong>💡 Deogenes Gregorio S. Maranan</strong><br>
      ➟ 22-07432
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://iili.io/38lHswb.png"  width=40%">
    </td>
    <td>
      <strong>💡 Clarence C. Zamora</strong><br>
      ➟ 22-04415
    </td>
  </tr>
</table>

</div>

### <a name="links"></a>
## 🔗 Important Links

<div align="center">
<table width="100%">
   <tr>
      <td width="25%">
         <div align="center">
            <a href="https://docs.google.com/document/d/1UGmG2grI9_qhyXu5an-qhn29iZxMONCByqPgvDas5cE/edit?usp=sharing">
               <img src="https://i.ibb.co/HLyN6mr/9746449.png" width="55%">
            </a>
            <p>Project Documentation</p>
         </div>
      </td>
      <td width="25%">
         <div align="center">
            <a href="https://www.figma.com/proto/kvVTjMtBxn3BxBEt7yKiMC/RAPID?node-id=1-3&t=fUxihvhNzw4plitc-1">
               <img src="https://i.ibb.co/ZJKs3pm/4595100.png" width="55%">
            </a>
            <p>Initial Interface Design (Figma)</p>
         </div>
      </td>
      <td width="25%">
         <div align="center">
            <a href="#">
               <img src="https://i.ibb.co/JK5jTgY/5651475.png" width="55%">
            </a>
            <p>Presentation Slides</p>
         </div>
      </td>
   </tr>
</table>
</div>



