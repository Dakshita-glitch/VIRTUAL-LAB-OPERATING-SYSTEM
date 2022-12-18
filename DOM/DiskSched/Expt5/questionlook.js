// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "LOOK Scheduling Algorithm is the advanced version of which Scheduling Algorithm giving slightly better seek time than other algorithms in the hierarchy?",
    answer: "SCAN",
    options: [
      "FCFS",
      "C-SCAN",
      "SSTF",
      "SCAN"
    ]
  },
    {
    numb: 2,
    question: "Which one is the disadvantage of LOOK Scheduling Algorithm?",
    answer: "It causes long waiting time for the cylinders just visited by the head.",
    options: [
      "It does not lead to starvation.",
      "It causes long waiting time for the cylinders just visited by the head.",
      "It provides better performance as compared to SCAN Algorithm.",
      "It does not cause the head to move till the ends of the disk when there are no requests to be serviced."
    ]
  },
    {
    numb: 3,
    question: " Consider a disk queue with requests for I/O to blocks on cylinders 218, 12, 30, 11, 94, 128, 345, 205, 380. The LOOK scheduling algorithm is used. The head is initially at cylinder number 150. The cylinders are numbered from 0 to 399. The total head movement (number of cylinders) incurred while servicing these requests is ________. (assume that LOOK algorithm moves towards 399 when it start its execution)",
    answer: "599",
    options: [
      "499",
      "699",
      "599",
      "600"
    ]
  },
    {
    numb: 4,
    question: "Consider a disk queue with requests for I/O to blocks on cylinders 98, 183, 41, 122, 14, 124, 65, 67. The LOOK scheduling algorithm is used. The head is initially at cylinder number 53 moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0 to 199. The total head movement (in number of cylinders) incurred while servicing these requests is _______.",
    answer: "299",
    options: [
      "240",
      "399",
      "299",
      "400"
    ]
  },
    {
    numb: 5,
    question: "Advantage of LOOK Scheduling Algorithm is ______.",
      answer: "All of the above",
    options: [
      "It does not cause the head to move till the ends of the disk when there are no requests to be serviced.",
      "It provides low variance in response time and waiting time.",
      "It does not lead to starvation.",
      "All of the above"
    ]
  },

];
