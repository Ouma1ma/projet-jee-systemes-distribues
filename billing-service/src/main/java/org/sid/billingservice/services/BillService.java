package org.sid.billingservice.services;

import org.sid.billingservice.entities.Bill;
import org.sid.billingservice.repositories.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.function.Consumer;

@Configuration
public class BillService {

    @Autowired
    BillRepository billRepository;

    @Bean
    public Consumer<Bill> billConsumer(){
        return (input) -> {
            System.out.println("***************************");
            System.out.println(input.toString());
            System.out.println("***************************");
            Bill bill = new Bill();
            bill.setId(input.getId());
            bill.setBillingDate(input.getBillingDate());
            bill.setCustomerId(input.getCustomerId());
            bill.setProductItems(input.getProductItems());
            billRepository.save(bill);
        };
    }
}
