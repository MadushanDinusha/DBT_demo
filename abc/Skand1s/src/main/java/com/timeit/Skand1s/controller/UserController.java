package com.timeit.Skand1s.controller;

import com.timeit.Skand1s.config.AuthenticationBean;
import com.timeit.Skand1s.domain.Role;
import com.timeit.Skand1s.domain.Task;
import com.timeit.Skand1s.domain.User;
import com.timeit.Skand1s.service.SortByDate;
import com.timeit.Skand1s.service.TaskService;
import com.timeit.Skand1s.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.nio.file.Path;
import java.sql.Time;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    TaskService taskService;

    Date date = Calendar.getInstance().getTime();
    DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");

    @GetMapping(path = "/basicauth")
    public AuthenticationBean login(){
        return new AuthenticationBean("You are authenticated");
    }

    @GetMapping("/getUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        try {

            return new ResponseEntity<>(userService.getAll(),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/user/save/{role}")
    public ResponseEntity<?> saveUser(@RequestBody User user, @PathVariable("role") String roles){
        try{
           BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
           user.setPassword(encoder.encode(user.getPassword()));
            System.out.println(roles);
            System.out.println(user);
            Set<Role> role = new HashSet<>();
            for (Role role1:role){
                role1.setName(roles);
            }
            user.setRoles(role);
            userService.saveUser(user);

            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getRoles/{name}")
    public ResponseEntity<User> getRoles(@PathVariable("name") String name){
        try {
            User user = userService.getUserRole(name);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getUerId/{name}")
    public ResponseEntity<Long> getId(@PathVariable("name") String name){
        try {
            System.out.println(userService.getUserId(name));
           return new ResponseEntity<>(userService.getUserId(name),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getTasks/{name}")
    public ResponseEntity<List<Task>> getTasks(@PathVariable("name") String name){
        try {

            List<Task> taskList = taskService.getUserTasks(name);
            List<Task> sortedByFromDate = new ArrayList<>();
            Collections.sort(taskList, new SortByDate());
            for(Task t : taskList){
                sortedByFromDate.add(t);
            }

           return new ResponseEntity<>( sortedByFromDate,HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/task/save/{name}")
    public ResponseEntity<?> saveTask(@RequestBody Task task, @PathVariable("name") String name){
        try {
            SimpleDateFormat gmtDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            gmtDateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));
            String fromDate =  gmtDateFormat.format(task.getFromDate());
            String toDate =  gmtDateFormat.format(task.getToDate());
            Timestamp convertedFromDate = Timestamp.valueOf(fromDate);
            Timestamp convertedToDate = Timestamp.valueOf(toDate);
            task.setFromDate(convertedFromDate);
            task.setToDate(convertedToDate);
            User user = new User();
            user.setId(userService.getUserId(name));
            task.setUser(user);
            taskService.saveTask(task);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            System.out.println(e.toString());
            return new ResponseEntity<>(e,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
