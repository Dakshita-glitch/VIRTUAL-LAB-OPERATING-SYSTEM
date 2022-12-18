// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "A deadlock avoidance algorithm dynamically examines the __________ to ensure that a circular wait condition can never exist.",
        answer: "resource allocation state",
        options: [
            "resource allocation state",
            "system storage state",
            "operating system",
            "resources"
        ]
    },
    {
        numb: 2,
        question: "A state is safe, if ____________",
        answer: "the system can allocate resources to each process in some order and still avoid a deadlock",
        options: [
            "the system does not crash due to deadlock occurrence",
            "the system can allocate resources to each process in some order and still avoid a deadlock",
            "the state keeps the system protected and safe",
            "all of the mentioned"
        ]
    },
    {
        numb: 3,
        question: "Advantage of Banker’s Algorithm is ________.",
        answer: "Each process should provide information to the operating system for upcoming resource requests, the number of resources, and how long the resources will be held.",
        options: [
            "The algorithm does no longer allows the processes to exchange its maximum needs while processing its tasks.",
            "Each process should provide information to the operating system for upcoming resource requests, the number of resources, and how long the resources will be held.",
            "The number of resource requests can be granted in a finite time, but the time limit for allocating the resources is one year.",
            "all of the mentioned"
        ]
    },
    {
        numb: 4,
        question: "Banker's algorithm deals with _____.",
        answer: "deadlock avoidance",
        options: [
            "deadlock recovery",
            "deadlock prevention",
            "mutual exclusion",
            "deadlock avoidance"
        ]
    },
    {
        numb: 5,
        question: "Banker’s Algorithm was designed by _______.",
        answer: "Edsger Dijkstra",
        options: [
            "Charles Babbage",
            "Ada Lovelace",
            "Edsger Dijkstra",
            "None"
        ]
    },

];
