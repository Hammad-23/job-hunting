import React from 'react';
import { TextInput } from 'react-native';

function Input(props){
    return(
        <>
        <TextInput style={{ height: 50, borderColor: 'gray', borderWidth: 1,
        minWidth: 300, maxWidth: 300,borderRadius:15
    }}
         onChange={props.onChange} value={props.value}
         placeholder={props.placeholder}
        />


        </>
    )
}
export default Input