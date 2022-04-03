package com.timeit.Skand1s.service;

import com.timeit.Skand1s.domain.Task;
import com.timeit.Skand1s.domain.User;
import com.timeit.Skand1s.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;


    @Override
    public User getUserRole(String name) {
        return userRepository.getUserByUsername(name);

    }

    @Override
    public Long getUserId(String name) {
       User user = userRepository.getUserByUsername(name);
       return user.getId();
    }
}
