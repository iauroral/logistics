package com.mengyunzhi.synthetical.repository;

import com.mengyunzhi.synthetical.entity.GoodCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * 货物类别仓库
 */
@RepositoryRestResource(path = "GoodCategory")
public interface GoodCategoryRepository extends CrudRepository<GoodCategory, Long> {
}
