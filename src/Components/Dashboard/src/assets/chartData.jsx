

export const dataLine = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 60],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};

export const dataBar = {
    labels: ['Happy', 'Sad', 'Anxious', 'Angry'],
    datasets: [
        {
            label: 'Quantity',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        },
    ],
};