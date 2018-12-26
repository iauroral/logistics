package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 车型仓库
 */
@RepositoryRestResource(path = "Vehicle")
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
