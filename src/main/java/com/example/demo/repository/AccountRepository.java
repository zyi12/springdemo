package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Account;

public interface AccountRepository extends CrudRepository<Account, Long>{

}
