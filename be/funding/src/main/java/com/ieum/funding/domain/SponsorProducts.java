package com.ieum.funding.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SponsorProducts {
    @Id
    private Long sponsorProductId;

    private String sponsorTypeCode;
    private String productName;
    private Integer price;
    private String productImage;
}
