// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "What is SJF?",
        answer: "Shortest Job First",
        options: [
            "Shortest Job First",
            "Round Robin",
            "Preemptive Priority Scheduling",
            "Non-Preemptive Priority Scheduling "
        ]
    },
    {
        numb: 2,
        question: "What is advantages of SJF?",
        answer: "SJF is generally used for long term scheduling.",
        options: [
            "It is not suitable for the jobs running in batches, where run times are already known.",
            "SJF is not better than the First come first serve(FCFS) algorithm as it reduces the average waiting time.",
            "SJF is generally used for long term scheduling.",
            "SJF is not optimal in terms of average turnaround time."
        ]
    },
    {
        numb: 3,
        question: "What is disadvantage of SJF",
        answer: "In SJF job completion time must be known earlier, but sometimes it is hard to predict.",
        options: [
            "SJF may not cause very long turn-around times or starvation.",
            "In SJF job completion time must be known earlier, but sometimes it is hard to predict.",
            "Sometimes, it is easy to predict the length of the upcoming CPU request.",
            "It leads to the starvation that reduces average turn around time"
        ]
    },
    {
        numb: 4,
        question: "What is characteristic of SJF?",
        answer: "All of the above",
        options: [
            "Shortest Job first has the advantage of having a minimum average waiting time among all scheduling algorithms.",
            "SJF can be used in specialized environments where accurate estimates of running time are available.",
            "It is a Greedy Algorithm",
            "All of the above"
        ]
    },
    {
        numb: 5,
        question: "In which of the following scheduling criteria, context switching will never take place?",
        answer: "Non-preemptive SJF",
        options: [
            "ROUND ROBIN",
            "Preemptive SJF",
            "Non-preemptive SJF",
            "Preemptive Priority"
        ]
    },

];
