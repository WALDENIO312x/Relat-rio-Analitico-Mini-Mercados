window.onload = function() {
    const chartTooltipTitleCallback = function(tooltipItems) {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
            return label.join(' ');
        } else {
            return label;
        }
    };

    const commonTooltipOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    title: chartTooltipTitleCallback
                }
            }
        }
    };

    const driversCtx = document.getElementById('driversChart').getContext('2d');
    new Chart(driversCtx, {
        type: 'doughnut',
        data: {
            labels: ['Conveniência (Local)', 'Segurança', 'Acesso 24/7'],
            datasets: [{
                label: 'Fatores de Adoção',
                data: [50, 30, 20],
                backgroundColor: [
                    '#00A8E8',
                    '#007EA7',
                    '#003459'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            ...commonTooltipOptions
        }
    });

    const growthCtx = document.getElementById('growthChart').getContext('2d');
    new Chart(growthCtx, {
        type: 'line',
        data: {
            labels: ['2022', '2023', '2024 (Est.)', '2025 (Proj.)', '2026 (Proj.)'],
            datasets: [{
                label: 'Faturamento (Milhões R$)',
                data: [500, 650, 850, 1100, 1400],
                borderColor: '#00A8E8',
                backgroundColor: 'rgba(0, 168, 232, 0.1)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value + 'M';
                        }
                    }
                }
            },
            ...commonTooltipOptions
        }
    });

    const sourcesLabels = [
        ['Grandes', 'Atacadistas'],
        ['Indústria', '(Negociação Direta)'],
        ['Forn. Locais', '(Pães, Frios)'],
        'Outros'
    ];

    const sourcesCtx = document.getElementById('sourcesChart').getContext('2d');
    new Chart(sourcesCtx, {
        type: 'bar',
        data: {
            labels: sourcesLabels,
            datasets: [{
                label: '% de Aquisição',
                data: [45, 30, 15, 10],
                backgroundColor: [
                    '#00A8E8',
                    '#007EA7',
                    '#003459',
                    '#FFC107'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            ...commonTooltipOptions
        }
    });
};
