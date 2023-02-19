package org.sid.billingservice.feign;

import org.sid.billingservice.models.Customer;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="CUSTOMER-SERVICE")
public interface CustomerRestClient {
    @GetMapping(path="/customers/{id}")
    public Customer getCustomerById(@PathVariable(name="id") long id);
}
