package com.ezgibuseisik.todolistproject.repository;

import com.ezgibuseisik.todolistproject.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {
    List<ToDo> findByCompleted(boolean completed);
    void deleteByCompleted(boolean completed);
}