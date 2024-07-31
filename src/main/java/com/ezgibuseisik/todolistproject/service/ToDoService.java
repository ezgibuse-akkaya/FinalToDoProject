package com.ezgibuseisik.todolistproject.service;

import com.ezgibuseisik.todolistproject.model.ToDo;
import com.ezgibuseisik.todolistproject.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {
    @Autowired
    private ToDoRepository todoRepository;

    public List<ToDo> getAllTodos() {
        return todoRepository.findAll();
    }

    public List<ToDo> getTodosByCompleted(boolean completed) {
        return todoRepository.findByCompleted(completed);
    }

    public ToDo saveTodo(ToDo todo) {
        return todoRepository.save(todo);
    }

    public void deleteTodoById(Long id) {
        todoRepository.deleteById(id);
    }

    public void deleteCompletedTodos() {
        todoRepository.deleteByCompleted(true);
    }
}
