package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Vehicle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 车型仓库
 */
@RepositoryRestResource(path = "Vehicle")
public interface VehicleRepository extends CrudRepository<Vehicle, Long> {
}
