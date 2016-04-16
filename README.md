# onpurposehack

[![Join the chat at https://gitter.im/JMurphyWeb/onpurposehack](https://badges.gitter.im/JMurphyWeb/onpurposehack.svg)](https://gitter.im/JMurphyWeb/onpurposehack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A mockup of our product page:

![useagainproduct-page](https://cloud.githubusercontent.com/assets/14013616/14581681/9363a2cc-03ea-11e6-9d72-0e170d6f6c97.png)

email us, tweet us!

email: reuseapp@gmail.com
twitter: @reuseapp

### Data structure:
```js
const filteredArr = [{
  date: 'Sat Apr 16', //string
  time: '11:39', // string
  description: '@reuseapp #black #bicycle #helmet', //string
  hashtags: [ 'black', 'bicycle', 'helmet' ], //array of strings
  imgURLs: [ ], //array of strings
  coordinates: [ 23233, 12132 ], // array numbers
  provider: {
    id: 1000111, // number
    name: '', // string
    userName: '', //string
    profileImage: '', // string
  }
},{
  date: 'Sat Apr 16', //string
  time: '11:39', // string
  description: '@reuseapp #black #bicycle #helmet', //string
  hashtags: [ 'black', 'bicycle', 'helmet' ], //array of strings
  imgURLs: [ ], //array of strings
  coordinates: [ 23233, 12132 ], // array numbers
  provider: {
    id: 1000111, // number
    name: '', // string
    userName: '', //string
    profileImage: '', // string
  }
}]
```
