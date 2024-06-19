export type TaskPriority = 'HIGH' | 'MEDIUM' | 'LOW'
export type TaskStatus = 'DONE' | 'TODO' | 'CANCELLED'

export interface ITask {
  id: number;
  title: string;
  description?: string;
  priority: TaskPriority;
  state: TaskStatus;
  deadline: Date;
}
