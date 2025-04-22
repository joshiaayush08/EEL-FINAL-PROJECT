
// YouTube Data - Now embedded directly in HTML file
const youtubeData = {
    categoryData: {
        labels: ['Music & Dance', 'Entertainment', 'Education', 'Gaming', 'News & Politics', 'Tech', 'Others'],
        values: [35, 22, 18, 15, 5, 3, 2]
    },
    viewSourcesData: {
        labels: ['Search', 'Suggested Videos', 'External', 'Home Page', 'Playlists', 'Notifications', 'Others'],
        values: [31, 25, 15, 12, 8, 6, 3]
    },
    geographyData: {
        labels: ['United States', 'India', 'Brazil', 'Japan', 'United Kingdom', 'Others'],
        values: [24, 18, 7, 5, 4, 42]
    },
    subscriberGrowthData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'T-Series',
                data: [200, 202, 204, 205, 207, 208, 210, 211, 212, 213, 214, 215]
            },
            {
                label: 'Cocomelon',
                data: [120, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133]
            },
            {
                label: 'PewDiePie',
                data: [108, 108.5, 109, 109.3, 109.8, 110, 110.3, 110.5, 110.8, 111, 111.2, 111.4]
            },
            {
                label: 'MrBeast',
                data: [82, 84, 86, 88, 90, 92, 94, 95, 97, 99, 100, 101]
            }
        ]
    },
    channelComparisonData: {
        labels: ['T-Series', 'Cocomelon', 'PewDiePie', 'MrBeast', 'SET India', 'WWE'],
        values: [0.32, 13.8, 1.4, 58.5, 0.25, 0.98]
    },
    channelRetentionData: {
        labels: ['PewDiePie', 'MrBeast', 'Mark Rober', 'MKBHD', 'T-Series', 'Cocomelon'],
        values: [61, 58, 52, 46, 29, 36]
    },
    engagementBySizeData: {
        labels: ['<100K', '100K-1M', '1M-10M', '10M-100M', '>100M'],
        values: [3.8, 3.2, 2.5, 1.8, 1.3]
    },
    engagementByContentData: {
        labels: ['Gaming', 'Tech', 'Education', 'Entertainment', 'Music', 'News'],
        values: [4.5, 3.9, 3.8, 2.7, 2.2, 1.8]
    },
    videoLengthData: {
        labels: ['0-3 min', '3-5 min', '5-8 min', '8-12 min', '12-20 min', '20+ min'],
        values: [1.2, 1.8, 2.4, 3.2, 2.8, 2.1]
    },
    uploadTimesData: {
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        hours: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
        values: [
            [0.5, 0.3, 0.4, 1.2, 1.8, 2.6, 2.9, 2.2],
            [0.4, 0.3, 0.5, 1.3, 1.9, 2.7, 3.0, 2.1],
            [0.5, 0.4, 0.6, 1.4, 2.0, 2.8, 3.1, 2.2],
            [0.6, 0.3, 0.5, 1.5, 2.1, 2.9, 3.2, 2.3],
            [0.7, 0.4, 0.6, 1.6, 2.2, 3.0, 3.3, 2.4],
            [1.0, 0.8, 0.9, 1.2, 1.5, 2.0, 2.4, 2.0],
            [0.9, 0.7, 0.8, 1.0, 1.3, 1.8, 2.2, 1.9]
        ]
    },
    geographyDetailedData: {
        labels: ['USA', 'India', 'Brazil', 'Japan', 'UK', 'Germany', 'France', 'Mexico', 'Canada', 'Others'],
        values: [24, 18, 7, 5, 4, 3, 2.5, 2.5, 2, 32]
    },
    ageData: {
        labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55+'],
        values: [16, 33, 29, 12, 7, 3]
    },
    revenueData: {
        labels: ['USA', 'UK', 'Canada', 'Germany', 'Australia', 'Japan', 'India', 'Brazil', 'Others'],
        values: [42, 8, 6, 5, 4, 4, 10, 3, 18]
    },
    channelsTableData: [
        { channel: 'T-Series', category: 'Music & Dance', subscribers: '212.1M', views: '323.7K', engagement: '3.12%', status: 'growing' },
        { channel: 'Cocomelon', category: 'Education', subscribers: '132.1M', views: '13.8M', engagement: '0.59%', status: 'growing' },
        { channel: 'PewDiePie', category: 'Gaming', subscribers: '111.4M', views: '1.4M', engagement: '6.10%', status: 'stable' },
        { channel: 'MrBeast', category: 'Entertainment', subscribers: '101.2M', views: '58.5M', engagement: '5.82%', status: 'growing' },
        { channel: 'SET India', category: 'Entertainment', subscribers: '98.7M', views: '253.6K', engagement: '2.31%', status: 'stable' },
        { channel: 'WWE', category: 'Sports', subscribers: '87.5M', views: '988.2K', engagement: '3.45%', status: 'growing' },
        { channel: 'BLACKPINK', category: 'Music & Dance', subscribers: '75.8M', views: '7.2M', engagement: '4.87%', status: 'growing' },
        { channel: 'Goldmines', category: 'Entertainment', subscribers: '64.3M', views: '1.2M', engagement: '2.15%', status: 'growing' },
        { channel: 'HYBE LABELS', category: 'Music & Dance', subscribers: '62.9M', views: '5.4M', engagement: '5.23%', status: 'growing' },
        { channel: 'Zee Music', category: 'Music & Dance', subscribers: '60.2M', views: '428.9K', engagement: '2.78%', status: 'stable' }
    ]
};

// Main JavaScript with all functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    setupEventListeners();
    populateChannelsTable();
    initializeCharts();
}

function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            setActiveTab(tabId);
        });
    });

    // Theme toggle
    document.getElementById('theme-button').addEventListener('click', toggleTheme);
}

function setActiveTab(tabId) {
    // Update active button
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-tab') === tabId) {
            button.classList.add('active');
        }
    });

    // Show selected tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('theme-button');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeButton.textContent = 'Switch to Dark Theme';
    } else {
        body.classList.add('dark-theme');
        themeButton.textContent = 'Switch to Light Theme';
    }
    
    // Reinitialize charts to update colors
    initializeCharts();
}

function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

function populateChannelsTable() {
    const tableBody = document.querySelector('#channels-table tbody');
    tableBody.innerHTML = '';
    
    youtubeData.channelsTableData.forEach(channel => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${channel.channel}</td>
            <td>${channel.category}</td>
            <td>${channel.subscribers}</td>
            <td>${channel.views}</td>
            <td>${channel.engagement}</td>
            <td><span class="status-badge status-${channel.status}">${channel.status.charAt(0).toUpperCase() + channel.status.slice(1)}</span></td>
        `;
        
        tableBody.appendChild(row);
    });
}

function initializeCharts() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const colors = getChartColors(isDarkTheme);
    
    // Overview Tab Charts
    createCategoriesChart(colors);
    createViewSourcesChart(colors);
    createGeographyChart(colors);
    
    // Channels Tab Charts
    createSubscriberGrowthChart(colors);
    createChannelComparisonChart(colors);
    createChannelRetentionChart(colors);
    
    // Engagement Tab Charts
    createEngagementByChannelSizeChart(colors);
    createEngagementByContentChart(colors);
    createVideoLengthChart(colors);
    createUploadTimesChart(colors);
    
    // Demographics Tab Charts
    createGeographyDetailedChart(colors);
    createAgeChart(colors);
    createRevenueChart(colors);
}

function getChartColors(isDarkTheme) {
    return {
        background: isDarkTheme ? '#1e1e1e' : '#ffffff',
        text: isDarkTheme ? '#f5f5f5' : '#333333',
        gridLines: isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        primary: '#4361ee',
        secondary: '#3a0ca3',
        accent: '#f72585',
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        info: '#2196f3',
        chartColors: [
            '#4361ee', '#f72585', '#4cc9f0', '#3a0ca3', '#7209b7',
            '#480ca8', '#560bad', '#f77f00', '#fcbf49', '#219ebc'
        ]
    };
}

function createCategoriesChart(colors) {
    const ctx = document.getElementById('categories-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: youtubeData.categoryData.labels,
            datasets: [{
                data: youtubeData.categoryData.values,
                backgroundColor: colors.chartColors,
                borderColor: colors.background,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif",
                            size: 12
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1,
                    padding: 15,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

function createViewSourcesChart(colors) {
    const ctx = document.getElementById('view-sources-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: youtubeData.viewSourcesData.labels,
            datasets: [{
                data: youtubeData.viewSourcesData.values,
                backgroundColor: colors.chartColors,
                borderColor: colors.background,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif",
                            size: 12
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1,
                    padding: 15,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

function createGeographyChart(colors) {
    const ctx = document.getElementById('geography-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: youtubeData.geographyData.labels,
            datasets: [{
                data: youtubeData.geographyData.values,
                backgroundColor: colors.chartColors,
                borderColor: colors.background,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif",
                            size: 12
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1,
                    padding: 15,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

function createSubscriberGrowthChart(colors) {
    const ctx = document.getElementById('subscriber-growth-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    const datasets = youtubeData.subscriberGrowthData.datasets.map((dataset, index) => {
        return {
            label: dataset.label,
            data: dataset.data,
            borderColor: colors.chartColors[index],
            backgroundColor: hexToRgba(colors.chartColors[index], 0.1),
            borderWidth: 2,
            tension: 0.4,
            fill: true
        };
    });
    
    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: youtubeData.subscriberGrowthData.labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createChannelComparisonChart(colors) {
    const ctx = document.getElementById('channel-comparison-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: youtubeData.channelComparisonData.labels,
            datasets: [{
                label: 'Average Views per Video (Millions)',
                data: youtubeData.channelComparisonData.values,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createEngagementByChannelSizeChart(colors) {
    const ctx = document.getElementById('engagement-by-size-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: youtubeData.engagementBySizeData.labels,
            datasets: [{
                label: 'Engagement Rate (%)',
                data: youtubeData.engagementBySizeData.values,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createEngagementByContentChart(colors) {
    const ctx = document.getElementById('engagement-by-content-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: youtubeData.engagementByContentData.labels,
            datasets: [{
                label: 'Engagement Rate (%)',
                data: youtubeData.engagementByContentData.values,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createGeographyDetailedChart(colors) {
    const ctx = document.getElementById('geography-detailed-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: youtubeData.geographyDetailedData.labels,
            datasets: [{
                label: 'Viewership (%)',
                data: youtubeData.geographyDetailedData.values,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createRevenueChart(colors) {
    const ctx = document.getElementById('revenue-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: youtubeData.revenueData.labels,
            datasets: [{
                label: 'Revenue Share (%)',
                data: youtubeData.revenueData.values,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createAgeChart(colors) {
    const ctx = document.getElementById('age-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: youtubeData.ageData.labels,
            datasets: [{
                data: youtubeData.ageData.values,
                backgroundColor: colors.chartColors,
                borderColor: colors.background,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif",
                            size: 12
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1,
                    padding: 15,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

function createVideoLengthChart(colors) {
    const ctx = document.getElementById('video-length-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: youtubeData.videoLengthData.labels,
            datasets: [{
                label: 'Engagement Rate (%)',
                data: youtubeData.videoLengthData.values,
                borderColor: colors.primary,
                backgroundColor: hexToRgba(colors.primary, 0.1),
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: colors.primary,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createUploadTimesChart(colors) {
    const ctx = document.getElementById('upload-times-chart');
    if (!ctx) return;
    
    // This is a simplified version of a heatmap using a bar chart
    if (ctx.chart) ctx.chart.destroy();
    
    // Convert the heatmap data to a simplified format for display
    const hours = youtubeData.uploadTimesData.hours;
    let bestTimes = [];
    let bestValues = [];
    
    // Find the best time for each day
    youtubeData.uploadTimesData.days.forEach((day, dayIndex) => {
        let maxValue = 0;
        let maxHourIndex = 0;
        
        youtubeData.uploadTimesData.values[dayIndex].forEach((value, hourIndex) => {
            if (value > maxValue) {
                maxValue = value;
                maxHourIndex = hourIndex;
            }
        });
        
        bestTimes.push(`${day} ${hours[maxHourIndex]}`);
        bestValues.push(maxValue);
    });
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bestTimes,
            datasets: [{
                label: 'Engagement Rate (%)',
                data: bestValues,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function createChannelRetentionChart(colors) {
    const ctx = document.getElementById('channel-retention-chart');
    if (!ctx) return;
    
    if (ctx.chart) ctx.chart.destroy();
    
    ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: youtubeData.channelRetentionData.labels,
            datasets: [{
                label: 'Audience Retention (%)',
                data: youtubeData.channelRetentionData.values,
                backgroundColor: colors.chartColors,
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                },
                y: {
                    grid: {
                        color: colors.gridLines
                    },
                    ticks: {
                        color: colors.text
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: colors.text,
                        font: {
                            family: "'Inter', sans-serif"
                        }
                    }
                },
                tooltip: {
                    backgroundColor: colors.background,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.gridLines,
                    borderWidth: 1
                }
            }
        }
    });
}

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
    