import styled from '@emotion/styled'

const HEADER = styled.header`
 background-color: #26c6da;
 padding: 10px;
 font-weight: bold;
 color: #fff;
`
const H1 = styled.h1`
 font-size: 2rem;
 margin: 0;
 font-family: 'Slabo 27px', serif;
 text-align: center;
`

const Header = ({ titulo }) => {
 return (
  <HEADER>
   <H1>{titulo}</H1>
  </HEADER>
 )
}

export default Header
