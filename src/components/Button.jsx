import { styled }  from 'styled-components';

const StyledButton = styled.button`
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border-radius: 3px;
    background-color: { props => props.type == "primary" ? #007BFF : white }
`;

const Button = ({ clickAction, type, children }) => {



    return (
        <StyledButton 
            type={ type }
            onClick = { clickAction }
            >
            { children }
        </StyledButton>
    )
}

export default Button;