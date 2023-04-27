import styled from '@emotion/styled'

const HEADER = styled.header`
 background-color: #26c6da;
 padding: 10px;
 font-weight: bold;
 color: #fff;
`

const Header = ({ titulo }) => {
 return (
  <HEADER>
   <h1>{titulo}</h1>
  </HEADER>
 )
}

export default Header
