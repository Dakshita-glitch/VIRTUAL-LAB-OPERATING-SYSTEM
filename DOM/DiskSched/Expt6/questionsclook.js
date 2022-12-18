// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "Consider a disk queue with requests for I/O to blocks on cylinders 47, 38, 121, 191, 87, 11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0 to 199. The total head movement (in number of cylinders) incurred while servicing these requests is______.",
  answer: "346",
  options: [
    "180",
    "346",
    "220",
    "590"
  ]
},
  {
  numb: 2,
  question: "Which of these is not the advantage of CLOOK algorithm?",
  answer: "In C-LOOK an overhead of finding the end requests is present",
  options: [
    "In C-LOOK an overhead of finding the end requests is present",
    "C-LOOK provides better performance when compared to LOOK Algorithm.",
    "There is less waiting time for the cylinders which are just visited by the head in C-LOOK.",
    "In C-LOOK the head does not have to move till the end of the disk if there are no requests to be serviced."
  ]
},
  {
  numb: 3,
  question: "____ starts from the first request at one end of the disk and moves towards the last request at the other end servicing all the requests in between.",
  answer: "Head",
  options: [
    "Hand",
    "Tail",
    "Foot",
    "Head"
  ]
},
  {
  numb: 4,
  question: "CLOOK is an improved version of which algorithm?",
  answer: "LOOK",
  options: [
    "SCAN",
    "FCFS",
    "LOOK",
    "C-SCAN"   
  ]
},
  {
  numb: 5,
  question: "In CLOOK algorithm when head  reaches the last request, it __",
  answer: "It returns to 0th cylinder",
  options: [
    "It continues in other direction",
    "It stops there",
    "It goes to 199th cylinder.",
    "It returns to 0th cylinder"
  ]
},

];
