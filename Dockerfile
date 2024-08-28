# Use the official Cypress image as the base image
FROM cypress/included:12.1.0

# Set the working directory inside the container
WORKDIR /e2e

# Copy your Cypress test files into the container
COPY . /e2e

#Install dependencies
RUN npm install

# Run Cypress tests in headless mode
CMD ["npx","cypress", "open"]
