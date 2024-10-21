export type task = {
  _id: string;
  name: string;
  status: taskStatus;
  creation_time: Date;
  startTime: Date | null;
  deadline: Date | null;
  progress: number;
  subTasks: subTask[];
  isRoutine: boolean;
  repeat?: RepeatPattern;
};

export type subTask = {
  _id: string;
  title: string;
  type: subTaskType;
  status?: taskStatus;
  progress?: number;
  isRoutine?: boolean;
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

interface RepeatPattern {
  frequency: frequency;
  daysOfWeek?: daysOfWeek;
  startTime: Date;
  endTime: Date;
}

export enum frequency {
  daily,
  weekly,
  monthly,
}

export enum daysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
