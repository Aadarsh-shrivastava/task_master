export type task = {
  _id: string;
  name: string;
  status: taskStatus;
  creation_time: Date;
  deadline: Date;
  progress: number;
  subTasks: subTask[];
};

export type subTask = {
  _id: string;
  title: string;
  type: subTaskType;
};

export enum subTaskType {
  Step,
  Checkbox,
}

export enum taskStatus {
  done,
  todo,
  pending,
  doing,
}
