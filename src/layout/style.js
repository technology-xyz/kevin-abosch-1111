import styled from 'styled-components'
import { colors } from "theme";

export const PageLayoutContainer = styled.div`
 background-color: #000000;
 width:100vw;
 min-height: 100%;
 max-height:${props => props.collection ? "100%" : "100vh"};;

`;