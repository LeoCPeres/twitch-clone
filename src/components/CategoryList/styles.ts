import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`

`;


export const CategoryContainer = styled.TouchableOpacity`
    margin-right: 10px;
`;
export const CategoryImage = styled.Image`
    width: 98px;
    height: 130px;
`;
export const CategoryName = styled.Text`
    color: ${colors.black};
    margin-top: 5px;
    max-width: 98px;
    font-family: roboto_700;
    font-size: 13.5px;
`;
export const CategoryStatus = styled.View`
    flex-direction: row;
    align-items: center;
    
`;
export const RedCircle = styled.View`
    background: ${colors.red};
    border-radius: 4.5px;
    width: 9px;
    height: 9px;
`;
export const Info = styled.Text`
    color: ${colors.gray};
    margin-left: 4px;
    padding-bottom: 1px;
    font-family: roboto_500;
    
`;
export const List = styled.ScrollView.attrs({
    horizontal: true,
})``;