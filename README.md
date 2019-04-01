# Retail Product Catalog
Product catalog for retails product can see the details and buy it.

# Introduction
This Programming challenge is a Single Page Responsive Application built on ReactJS library using Redux and can be viewed and run on any device resolution including desktop browser to mobile device browser.
The application is based TDD approach where unit test cases has been written using JEST with ENZYME framework.
This supports Deep-link on any page.
It also uses the specific font family.

Please follow the steps below to execute the application.

1. `npm install`
2. `npm start`
3. Open localhost:3000/ to view the Product Catelog Main page.
4. Click on Start button on start the product browsing. ( opens localhost:3000/products)
5. This page will show the details of the specific mentioned product.
6. Can scroll the multiple other images carousel of the same product.
7. Click on Zoom icon button to see the bigger photo of the same image.
8. Click on arrow image button to go through different images.
9. Click on "View all 10 Reviews" link to see other reviews of the product.
10. Click on "Hide Reviews" link to hide the opened reviews. 
11. Run`npm test`
12. This will execute Jest unit test cases and will show the result.
13. Run `npm build` to create production ready code for deployment.

## Application Design

This application is a SPA and has 2 pages to visit:

1. First page is landing page where there is a Target logo and Start button to start the application. User has to click on button to
 explore the product catelog application.
2. Second Page has the detailed information about the product which has been selected.
5. User can go back to previous pages by clicking on browsers back button.
6. User can refresh any pages to see the latest details.

## Deployment Process

This application has been deployed to production via heroku server.

### URL of the deployed application : https://myretails-products.herokuapp.com/

Steps to deploy to production environmet:
- npm install -g create-react-app
- create-react-app my-app
- cd my-app
- git init
- heroku create -b https://github.com/mars/create-react-app-buildpack.git
- git add .
- git commit -m "react-create-app on Heroku"
- git push heroku master
- heroku open


You can connect your heroku production instance to your application github repository and heroku will create the Continuous Integration Pipeline automatically.
