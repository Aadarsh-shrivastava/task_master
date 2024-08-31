import {tasks} from '../../data/tasks';
import {subTaskType, task, taskStatus} from '../../types';

const initialState = tasks;

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload]; // Return a new array with the added task

    case 'REMOVE_TASK':
      console.log('removing', action.payload);
      return state.filter(task => task._id !== action.payload); // Remove task by id
    case 'CHANGE_STATUS':
      console.log('changing status', action.payload);
      return state.map(task => {
        if (task._id === action.payload.taskId) {
          return {...task, status: action.payload.status, progress: 100};
        }
        return task; // Same object, same reference
      });
    default:
      return state;
  }
};

export default taskReducer;
