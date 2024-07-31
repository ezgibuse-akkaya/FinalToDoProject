package com.ezgibuseisik.todolistproject.controller;

import com.ezgibuseisik.todolistproject.model.ToDo;
import com.ezgibuseisik.todolistproject.service.ToDoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@Api(value = "Todo Management System", description = "Operations pertaining to todo in Todo Management System")
public class ToDoController {

    @Autowired
    private ToDoService todoService;

    @ApiOperation(value = "View a list of available todos", response = List.class)
    @GetMapping
    public List<ToDo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @ApiOperation(value = "Get a todo by completed status", response = List.class)
    @GetMapping("/completed")
    public List<ToDo> getCompletedTodos(@RequestParam boolean completed) {
        return todoService.getTodosByCompleted(completed);
    }

    @ApiOperation(value = "Add a todo")
    @PostMapping
    public ToDo createTodo(@RequestBody ToDo todo) {
        return todoService.saveTodo(todo);
    }

    @ApiOperation(value = "Update a todo")
    @PutMapping("/{id}")
    public ToDo updateTodo(@PathVariable Long id, @RequestBody ToDo todo) {
        todo.setId(id);
        return todoService.saveTodo(todo);
    }

    @ApiOperation(value = "Delete a todo")
    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoService.deleteTodoById(id);
    }

    @ApiOperation(value = "Delete all completed todos")
    @DeleteMapping
    public void deleteCompletedTodos() {
        todoService.deleteCompletedTodos();
    }
}