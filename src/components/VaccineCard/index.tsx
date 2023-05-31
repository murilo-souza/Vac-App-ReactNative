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
import { RectButtonProps } from 'react-native-gesture-handler'

interface VaccineCardProps extends RectButtonProps {
  batchCode: string
  isRealTime?: boolean
}

export function VaccineCard({
  batchCode,
  isRealTime = false,
  ...rest
}: VaccineCardProps) {
  return (
    <Border>
      <Container {...rest}>
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
