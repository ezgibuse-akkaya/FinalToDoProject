package com.ezgibuseisik.todolistproject.repository;

import com.ezgibuseisik.todolistproject.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
}