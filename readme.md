# Tiny Doggo

This project is a single-page HTML/CSS/JS frontend application that accesses data from a public API providing information about various dog breeds. The API used in this project is the [Dog CEO's Dog API](https://dog.ceo/dog-api/), which does not require any authentication or API key.

## Features

- Asynchronously fetches data from the Dog CEO's Dog API using JSON format.
- Displays a collection of dog breeds with images.
- Implements interactivity through distinct event listeners:
  1. **Search functionality**: Allows users to search for a specific dog breed by entering its name in an input field. This event is triggered by the 'input' event.
  2. **Filter by breed group**: Enables users to filter dog breeds by their group (e.g., hound, sporting, herding) by selecting an option from a dropdown menu. This event is triggered by the 'change' event.
  3. **Random dog button**: Provides users with a button to fetch a random dog image. This event is triggered by the 'click' event.

## Array Iteration

- Utilizes the `Array.prototype.filter()` method to filter the collection of dog breeds based on the selected breed group.

## File Structure

- `index.html`: Single-page HTML file containing the structure of the application.
- `styles.css`: CSS file for styling the HTML elements.
- `script.js`: JavaScript file responsible for fetching data from the API, handling events, and updating the UI.

## Setup



