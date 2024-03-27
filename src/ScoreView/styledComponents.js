import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  border: 2px solid white;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2px;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ScoreResult = styled(ScoreHeading)`
  margin-top: 0px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`
