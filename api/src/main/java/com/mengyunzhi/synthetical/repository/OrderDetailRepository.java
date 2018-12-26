package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.OrderDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 订单详情仓库
 */
@RepositoryRestResource(path = "OrderDetail")
public interface OrderDetailRepository extends CrudRepository<OrderDetail, Long> {
}
