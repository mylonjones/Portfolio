/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('./db/mongoose.js');

const people = ['Benny', 'Jimmy', 'Dorithy', 'Harold', 'Carol', 'borkus bobulous', 'Ken', 'Fernando', 'Portia', 'spongeBob', 'Helga', 'Otis'];

const sentences = ['Duis gravida sollicitudin tortor gravida tristique. Nam porttitor auctor cursus. Praesent sed purus quis turpis convallis tristique eu vel sem. Donec dictum erat nec semper condimentum. Donec porta varius enim.', 'Morbi sagittis, massa non aliquet sodales, mi libero aliquam dui, nec pretium augue erat at nunc. Nullam dictum tempus neque vitae fringilla. Curabitur gravida purus non arcu bibendum, id tincidunt.', 'Pellentesque pharetra sapien pulvinar massa egestas blandit. Vestibulum in tellus blandit, aliquam est sit amet, fringilla nulla. Sed rhoncus mi ipsum, commodo rhoncus ante placerat quis. Morbi vitae tempus nulla.', 'Maecenas sed eros ligula. Suspendisse enim orci, cursus quis libero et, mollis lobortis justo. Vivamus augue dui, semper ac posuere nec, vulputate nec enim. Cras a nisl semper, mollis urna.', 'Ut et volutpat diam. Etiam luctus sodales erat, ac auctor odio condimentum sed. Nunc ullamcorper tortor a mauris mollis, ac venenatis neque laoreet. Donec convallis dolor at tortor pretium sodales.', 'Curabitur nec faucibus elit. Sed tellus magna, sagittis id velit ut, pulvinar viverra urna. Donec venenatis gravida tortor ac dignissim. Sed viverra, lorem id venenatis egestas, est nunc dictum mauris.'];

const dates = [new Date(2020, 5, 21), new Date(2019, 8, 3), new Date(2006, 3, 15), new Date(2021, 10, 11), new Date(2020, 9, 27), new Date(2020, 3, 30)];

const questions = [];
const answers = [];

for (let i = 0; i < 300; i++) {
  questions.push({
    question: sentences[Math.floor(Math.random() * 6)],
    author: people[Math.floor(Math.random() * 12)],
    dateWritten: dates[Math.floor(Math.random() * 5)].toDateString(),
    questionId: i,
    itemId: Math.floor(Math.random() * 100),
  });
}

for (let i = 0; i < 100; i++) {
  questions.push({
    question: sentences[Math.floor(Math.random() * 6)],
    author: people[Math.floor(Math.random() * 12)],
    dateWritten: dates[Math.floor(Math.random() * 5)].toDateString(),
    questionId: i + 300,
    itemId: i,
  });
}

for (let i = 0; i < 600; i++) {
  answers.push({
    answer: sentences[Math.floor(Math.random() * 6)],
    author: people[Math.floor(Math.random() * 12)],
    helpful: Math.floor(Math.random() * 5),
    notHelpful: Math.floor(Math.random() * 5),
    reported: Math.floor(Math.random() * 5),
    expertSupport: Boolean(Math.round(Math.random())),
    dateWritten: dates[Math.floor(Math.random() * 5)].toDateString(),
    questionId: Math.floor(Math.random() * 300),
    answerId: i,
  });
}

db.question.create(questions)
  .then(() => {
    console.log('queastions loaded');
    db.answer.create(answers)
      .then(() => {
        console.log('questions loaded');
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  })


// db.question.deleteMany({})
//   .then(() => {
//     console.log('questions deleted');
//     db.question.create(questions)
//       .then(() => {
//         console.log('queastions loaded');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   })
//   .then(() => {
//     db.answer.deleteMany({})
//       .then(() => {
//         console.log('answers deleted');
//         db.answer.create(answers)
//           .then(() => {
//             console.log('questions loaded');
//             mongoose.connection.close();
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       });
//   })
//   .catch((err) => {
//     console.error(err);
//   });
