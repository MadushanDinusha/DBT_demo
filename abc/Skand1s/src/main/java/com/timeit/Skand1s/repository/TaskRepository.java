package com.timeit.Skand1s.repository;

import com.timeit.Skand1s.domain.Task;
import com.timeit.Skand1s.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {

    List<Task> findByUserId(long id);

}
