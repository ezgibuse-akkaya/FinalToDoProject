package com.ezgibuseisik.todolistproject.controller;

import com.ezgibuseisik.todolistproject.exception.ResourceNotFoundException;
import com.ezgibuseisik.todolistproject.model.ToDo;
import com.ezgibuseisik.todolistproject.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class ToDoController {

    @Autowired
    private ToDoRepository todoRepository;

    @GetMapping
    public List<ToDo> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping
    public ToDo createTodo(@RequestBody ToDo todo) {
        return todoRepository.save(todo);
    }

    @GetMapping("/{id}")
    public ToDo getTodoById(@PathVariable Long id) {
        return todoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));
    }

    @PutMapping("/{id}")
    public ToDo updateTodo(@PathVariable Long id, @RequestBody ToDo todoDetails) {
        ToDo todo = todoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));

        todo.setTitle(todoDetails.getTitle());
        todo.setCompleted(todoDetails.isCompleted());

        return todoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        ToDo todo = todoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Todo not found with id " + id));
        todoRepository.delete(todo);
    }
}