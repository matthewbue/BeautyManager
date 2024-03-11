import { ChartType } from './dashboard.model';

const emailSentBarChart: ChartType = {
    chart: {
        height: 340,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    series:  [{
        name: 'Metas',
        data: [1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300, 1300]
      }, {
        name: 'Ganhos Reais',
        data: [2000, 2056, 1500, 1600, 1700, 1555, 1850, 1423, 1540, 1400, 1333, 1900]
      }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Fev', 'Nov', 'Dec'],
    },
    colors: ['#556ee6', '#34c38f', '#34c38f'],
    legend: {
        position: 'bottom',
    },
    fill: {
        opacity: 1
    },
};

const monthlyEarningChart: ChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '13px',
                    color: undefined,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: '16px',
                    color: undefined,
                    formatter: (val) => {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: ['#556ee6'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4,
    },
    series: [67],
    labels: ['Series A'],
};

const transactions = [
    {
        id: '#SK2540',
        name: 'Helena Maria',
        date: '07 Fev, 2024',
        total: '$40',
        status: 'Pago',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 1
    },
    {
        id: '#SK2541',
        name: 'Mariana Silva',
        date: '07 Fev, 2024',
        total: '$60',
        status: 'Pendente Pagamento',
        payment: ['fa-cc-visa', 'Visa'],
        index: 2
    },
    {
        id: '#SK2542',
        name: 'Carlos Oliveira',
        date: '06 Fev, 2024',
        total: '$55',
        status: 'Pago',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3
    },
    {
        id: '#SK2543',
        name: 'Ana Oliveira',
        date: '05 Fev, 2024',
        total: '$30',
        status: 'Pago',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 4
    },
    {
        id: '#SK2544',
        name: 'Sandra Souza',
        date: '04 Fev, 2024',
        total: '$80',
        status: 'Cancelado',
        payment: ['fa-cc-visa', 'Visa'],
        index: 5
    },
    {
        id: '#SK2545',
        name: 'Fernando Lima',
        date: '04 Fev, 2024',
        total: '$65',
        status: 'Pago',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 6
    }
];

const statData = [{
    icon: 'bx bx-copy-alt',
    title: 'Orders',
    value: '1,235'
}, {
    icon: 'bx bx-archive-in',
    title: 'Revenue',
    value: '$35, 723'
}, {
    icon: 'bx bx-purchase-tag-alt',
    title: 'Average Price',
    value: '$16.2'
}];

export { emailSentBarChart, monthlyEarningChart, transactions, statData };
