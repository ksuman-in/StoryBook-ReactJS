import React, { Component } from "react";
import styled from "styled-components";

class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page>
        <Info>
          <div>
            <b>Font Family:</b> "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
            "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          </div>
          <div>
            <b>UI Font Size: </b> 14px
          </div>
        </Info>
        <hr />
        <b>Theme Color</b>
        <ColorInfo>
          <dvi>
            <b>Primary:</b> "#007bff"
          </dvi>
          <div>
            <b>muted:</b> "#868e96"
          </div>
          <div>
            <b>success:</b> "#28a745"
          </div>
          <div>
            <b>info:</b> "#17a2b8"
          </div>
          <div>
            <b>warning:</b> "#ffc107"
          </div>
          <div>
            <b>danger:</b> "#dc3545"
          </div>
          <div>
            <b>secondary:</b> "#868e96"
          </div>
          <div>
            <b>white:</b> "#ffffff"
          </div>
          <div>
            <b>dark:</b> "#343a40"
          </div>
        </ColorInfo>
        <hr />
        <Wrapper>
          <HeadingWrapper>
            <Heading1>Heading1 48</Heading1>
            <Heading2>Heading2 40</Heading2>
            <Heading3>Heading3 32</Heading3>
            <Heading4>Heading4 28</Heading4>
            <Heading5>Heading5 24</Heading5>
            <Heading6>Heading6 20</Heading6>
            <Heading7>Heading7 16</Heading7>
            <Heading8>Heading8 14</Heading8>
            <Heading9>Heading9 12</Heading9>
          </HeadingWrapper>
          <TypeWrapper>
            <Type1>16 The quick brown fox jumps over the lazy dog</Type1>
            <Type2>14 The quick brown fox jumps over the lazy dog</Type2>
            <Type3>12 The quick brown fox jumps over the lazy dog</Type3>
          </TypeWrapper>
        </Wrapper>
      </Page>
    );
  }
}

export default Typography;

const Page = styled.div`
  padding: 3rem;
`;
const Info = styled.div`
  margin-bottom: 2rem;
  > * {
    margin-bottom: 0.5rem;
  }
`;
const ColorInfo = styled.div`
  margin-bottom: 2rem;
  > * {
    margin-bottom: 0.3rem;
    padding-left: 1.5rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1;
    padding-right: 40px;
  }
`;
const HeadingWrapper = styled.div`
  font-weight: black;
  > * {
    margin-bottom: 1rem;
  }
`;
const TypeWrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;
const Heading1 = styled.div`
  font-size: ${props => props.theme.lg3}px;
`;
const Heading2 = styled.div`
  font-size: ${props => props.theme.lg2}px;
`;
const Heading3 = styled.div`
  font-size: ${props => props.theme.lg1}px;
`;
const Heading4 = styled.div`
  font-size: ${props => props.theme.md3}px;
`;
const Heading5 = styled.div`
  font-size: ${props => props.theme.md2}px;
`;
const Heading6 = styled.div`
  font-size: ${props => props.theme.md1}px;
`;
const Heading7 = styled.div`
  font-size: ${props => props.theme.sm3}px;
`;
const Heading8 = styled.div`
  font-size: ${props => props.theme.sm2}px;
`;
const Heading9 = styled.div`
  font-size: ${props => props.theme.sm1}px;
`;
const Type1 = styled.div`
  font-size: ${props => props.theme.sm3}px;
`;
const Type2 = styled.div`
  font-size: ${props => props.theme.sm2}px;
`;
const Type3 = styled.div`
  font-size: ${props => props.theme.sm1}px;
`;
