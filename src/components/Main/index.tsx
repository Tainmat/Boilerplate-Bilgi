import * as S from './styles'

const Main = ({
  sub = 'Serviços inteligentes',
  description = 'A solução certa para a sua empresa'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/bilgi-logo.svg" alt="Logo da Bilgi" />
    <S.Sub>{sub}</S.Sub>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/planejamento-img.svg"
      alt="Um homem e uma mulher analizando gráficos"
    />
  </S.Wrapper>
)

export default Main
