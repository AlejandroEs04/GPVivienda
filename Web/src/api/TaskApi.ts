import { isAxiosError } from "axios";
import api from "../lib/axios";
import { TaskCreate, Task, TaskStatus, TaskMessage } from "../types";
import { formatValidationErrors } from "../utils";

export async function createTask(newTask: TaskCreate) {
  try {
    const { data } = await api.post<Task>("/task", newTask);
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response) {
      const errorData = error.response.data;
                  
      if (Array.isArray(errorData.detail)) {
        const formattedErrors = formatValidationErrors(errorData.detail);
        throw new Error(JSON.stringify(formattedErrors));
      }
                        
      throw new Error(errorData.detail || 'Error al crear el cliente');
    }
  }
}

export async function getTaskStatus() {
  try {
    const { data } = await api<TaskStatus[]>("/task-status");
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response) {
      const errorData = error.response.data;
                  
      if (Array.isArray(errorData.detail)) {
        const formattedErrors = formatValidationErrors(errorData.detail);
        throw new Error(JSON.stringify(formattedErrors));
      }
                        
      throw new Error(errorData.detail || 'Error al crear el cliente');
    }
  }
}

export async function getTasks() {
  try {
    const { data } = await api<Task[]>("/task");
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response) {
      const errorData = error.response.data;
                  
      if (Array.isArray(errorData.detail)) {
        const formattedErrors = formatValidationErrors(errorData.detail);
        throw new Error(JSON.stringify(formattedErrors));
      }
                        
      throw new Error(errorData.detail || 'Error al crear el cliente');
    }
  }
}

export async function updateTask(id: number, updateTask: TaskCreate) {
  try {
    const { data } = await api.put<Task>(`/task/${id}`, updateTask);
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response) {
      const errorData = error.response.data;
                  
      if (Array.isArray(errorData.detail)) {
        const formattedErrors = formatValidationErrors(errorData.detail);
        throw new Error(JSON.stringify(formattedErrors));
      }
                        
      throw new Error(errorData.detail || 'Error al crear el cliente');
    }
  }
}

export async function sendMessage(taskId: number, message: string) {
  try {
    const messageCreate = {
      task_id: taskId, 
      message
    }
    const { data } = await api.post<TaskMessage>(`/task-message`, messageCreate);
    return data;
  } catch (error) {
    if(isAxiosError(error) && error.response) {
      const errorData = error.response.data;
                  
      if (Array.isArray(errorData.detail)) {
        const formattedErrors = formatValidationErrors(errorData.detail);
        throw new Error(JSON.stringify(formattedErrors));
      }
                        
      throw new Error(errorData.detail || 'Error al crear el cliente');
    }
  }
}