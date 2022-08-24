export interface Task {
  id: string;
  title: string;
  description: string;
  userId: string;
  status: TaskStatus;
}

export type TaskStatus = "pending" | "in_progress" | "finished";
