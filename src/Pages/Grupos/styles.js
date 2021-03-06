import styled from 'styled-components'

export const ListaGruposContainer = styled.div`

margin:0 20%;
margin-top:5%;

`
export const PesquisaContainer = styled.form`

display:flex;
*{
    margin-left:10px;
}

`

export const ListaGrupos = styled.ul`
    width:100%;
    margin:0;
    padding:0;
   

    li{
        margin-top:1em;
        width:100%;
        padding:10px;
        border: 1px solid black;
        border-radius:0.5em;
        list-style:none;
        background-color:white;
        h2{
          font-size:12pt;  
        }
        :hover{
            cursor:pointer;
        }
       
    }

`

export const ListaPaginas = styled.ul`
display:flex;
align-items:center;

list-style: none;
padding: 0;
justify-content:center;
li{
    margin:2px 5px;
}

`

export const CenterMessage = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:300px;


`