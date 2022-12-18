// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Consider a disk queue with requests for I/O to blocks on cylinders 98, 183, 41, 122,14, 124, 65, 67. The SSTF scheduling algorithm is used. The head is initially at cylinder number 53 moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0 to 199. The total head movement (in number of cylinders) incurred while servicing these requests is _______.",
    answer: "236",
    options: [
      "236",
      "136",
      "100",
      "200"
    ]
  },
    {
    numb: 2,
    question: "Consider a disk system with 100 cylinders. The requests to access the cylinders occur in following sequence-4, 34, 10, 7, 19, 73, 2, 15, 6, 20.Assuming that the head is currently at cylinder 50, what is the time taken to satisfy all requests if it takes 1 ms to move from one cylinder to adjacent one and shortest seek time first policy is used?",
    answer: "119 ms",
    options: [
      "95 ms",
      "119 ms",
      "233 ms",
      "276 ms"
    ]
  },
    {
    numb: 3,
    question: "Consider the following disk request sequence for a disk with 100 tracks 45, 21, 67, 90, 4, 89, 52, 61, 87, 25. Head pointer starting at 50. Find the number of head movements in cylinders using SSTF scheduling.",
    answer: "136",
    options: [
      "136",
      "176",
      "147",
      "103"
    ]
  },
    {
    numb: 4,
    question: "What does SSTF means?",
    answer: "Shortest Seek Time First.",
    options: [
      "First Come First Serve",
      "Shortest Job First",
      "Shortest Seek Time First.",
      "None of the Above"
    ]
  },
    {
    numb: 5,
    question: "What are the advantages of SSTF ?",
    answer: "All of the above",
    options: [
      "It reduces the total seek time as compared to FCFS.",
      "It provides increased throughput.",
      "It provides less average response time and waiting time.",
      "All of the above"
    ]
  },

];
