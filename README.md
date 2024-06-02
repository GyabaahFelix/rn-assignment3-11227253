# Task Management App

This React Native application serves as a task management tool, allowing users to view categorized tasks and ongoing tasks. The app features a clean and intuitive interface for easy task management.

## Components

### 1. Task Component

The main component of the application, responsible for rendering the entire UI. It includes:

- **ScrollView**: A scrollable view that contains all other components.
- **View (Group734)**: A container for various sections of the UI.
- **View (Frame1)**: A container for the greeting and profile image.
- **Text (HelloDevs)**: Displays a greeting message.
- **Text (_14TasksToday)**: Displays the number of tasks for the day.
- **Image (ProfileImage)**: Displays the user's profile picture.
- **View (Search3)**: A container for the search box and filter icon.
- **View (SearchBox)**: A container for the search input field.
- **Image (MynauiSearch)**: A search icon inside the search box.
- **TextInput (SearchInput)**: A text input field for searching tasks.
- **Image (Filter)**: An icon for filtering tasks.
- **Text (Categories)**: Displays the "Categories" heading.
- **FlatList (Categories List)**: A horizontal list of task categories.
- **View (CategoriesCard)**: A card for each category, containing the category title, task count, and image.
- **Text (OngoingTask)**: Displays the "Ongoing Task" heading.
- **FlatList (Ongoing Tasks List)**: A list of ongoing tasks.
- **View (OngoingTasksCards)**: A card for each ongoing task, containing the task title.
- **Button**: A button to add new tasks.

## Screenshots

![Main Screen](../assets/screenshot.png)

### Main Screen
(./assets/screenshot.png)

## Author

Gyabaah Felix

ID: 11227253

## Usage

1. **Main Screen**: Displays a greeting, the number of tasks for the day, a search box, and filter icon.
2. **Categories**: Shows a horizontal list of task categories with titles, task counts, and images.
3. **Ongoing Tasks**: Displays a list of ongoing tasks.
4. **Add Task Button**: Provides functionality to add new tasks (logic to be implemented).

## Styling

The `styles` object defines the styles for various components using `StyleSheet.create`. Key styles include:

- **Task**: Sets the background color and padding for the main scroll view.
- **Frame1**: Styles for the greeting and profile image container.
- **Search3**: Styles for the search box and filter icon container.
- **CategoriesCard**: Styles for the category cards.
- **OngoingTasksCards**: Styles for the ongoing task cards.

Feel free to customize the styles and components as per your requirements.

## Installation

To run the application:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the application using `npm start`.

Ensure you have React Native environment set up on your machine.

## Future Improvements

- Implement the logic for adding new tasks.
- Enhance the search functionality.
- Add more categories and ongoing tasks dynamically.

This README provides an overview of the Task Management App, its components, usage, and styling. Happy coding!
