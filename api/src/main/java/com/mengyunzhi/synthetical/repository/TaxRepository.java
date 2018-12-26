package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.Tax;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 抽成规则仓库
 */
@RepositoryRestResource(path = "Tax")
public interface TaxRepository extends CrudRepository<Tax, Long> {
}
