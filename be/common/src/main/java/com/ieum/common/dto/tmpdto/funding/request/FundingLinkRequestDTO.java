package com.ieum.common.dto.tmpdto.funding.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundingLinkRequestDTO {
    Long fundingId;
    Long memberId;
}
