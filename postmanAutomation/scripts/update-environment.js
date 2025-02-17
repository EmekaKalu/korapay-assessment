require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Path to your environment file
const envFile = path.join(__dirname, '../environments/korapay.environment.json');

try {
    // Read the environment file
    const environment = JSON.parse(fs.readFileSync(envFile, 'utf8'));

    // Update or add password values
    const updateValue = (key, value) => {
        const existingValue = environment.values.find(v => v.key === key);
        if (existingValue) {
            existingValue.value = value;
        } else {
            environment.values.push({
                key: key,
                value: value,
                type: "secret",
                enabled: true
            });
        }
    };

    // Update values from .env
    updateValue('kora_password', process.env.KORA_PASSWORD);
    updateValue('kora_new_password', process.env.KORA_NEW_PASSWORD);
    updateValue('mobile_pin', process.env.KORA_MOBILE_PIN);
    updateValue('base_url', process.env.KORA_API_URL);

    // Write back to file
    fs.writeFileSync(envFile, JSON.stringify(environment, null, 2));
    console.log('Environment variables updated successfully!');
} catch (error) {
    console.error('Error updating environment:', error);
    process.exit(1);
}