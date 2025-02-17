const newman = require('newman');
const path = require('path');

newman.run({
    collection: path.join(__dirname, 'collections/korapay.collection.json'),
    environment: path.join(__dirname, 'environments/korapay.environment.json'),
    reporters: ['htmlextra', 'cli'],
    reporter: {
        htmlextra: {
            export: path.join(__dirname, 'reports/report.html'),
            title: 'KoraPay API Test Report',
            browserTitle: "KoraPay API Tests",
            titleSize: 4,
            showEnvironmentData: true,
            showGlobalData: true
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('Collection run completed!');
});
