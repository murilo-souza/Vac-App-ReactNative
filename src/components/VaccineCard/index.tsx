import React from 'react'
import {
  Border,
  Container,
  ContentWrapper,
  ImgContainer,
  RealTimeBox,
  RealTimeText,
  Title,
  VaccineImg,
} from './styles'
import Vaccine from '../../assets/logo.png'

interface VaccineCardProps {
  batchCode: string
  isRealTime?: boolean
}

export function VaccineCard({
  batchCode,
  isRealTime = false,
}: VaccineCardProps) {
  return (
    <Border>
      <Container>
        <ContentWrapper>
          <ImgContainer>
            <VaccineImg source={Vaccine} />
          </ImgContainer>
          <Title>
            Lote {`\n`}
            {batchCode}
          </Title>
        </ContentWrapper>
        {isRealTime && (
          <RealTimeBox>
            <RealTimeText>TEMPO REAL</RealTimeText>
          </RealTimeBox>
        )}
      </Container>
    </Border>
  )
}
