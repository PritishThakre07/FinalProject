package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.GuarantorDetails;



@Repository
public interface GuarantorDetailsRepository extends JpaRepository<GuarantorDetails, Integer> {

}
