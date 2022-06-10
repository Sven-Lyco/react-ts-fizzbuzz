import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
  }

input, label, textarea{
    font-size: 1em;
}
`;
