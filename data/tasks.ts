import {subTaskType, task, taskStatus} from '../types';

export const tasks: task[] = [
  {
    _id: 'task1',
    name: 'Complete React Module',
    creation_time: new Date('2024-08-01T10:00:00Z'),
    deadline: new Date('2024-08-15T23:59:59Z'),
    subTasks: [
      {_id: 'subTask1', title: 'task1', type: subTaskType.Step},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask1', title: 'task1', type: subTaskType.Step},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask1', title: 'task1', type: subTaskType.Step},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
      {_id: 'subTask2', title: 'task1', type: subTaskType.Checkbox},
    ],
    status: taskStatus.todo,
    progress: 40,
  },
  {
    _id: 'task2',
    name: 'Prepare for MERN Stack Interview',
    creation_time: new Date('2024-08-05T14:30:00Z'),
    deadline: new Date('2024-08-20T18:00:00Z'),
    subTasks: [
      {_id: 'subTask3', title: 'task2', type: subTaskType.Step},
      {_id: 'subTask4', title: 'task2', type: subTaskType.Checkbox},
    ],
    status: taskStatus.todo,
    progress: 40,
  },
  {
    _id: 'task3',
    name: 'Build Social Media App',
    creation_time: new Date('2024-08-10T09:00:00Z'),
    deadline: new Date('2024-09-01T17:00:00Z'),
    subTasks: [
      {_id: 'subTask5', title: 'task3', type: subTaskType.Step},
      {_id: 'subTask6', title: 'task3', type: subTaskType.Checkbox},
    ],
    status: taskStatus.todo,
    progress: 60,
  },
  {
    _id: 'task4',
    name: 'Write Blog Post on Node.js Modules',
    creation_time: new Date('2024-08-12T11:00:00Z'),
    deadline: new Date('2024-08-18T20:00:00Z'),
    subTasks: [
      {_id: 'subTask7', title: 'task4', type: subTaskType.Step},
      {_id: 'subTask8', title: 'task4', type: subTaskType.Checkbox},
    ],
    status: taskStatus.todo,
    progress: 0,
  },
  {
    _id: 'task5',
    name: 'Create Design Document for Image Processing System',
    creation_time: new Date('2024-08-15T08:00:00Z'),
    deadline: new Date('2024-08-25T22:00:00Z'),
    subTasks: [
      {_id: 'subTask9', title: 'task5', type: subTaskType.Step},
      {_id: 'subTask10', title: 'task5', type: subTaskType.Checkbox},
    ],
    status: taskStatus.todo,
    progress: 100,
  },
];
