package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Payment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 转账仓库
 */
@RepositoryRestResource(path = "Payment")
public interface PaymentRepository extends CrudRepository<Payment, Long> {
}
