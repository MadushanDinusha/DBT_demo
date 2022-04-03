package com.timeit.Skand1s.service;

import com.timeit.Skand1s.domain.Task;
import com.timeit.Skand1s.domain.User;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserService {
    User getUserRole(String name);
    Long getUserId(String name);

}
