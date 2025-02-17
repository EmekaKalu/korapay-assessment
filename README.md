# KoraPay Assessment

A test automation framework for KoraPay's web application and API endpoints using Cypress and Postman/Newman.

[Click here to view Test Cases and Bug Report for number 4 & 5 of the assessment](https://docs.google.com/spreadsheets/d/1MmEt7a2bDbTiTUBBLAWf0OrTABhWA_1zvSP1RmNu5RM/edit?usp=sharing)

## 🛠 Technologies Used

- Cypress
- Postman/Newman
- Node.js
- Faker.js
- dotenv

## 🏗 Project Structure

├── cypress/
│ ├── e2e/ # Test files
│ ├── fixtures/ # Test data
│ ├── pages/ # Page Object Models
│ └── support/ # Helper functions and commands
├── postmanAutomation/
│ ├── collections/ # Postman collections
│ ├── environments/ # Environment variables
│ ├── reports/ # Test execution reports
│ └── scripts/ # Newman automation scripts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/EmekaKalu/korapay-assessment.git
cd korapay-assessment
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
KORA_PASSWORD=your_password
KORA_NEW_PASSWORD=your_new_password
KORA_MOBILE_PIN=your_pin
KORA_API_URL=your_api_url
ALPHA_PAY_URL=your_alphapay_url
ALPHA_PAY_PASSWORD=your_password
ALPHA_PAY_NEW_PASSWORD=your_new_password
CHECKOUT_URL=your_checkout_url
```

## 🧪 Running Tests

### Cypress Tests

The framework includes tests for:
- Sign Up
- Sign In
- Profile Updates
- Password Changes
- Logout
- Checkout Process

To run Cypress tests:
```bash
npx cypress open   # Opens Cypress Test Runner
npx cypress run    # Runs tests headlessly
```

### API Tests

To run Postman/Newman tests:
```bash
npm run newmanTests
```

This will:
1. Update environment variables from `.env`
2. Execute the test collection
3. Generate HTML reports

### Regression Tests

To run both Cypress and Postman/Newman tests:
```bash
npm run regressionTests
```

## 📝 Test Reports

- Cypress: Screenshots and videos are stored in `cypress/screenshots` and `cypress/videos`
- Newman: HTML reports are generated in `postmanAutomation/reports`

## 🧩 Framework Features

- Page Object Model design pattern
- Environment variable management
- Custom commands
- Faker.js for test data generation
- Reusable test components
- HTML reporting
- API automation

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.