/**
 * Simple Task Manager Application
 * Task Management Tool. The requirements are:
 * - Each task must have an id, title, description, status, and an optional dueDate.
 * - Status can only be one of the following: "pending" | "in-progress" | "completed".
 * - The application must allow creating, updating, and retrieving tasks.
 * - Task operations should be reusable and type-safe.
 * 
 * Source: https://www.coursera.org/learn/getting-started-with-typescript/supplement/E6of4/practice-project-building-a-simple-task-management-tool
 *
 * Run with: npx ts-node taskManager.ts
 */


/** Defining Core Types (Module 2 Concepts)
 * Here we apply:
 * - Union types ("pending" | "in-progress" | "completed") for task status.
 * - Type alias (Task) for a clean, reusable object structure.
 * - Optional properties (dueDate).
 * - This ensures every task object follows a strict, predictable shape.
 */

// TaskStatus as a union type
type TaskStatus = "pending" | "in-progress" | "completed";

// Task object with optional dueDate
type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate?: Date; // optional property
};


// Working with Arrays and Enums
const tasks: Task[] = [];

enum Status {
  Pending = "pending",
  InProgress = "in-progress",
  Completed = "completed"
}


/** Creating Functions (Module 3 Concepts)
 * Here we apply:
 * - Default parameters (status defaults to Pending).
 * - Optional parameters (dueDate).
 * - Custom return types (Task).
 */

// Function to create a new task
function createTask(
  id: number,
  title: string,
  description: string,
  status: Status = Status.Pending, // default parameter
  dueDate?: Date
): Task {
    // return { id, title, description, status, dueDate };
    // Using conditional property to include dueDate only if it's provided
    return { id, title, description, status, ...(dueDate && { dueDate }) };
}

/** Applying Generics for Reusability
 * Here we apply:
 * - The keyof operator ensures the function can only search by valid task properties (id, status, etc.).
 * - Generics (T) allow reusability without sacrificing type safety.
 */
function findTaskBy<T extends keyof Task>(
  tasks: Task[],
  key: T,
  value: Task[T]
): Task[] {
  return tasks.filter(task => task[key] === value);
}

// Function to update task status
function updateTaskStatus(task: Task, newStatus: Status): Task {
  return { ...task, status: newStatus };
}


// Example Usage
// const completedTasks = findTaskBy(tasks, "status", Status.Completed);


// Create tasks
const task1 = createTask(1, "Write summary", "Finish the course summary section");
const task2 = createTask(2, "Refactor code", "Improve TypeScript generics example", Status.InProgress);

tasks.push(task1, task2);

// Update task
const updatedTask = updateTaskStatus(task1, Status.Completed);

// Find tasks by status
const pendingTasks = findTaskBy(tasks, "status", Status.Pending);

console.log("Updated Task:", updatedTask);
console.log("Pending Tasks:", pendingTasks);