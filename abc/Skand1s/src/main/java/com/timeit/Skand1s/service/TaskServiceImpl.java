package com.timeit.Skand1s.service;

import com.timeit.Skand1s.domain.Task;
import com.timeit.Skand1s.repository.TaskRepository;
import com.timeit.Skand1s.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    TaskRepository taskRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public void saveTask(Task task) {

        taskRepository.save(task);
    }

    @Override
    public List<Task> getUserTasks(String name) {
        long id = userRepository.getUserByUsername(name).getId();
        List<Task> tasks = taskRepository.findByUserId(id);
        return tasks;
    }
}
