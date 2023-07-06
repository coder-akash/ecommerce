# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


const product=[
  {
    rating:'4.6',
    id:'1',
    imageUrl: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
    title: 'TRQ White Shoes',
    category: 'Shoes',
    brand: 'AMZ brand Ghz',
    price: 1999
  },
  {
    rating:'3.9',
    id:'2',
    imageUrl: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
    title: 'LOREM Watch Black',
    category: 'Watches',
    brand: 'Watch Ltd Siyana',
    price: 2599
  },
  {
    rating:'4.4',
    id:'3',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
    title: 'AMZ Laptop 8GB RAM',
    category: 'Laptops',
    brand: 'Delhi Laptops',
    price: 50000
  },
  {
    rating:'3.5',
    id:'4',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
    title: 'Security Camera',
    category: 'CCTV',
    brand: 'Camron LTD',
    price: 4000
  },
  {
    rating:'4.1',
    id:'5',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
    title: 'Watch Pink',
    category: 'Watches',
    brand: 'Watch Ltd',
    price: 2000
  },
  {
    rating:'4.2',
    id:'6',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
    title: 'Cup red Color',
    category: 'Cup',
    brand: 'ABS Ltd',
    price: 100
  },
  {
    rating:'3.9',
    id:'7',
    imageUrl:  'https://lh3.googleusercontent.com/b1nZil47ABShYY2110TfC-z7g6EgJSNWdcu4wWJnNJ7RC4d9nv5deafT49-G9IGiH4LZrmlBm9O5f1aE_m25CuNbraMfagh7QIBHasM', 
    title: 'Dress pink colour',
    category: 'Women Dresses',
    brand: ' Avasaa Ltd',
    price: 1500
  },
  {
    rating:'4.0',
    id:'8',
    imageUrl: 'https://lh3.googleusercontent.com/Ss3Yy-Iy0cYexvlesWkczyIkKt9eT1zlvQK92MmfymUmt5sJbnANYyDOQ113yx0HmEeHAXAaXAgl3mKRb6BX8Fwg3N1jjq8foKuaNSP-',
    title: 'Kurtha Set',
    category: 'Ethnic Printed Kurtha and Duppatta',
    brand: 'Varanga',
    price: 1800
  },
  {
    rating:'4.2',
    id:'9',
    imageUrl: 'https://lh3.googleusercontent.com/8ZtPHCm7OqHnPr0Eaj3fflQO8R2yDOeZfaUsFUhipUyeyRpGsbX3UerfFYq3fqcX99CRB0QQzg1gMtqIf9CjTjcH_T_KmWs9sTOENNiXpQ',
    title: 'Western Wear',
    category: 'Women Western Wear',
    brand: 'Biba',
    price: 1599
  },
  {
    rating:'4.2',
    id:'10',
    imageUrl: 'https://lh3.googleusercontent.com/2BcU_uiSoX347z9J279UcGNfzYEo0-75vXik7JOZMn1CaA-TGBtPgEtAS5g1i6M4MqDM4fNEKAaM7EtkBvEdhwtUYnawRjZNA6xgyTi7',
    title: 'Jeans',
    category: 'Women Jeans',
    brand: 'Levis',
    price: 1699
  },
  {
    rating:'4.8',
    id:'11',
    imageUrl: 'https://lh3.googleusercontent.com/2mGV9QkOmu2pXX5eh_Up6_OB_PmCDA-TPSWKE1ZSPmRnkHDOJtHe9k8pTjKCPa7796DIo_NKVsTLaVe_wU059ND5P9zSDbaVNg2N1Y2vjg',
    title: 'Saree',
    category: 'Women saree Pattu',
    brand: 'Geruva',
    price: 1899
  },
  {
    rating:'3.5',
    id:'12',
    imageUrl: 'https://lh3.googleusercontent.com/nFnXUltg9zm0RegEV1qO0d0tG24PWp2lWpiOsMrRxBNGbZlJUqqhCnY_a1Fg7KX45qFM60M14UmNZOC3GN5XRSkAvH8sMyAxmgFHhAc9',
    title: 'Long Frock',
    category: 'Women LongFrock Pattu',
    brand: 'Libas',
    price: 2099
  },
  {
    rating:'4.7',
    id:'13',
    imageUrl: 'https://lh3.googleusercontent.com/0k7tGn6IK9bunQvS1LnWn_ubkgaPZl2uHaZ_v2pkyng2qQhowdWm_9sK7SMI2Q7ilDjWlJ3WAf8-JfKh_xbkSb39UwMEvx66oSURrZg',
    title: 'Men Traditional Wear',
    category: 'Wedding suit for mens',
    brand: 'Fusion Brand',
    price: 3499
  },
  {
    rating:'4.1',
    id:'14',
    imageUrl:'https://lh3.googleusercontent.com/L2EQnmU0f8u8rmXvrgNNTwxYR0CAsjB8nZ3tEI1X2dXlp6VLNvp-rnULY-X6LSxOAA56UirRXjdVhB3F-Ur1I-cIVboX-rSbyBB0e1J_',
    title: 'Men Trouser Set',
    category: 'Casual Wear',
    brand: 'Wrangler',
    price: 2899
  },
  {
    rating:'4.4',
    id:'15',
    imageUrl:'https://lh3.googleusercontent.com/bINaq0s1qEQZHKwPYcKxZuROitUm-T_vEkHHKLMxNykp18p0TcPNU_dz4OFYdjfoGWDc3yQozEs6of7vlG2f35otPITJJUh9Ip3FWqrt',
    title: 'Men Trouser Set',
    category: 'Casual Wear',
    brand: 'Wrangler',
    price: 2899

  },
  {
    rating:'4.1',
    id:'16',
    imageUrl:'https://lh3.googleusercontent.com/Azab2ysEsdaxl5Bxia0KIsD6Actfhp8Up5EeKzE84LXtDqXg043x3L3ptaMgdYWpiYv7oReDsmXGVfLwvBpKcnejWabGIwBNYIejBUr2',
    title: 'Mobile',
    category: 'One Plus Mobile',
    brand: '1+',
    price:'60000',
  },
  {
    rating:'4.3',
    id:'17',
    imageUrl: 'https://lh3.googleusercontent.com/4sa1J2zGTCmB71E2Nf5sADZR9XpZaUnAdnJbxc7kW23KugTDiKefXCD3AnYEbPEQAlJ_yJj4vvuZpZum2QqQ3o2xJBcjiWcYIXdERDKROw',
    title: 'Alexa echo dot',
    category: 'Blutooth',
    brand: 'Amazon',
    price: '4599',
  },
  {
    rating:'3.7',
    id:'18',
     imageUrl: 'https://lh3.googleusercontent.com/7rAOQ8TDb-LljJt6N8hksyOtxXIjXVYDjkLc-LTsJ9Gb7-780v6FkqTir09-mArdqH2FWACK_3r_1vu2BBXSiZhhtmTfsZk4S4uqEEY',
     title: 'Canon',
     category: 'Camera',
     brand: 'Canon eos Digital SLR Camera',
     price: '35000',
  },
  {
    rating:'4.0',
    id:'19',
    imageUrl: 'https://lh3.googleusercontent.com/3LcBU3Mfd1WCOyW42VyR2s8Fw4RwFoEqV5qd7RHJwBeH52EdRtwkKvHAXAycRCUQiwT3z6-1qCNFw7KsqqfIW7hQffZ2Sqjp1XnKN8rK',
    title: 'Headset',
    category: 'Sony ',
    brand: 'Sony Wireless Headset',
    price: '32000',
  },
  {
    rating:'4.9',
    id:'20',
    imageUrl: 'https://lh3.googleusercontent.com/sFTPaWju-PSZNpni3--fPbvjLHazSD1Q_VKb7VtaTeh3Qp_HNR2pYmdNKNwBGkvKiBzOpV1dvO3lptkOb4zWgkS9WuQsrwNYzpHuRUX_',
    title: 'Sandals',
    category: 'Catwalk',
    brand: 'Kholapuris Sandals',
    price: '1899',
  },
  {
    rating:'3.1',
    id:'21',
    imageUrl: 'https://lh3.googleusercontent.com/JqClzWTAb0pyZu0BD76WMseS5FYi8xxDRW8Zq4WlhC3eR9Dyy-B0bDLlO9MIXaEr1cKH5UsFBaEyjrc2h1mJqRSPGNIXppmf0Qrte2k',
    title: 'Luggage Bags',
    category: 'Laptop and Trolley Bags',
    brand: 'Knight Riders',
    price: '8999',
  },
  {
    rating:'5.0',
    id:'22',
    imageUrl: 'https://lh3.googleusercontent.com/fBl38qQ7wnD7gR3FyRpXXxdeXgmsXffjXUqjJRIurbQoIw-WkfTGRE23ss80BqemO_BrA0NKboStu1UDe1wiBJ8YqDIe2ToTZMYhLK0',
    title: 'Kids SkyBlue Frock',
    category: 'Girl Frock',
    brand: 'Zara',
    price: '599',
  },
  {
    rating:'3.8',
    id:'23',
    imageUrl: 'https://lh3.googleusercontent.com/jv8LT11SkbP39fSuqCNUOJ5OxX2UfYBSGr9Kk7UQ-kToHQHY5vmcXDYYzGD_SiqU0-iM7nMoaDL1P7zTJ92fegk_-qwX2s0K13HrwLPQ',
    title: 'Kids Cream colour Trouser ',
    category: ' Boys Casual Wear',
    brand: 'Apple cloths pvt Ltd',
    price: '899',
  },
  {
    rating:'4.2',
    id:'25',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQerEVYOt7nFjMmh_1LqEr5wFXBwvshot9Jh5oUFtR4S9JjWHob',
    title: 'One Seater Sofa ',
    category: 'Furniture',
    brand: 'Urban Decor',
    price: '13599',
  },



]
